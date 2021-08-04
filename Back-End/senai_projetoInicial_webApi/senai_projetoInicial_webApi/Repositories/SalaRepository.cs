using senai_projetoInicial_webApi.Contexts;
using senai_projetoInicial_webApi.Domains;
using senai_projetoInicial_webApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace senai_projetoInicial_webApi.Repositories
{
    public class SalaRepository : ISalaRepository
    {
        ProjetoInicialContext ctx = new ProjetoInicialContext();

        public void Atualizar(int idSala, Sala salaAtualizada)
        {
            Sala salaBuscada = BuscarPorId(idSala);

            if (salaAtualizada.Andar > 0)
            {
                salaBuscada.Andar = salaAtualizada.Andar;
            }

            if (salaAtualizada.Nome != null)
            {
                salaBuscada.Nome = salaAtualizada.Nome;
            }

            if (salaAtualizada.Metragem > 0)
            {
                salaBuscada.Metragem = salaAtualizada.Metragem;
            }

            ctx.Salas.Update(salaBuscada);

            ctx.SaveChanges();
        }

        public Sala BuscarPorId(int idSala)
        {
            return ctx.Salas.Find(idSala);
        }

        public void Cadastrar(Sala novaSala)
        {
            ctx.Salas.Add(novaSala);

            ctx.SaveChanges();
        }

        public void Deletar(int idSala)
        {
            ctx.Salas.Remove(BuscarPorId(idSala));

            ctx.SaveChanges();
        }

        public List<Sala> ListarTodas()
        {
            return ctx.Salas.ToList();
        }

    }
}
