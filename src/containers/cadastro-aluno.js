import React, { Component } from 'react';
import { Provider } from "react-redux";
import store from "../reducers/store";
import CadastroAlunoForm from "../components/forms/cadastro-aluno";

export default class CadastroAluno extends Component {
	render() {
		return (
			<div className="container form-container">
				<h4>Crie sua conta no SIGAEST</h4>
				<p>Utilize o formulário abaixo para criar a sua conta.</p>
				<div className="card">
					<div className="card-header">
						Dados Pessoais
					</div>
					<div className="card-body">
						<Provider store={store}>
							<CadastroAlunoForm />
						</Provider>
					</div>
				</div>
			</div>
		);
	}
}