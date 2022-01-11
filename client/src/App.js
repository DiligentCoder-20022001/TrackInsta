import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Signup from './components/Signup';
import Signin from './components/Signin';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Profile from './components/profile';
import Create from './components/create';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route exact path = "/" element = {<Home/>}></Route>
        </Routes>
        <Routes>
        <Route exact path = "/signUp" element = {<Signup/>}></Route>
        </Routes>
        <Routes>
        <Route exact path = "/signIn" element = {<Signin/>}></Route>
        </Routes>
        <Routes>
        <Route exact path = "/users/:id" element = {<Profile/>}></Route>
        </Routes>
        <Routes>
        <Route exact path = "/users/:id/create" element = {<Create/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
