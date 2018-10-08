// Tipos de acoes
import * as TIPOS from "./types";
import * as Utils from "./utils";
import cookie from "react-cookies";


// Obter lista de editais
const listaEditais = () => {
	const editais = cookie.load( "editais" ) || [];

	return editais;
}


// Inclui novo edital a lista
const novoEdital = ( edital ) => {
	const id = Utils.gerarId();
	const dataCriacao = Utils.dataAtual();
	const dataAtualizacao = Utils.dataAtual();

	return { id, ...edital, dataCriacao, dataAtualizacao, inscritos: [] };
};

// Acoes CRUD para editais
// Adicionar novo edital
export const adicionarEdital = ( edital ) => ({
	type: TIPOS.CREATE_EDITAL, 
	edital: novoEdital( edital )
});

// Listar editais cadastrados
export const listarEditais = () => ({ type: TIPOS.READ_EDITAIS, editais: listaEditais() });

// Atualizar informacoes de edital
export const atualizarEdital = ( id, edital ) => ({
	type: TIPOS.UPDATE_EDITAL,
	edital: { id, dataAtualizacao: Utils.dataAtual(), ...edital },
});

// Remover edital da lista
export const removerEdital = ( id ) => ({ type: TIPOS.DELETE_EDITAL, id });