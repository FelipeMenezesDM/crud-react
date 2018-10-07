import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Store from "./reducers/store";
import Routes from "./actions/routes";
import Cabecalho from "./components/cabecalho";
import Rodape from "./components/rodape";
import "./styles/style.css";

// Inicializar componentes
class App extends Component {
	render() {
		return (
			<div className="wrapper">
				<Cabecalho />
				<div className="page-content">
					<Routes />
				</div>
				<Rodape />
			</div>
		);
	}
}

ReactDOM.render(<Provider store={Store}><App /></Provider>, document.getElementById('root'));