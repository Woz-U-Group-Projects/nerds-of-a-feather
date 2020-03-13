import React from 'react';
import  ReactDOM  from 'react-dom';
import Cars from './screens/Inventory';
import Home from './screens/Home';
import CarTable from './screens/CarTable';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './index.css';
import "./bootstrap.min.css";
//import App from './App';






const App = () => (
    <Router>
      
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <a class="navbar-brand" href="/Home">Home</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation" wfd-invisible="true">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarColor01">
    <div className="nav-buttons">
                {/*<button className="btn1"><Link to="/" className="nav-buttons">Home</Link></button>*/}
                <button className="btn1"><Link to="/Login" className="nav-buttons">Login</Link></button>
                <button className="btn1"><Link to="/SignUp" className="nav-buttons">Sign Up</Link></button>
                <button className="btn1"><Link to="/Cars" className="nav-buttons">Inventory</Link></button>
                <button className="btn1"><Link to="/CarTable" className="nav-buttons">Submit A Car!</Link></button>
            </div>
      {/*<ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <li><Link to="/">Home</Link></li>
          
        </li>
        <li className="nav-item">
          <li><Link to="/Login">Login</Link></li>
        </li>
        <li class="nav-item">
          <li><Link to="/SignUp">Sign Up</Link></li>
        </li>
        <li class="nav-item">
          <li><Link to="/Cars">Inventory</Link></li>
          </li>
          <li class="nav-item">
            <li><Link to="/CarTable">Submit A Car!</Link></li>  
        </li>
</ul>*/}
      <hr/>
                {/*<Route exact path="/" component={Home}/>
                <Route path="/Login" component={Login}/>
                <Route path="/SignUp" component={SignUp}/> 
                <Route path="/Cars" component={Cars}/> 
<Route path="/CarTable" component={CarTable}/>*/}
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="text" placeholder="Search"/>
        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>


        <div className="bg">
    

            
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
    
   //})
