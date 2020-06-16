import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom"
import { Navbar } from "./components/Navbar";
import {List} from "./pages/List";
import {Inform} from "./pages/Inform"
import "./index.css";



const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route component={List} path="/" exact />
          <Route component={Inform} path="/inform" />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
