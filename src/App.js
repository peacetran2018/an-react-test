import './App.css';
import Header from './components/header'
import Main from './components/main'
import blankpage from './components/blankpage'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/"
          render={() => {
            return (
              <Redirect to="/developer/documentation" />
            )
          }}
        />
        <Route path="/developer/documentation" exact component={Main} />
        <Route path="/developer/en/api/dummy1/:type" component={blankpage} />
      </Switch>
    </Router>
  );
}

export default App;