import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
	faHandsHelping,
	faClipboard,
	faUserGraduate,
	faFlag,
	faChartBar,
	faDatabase,
	faUser,
	faHistory,
	faLock
} from "@fortawesome/free-solid-svg-icons";
import {checkAuth, formataCPF} from "../actions/utils";

const Botao = ( props ) => {
	return (
		<div className="col-sm-3">
			<a href="{props.contexto}">
				<FontAwesomeIcon icon={props.icone} size="2x" /><br />
				<span>{props.titulo}</span>
			</a>
		</div>
	);
};

const Botoes = ( botoes ) => {
	return botoes.itens.map((item, index) => {
		return <Botao key={index} titulo={item.titulo} icone={item.icone} contexto={item.contexto} />
	});
};

class BotoesDashboard extends Component {
	render() {
		const usuario = checkAuth();
		const botoesAluno = [
			{ titulo: "Histórico", icone: faHistory, contexto: "/aluno/historico" },
			{ titulo: "Editais", icone: faHandsHelping, contexto: "/aluno/editais" },
			{ titulo: "Conta", icone: faUser, contexto: "/aluno/conta" }
		];
		const botoesAdmin = [
			{ titulo: "Administradores", icone: faLock, contexto: "/admin/administradores" },
			{ titulo: "Editais", icone: faHandsHelping, contexto: "/admin/editais" },
			{ titulo: "Questionários", icone: faClipboard, contexto: "/admin/questionarios" },
			{ titulo: "Alunos", icone: faUserGraduate, contexto: "/admin/alunos" },
			{ titulo: "Recursos", icone: faFlag, contexto: "/admin/recursos" },
			{ titulo: "Estatística", icone: faChartBar, contexto: "/admin/estatistica" },
			{ titulo: "Banco de Dados", icone: faDatabase, contexto: "/aluno/banco-de-dados" },
			{ titulo: "Conta", icone: faUser, contexto: "/admin/conta" }
		];

		if( usuario.admin === 1 ) {
			return <Botoes itens={botoesAdmin} />;
		}else{
			return <Botoes itens={botoesAluno} />;
		}
	}
}

export default class Dashboard extends Component {
	render() {
		const usuario = checkAuth();

		return (
			<div className="admin-dashboard">
				<h4>Bem-vindo ao SIGAEST, {usuario.nome}.</h4>
				<p>Utilize o menu abaixo para realizar suas ações dentro do sistema.</p>
				<div className="card">
					<div className="card-header bg-gradient-light">
						{usuario.admin === 1 ? "Menu do administrador" : "Menu do aluno"}
					</div>
					<div className="card-body">
						<div className="row">
							<div className="col-sm-4">
								<div className="card mb-3">
									<div className="card-body">
										<h6>Dados pessoais</h6>
										<b>Nome:</b> {usuario.nome}<br/>
										<b>Função:</b> {usuario.ocupacao}<br/>
										<b>CPF:</b> {formataCPF(usuario.cpf)}
									</div>
								</div>
							</div>
							<div className="col-sm-8">
								<div className="row admin-actions">
									<BotoesDashboard />
								</div>
							</div>
						</div>
					</div>
					<hr/>
					<div className="card-body">
						<form>
						  <div className="form-group mb-0">
						    <h6><label htmlFor="nomeAluno">Pesquise informações de um aluno específico.</label></h6>
						    <div className="row">
						    	<label htmlFor="nomeAluno" className="col-sm-2 col-form-label">Nome do aluno:</label>
						    	<div className="col-sm-10">
						    		<input type="text" className="form-control" name="nomeAluno" id="nomeAluno" />
						    	</div>
						    </div>
						  </div>
						</form>
					</div>
				</div>
				<br /><br />
				<p className="text-center">
					Superintendência de Assistência Estudantil<br />
					Pró-reitoria de extensão da UFPa<br />
					Universidade Federal do Pará
				</p>
				<br />
			</div>
		);
	}	
}