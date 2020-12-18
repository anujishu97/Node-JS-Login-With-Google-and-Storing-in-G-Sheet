import logo from './logo.svg';
import './App.css';
import Login from './Component/Login';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
      <Route path="/" exact component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
