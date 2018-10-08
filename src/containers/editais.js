import React, {Component} from "react";
import * as actions from "../actions/editais";
import {checkAuth} from "../actions/utils";
import {connect} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
	faPlus,
	faEye,
	faEdit,
	faTrashAlt
} from "@fortawesome/free-solid-svg-icons";

// Listar Editais
const Edital = (props) => {
	const usuario = checkAuth();
	const editarLink = "/admin/editar-edital?id=" + props.id;
	const visualizarLink = "/admin/visualizar-edital?id=" + props.id;
	const excluirLink = "/admin/excluir-edital?id=" + props.id;

	return (
		<tr>
			<td>{props.nome}</td>
			<td>{props.descricao}</td>
			<td className="text-center">{props.status === 0 ? "Desativado" : "Ativo"}</td>
			<td className="text-center">
			{
				usuario.admin === 1 ?
				<div className="tableActions">
					<a href={visualizarLink} className="btn btn-primary rounded-circle"><FontAwesomeIcon icon={faEye} size="1x" /></a>
					<a href={editarLink} className="btn btn-warning rounded-circle"><FontAwesomeIcon icon={faEdit} size="1x" /></a>
					<a href={excluirLink} className="btn btn-danger rounded-circle"><FontAwesomeIcon icon={faTrashAlt} size="1x" /></a>
				</div>
				:
				<div>
					<a href={visualizarLink} className="btn btn-primary rounded-circle"><FontAwesomeIcon icon={faEye} size="1x" /></a>
				</div>
			}
			</td>
		</tr>
	);
};

class ListarEditais extends Component {
	componentDidMount() {
		this.props.listarEditais();
	}

	render() {
		const usuario = checkAuth();
		const editais = this.props.editais;

		document.title = "SIGAEST — Painel de Editais";

		return(
			<div>
				<h4>Painel de Editais</h4>
				{
					usuario.admin === 1 ?
						<p>Utilize o menu para criar e editar editais do sistema.</p>
					:
						<p>Utilize o menu abaixo para se inscrever em editais abertos.</p>
				}
				<div className="card">
					<div className="card-header">
						<div className="float-left mt-3">Lista de editais criados</div>
						{ usuario.admin === 1 ?
							<div className="float-right text-center">
								<a href="/admin/cadastro-editais" className="btn btn-primary rounded-circle"><FontAwesomeIcon icon={faPlus} size="1x" /></a><br />
								<span>Criar edital</span>
							</div>
							: ""
						}
					</div>
					<div className="card-body">
						<table className="table mb-0">
							<thead>
								<tr>
									<th className="border-0">Nome</th>
									<th className="border-0 text-center">Descrição</th>
									<th className="border-0 text-center" width="5%">Status</th>
									<th className="border-0 text-center" width="20%">Ação</th>
								</tr>
							</thead>
							<tbody>
							{
								editais && editais.length > 0 ?
									editais.map(( item, index ) => {
										console.log( item );
										if( item.status === 1 || ( item.status === "0" && usuario.admin === 1 ) ) {
											return <Edital key={index} id={item.id} nome={item.nome} descricao={item.descricao} status={item.status} />
										}
									})
								: 
									<tr><td colSpan="4" className="text-center">No momento, não há editais cadastrados no sistema.</td></tr>
							}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	editais: state.editais.editais
});

export default connect(mapStateToProps, actions)(ListarEditais);