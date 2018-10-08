import {combineReducers} from "redux";
import usuarios from "./usuarios";
import editais from "./editais";
import { reducer as forms } from "redux-form";

const rootReducer = combineReducers({
	usuarios: usuarios,
	editais: editais,
	form: forms
});

export default rootReducer;