import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {HashRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import ClickCounter from './components/click-counter';
import ToDoList from './components/todo-list';
import Navigation from  './components/navigation';
import Footer from  './components/footer';
import {Provider} from 'react-redux';
import reduce from "./reducer/index";
import { createStore } from 'redux';


let store = createStore(reduce);

ReactDOM.render(
	<Provider store={store}>
  <HashRouter>
  	<div>
  		<Navigation/>
  		<Route exact={true} path="/" component={App}/>
  		<Route path="/click-counter" component={ClickCounter}/>
  		<Route path="/todo-list" component={ToDoList}/>
  		<Footer creator="Fabian Andiel"/>
  	</div>
  </HashRouter>
  </Provider>,
  document.getElementById('root')
);

