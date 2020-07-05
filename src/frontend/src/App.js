import React from 'react';
import './App.css';
import Home from "./pages/Home/index"
import Test from "./pages/TestPage"
import NotFound from "./pages/NotFound"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="bgImage">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/test">
            <Test />
          </Route>
          {/* Default */}
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
     </div>

  );
}

export default App;
