import { FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import "./App.css";

const App: FC = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Layout} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
