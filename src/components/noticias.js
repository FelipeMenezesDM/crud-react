import React, {Component} from 'react';

const noticias = [
	{
		"titulo": "Programa de Assistência ao Educando do Ensino Técnico da UFPA 2017",
		"descricao": "Devido à paralisação do dia 28 de abril, o período das inscrições parao Edital ICA/EMUFPA nº 006/2017 (Concessão de Auxílio Estudantil para os alunos dos Cursos Técnicos de Nível Médio), foi prorrogado até o dia 02 de maio, às 17h.",
		"data":"08/03/2017"
	},
	{
		"titulo": "Lançada a lista PRELIMINAR do PROCEUS 2017 - vaga na CEUS",
		"descricao": "Está disponível o edital do Programa de Assistência ao Educando do Ensino Técnico da UFPA 2017. O preenchimento do Questionárion Socioeconômico estará aberto a partir do dia 12/04/2017 às 14:00, com prazo até o dia 28/04/2017 às 17:00. A entrega de documentos será a partir do dia 12/04/2017 às 08:00, com prazo até o dia 28/04/2017 às 17:00. Leia o Edital, AQUI, para maiores informações.",
		"data":"26/04/2017"
	},
	{
		"titulo": "Lançada a lista FINAL do PET - Bolsista Conexão de Saberes 2017.",
		"descricao": "Devido à paralisação do dia 28 de abril, o período das inscrições parao Edital ICA/EMUFPA nº 006/2017 (Concessão de Auxílio Estudantil para os alunos dos Cursos Técnicos de Nível Médio), foi prorrogado até o dia 02 de maio, às 17h.",
		"data":"27/04/2017"
	},
	{
		"titulo": "Programa de Assistência ao Educando do Ensino Técnico da UFPA 2017",
		"descricao": "Nova chamada para os alunos, do Programa Permanência 2016 - Modalidades Permanência e Moradia, que se encontravam na condição de cadastro reserva.",
		"data":"06/03/2017"
	}
];

const Noticia = (props) => {
	return (
		<tr>
			<td>{props.noticia.titulo}</td>
			<td>{props.noticia.descricao}</td>
			<td>{props.noticia.data}</td>
		</tr>
	);
}

const UltimasNoticias = () => {
	const lista = noticias.map((item, index) =>
		<Noticia key={index} noticia={item} />
	);

	return <tbody>{lista}</tbody>;
};

export default UltimasNoticias;