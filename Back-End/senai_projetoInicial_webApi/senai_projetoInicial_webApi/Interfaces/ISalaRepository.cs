using senai_projetoInicial_webApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace senai_projetoInicial_webApi.Interfaces
{
    interface ISalaRepository
    {

        List<Sala> ListarTodas();
        Sala BuscarPorId(int idSala);
        void Cadastrar(Sala novaSala);
        void Atualizar(int idSala, Sala salaAtualizada);
        void Deletar(int idSala);


    }
}
