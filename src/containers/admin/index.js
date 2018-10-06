import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import * as Icons from '@fortawesome/free-solid-svg-icons';

export default class Dashboard extends React.Component {
	render() {
		return (
			<div>
				<h4>Bem-vindo ao SIGAEST, Felipe Menezes.</h4>
				<p>Utilize o menu abaixo para realizar suas ações dentro do sistema.</p>
				<div className="card">
					<div className="card-header bg-gradient-light">
						Menu do administrador
					</div>
					<div className="card-body">
							<div className="row">
								<div className="col-sm-4">
									<div className="card">
										<div className="card-body">
											<h6>Dados pessoais</h6>
											<b>Nome:</b> Felipe Menezes de Melo<br/>
											<b>Função:</b> Analista de Sistemas<br/>
											<b>CPF:</b> 026.744.872-40
										</div>
									</div>
								</div>
								<div className="col-sm-8 admin-actions">
									<div className="row">
									<a className="col-sm-4" href="http://localhost">
										<FontAwesomeIcon icon={Icons.faHandsHelping} size="2x" /><br />
										<span>Editais</span>
									</a>
									<a className="col-sm-4" href="http://localhost">
										<FontAwesomeIcon icon={Icons.faClipboard} size="2x" /><br />
										<span>Questionários</span>
									</a>
									<a className="col-sm-4" href="http://localhost">
										<FontAwesomeIcon icon={Icons.faUserGraduate} size="2x" /><br />
										<span>Alunos</span>
									</a>
									<a className="col-sm-4" href="http://localhost">
										<FontAwesomeIcon icon={Icons.faFlag} size="2x" /><br />
										<span>Recursos</span>
									</a>
									<a className="col-sm-4" href="http://localhost">
										<FontAwesomeIcon icon={Icons.faChartBar} size="2x" /><br />
										<span>Estatística</span>
									</a>
									<a className="col-sm-4" href="http://localhost">
										<FontAwesomeIcon icon={Icons.faDatabase} size="2x" /><br />
										<span>Banco de Dados</span>
									</a>
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