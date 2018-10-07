import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from "../actions/usuarios";
import CadastroAlunoForm from "../components/forms/cadastro-aluno";

// Adicionar novo usuario
class CadastroAluno extends Component {
	render() {
		// Titulo da pagina
		document.title = "SIGAEST — Cadastro de Alunos";

		// Cadastrar novo aluno
		const cadastrarAluno = ( aluno ) => {
			const novoAluno = {
				nome: aluno.nome,
				cpf: aluno.cpf.replace(/\W+/g, ""),
				email: aluno.email,
				senha: aluno.senha,
				admin: 0
			}

			this.props.adicionarUsuario( novoAluno );
		}
		
		return (
			<div className="container form-container">
				<h4>Crie sua conta no SIGAEST</h4>
				<p>Utilize o formulário abaixo para criar a sua conta.</p>
				<div className="card">
					<div className="card-header">
						Dados Pessoais
					</div>
					<div className="card-body">
						<CadastroAlunoForm onSubmit={cadastrarAluno} />
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	usuarios: state.usuarios
});

export default connect(mapStateToProps, actions)(CadastroAluno);