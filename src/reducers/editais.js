// Tipos de acoes
import * as TIPOS from "../actions/types";

export default ( state = {}, action ) => {
	switch( action.type ) {
		case TIPOS.CREATE_EDITAL :
			return { ...state, editais: state.editais.concat([ action.edital ]) };
		case TIPOS.READ_EDITAIS :
			return { ...state, editais: action.editais };
		case TIPOS.UPDATE_EDITAL :
			return { ...state, editais: state.editais.map( ( edital ) => ( edital.id === action.edital.id ) ? action.edital : edital ) };
		case TIPOS.DELETE_EDITAL :
			return { ...state, editais: state.editais.filter( ( edital ) => edital.id !== action.edital.id ) };
		default:
			return state;
	}
}