using senai_projetoInicial_webApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace senai_projetoInicial_webApi.Interfaces
{
    interface IUsuarioRepository
    {

        List<Usuario> ListarTodos();
        Usuario BuscarPorId(int idUsuario);
        void Cadastrar(Usuario novoUsuario);
        void Atualizar(int idUsuario, Usuario usuarioAtualizado);
        void Deletar(int idUsuario);

        /// <summary>
        /// Busca um usuario existente através do seu email e sua senha
        /// </summary>
        /// <param name="email">O valor do e-mail digitado pelo usuario</param>
        /// <param name="senha">O valor da senha digitada pelo usuario</param>
        /// <returns></returns>
        Usuario BuscarPorEmailSenha(string email, string senha);

    }
}
