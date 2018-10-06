import {combineReducers} from 'redux';
import editais from "./editais";
import { reducer as forms } from 'redux-form';

const rootReducer = combineReducers({
	editais: editais,
	form: forms
});

export default rootReducer;