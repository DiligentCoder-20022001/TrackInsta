import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Notes from './components/Notes';
import Home from './components/Home'
import Signup from './components/Signup';
import {BrowserRouter as Router, Route} from 'react-router-dom'; 
function App() {
  return (
    <Router>
        <div className="App">
          
            <Route exact path = "/" component = {Home}></Route>
            <Route exact path = "/users/:id" component = {Signup}></Route>
          
        </div>
    </Router>
  );
}

export default App;
