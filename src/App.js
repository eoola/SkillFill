import logo from './logo.svg';
import './App.css';
import firebase from './firebase.js';
import Home from './pages/Home/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register">
            <SignUp/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
