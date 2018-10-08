import React from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import Login from "../containers/login";
import Logout from "../actions/logout";
import CadastroAluno from "../containers/cadastro-aluno";
import Dashboard from "../containers/dashboard";
import ListarEditais from "../containers/editais";
import CadastroEditais from "../containers/cadastro-editais";
import ListarAlunos from "../containers/listar-alunos";
import VisualizarEdital from "../containers/visualizar-edital";
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
		if( !sessao || ( attrs.admin === "1" && sessao.admin !== 1 ) ) 
			return <Redirect to="/login" />;
		return <Component {...props} />;
	}} />;
}

const Routes = () => (
	<Router>
		<div>
			<NoAuthRoute exact path="/" component={Login} />
			<NoAuthRoute path="/login" component={Login} />
			<AuthRoute path="/logout" component={Logout} />
			<NoAuthRoute path="/cadastro" component={CadastroAluno} />
			<AuthRoute exact path="/admin" admin="1" component={Dashboard} />
			<AuthRoute exact path="/aluno" component={Dashboard} />
			<AuthRoute excat path="/admin/editais" admin="1" component={ListarEditais} />
			<AuthRoute excat path="/admin/cadastro-editais" admin="1" component={CadastroEditais} />
			<AuthRoute excat path="/aluno/editais" component={ListarEditais} />
			<AuthRoute excat path="/admin/alunos" admin="1" component={ListarAlunos} />
			<AuthRoute excat path="/admin/visualizar-edital/:id" admin="1" component={VisualizarEdital} />
		</div>
	</Router>
);

export default Routes;