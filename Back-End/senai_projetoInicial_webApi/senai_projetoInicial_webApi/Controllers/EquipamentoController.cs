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
    public class EquipamentoController : ControllerBase {
        IEquipamentoRepository _equipRepository { get; set; }

        public EquipamentoController() {
            _equipRepository = new EquipamentoRepository();
        }

        /// <summary>
        /// Deleta um equipamento.
        /// </summary>
        /// <param name="id">O id do equipamento que será deletada.</param>
        /// <returns>Retorna StatusCode 204(No Content).</returns>
        //[Authorize]
        [HttpDelete("{id}")]
        public IActionResult Delete(int id) {
            try {
                _equipRepository.Deletar(id);

                return StatusCode(204);
            }
            catch(Exception error) {
                return BadRequest(error);
            }
        }

        /// <summary>
        /// Lista todos os equipamentos.
        /// </summary>
        /// <returns>Retorna um objeto JSON, com a lista de equipamentos.</returns>
        //[Authorize]
        [HttpGet]
        public IActionResult Get() {
            try {
                return Ok(_equipRepository.ListarTodos());
            }
            catch(Exception error) {
                return BadRequest(error);
            }
        }

        /// <summary>
        /// Busca apenas uma equipamento.
        /// </summary>
        /// <param name="id">O id do equipamento que será buscada.</param>
        /// <returns>Retorna um objeto JSON, da equipamento buscada.</returns>
        //[Authorize]
        [HttpGet("{id}")]
        public IActionResult Get(int id) {
            try {
                return Ok(_equipRepository.BuscarPorId(id));
            }
            catch(Exception error) {
                return BadRequest(error);
            }
        }

        /// <summary>
        /// Cadastra uma novo equipamento.
        /// </summary>
        /// <param name="novaEquip">Objeto que será cadastrado.</param>
        /// <returns>Retorna um StatusCode 201(Created).</returns>
        //[Authorize]
        [HttpPost]
        public IActionResult Post(Equipamento novaEquip) {
            try {
                _equipRepository.Cadastrar(novaEquip);

                return StatusCode(201);
            }
            catch(Exception error) {
                return BadRequest(error);
            }
        }

        /// <summary>
        /// Atualiza um equipamento.
        /// </summary>
        /// <param name="id">O id do equipamento escolhido a ser atualizado.</param>
        /// <param name="novaEquip">Objeto com as novas informações.</param>
        /// <returns>Retorna um StatusCode 204(No Content).</returns>
        //[Authorize]
        [HttpPut("{id}")]
        public IActionResult Put(int id, Equipamento novaEquip) {
            try {
                _equipRepository.Atualizar(id, novaEquip);

                return StatusCode(204);
            }
            catch(Exception error) {
                return BadRequest(error);
            }
        }
    }
}
