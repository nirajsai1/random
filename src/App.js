import React from "react";
import {BrowserRouter as Router ,Routes,Route,Link} from 'react-router-dom';
import Two from "./Two";
import Three from "./Three";
import Four from './Four';
import Home from './Home';
import './App.css';
function App() {
    return(
    <Router>
      <nav>
        <ul className="hehe">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/two'>Two</Link></li>
        <li><Link to='/three'>Three</Link></li>
        <li><Link to='/four'>Four</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/two' element={<Two/>}></Route>
        <Route path='/three' element={<Three/>}></Route>
        <Route path='/four' element={<Four/>}></Route>
      </Routes>
    </Router>
    );
}

export default App;
