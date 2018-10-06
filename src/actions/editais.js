// Tipos de acoes
import * from "./tipos";

// Obtem data atual
const dataAtual = () => new Date().getTime();

// Gerador de IDs entre 10.000 e 20.000
const gerarIds = () => Math.floor( Math.random() * 10000 + 10000 );

// Inclui novo edital a lista
const novoEdital = ( edital ) => {
	const id = gerarIds();
	const dataCriacao = dataAtual();
	const dataAtualizacao = dataAtual();

	return { ...edital, id, dataCriacao, dataAtualizacao };
};

// Lista de editais
const listaEditais = [];

// Acoes CRUD para editais
// Adicionar novo edital
export const adicionarEdital = ( edital ) => ({
	type:	CREATE_EDITAL, 
	edital:	novoEdital( edital )
});

// Listar editais cadastrados
export const listarEditais = () => ({ type: READ_EDITAIS, listaEditais });

// Atualizar informacoes de edital
export const atualizarEdital = ( idEdital, edital ) => ({
	type: UPDATE_EDITAL,
	edital: { idEdital, dataAtualizacao: dataAtual(), ...edital }
});

// Remover edital da lista
export const removerEdital = ( idEdital ) => ({ type: DELETE_EDITAL, idEdital });