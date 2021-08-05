using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using senai_projetoInicial_webApi.Domains;
using senai_projetoInicial_webApi.Interfaces;
using senai_projetoInicial_webApi.Repositories;
using System;

namespace senai_projetoInicial_webApi.Controllers {
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase {
        IUsuarioRepository _userRepository { get; set; }

        public UsuarioController() {
            _userRepository = new UsuarioRepository();
        }

        /// <summary>
        /// Deleta uma sala.
        /// </summary>
        /// <param name="id">O id do usuario que será deletado.</param>
        /// <returns>Retorna StatusCode 204(No Content).</returns>
        //[Authorize]
        [HttpDelete("{id}")]
        public IActionResult Delete(int id) {
            try {
                _userRepository.Deletar(id);

                return StatusCode(204);
            }
            catch(Exception error) {
                return BadRequest(error);
            }
        }

        /// <summary>
        /// Lista todos ao usuario.
        /// </summary>
        /// <returns>Retorna um objeto JSON, com a lista de usuario.</returns>
        //[Authorize]
        [HttpGet]
        public IActionResult Get() {
            try {
                return Ok(_userRepository.ListarTodos());
            }
            catch(Exception error) {
                return BadRequest(error);
            }
        }

        /// <summary>
        /// Busca apenas um usuario.
        /// </summary>
        /// <param name="id">O id do usuario que será buscado.</param>
        /// <returns>Retorna um objeto JSON, do usuario buscado.</returns>
        //[Authorize]
        [HttpGet("{id}")]
        public IActionResult Get(int id) {
            try {
                return Ok(_userRepository.BuscarPorId(id));
            }
            catch(Exception error) {
                return BadRequest(error);
            }
        }

        /// <summary>
        /// Cadastra um novo usuario.
        /// </summary>
        /// <param name="novoUsuario">Objeto que será cadastrado.</param>
        /// <returns>Retorna um StatusCode 201(Created).</returns>
        //[Authorize]
        [HttpPost]
        public IActionResult Post(Usuario novoUsuario) {
            try {
                _userRepository.Cadastrar(novoUsuario);

                return StatusCode(201);
            }
            catch(Exception error) {
                return BadRequest(error);
            }
        }

        /// <summary>
        /// Atualiza um usuario.
        /// </summary>
        /// <param name="id">O id do usuario escolhida a ser atualizado.</param>
        /// <param name="novoUsuario">Objeto com as novas informações.</param>
        /// <returns>Retorna um StatusCode 204(No Content).</returns>
        //[Authorize]
        [HttpPut("{id}")]
        public IActionResult Put(int id, Usuario novoUsuario) {
            try {
                _userRepository.Atualizar(id, novoUsuario);

                return StatusCode(204);
            }
            catch(Exception error) {
                return BadRequest(error);
            }
        }
    }
}
