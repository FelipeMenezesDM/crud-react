import React, { Component } from 'react';
import CadastroAlunoForm from "../components/forms/cadastro-aluno";

const handleSubmit = () => {};

export default class CadastroAluno extends Component {
	render() {
		document.title = "SIGAEST — Cadastro de Alunos";
		
		return (
			<div className="container form-container">
				<h4>Crie sua conta no SIGAEST</h4>
				<p>Utilize o formulário abaixo para criar a sua conta.</p>
				<div className="card">
					<div className="card-header">
						Dados Pessoais
					</div>
					<div className="card-body">
						<CadastroAlunoForm onSubmit={handleSubmit} />
					</div>
				</div>
			</div>
		);
	}
}