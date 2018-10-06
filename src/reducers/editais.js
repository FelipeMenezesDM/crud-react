// Tipos de acoes
import * from "../actions/tipos";

export default ( state = {}, action ) => {
	switch( action.type ) {
		case CREATE_EDITAL:
			return { ...state, editais: action.listaEditais };
		case READ_EDITAIS:
			return { ...state, editais: state.editais.concat([ action.edital ]) };
		case UPDATE_EDITAL:
			return { ...state, editais: state.editais.map( ( eEdital ) => ( eEdital.id === action.edital.id ) ? action.edital : eEdital ) };
		case DELETE_EDITAL:
			return { ...state, editais: state.editais.filter( ( eEdital ) => eEdital.id !== action.edital.id ) };
		default:
			return state;
	}
}