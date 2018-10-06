import React, { Component } from 'react';
import { Provider } from "react-redux";
import store from "../reducers/store";
import LoginForm from "../components/forms/login";
import UltimasNoticias from "../components/noticias";


export default class LoginPage extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-4">
						<div className="card mb-5">
							<div className="card-header">Realize seu login</div>
							<div className="card-body">
								<Provider store={store}>
									<LoginForm/>
								</Provider>
							</div>
						</div>
						<div className="card mb-5">
							<div className="card-header">Crie sua conta</div>
							<div className="card-body text-center">
								<a href="http://localhost">Ainda não possui uma conta? Clique aqui.</a>
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