// Tipos de acoes
import * as TIPOS from "../actions/types";

export default ( state = {}, action ) => {
	switch( action.type ) {
		case TIPOS.CREATE_USUARIO:
			return { ...state, usuarios: action.listaEditais };
		case TIPOS.READ_USUARIOS:
			return { ...state, usuarios: state.usuarios.concat([ action.usuario ]) };
		case TIPOS.UPDATE_USUARIO:
			return { ...state, usuarios: state.usuarios.map( ( usuario ) => ( usuario.id === action.usuario.id ) ? action.usuario : usuario ) };
		case TIPOS.DELETE_USUARIO:
			return { ...state, usuarios: state.usuarios.filter( ( usuario ) => usuario.id !== action.usuario.id ) };
		default:
			return state;
	}
}