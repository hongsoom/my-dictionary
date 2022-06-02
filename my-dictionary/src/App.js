import React from "react"
import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadWordFB } from "../src/redux/modules/words";
import Main from "./component/Main";
import Add from "./component/Add";
import Edit from "./component/Edit";

function App() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.words.list);

  React.useEffect (() => {
    dispatch(loadWordFB());
    return () => {
      console.log("Clean");
    }
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/Add" component={Add} />
        <Route path="/Edit/:index/:id" exact>
          <Edit data={data}/>
          </Route>
      </Switch>
    </div>
  );
}

export default App;
