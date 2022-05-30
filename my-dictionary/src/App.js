import React from "react"
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadWordFB, deleteWords } from "../src/redux/modules/words";
import Main from "./component/Main";
import Add from "./component/Add";
import Edit from "./component/Edit";

function App() {
  const dispatch = useDispatch();

  React.useEffect (() => {
    dispatch(loadWordFB());
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/Add" component={Add} />
        <Route exact path="/Edit" component={Edit} />
      </Switch>
    </div>
  );
}

export default App;
