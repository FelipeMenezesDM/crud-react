import React, { Component } from "react";
import LoginForm from "../components/forms/login";
import UltimasNoticias from "../components/noticias";
import { connect } from "react-redux";
import * as actions from "../actions/usuarios";
import cookie from "react-cookies";

class Login extends Component {
	componentDidMount() {
		this.props.listarUsuarios();
	}

	// Verificar se o usuario esta na lista
	loginRequest = ( usuario ) => {
		const usuarios = this.props.usuarios;
		usuario.cpf = usuario.cpf.replace(/\W+/g, "");

		for( var i = 0; i < usuarios.length; i++ ) {
			if( usuarios[i].cpf === usuario.cpf && usuarios[i].senha === usuario.senha ) {
				cookie.save( "sessaoUsuario", usuarios[ i ], {path: "/"} );
				window.location.reload();
				return;
			}
		}

		alert("CPF ou senha inválidos.");
	}

	render() {
		document.title = "SIGAEST — Acesso ao sistema";

		return (
			<div className="container">
				{(
					this.props.formStatus === false &&
					<div className="alert alert-danger" role="alert">
						CPF ou senha inválida.
					</div>
				)}
				<div className="row">
					<div className="col-sm-4">
						<div className="card mb-5">
							<div className="card-header">Realize seu login</div>
							<div className="card-body">
								<LoginForm onSubmit={this.loginRequest} />
							</div>
						</div>
						<div className="card mb-5">
							<div className="card-header">Crie sua conta</div>
							<div className="card-body text-center">
								<a href="/cadastro">Ainda não possui uma conta? Clique aqui.</a>
							</div>
						</div>
					</div>
					<div className="col-sm-8">
						<div className="card">
							<div className="card-header">
								Últimas notícias
							</div>
							<div className="card-body table-responsive pt-0">
								<table className="table">
									<thead>
										<tr>
											<th className="border-0" width="20%">Notícia</th>
											<th className="border-0">Descrição</th>
											<th className="border-0">Data</th>
										</tr>
									</thead>
									<UltimasNoticias />
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	usuarios: state.usuarios.usuarios
});

export default connect(mapStateToProps, actions)(Login);