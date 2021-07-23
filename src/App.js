import React from "react";
import './App.css';
import Header from "./components/Header";
import Login  from "./components/Login";
import './components/Login.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoute = ({component, ...rest})=>{
  const {isAuthenticated } = useAuth0();

  return (
    <Route {...rest} render={() =>(
      isAuthenticated ? component: (<Route component={Login} />)
    )} />
  )
}
function App() {
  return (
    <div className="App">
    

    <Router>
    <Switch>
          <Route path="/login" > 
              <Login />
          </Route>
          
          <PrivateRoute exact path="/" 
            component= {<><Header /><Dashboard/></>}/>
        
      </Switch>
    
    </Router>
    
    </div>

    
  );
}

export default App;
