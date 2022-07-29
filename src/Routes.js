import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import DogList from "./components/DogList";
import GetDogDetails from "./components/GetDogDetails";

const Routes = ({ dogs }) => {
    return (
        <Switch>
            <Route exact path="/dogs">
                <DogList dogs={dogs} />
            </Route>
            <Route exact path="/dogs/:name">
                <GetDogDetails dogs={dogs} />
            </Route>
            <Redirect to="/dogs" />
        </Switch>
    )
}

export default Routes;