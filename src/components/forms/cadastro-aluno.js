import React from "react";
import { Field, reduxForm } from "redux-form";
import * as Formats from "../../actions/validationFormats";
import * as Utils from "../../actions/utils";

const CadastroAlunoForm = (props) => {
	const { handleSubmit } = props;

	return (
		<form method="post" onSubmit={handleSubmit}>
			<Field
				name="nome"
				id="nome"
				label="Nome *"
				component={Utils.renderizarCampo}
				type="text"
				className="form-control"
				validate={[Formats.obrigatorio]}
				placeholder="Digite seu nome"
				autoComplete="off"
			/>
			<Field
				name="cpf"
				id="cpf"
				label="CPF *"
				component={Utils.renderizarCampo}
				type="text"
				className="form-control mask-cpf"
				validate={[Formats.obrigatorio, Formats.cpf]}
				placeholder="Digite seu CPF"
				autoComplete="off"
			/>
			<Field
				name="email"
				id="email"
				component={Utils.renderizarCampo}
				type="email"
				label="E-mail *"
				validate={[Formats.obrigatorio, Formats.email]}
				className="form-control"
				placeholder="Digite seu e-mail"
				autoComplete="off"
				mask={'+4\\9 99 999 99'}
			/>
			<Field
				name="confirmaEmail"
				id="confirmaEmail"
				component={Utils.renderizarCampo}
				type="email"
				label="Confirmação de e-mail *"
				validate={[Formats.obrigatorio, Formats.email, Formats.compararEmails]}
				className="form-control"
				placeholder="Digite seu e-mail novamente"
				autoComplete="off"
			/>
			<Field
				name="senha"
				id="senha"
				component={Utils.renderizarCampo}
				type="password"
				className="form-control"
				placeholder="Digite sua senha"
				label="Senha *"
				validate={[Formats.obrigatorio, Formats.minimo(6), Formats.maximo(12)]}
			/>
			<Field
				name="confirmaSenha"
				id="confirmaSenha"
				component={Utils.renderizarCampo}
				type="password"
				className="form-control"
				placeholder="Dgite sua senha novamente"
				validate={[Formats.obrigatorio, Formats.compararSenhas]}
				label="Confirmação de senha *"
			/>
			<div className="form-group">
				<button className="btn btn-secondary btn-block">Criar conta</button>
			</div>
			<div className="text-center">
				<a href="/login">Já possui uma conta? Clique aqui para fazer login.</a>
			</div>
		</form>
	);
}

export default reduxForm({
	form: "cadastro-aluno"
})(CadastroAlunoForm);