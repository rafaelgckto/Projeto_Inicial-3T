using senai_projetoInicial_webApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace senai_projetoInicial_webApi.Interfaces
{
    interface IEquipamentoRepository
    {

        List<Equipamento> ListarTodos();
        Equipamento BuscarPorId(int idEquipamento);
        void Cadastrar(Equipamento novoEquipamento);
        void Atualizar(int idEquipamento, Equipamento equipamentoAtualizado);
        void Deletar(int idEquipamento);

    }
}
