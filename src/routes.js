import React, {Component} from "react";

import Component1 from "./functional/component1";
import Component2 from "./functional/component2";
import Component3 from "./functional/component3";

import Container1 from "./container/container1";
import Header from "./container/header";
import history from "./utils/history";

import { BrowserRouter, Route, Routes } from "react-router-dom";

class AppRoutes extends Component{
    render(){
        return(
            <div>
                <Container1/>
                <BrowserRouter history={history}>
                    <div>
                        <Header/>
                        <Routes>
                            <Route exact path ='/' component={Container1}/>
                            <Route path='/component1' component={Component1}/>
                            <Route path='/component2' component={Component2}/>
                            <Route path='/component3' component={Component3}/>
                        </Routes>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}
export default AppRoutes;