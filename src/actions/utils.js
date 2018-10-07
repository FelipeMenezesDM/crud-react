import React from "react";
import cookie from "react-cookies";

// Verificar login do Usuario
export const checkAuth = () => {
	const sessao = cookie.load( "sessaoUsuario" );

	if( sessao )
		return sessao;
	else
		return false;
}


// Formatar CPF para xxx.xxx.xxx-xx
export const formataCPF = ( cpf ) => {
	return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,"$1.$2.$3-$4");
}


// Obtem data atual
export const dataAtual = () => new Date().getTime();

// Gerador de IDs entre 10.000 e 20.000
export const gerarId = () => Math.floor( Math.random() * 10000 + 10000 );

// Renderizar campos de formularios
export const renderizarCampo = ({
	input,
	id,
	label,
	meta: { touched, error, warning},
	...attrs
}) => {
	return (
		<div className="form-group">
			<label htmlFor={id}><b>{label}</b></label>
			<input {...input} {...attrs} id={id} />
			{touched && ((error && <span style={{display:"block"}} className="invalid-feedback">{error}</span>) || (warning && <span>{warning}</span>))}
		</div>
	);
}