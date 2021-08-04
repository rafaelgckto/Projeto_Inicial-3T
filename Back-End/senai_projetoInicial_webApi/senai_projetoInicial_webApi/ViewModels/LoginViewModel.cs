using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace senai_projetoInicial_webApi.ViewModels
{
    public class LoginViewModel
    {

        [Required(ErrorMessage = "Informe o e-mail!")]
        public string email { get; set; }

        [Required(ErrorMessage = "Informe a senha!")]
        public string senha { get; set; }

    }
}
