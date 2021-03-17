import { useEffect } from 'react';
import './App.css';
import SignIn from './Component/signIn';
import SignUp from './Component/signUp';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Dashboard from './Container/DashBoard/dashboard'

function App() {
  useEffect(() => {
    
  },[])
  return (
    <div className="App">
        <Router>
          <Switch>
          <Route path='/' exact component={SignIn}/>
          <Route path='/signUp' component={SignUp}/>
          
          <Route path='/dashboard/:type' component={Dashboard} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
