import {db} from "./firebase";
import React from "react"

function App() {

  React.useEffect(() => {
    console.log(db);
  }, []);


  return (
    <div className="App">

    </div>
  );
}

export default App;
