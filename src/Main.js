import React from "react";
import First from "../components/First";
import { Route, Switch } from "react-router-dom";

export default class Main extends React.Component {
  render() {
    return (
      <div className="App">
        <h4>Main</h4>
        <Switch>
          <Route path="first" component={First} />
        </Switch>
      </div>
    );
  }
}
