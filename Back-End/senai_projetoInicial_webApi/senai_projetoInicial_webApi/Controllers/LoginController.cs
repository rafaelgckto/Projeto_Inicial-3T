using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using senai_projetoInicial_webApi.Domains;
using senai_projetoInicial_webApi.Interfaces;
using senai_projetoInicial_webApi.Repositories;
using senai_projetoInicial_webApi.ViewModels;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace senai_projetoInicial_webApi.Controllers {
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase {
        IUsuarioRepository _userRepository { get; set; }

        public LoginController() {
            _userRepository = new UsuarioRepository();
        }

        /// <summary>
        /// Valida o usuário
        /// </summary>
        /// <param name="login">Objeto login que contém o e-mail e a senha do usuário</param>
        /// <returns>Retorna um token com as informações do usuário</returns>
        [HttpPost]
        public IActionResult PostLogin(LoginViewModel login) {
            try {
                Usuario soughtUser = _userRepository.BuscarPorEmailSenha(login.email, login.senha);

                if(soughtUser == null)
                    return NotFound("E-mail ou senha inválidos.");

                var claims = new[] {
                    // Armazena na Claim o e-mail do usuário autenticado
                    new Claim(JwtRegisteredClaimNames.Email, soughtUser.Email),

                    // Armazena na Claim o ID do usuário autenticado
                    new Claim(JwtRegisteredClaimNames.Jti, soughtUser.IdUsuario.ToString()),

                    // Armazena na Claim o tipo de usuário que foi autenticado (Administrador ou Comum)
                    //new Claim(ClaimTypes.Role, soughtUser.IdTipoUsuario.ToString()),

                    // Armazena na Claim o tipo de usuário que foi autenticado (Administrador ou Comum) de forma personalizada
                    //new Claim("role", soughtUser.IdTipoUsuario.ToString()),
                };

                var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes("projetoInicial-chave-autenticacao"));

                // Define as credenciais do token - Header
                var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                // Gera o token
                var token = new JwtSecurityToken(
                    issuer: "ProjetoInicial.webApi",         // emissor do token
                    audience: "ProjetoInicial.webApi",       // destinatário do token
                    claims: claims,                        // dados definidos acima
                    expires: DateTime.Now.AddMinutes(30),  // tempo de expiração
                    signingCredentials: creds              // credenciais do token
                );

                // Retorna Ok com o token
                return Ok(new {
                    token = new JwtSecurityTokenHandler().WriteToken(token)
                });
            }
            catch(Exception error) {
                return BadRequest(error);
            }
        }
    }
}
