import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "../containers/login";
import CadastroAluno from "../containers/cadastro-aluno";

const Routes = () => (
	<Router>
		<div>
			<Route exact path="/" component={Login} />
			<Route path="/login" component={Login} />
			<Route path="/cadastro" component={CadastroAluno} />
		</div>
	</Router>
);

export default Routes;