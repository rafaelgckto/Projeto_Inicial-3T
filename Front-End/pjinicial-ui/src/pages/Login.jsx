import React, { Component } from "react";
import axios from "axios";
import { parseJwt, usuarioAutenticado } from "../services/auth";
import "../assets/css/login.css";

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			senha: "",
			erroMensagem: "",
			isLoading: false,
		};
	}

	efetuaLogin = (event) => {
		event.preventDefault();
		this.setState({ erroMensagem: "", isLoading: true });

		axios
			.post("http://localhost:5000/api/login", {
				email: this.state.email,
				senha: this.state.senha,
			})
			.then((resposta) => {
				if (resposta.status === 200) {
					localStorage.setItem("usuario-login", resposta.data.token); // salva o token no localStorage,
					console.log("Meu token é: " + resposta.data.token); // exibe o token no console do navegador
					this.setState({ isLoading: false }); // e define que a requisição terminou

					let base64 = localStorage.getItem("usuario-login").split(".")[1]; // Define a variável base64 que vai receber o payload do token

					console.log(base64); // Exibe no console o valor presente na variável base64
					console.log(window.atob(base64)); // Exibe no console o valor convertido de base64 para string
					console.log(JSON.parse(window.atob(base64))); // Exibe no console o valor convertido da string para JSON
					console.log(parseJwt().role); // Exibe no console apenas o tipo de usuário logado

					const { history } = this.props;

					if (parseJwt().role === "1") {
						history.push("/sala");
						console.log("estou logado: " + usuarioAutenticado());
					} else {
						history.push("/");
					}
				}
			})
			.catch(() => {
				this.setState({
					erroMensagem: "E-mail ou senha inválidos! Tente novamente.",
				});
			});
	};

	atualizaStateCampo = (campo) => {
		this.setState({ [campo.target.name]: campo.target.value });
	};

	render() {
		return (
			<div>
				<header className="header-cab">
					<img className="img-logo" src="" alt="Logo do senai" />
				</header>

				<main className="main-">
					<div className="containerr">
						<form className="form-item">
							<input
								className="inputs-"
								type="text"
								placeholder="E-mail"
								name="email"
								value={this.state.email}
								onChange={this.atualizaStateCampo}
							/>

							<input
								className="inputs-"
								type="password"
								placeholder="Password"
								name="senha"
								value={this.state.senha}
								onChange={this.atualizaStateCampo}
							/>

							<p style={{ color: "red", textAlign: "center" }}>
								{this.state.erroMensagem}
							</p>

							<button className="btnn" type="submit">
								Login
							</button>
						</form>
					</div>
				</main>
			</div>
		);
	}
}

export default Login;
