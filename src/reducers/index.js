import {combineReducers} from 'redux';
import editais from "./editais";

const rootReducer = combineReducers({
	editais: editais;
});

export default rootReducer;