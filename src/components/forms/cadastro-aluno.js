import React from 'react';
import { Field, reduxForm } from 'redux-form';
import * as Formats from '../../actions/validationFormats';
import * as Utils from '../../actions/utils';

const CadastroAlunoForm = (props) => {
	const { handleSubmit, pristine, reset, submitting } = props;

	return (
		<form onSubmit={handleSubmit}>
			<Field
				name="cpf"
				id="cpf"
				label="CPF *"
				component={Utils.renderizarCampo}
				type="text"
				className="form-control"
				validate={[Formats.required]}
				placeholder="Digite seu CPF"
			/>
			<Field
				name="email"
				id="email"
				component={Utils.renderizarCampo}
				type="email"
				label="E-mail *"
				validate={[Formats.required, Formats.email]}
				className="form-control"
				placeholder="Digite seu e-mail"
			/>
			<Field
				name="confirmaEmail"
				id="confirmaEmail"
				component={Utils.renderizarCampo}
				type="email"
				label="Confirmação de e-mail *"
				validate={[Formats.required, Formats.email]}
				className="form-control"
				placeholder="Digite seu e-mail novamente"
			/>
			<Field
				name="senha"
				id="senha"
				component={Utils.renderizarCampo}
				type="password"
				className="form-control"
				placeholder="Digite sua senha"
				label="Senha *"
				validate={[Formats.required]}
			/>
			<Field
				name="confirmaSenha"
				id="confirmaSenha"
				component={Utils.renderizarCampo}
				type="password"
				className="form-control"
				placeholder="Dgite sua senha novamente"
				validate={[Formats.required]}
				label="Confirmação de senha *"
			/>
			<button className="btn btn-secondary btn-block">Criar conta</button>
		</form>
	);
}

export default reduxForm({
	form: "cadastro-aluno"
})(CadastroAlunoForm);