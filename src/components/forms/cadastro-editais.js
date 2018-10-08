import React from "react";
import { Field, reduxForm } from "redux-form";
import * as Formats from "../../actions/validationFormats";
import * as Utils from "../../actions/utils";

const CadastroEditaisForm = (props) => {
	const { handleSubmit } = props;

	return (
		<form method="post" onSubmit={handleSubmit}>
			<Field
				name="nome"
				id="nome"
				label="Nome:"
				component={Utils.renderizarCampo}
				type="text"
				className="form-control"
				validate={[Formats.obrigatorio]}
				placeholder="Digite o nome do edital"
				autoComplete="off"
			/>
			<Field
				name="descricao"
				id="descricao"
				label="Descrição:"
				component={Utils.renderizarCampo}
				type="text"
				validate={[Formats.obrigatorio]}
				className="form-control"
				placeholder="Digite uma descrição para o edital"
				autoComplete="off"
			/>
			<div className="form-group">
				<b>Qual é o atual status do edital?</b><br />
				<div className="row mt-2">
					<label className="col-sm-3">
						<Field
							component="input"
							type="radio"
							name="status"
							value="0"
						/>
						<span>Desativado</span>
					</label>
					<label className="col-sm-3">
						<Field
							component="input"
							type="radio"
							name="status"
							value="1"
						/>
						<span>Ativado</span>
					</label>
				</div>
			</div>
			<div className="form-group">
				<b>Qual é o tipo do edital?</b><br />
				<div className="row mt-2">
					<label className="col-sm-3">
						<Field
							component="input"
							type="radio"
							name="tipo"
							value="1"
						/>
						<span>Edital</span>
					</label>
					<label className="col-sm-4">
						<Field
							component="input"
							type="radio"
							name="tipo"
							value="2"
						/>
						<span>Instrução Normativa</span>
					</label>
				</div>
			</div>
			<div className="form-group">
				<b>Selecione a modalidade do curso:</b><br />
				<div className="row mt-2">
					<label className="col-sm-3">
						<Field
							component="input"
							type="checkbox"
							name="modalidade[graduacao]"
							value="1"
						/>
						<span>Graduação</span>
					</label>
					<label className="col-sm-3">
						<Field
							component="input"
							type="checkbox"
							name="modalidade[tecnico]"
							value="2"
						/>
						<span>Técnico</span>
					</label>
					<label className="col-sm-4">
						<Field
							component="input"
							type="checkbox"
							name="modalidade[posGraducao]"
							value="3"
						/>
						<span>Pós-graduação</span>
					</label>
					<label className="col-sm-3">
						<Field
							component="input"
							type="checkbox"
							name="modalidade[mestrado]"
							value="4"
						/>
						<span>Mestrado</span>
					</label>
					<label className="col-sm-3">
						<Field
							component="input"
							type="checkbox"
							name="modalidade[dourtorado]"
							value="5"
						/>
						<span>Dourtorado</span>
					</label>
				</div>
			</div>
			<div className="form-group mb-0">
				<button className="btn btn-primary btn-block">Criar conta</button>
			</div>
		</form>
	);
}

export default reduxForm({
	form: "cadastro-editais"
})(CadastroEditaisForm);