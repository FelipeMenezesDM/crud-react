import React from "react";

// Obtem data atual
export const dataAtual = () => new Date().getTime();

// Gerador de IDs entre 10.000 e 20.000
export const gerarId = () => Math.floor( Math.random() * 10000 + 10000 );

// Renderizar campos de formularios
export const renderizarCampo = ({
	input,
	id,
	className,
	label,
	type,
	meta: { touched, error, warning},
	placeholder
}) => {
	return (
		<div className="form-group">
			<label htmlFor={id}><b>{label}</b></label>
			<input {...input} id={id} className={className} placeholder={placeholder} type={type} />
			{touched && ((error && <span style={{display:"block"}} className="invalid-feedback">{error}</span>) || (warning && <span>{warning}</span>))}
		</div>
	);
}