import React, {Component} from "react";
import {checkAuth} from "../actions/utils";

export default class Cabecalho extends Component {
	render() {
		const usuario = checkAuth();

		return (
			<header>
				<div className="header-wrapper justify-content-between row m-0">
					<div className="col-sm-3">
						----LOGO-----
					</div>
					{( usuario ) ?
						<div className="col-sm-3 user-bar">
							<div className="dropdown float-right">
								<button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{usuario.nome}</button>
								<div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
									<a className="dropdown-item" href="/aluno/conta">Editar informações</a>
									<a className="dropdown-item" href="/logout">Sair</a>
								</div>
							</div>
						</div>
					: ""}
				</div>
			</header>
		);
	}
}