import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../assets/css/sala.css";

class Sala extends Component {
	constructor(props) {
		super(props);
		this.state = {
			listaSalas: [],
			idSala: 0,
			andar: 0,
			nome: "",
			metragem: 0,
			idSalaAlterado: 0,
		};
	}

	BuscarListaSala = () => {
		axios("http://localhost:5000/api/sala", {
			headers: {
				Authorization: "Bearer " + localStorage.getItem("usuario-login"),
			},
		})
			.then((response) => {
				if (response.status === 200) {
					this.setState({ listaSalas: response.data });
				}
			})
			.catch((error) => console.log(error));
	};

	componentDidMount() {
		this.BuscarListaSala();
	}

	CadastroSala = (event) => {
		event.preventDefault();

		let novaSala = {
			idSala: this.state.idSala,
			andar: this.state.andar,
			nome: this.state.nome,
			metragem: this.state.metragem,
		};

		axios
			.post("http://localhost:5000/api/sala", novaSala, {
				headers: {
					Authorization: "Bearer " + localStorage.getItem("usuario-login"),
				},
			})
			.then((resposta) => {
				if (resposta.status === 201) {
					console.log("Sala cadastrado!");
				}
			})
			.catch((erro) => {
				console.log(erro);
			})
			.then(this.BuscarListaSala)
			.then(this.limparCampos);
	};

	AtualizarSala = (event) => {
		event.preventDefault();

		fetch("http://localhost:5000/api/sala/" + this.state.idSalaAlterado, {
			method: "PUT",
			body: JSON.stringify({
				andar: this.state.andar,
				nome: this.state.nome,
				metragem: this.state.metragem,
			}),
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + localStorage.getItem("usuario-login"),
			},
		})
			.then((resposta) => {
				if (resposta.status === 204) {
					console.log("Sala atualizada!");
				}
			})
			.then(this.BuscarListaSala)
			.then(this.limparCampos);
	};

	BuscarTipoEventoPorId = (room) => {
		this.setState({
			idSalaAlterado: room.idSala,
			andar: room.andar,
			nome: room.nome,
			metragem: room.metragem,
		});
	};

	ExcluirTipoEvento = (room) => {
		console.log("O Tipo de Evento " + room.idSala + " foi selecionado");

		fetch("http://localhost:5000/api/sala/" + room.idSala, {
			method: "DELETE",

			headers: {
				Authorization: "Bearer " + localStorage.getItem("usuario-login"),
			},
		})
			.then((resposta) => {
				if (resposta.status === 204) {
					console.log("Tipo de Evento " + room.idSala + " excluído!");
				}
			})
			.catch((erro) => console.log(erro))
			.then(this.BuscarListaSala);
	};

	atualizaStateCampo = (campo) => {
		this.setState({ [campo.target.name]: campo.target.value });
	};

	limparCampos = () => {
		this.setState({
			andar: 0,
			nome: "",
			metragem: 0,
			idSalaAlterado: 0,
		});
		console.log("Os states foram resetados!");
	};

	render() {
		return (
			<div>
				<header
					className="headerr-cab"
					style={{ display: "flex", justifyContent: "space-between" }}
				>
					<img className="img-logo" src="" alt="Logo do senai" />

					<button className="btn btn03">
						<a style={{ color: "white", textDecoration: "none" }} href="">
							Equipamento
						</a>
					</button>
				</header>

				<main className="main-container">
					<section className="container">
						<p>Cadastro de Sala</p>

						<div className="room_registration-container">
							<form
								className="room-registration-form"
								onSubmit={this.CadastroSala}
							>
								<div className="item">
									<label for="floor">Andar</label>
									<input
										id="floor"
										className="item-input"
										type="text"
										name="andar"
										value={this.state.andar}
										onChange={this.atualizaStateCampo}
									/>
								</div>

								<div className="item">
									<label for="name">Nome</label>
									<input
										id="name"
										className="item-input"
										type="text"
										name="nome"
										value={this.state.nome}
										onChange={this.atualizaStateCampo}
									/>
								</div>

								<div className="item">
									<label for="footage">Metragem</label>
									<input
										id="footage"
										className="item-input"
										type="text"
										name="metragem"
										value={this.state.metragem}
										onChange={this.atualizaStateCampo}
									/>
								</div>

								<div
									className="btn-submit"
									style={{ textAlign: "center" }}
								>
									<button className="btn btn-config" type="submit">
										Cadastrar
									</button>
								</div>
							</form>
						</div>
					</section>

					<section className="container">
						<p>Lista Sala</p>

						<div className="room-list-container">
							<table className="room-list-table">
								<thead>
									<tr>
										<th style={{ borderLeftWidth: 0 }}></th>
										<th>Andar</th>
										<th>Nome</th>
										<th>Metragem</th>
									</tr>
								</thead>

								<tbody>
									{this.state.listaSalas.map((room) => {
										return (
											<tr key={room.idSala}>
												<td
													style={{
														borderLeftWidth: 0,
														padding: "0 0.4em",
													}}
												>
													{room.idSala}
												</td>
												<td>{room.andar}</td>
												<td>{room.nome}</td>
												<td>{room.metragem}</td>
												<td style={{ borderRightWidth: 0 }}>
													<button
														class="btn btn02"
														onClick={() =>
															this.BuscarTipoEventoPorId(room)
														}
													>
														Upd.
													</button>
													<button
														class="btn btn02"
														onClick={() =>
															this.ExcluirTipoEvento(room)
														}
													>
														Del.
													</button>
												</td>
											</tr>
										);
									})}
								</tbody>
							</table>
						</div>
					</section>

					{/* style={{ display: "none" }} */}
					<section className="container">
						<p>Atualizar Sala</p>

						<div className="room_update-container">
							<form
								className="room-update-form"
								onSubmit={this.AtualizarSala}
							>
								<div className="item">
									<label for="id-update">ID</label>
									<input
										id="id-update"
										className="item-input id-input"
										type="text"
										name="idSala"
										value={this.state.idSalaAlterado}
										onChange={this.atualizaStateCampo}
										disabled
									/>
								</div>

								<div class="item">
									<label for="floor-update">Andar</label>
									<input
										id="floor-update"
										className="item-input"
										type="text"
										name="andar"
										value={this.state.andar}
										onChange={this.atualizaStateCampo}
									/>
								</div>

								<div class="item">
									<label for="name-update">Nome</label>
									<input
										id="name-update"
										className="item-input"
										type="text"
										name="nome"
										value={this.state.nome}
										onChange={this.atualizaStateCampo}
									/>
								</div>

								<div class="item">
									<label for="footage-update">Metragem</label>
									<input
										id="footage-update"
										className="item-input"
										type="text"
										name="metragem"
										value={this.state.metragem}
										onChange={this.atualizaStateCampo}
									/>
								</div>

								<div
									className="btn-submit"
									style={{ textAlign: "center" }}
								>
									<button className="btn btn-config" type="submit">
										Atualizar
									</button>
								</div>
							</form>
						</div>
					</section>
				</main>
			</div>
		);
	}
}

export default Sala;
