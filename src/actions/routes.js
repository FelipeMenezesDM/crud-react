import React from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import Login from "../containers/login";
import CadastroAluno from "../containers/cadastro-aluno";
import Dashboard from "../containers/dashboard";
import {checkAuth} from "./utils"

// Criar rotas para paginas publicas que nao serao mais exibidas apos login
const NoAuthRoute = ({ component: Component, ...attrs }) => {
	const sessao = checkAuth();
	
	return <Route {...attrs} render={(props) => {
		if( sessao ) {
			if( sessao.admin === 1 )
				return (<Redirect to="/admin" />);
			return (<Redirect to="/aluno" />);
		}

		return <Component {...props} />;
	}} />;
}

// Criar rotas para paginas privadas que nao devem ser exibidas antes do login
const AuthRoute = ({ component: Component, ...attrs }) => {
	const sessao = checkAuth();

	return <Route {...attrs} render={(props) => {
		if( !sessao || ( props.admin === "1" && sessao.admin !== 1 ) ) 
			return <Redirect to="/login" />;
		return <Component {...props} />;
	}} />;
}

const Routes = () => (
	<Router>
		<div>
			<NoAuthRoute path="/login" component={Login} />
			<NoAuthRoute path="/cadastro" component={CadastroAluno} />
			<AuthRoute path="/admin" admin="1" component={Dashboard} />
			<AuthRoute path="/aluno" component={Dashboard} />
		</div>
	</Router>
);

export default Routes;