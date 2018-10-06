// Tipos de acoes
import * as TIPOS from "../actions/types";

export default ( state = {}, action ) => {
	switch( action.type ) {
		case TIPOS.CREATE_EDITAL:
			return { ...state, editais: action.listaEditais };
		case TIPOS.READ_EDITAIS:
			return { ...state, editais: state.editais.concat([ action.edital ]) };
		case TIPOS.UPDATE_EDITAL:
			return { ...state, editais: state.editais.map( ( eEdital ) => ( eEdital.id === action.edital.id ) ? action.edital : eEdital ) };
		case TIPOS.DELETE_EDITAL:
			return { ...state, editais: state.editais.filter( ( eEdital ) => eEdital.id !== action.edital.id ) };
		default:
			return state;
	}
}