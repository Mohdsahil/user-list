import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Users from "./Pages/User/Users";
import Error from "./Pages/Error/Error"


const Routes = () => {
    return (
      <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Users}></Route>
            <Route path="/user" exact component={Users}></Route>
            <Route component={Error}></Route>  
        </Switch>
        </BrowserRouter>
    )
}  

export default Routes