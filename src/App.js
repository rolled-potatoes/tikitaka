import React from 'react';
import {Route,Switch} from 'react-router-dom'
import MainPage from './pages/MainPage'
import LoginPage from './pages/LoginPage'
const App =()=>{
  return(
    <div>
      <Switch>
        <Route exact path ='/' component={MainPage}></Route>
        <Route exact path='/login' component={LoginPage}/>
      </Switch>
    </div>
  )
}
export default App;
