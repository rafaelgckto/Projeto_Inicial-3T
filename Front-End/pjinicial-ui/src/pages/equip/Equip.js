import { Component } from 'react'

class Equipamentos extends Component{
    constructor(props){
        super(props);
        this.state = {

            listaEquipamentos : [],
            marca : '',
            tipoEquipamento : '',
            serie : '',
            descricao : '',
            numPatrimonio : '',
            status : ''
        }
    }

    buscarEquipamntos = () => {

        fetch('http://localhost:5000/api/Equipamento')

        .then(resposta => resposta.json())

        .then(data => this.setState({ listaEquipamentos : data }))

        .catch((erro) => console.log)
    }

    atualizaEquip = (event) => {
        this.setState({ 
            marca : event.target.value,
            tipoEquipamento : event.target.value,
            serie : event.target.value,
            tipoEquipamento : event.target.value,
            descricao : event.targer.value,
            numPatrimonio : event.target.value,
            status : event.target.value
         })
    }

    cadastrarEquipamento = (event) => {
        event.preventDefault();

        fetch('http://localhost:5000/api/Equipamento', {
            method : 'POST',

            body : JSON.stringify({
                    marca : this.state.marca,
                    tipoEquipamento : this.state.tipoEquipamento,
                    serie : this.state.serie,
                    tipoEquipamento : this.state.tipoEquipamento,
                    descricao : this.state.descricao,
                    numPatrimonio : this.state.numPatrimonio,
                    status : this.state.status
                }),

            headers : {
                "Content=Type" : "application/json"
            }
        })

        .then(console.log("Tipo de Evento cadastrado!"))

        .catch(error => console.log(error))
    }

    componentDidMount(){

        this.buscarEquipamntos();
    }

    render(){
        return(
            <main>
                <section>
                <h2>Equipamentos</h2>
                <div>
                    <table>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Marca</th>
                        <th>Tipo</th>
                        <th>Série</th>
                        <th>Descrição</th>
                        <th>Patrimônio</th>
                        <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.listaEquipamentos.map( (equip) => {
                                return (
                                    <tr key={equip.idEquipamento}>
                                        <td>{equip.idEquipamento}</td>
                                        <td>{equip.marca}</td>
                                        <td>{equip.tipoDeEquipamento}</td>
                                        <td>{equip.numeroDeSerie}</td>
                                        <td>{equip.descricao}</td>
                                        <td>{equip.numeroDePatrimonio}</td>
                                        <td>{equip.ativoPassivo}</td>
                                    </tr>
                                )
                            } )
                        }
                    </tbody>
                    </table>
                </div>
                </section>
                <section>
                    <h2>
                    Cadastrar Equipamentos
                    </h2>
              <form onSubmit={this.cadastrarEquipamento}>
                <div>
                  <input
                    type="text"
                    value={this.state.marca}
                    onChange={this.atualizaEquip}
                    placeholder="Marca"
                  />
                  <input 
                    type="text"
                    value={this.state.tipoEquipamento}
                    onChange={this.atualizaEquip}
                    placeholder="Tipo de Equipamento"
                  />
                  <input 
                  type="text"
                  value={this.state.serie}
                  onChange={this.atualizaEquip}
                  placeholder="Número de Série"
                />
                  <input 
                    type="text"
                    value={this.state.descricao}
                    onChange={this.atualizaEquip}
                    placeholder="Descrição"
                  />
                  <input 
                    type="text"
                    value={this.state.numPatrimonio}
                    onChange={this.atualizaEquip}
                    placeholder="Número de Patrimônio"
                  />
                  <select name="Status" value={this.state.status} onChange={this.atualizaEquip}>
                    <option value="true">Ativo</option>
                    <option value="false">Passivo</option>
                  </select>
                  <button type="submit">
                    Cadastrar
                  </button>
                </div>
              </form>
            </section>
            </main>
        );
    }
}

export default Equipamentos;