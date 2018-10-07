import React from "react";
import { Field, reduxForm } from "redux-form";
import * as Formats from "../../actions/validationFormats";
import * as Utils from "../../actions/utils";

const LoginForm = (props) => {
	const { handleSubmit } = props;

	return (
		<form method="post" onSubmit={handleSubmit}>
			<Field
				name="cpf"
				id="cpf"
				component={Utils.renderizarCampo}
				type="text"
				className="form-control"
				autocomplete="off"
				label="CPF"
				placeholder="Dgite seu CPF"
				validate={[Formats.obrigatorio, Formats.cpf]}
			/>
			<Field
				name="senha"
				id="senha"
				component={Utils.renderizarCampo}
				type="password"
				label="Senha"
				className="form-control"
				placeholder="Digite sua senha"
				validate={[Formats.obrigatorio]}
			/>
			<div className="form-group">
				 <button type="submit" className="btn btn-secondary btn-block">Entrar</button>
			</div>
			<div className="text-center">
				<a href="/">Sua conta não possui senha?</a><br />
				<a href="/">Esqueceu sua senha?</a>
			</div>
		</form>
	);
}

export default reduxForm({
	form: "login"
})(LoginForm);