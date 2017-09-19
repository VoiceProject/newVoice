
require("./styles/app.scss")

///////////////////////
// var React = require("react")
// var ReactDOM = require('react-dom')

import RootComponent from './scripts/components/RootComponent'

import {Router,Route,hashHistory,IndexRedirect,IndexRoute} from 'react-router'

import MainComponent from './scripts/components/MainComponent'

// {/* <IndexRedirect to="/main"/> */}
ReactDOM.render(
    
    <Router history={hashHistory}>
        <Route path="/" component={RootComponent}>
            
            <IndexRoute component={MainComponent}/>
            <Route path="main" component={MainComponent}></Route>

            <Route path="*" component={MainComponent}></Route>

        </Route>
    </Router>
    
    ,document.getElementById("app"))