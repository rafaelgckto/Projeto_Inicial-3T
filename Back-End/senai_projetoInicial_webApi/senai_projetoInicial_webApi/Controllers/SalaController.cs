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
    public class SalaController : ControllerBase {
        ISalaRepository _salaRepository { get; set; }

        public SalaController() {
            _salaRepository = new SalaRepository();
        }

        /// <summary>
        /// Deleta uma sala.
        /// </summary>
        /// <param name="id">O id da sala que será deletada.</param>
        /// <returns>Retorna StatusCode 204(No Content).</returns>
        //[Authorize]
        [HttpDelete("{id}")]
        public IActionResult Delete(int id) {
            try {
                _salaRepository.Deletar(id);

                return StatusCode(204);
            }
            catch(Exception error) {
                return BadRequest(error);
            }
        }

        /// <summary>
        /// Lista todos as salas.
        /// </summary>
        /// <returns>Retorna um objeto JSON, com a lista de salas.</returns>
        //[Authorize]
        [HttpGet]
        public IActionResult Get() {
            try {
                return Ok(_salaRepository.ListarTodas());
            }
            catch(Exception error) {
                return BadRequest(error);
            }
        }

        /// <summary>
        /// Busca apenas uma sala.
        /// </summary>
        /// <param name="id">O id da sala que será buscada.</param>
        /// <returns>Retorna um objeto JSON, da sala buscada.</returns>
        //[Authorize]
        [HttpGet("{id}")]
        public IActionResult Get(int id) {
            try {
                return Ok(_salaRepository.BuscarPorId(id));
            }
            catch(Exception error) {
                return BadRequest(error);
            }
        }

        /// <summary>
        /// Cadastra uma nova sala.
        /// </summary>
        /// <param name="novaSala">Objeto que será cadastrado.</param>
        /// <returns>Retorna um StatusCode 201(Created).</returns>
        //[Authorize]
        [HttpPost]
        public IActionResult Post(Sala novaSala) {
            try {
                _salaRepository.Cadastrar(novaSala);

                return StatusCode(201);
            }
            catch(Exception error) {
                return BadRequest(error);
            }
        }

        /// <summary>
        /// Atualiza uma sala.
        /// </summary>
        /// <param name="id">O id da sala escolhida a ser atualizada.</param>
        /// <param name="novaSala">Objeto com as novas informações.</param>
        /// <returns>Retorna um StatusCode 204(No Content).</returns>
        //[Authorize]
        [HttpPut("{id}")]
        public IActionResult Put(int id, Sala novaSala) {
            try {
                _salaRepository.Atualizar(id, novaSala);

                return StatusCode(204);
            }
            catch(Exception error) {
                return BadRequest(error);
            }
        }
    }
}
