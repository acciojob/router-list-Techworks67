import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './../styles/App.css';
import ItemList from "./ItemList";
import ItemDetail from "./ItemDetail";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={ItemList} />
          <Route path="/items/:id" component={ItemDetail} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
