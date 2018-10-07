import {combineReducers} from 'redux';
import usuarios from "./usuarios";
import { reducer as forms } from 'redux-form';

const rootReducer = combineReducers({
	usuarios: usuarios,
	form: forms
});

export default rootReducer;