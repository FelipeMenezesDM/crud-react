import React from 'react';
import { Field, reduxForm } from 'redux-form';

const CadastroAlunoForm = props => {
	return (
		<form>
			<div className="form-group">
				<label htmlFor="cpf"><b>CPF *</b></label>
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
				<label htmlFor="email"><b>E-mail *</b></label>
				<Field
					name="email"
					id="email"
					component="input"
					type="email"
					className="form-control"
					placeholder="Dgite seu e-mail"
				/>
			</div>
			<div className="form-group">
				<label htmlFor="confirmaEmail"><b>Confirmação de e-mail *</b></label>
				<Field
					name="confirmaEmail"
					id="confirmaEmail"
					component="input"
					type="email"
					className="form-control"
					placeholder="Dgite seu e-mail novamente"
				/>
			</div>
			<div className="form-group">
				<label htmlFor="senha"><b>Senha *</b></label>
				<Field
					name="senha"
					id="senha"
					component="input"
					type="password"
					className="form-control"
					placeholder="Dgite sua senha"
				/>
			</div>
			<div className="form-group">
				<label htmlFor="confirmaSenha"><b>Confirmação de senha *</b></label>
				<Field
					name="confirmaSenha"
					id="confirmaSenha"
					component="input"
					type="password"
					className="form-control"
					placeholder="Dgite sua senha novamente"
				/>
			</div>
			<button className="btn btn-secondary btn-block">Criar conta</button>
		</form>
	);
}

export default reduxForm({
	form: "cadastro-aluno"
})(CadastroAlunoForm);