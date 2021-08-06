import { Component } from "react";
import axios from "axios";

export default class Salas extends Component{
    constructor(props){
        super(props);
        this.state = {
            listaSalas : [],
            idSala : 0,
            andar : 0,
            nome : '',
            metragem : 0
        };
    };

    buscarSalas = () => {
        fetch('http://localhost:5000/api/sala', {
            headers : {
                'Authorization' : 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })

        .then(resposta => {
            if (resposta.status !== 200) {
                throw Error();
            };

            return resposta.json();
        })

        .then(resposta => this.setState({ listaSalas : resposta }))

        .catch(erro => console.log(erro));
    };

    componentDidMount(){
        this.buscarSalas();
    };

    cadastrarSala = (event) => {
        event.preventDefault();

        let novaSala = {
            idSala      :       this.state.idSala,
            andar       :       this.state.andar,
            nome        :       this.state.nome,
            metragem    :       this.state.metragem
        };

        axios.post('http://localhost:5000/api/sala', novaSala, {
            headers : {
                'Authorization' : 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })

        .then(resposta => {
            if (resposta.status === 201) {
                console.log('Nova sala cadastrada')
            }
        })

        .catch(erro => console.log(erro))

        .then(this.buscarSalas);
    };

    render(){
        return(

            <div className="main">

                <div className="header">
                    <div className="cabecalho">
                        <img src="Capturar 1.png" alt="logo senai" />
                    </div>
                </div>

                <section className="bloco1">
                    <h1>Cadastro de Salas</h1>
                    <div className="alinhamento">  
                        <div className="cadastro">
                            <div className="labels">
                                <label>Andar</label>
                                <label>Nome</label>
                                <label>Metragem</label>
                            </div>
                            <div class="inputs">
                                <input type="number" />
                                <input type="text" />
                                <input type="number" />
                            </div>
                        </div>
                        <div className="botao">
                            <button type="submit">Cadastrar</button>
                        </div>
                    </div>
                </section>

                <section className="bloco2">
                    <h2>Lista de Salas</h2>
                    <div class="lista">
                        <table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Andar</th>
                                    <th>Nome</th>
                                    <th>Metragem</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    listaSalas.map((salas) => {
                                        return (
                                            <tr key={salas.idSala}>
                                                <td>{salas.nome}</td>
                                                <td>{salas.andar}</td>
                                                <td>{salas.metragem}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="bloco3">
                    <h2>Busca por Id</h2>
                    <div className="busca">
                        <label>ID</label>
                        <input type="number" />
                        <button type="submit">Buscar</button>
                    </div>
                </section>

                <section className="bloco4">
                    <h2>Atualizar Salas</h2>
                    <div className="atualiza">
                        <div className="labels1">
                            <label>ID</label>
                            <label>Nome</label>
                            <label>Andar</label>
                            <label>Metragem</label>
                        </div>
                        <div className="inputs1">
                            <input type="number" />
                            <input type="text" />
                            <input type="number" />
                            <input type="number" />
                        </div>
                    </div>
                    <div className="botao1">
                        <button type="submit">Atualizar</button>
                    </div>
                </section>

            </div>

        )
    }

}