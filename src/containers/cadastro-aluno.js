import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/usuarios";
import CadastroAlunoForm from "../components/forms/cadastro-aluno";
import cookie from "react-cookies";

// Adicionar novo usuario
class CadastroAluno extends Component {
	componentDidMount() {
		this.props.listarUsuarios();
	}

	// Verificar duplicados
	/*verificarDuplicados = ( campos ) => {
		for( var i = 0; this.props.usuarios; i++ ) {
			if( campos.cpf ==  )
		}
	}*/

	// Cadastrar novo aluno
	cadastrarAluno = ( aluno ) => {
		const novoAluno = {
			nome: aluno.nome,
			cpf: aluno.cpf.replace(/\W+/g, ""),
			email: aluno.email,
			senha: aluno.senha,
			ocupacao: "Estudante",
			admin: 0
		}

		// Salvar aluno e atualizar o cookie
		const usuario = this.props.adicionarUsuario( novoAluno );
		cookie.save( "sessaoUsuario", usuario.usuario, { path: "/" } );

		// Atualizar a pagina
		window.location.reload();
	}

	render() {
		// Titulo da pagina
		document.title = "SIGAEST — Cadastro de Alunos";

		// Armazenar usuarios na memoria
		const usuarios = this.props.usuarios;
		if( usuarios )
			cookie.save( "usuarios", usuarios, { path: "/" } );
		
		return (
			<div className="container form-container">
				<h4>Crie sua conta no SIGAEST</h4>
				<p>Utilize o formulário abaixo para criar a sua conta.</p>
				<div className="card">
					<div className="card-header">
						Dados Pessoais
					</div>
					<div className="card-body">
						<CadastroAlunoForm onSubmit={this.cadastrarAluno} />
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	usuarios: state.usuarios.usuarios
});

export default connect(mapStateToProps, actions)(CadastroAluno);