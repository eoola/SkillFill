import logo from './logo.svg';
import './App.css';
import firebase from './firebase.js';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Home></Home>
      
    </div>
  );
}

export default App;
