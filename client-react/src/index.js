import React from 'react';
import  ReactDOM  from 'react-dom';
import Cars from './screens/Inventory';
import Home from './screens/Home';
import CarTable from './screens/CarTable';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './index.css';
//import App from './App';


const App = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Login">Login</Link></li>
                <li><Link to="/SignUp">Sign Up</Link></li>
                <li><Link to="/Cars">Inventory</Link></li>
                <li><Link to="/CarTable">Submit A Car!</Link></li>
            </ul>
            <hr/>
                <Route exact path="/" component={Home}/>
                <Route path="/Login" component={Login}/>
                <Route path="/SignUp" component={SignUp}/> 
                <Route path="/Cars" component={Cars}/> 
                <Route path="/CarTable" component={CarTable}/> 
        </div>        
    </Router>
    

);
ReactDOM.render(<App />, document.getElementById('root'));
// window.addEventListener('popstate', () => {
    
//   })