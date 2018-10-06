import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import Store from "./reducers/store";
import Routes from './actions/routes';
import './styles/style.css';

class App extends Component {
  render() {
    return (
    	<Routes />
    );
  }
}

ReactDOM.render(
	<Provider store={Store}>
		<App />
	</Provider>
, document.getElementById('root'));