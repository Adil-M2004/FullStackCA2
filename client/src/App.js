import React, {Component} from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"

import "bootstrap/dist/css/bootstrap.css"
import "./css/App.css"

import Home from "./components/Home"

    
export default class App extends Component 
{
    render() 
    {
        return (
            <BrowserRouter>
                <Switch>                 
                    <Route exact path="/" component={Home} />             
                </Switch>
            </BrowserRouter>

            // <BrowserRouter>
            //     <Switch>                 
            //         <Route exact path="/" component={DisplayAllCars} />
            //         <Route exact path="/AddCar" component={AddCar} />
            //         <Route exact path="/EditCar/:id" component={EditCar} />
            //         <Route exact path="/DeleteCar/:id" component={DeleteCar} />
            //         <Route exact path="/DisplayAllCars" component={DisplayAllCars}/> 
            //         <Route path="*" component={DisplayAllCars}/>                            
            //     </Switch>
            // </BrowserRouter>
        )
    }
}