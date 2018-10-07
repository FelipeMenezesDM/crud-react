import React, { Component } from 'react';
import LoginForm from "../components/forms/login";
import UltimasNoticias from "../components/noticias";
import axios from 'axios';

const login = (data) => {
	if( data.cpf === "" ) {
		return false;
	}else{
		return true;
	}
}

export default class Login extends Component {
	render() {
		document.title = "SIGAEST — Acesso ao sistema";

		const loginRequest = (data) => {
			axios.get( '/login' );
		}

		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-4">
						<div className="card mb-5">
							<div className="card-header">Realize seu login</div>
							<div className="card-body">
								<LoginForm onSubmit={loginRequest} />
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