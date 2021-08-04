using System;
using System.Collections.Generic;

#nullable disable

namespace senai_projetoInicial_webApi.Domains
{
    public partial class Equipamento
    {
        public int IdEquipamento { get; set; }
        public int? IdSala { get; set; }
        public string Marca { get; set; }
        public string TipoDeEquipamento { get; set; }
        public string NumeroDeSerie { get; set; }
        public string Descricao { get; set; }
        public string NumeroDePatrimonio { get; set; }
        public bool AtivoPassivo { get; set; }

        public virtual Sala IdSalaNavigation { get; set; }
    }
}
