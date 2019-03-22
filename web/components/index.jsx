import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link,HashRouter} from 'react-router-dom';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import Main from './partial/main.component.jsx';
import NavBar from './partial/navbar.component.jsx';

import test from '../store/index';
window.store = test.store;

class App extends Component{
    render(){
        return(
            <div>
                <NavBar/>                
                <Main/>
            </div>
        )
    }
}

ReactDOM.render(
    <Provider store={test.store}>
        <PersistGate loading={null} persistor={test.persistor}>
            <HashRouter>
                <Route component={App}></Route>
            </HashRouter>
        </PersistGate>
    </Provider>
    ,document.getElementById('root')
);