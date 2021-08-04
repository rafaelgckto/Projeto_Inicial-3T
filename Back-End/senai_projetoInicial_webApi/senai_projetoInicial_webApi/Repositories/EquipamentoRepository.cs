using senai_projetoInicial_webApi.Contexts;
using senai_projetoInicial_webApi.Domains;
using senai_projetoInicial_webApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace senai_projetoInicial_webApi.Repositories
{
    public class EquipamentoRepository : IEquipamentoRepository
    {
        ProjetoInicialContext ctx = new ProjetoInicialContext();

        public void Atualizar(int idEquipamento, Equipamento equipamentoAtualizado)
        {
            Equipamento equipamentoBuscado = BuscarPorId(idEquipamento);

            if (equipamentoAtualizado.IdSala > 0)
            {
                equipamentoBuscado.IdSala = equipamentoAtualizado.IdSala;
            }

            if (equipamentoAtualizado.Marca != null)
            {
                equipamentoBuscado.Marca = equipamentoAtualizado.Marca;
            }

            if (equipamentoAtualizado.TipoDeEquipamento != null)
            {
                equipamentoBuscado.TipoDeEquipamento = equipamentoAtualizado.TipoDeEquipamento;
            }

            if (equipamentoAtualizado.NumeroDeSerie != null)
            {
                equipamentoBuscado.NumeroDeSerie = equipamentoAtualizado.NumeroDeSerie;
            }

            if (equipamentoAtualizado.Descricao != null)
            {
                equipamentoBuscado.Descricao = equipamentoAtualizado.Descricao;
            }

            if (equipamentoAtualizado.NumeroDePatrimonio != null)
            {
                equipamentoBuscado.NumeroDePatrimonio = equipamentoAtualizado.NumeroDePatrimonio;
            }

            //if (equipamentoAtualizado.AtivoPassivo)
            //{
            //    equipamentoBuscado.AtivoPassivo = equipamentoAtualizado.AtivoPassivo;
            //}

            ctx.Equipamentos.Update(equipamentoBuscado);

            ctx.SaveChanges();
        }

        public Equipamento BuscarPorId(int idEquipamento)
        {
            return ctx.Equipamentos.Find(idEquipamento);
        }

        public void Cadastrar(Equipamento novoEquipamento)
        {
            ctx.Equipamentos.Add(novoEquipamento);

            ctx.SaveChanges();
        }

        public void Deletar(int idEquipamento)
        {
            ctx.Equipamentos.Remove(BuscarPorId(idEquipamento));

            ctx.SaveChanges();
        }

        public List<Equipamento> ListarTodos()
        {
            return ctx.Equipamentos.ToList();
        }

    }
}
