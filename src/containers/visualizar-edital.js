import React, {Component} from "react";
import * as actions from "../actions/editais";
import {connect} from "react-redux";
import cookie from "react-cookies";
import {checkAuth} from "../actions/utils";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
	faTimes,
	faEdit
} from "@fortawesome/free-solid-svg-icons";

class VisualizarEdital extends Component {
	editalSelecionado = () => {
		const id = this.props.match.params.id;
		const editais = cookie.load( "editais" );

		if( editais ) {
			for( var i = 0; i < editais.length; i++ ) {
				if( editais[i].id === parseInt( id ) ) {
					return editais[i];
				}
			}
		}
		
		window.location.href = "/login";
	}

	render() {
		const usuario = checkAuth();
		const edital = this.editalSelecionado();
		const data = new Date( edital.dataCriacao );
		const editarLink = "/editar-edital/" + edital.id;

		return(
			<div>
				<h4>Edital {edital.nome}</h4>
				<p>Verifique e realize ações em relação ao edital escolhido.</p>
				<div className="card">
					<div className="card-header">
						<div className="float-left mt-3">Painel de visualização do Edital</div>
						<div className="float-right text-center tableActions">
							<a href="/login" className="btn btn-danger rounded-circle"><FontAwesomeIcon icon={faTimes} size="1x" /></a><br />
							<span>Cancelar</span>
						</div>
					{	usuario.admin === 1 ?
						<div className="float-right text-center mr-4 tableActions">
							<a href={editarLink} className="btn btn-warning rounded-circle"><FontAwesomeIcon icon={faEdit} size="1x" /></a><br />
							<span>Editar</span>
						</div>
						: ""
					}
					</div>
					<div className="card-body">
						<p><b>Nome:</b> {edital.nome}</p>
						<p><b>Criado em: </b>{data.toLocaleDateString("pt-BR")}</p>
						<p><b>Tipo:</b> { edital.tipo === 1 ? "Edital" : "Instrução Normativa" }</p>
						<p><b>Descrição:</b> {edital.descricao}</p>
					</div>
				</div>
			</div>
		);
	}
}



const mapStateToProps = state => ({
	editais: state.editais.editais
});

export default connect(mapStateToProps, actions)(VisualizarEdital);