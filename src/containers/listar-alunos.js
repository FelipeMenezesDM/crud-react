import React, {Component} from "react";
import * as actions from "../actions/usuarios";
import {checkAuth, formataCPF} from "../actions/utils";
import {connect} from "react-redux";

const Aluno = (props) => {
	return (
		<tr>
			<td>{props.nome}</td>
			<td>{formataCPF(props.cpf)}</td>
			<td>{props.email}</td>
		</tr>
	);
}

class ListarAlunos extends Component {
	componentDidMount() {
		this.props.listarUsuarios();
	}

	render() {
		const usuario = checkAuth();
		const alunos = this.props.usuarios;
		document.title = "SIGAEST — Alunos cadastrados no sistema";

		return(
			<div>
				<h4>Alunos cadastrados no sistema</h4>
				<p>Abaixo, a lista de todos os alunos cadastrados atualmente no sistema</p>
				<div className="card">
					<div className="card-header">
						<div className="float-left mt-3">Lista de alunos</div>
					</div>
					<div className="card-body">
						<table className="table mb-0">
							<thead>
								<tr>
									<th className="border-0">Nome</th>
									<th className="border-0">CPF</th>
									<th className="border-0">E-mail</th>
								</tr>
							</thead>
							<tbody>
							{
								alunos && alunos.length > 0 ?
									alunos.map(( item, index ) => {
										if( item.admin !== 1 ) {
											return <Aluno key={index} nome={item.nome} cpf={item.cpf} email={item.email} />
										}
									})
								: 
									<tr><td colSpan="3" className="text-center">Não há alunos cadastrados no sistema.</td></tr>
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
	usuarios: state.usuarios.usuarios
});

export default connect(mapStateToProps, actions)(ListarAlunos);