// Tipos de acoes
import * as TIPOS from "./types";
import * as Utils from "./utils";

// Lista de usuarios do sistema
export const listaUsuarios = [
	{
		id: 9999,
		nome: "Administrador",
		cpf: "44967350089",
		ocupacao: "Administrador",
		senha: "admin",
		email: "admin@ufpa.br",
		admin: 0,
		dataCadastro: Utils.dataAtual(),
		dataAtualizacao: Utils.dataAtual()
	}
];


// Inclui novo usuario a lista
const novoUsuario = ( usuario ) => {
	const id = Utils.gerarId();
	const dataCriacao = Utils.dataAtual();
	const dataAtualizacao = Utils.dataAtual();

	return { id, ...usuario, dataCriacao, dataAtualizacao };
};

// Acoes CRUD para usuarios
// Adicionar novo usuario
export const adicionarUsuario = ( usuario ) => ({
	type: TIPOS.CREATE_USUARIO, 
	usuario: novoUsuario( usuario )
});

// Listar usuarios cadastrados
export const listarUsuarios = () => ({ type: TIPOS.READ_USUARIOS, listaUsuarios });

// Atualizar informacoes de usuario
export const atualizarUsuario = ( id, usuario ) => ({
	type: TIPOS.UPDATE_USUARIO,
	usuario: { id, dataAtualizacao: Utils.dataAtual(), ...usuario },
});

// Remover usuario da lista
export const removerUsuario = ( id ) => ({ type: TIPOS.DELETE_USUARIO, id });