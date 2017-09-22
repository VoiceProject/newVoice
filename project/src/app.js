
require("./styles/app.scss")

///////////////////////
// var React = require("react")
// var ReactDOM = require('react-dom')

import RootComponent from './scripts/components/RootComponent'
import FooterComponent from './scripts/components/FooterComponent'


import {Router,Route,hashHistory,IndexRedirect,IndexRoute} from 'react-router'

import MainComponent from './scripts/components/MainComponent'
import ActivityComponent from './scripts/components/ActivityComponent'
import ConsultComponent from './scripts/components/ConsultComponent'
import HelpComponent from './scripts/components/HelpComponent'
import MineComponent from './scripts/components/MineComponent'
import SearchAddress from './scripts/components/SearchAddress'
import RegisterComponent from './scripts/components/MineComponent/RegisterComponent'
import LoginComponent from './scripts/components/MineComponent/LoginComponent'
// {/* <IndexRedirect to="/main"/> */}
ReactDOM.render(
    
    <Router history={hashHistory}>
        <Route path="/" component={RootComponent}>
            
            <IndexRoute component={MainComponent}/>
            <Route path="/main" component={MainComponent}></Route>
            <Route path="/activity" component={ActivityComponent}></Route>
            <Route path="/consult" component={ConsultComponent}></Route>
            <Route path="/help" component={HelpComponent}></Route>
            <Route path="/mine" component={MineComponent}></Route>
            <Route path="/searchaddress" component={SearchAddress}></Route>
            <Route path="/register" component={RegisterComponent}></Route>            
            <Route path="/login" component={LoginComponent}></Route>            
            <Route path="*" component={MainComponent}></Route>

        </Route>
        
    </Router>
    
    ,document.getElementById("app"))


//                            _ooOoo_
//                           o8888888o
//                           88" . "88
//                           (| -_- |)
//                            O\ = /O
//                        ____/`---'\____
//                      .   ' \\| |// `.
//                       / \\||| : |||// \
//                     / _||||| -:- |||||- \
//                       | | \\\ - /// | |
//                     | \_| ''\---/'' | |
//                      \ .-\__ `-` ___/-. /
//                   ___`. .' /--.--\ `. . __
//                ."" '< `.___\_<|>_/___.' >'"".
//               | | : `- \`.;`\ _ /`;.`/ - ` : | |
//                 \ \ `-. \_ __\ /__ _/ .-` / /
//         ======`-.____`-.___\_____/___.-`____.-'======
//                            `=---='
//
//         .............................................
//                  佛祖保佑             永无BUG
