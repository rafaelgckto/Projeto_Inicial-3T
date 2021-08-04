using System;
using System.Collections.Generic;

#nullable disable

namespace senai_projetoInicial_webApi.Domains
{
    public partial class Sala
    {
        public Sala()
        {
            Equipamentos = new HashSet<Equipamento>();
        }

        public int IdSala { get; set; }
        public double Andar { get; set; }
        public string Nome { get; set; }
        public int Metragem { get; set; }

        public virtual ICollection<Equipamento> Equipamentos { get; set; }
    }
}
