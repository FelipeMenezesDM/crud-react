import React, {Component} from "react";
import {connect} from "react-redux";
import * as actions from "../actions/editais";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import CadastroEditaisFrom from "../components/forms/cadastro-editais";
import cookie from "react-cookies";

class CadastroEditais extends Component {
	componentDidMount() {
		this.props.listarEditais();
	}

	onSubmit = (data) => {
		const novoEdital = {
			nome: data.nome || "",
			descricao: data.descricao || "",
			modalidade: data.modalidade || [],
			status: parseInt( data.status ) || 0,
			tipo: parseInt( data.tipo ) || 1
		}

		// Salvar edital
		const edital = this.props.adicionarEdital( novoEdital );

		// Atualizar a pagina
		window.location.href = "/admin/editar-edital?id=" + edital.edital.id;
	}

	render() {
		document.title = "SIGAEST — Cadastro de Editais";

		const editais = this.props.editais;
		if( editais )
			cookie.save( "editais", editais, { path: "/" } );

		return(
			<div className="container form-container">
				<div className="card">
					<div className="card-header">
						<div className="float-left mt-3">Painel de Criação de Edital</div>
						<div className="float-right text-center">
							<a href="/admin/editais" className="btn btn-danger rounded-circle"><FontAwesomeIcon icon={faTimes} size="1x" /></a><br />
							<span>Cancelar</span>
						</div>
					</div>
					<div className="card-body">
						<CadastroEditaisFrom onSubmit={this.onSubmit} />
					</div>
				</div>
			</div>
		); 
	}
}

const mapStateToProps = state => ({
	editais: state.editais.editais
});

export default connect(mapStateToProps, actions)(CadastroEditais);