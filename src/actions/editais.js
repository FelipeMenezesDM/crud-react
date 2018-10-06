// Tipos de acoes
import * as TIPOS from "./types";
import * as Utils from "./utils";

// Inclui novo edital a lista
const novoEdital = ( edital ) => {
	const id = Utils.gerarId();
	const dataCriacao = Utils.dataAtual();
	const dataAtualizacao = Utils.dataAtual();

	return { ...edital, id, dataCriacao, dataAtualizacao };
};

// Lista de editais
const listaEditais = [];

// Acoes CRUD para editais
// Adicionar novo edital
export const adicionarEdital = ( edital ) => ({
	type:	TIPOS.CREATE_EDITAL, 
	edital:	novoEdital( edital )
});

// Listar editais cadastrados
export const listarEditais = () => ({ type: TIPOS.READ_EDITAIS, listaEditais });

// Atualizar informacoes de edital
export const atualizarEdital = ( idEdital, edital ) => ({
	type: TIPOS.UPDATE_EDITAL,
	edital: { idEdital, dataAtualizacao: Utils.dataAtual(), ...edital }
});

// Remover edital da lista
export const removerEdital = ( idEdital ) => ({ type: TIPOS.DELETE_EDITAL, idEdital });