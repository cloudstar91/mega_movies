import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import Home from "./Components/Home";
import MovieDetail from "./Components/MovieDetail";

function MainApp() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path={`/movie/:id`} component={MovieDetail} />
      </div>
    </Router>
  );
}

ReactDOM.render(<MainApp />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
