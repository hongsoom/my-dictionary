import {db} from "./firebase";
import React from "react"
import { Route, Switch } from "react-router-dom";
import Main from "./component/Main";
import Add from "./component/Add";

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/add" componet={Add} />
      </Switch>
    </div>
  );
}

export default App;
