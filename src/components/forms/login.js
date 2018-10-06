import React from 'react';
import { Field, reduxForm } from 'redux-form';

const LoginForm = props => {
	return (
		<form>
			<div className="form-group">
				<label htmlFor="cpf"><b>CPF</b></label>
				<Field
					name="cpf"
					id="cpf"
					component="input"
					type="text"
					className="form-control"
					placeholder="Dgite seu CPF"
				/>
			</div>
			<div className="form-group">
				<label htmlFor="senha"><b>Senha</b></label>
				<Field
					name="senha"
					id="senha"
					component="input"
					type="password"
					className="form-control"
					placeholder="Digite sua senha"
				/>
			</div>
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