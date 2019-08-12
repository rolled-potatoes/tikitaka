import React from 'react';
import {Route,Switch} from 'react-router-dom'
import MainPage from './pages/MainPage'
import LoginPage from './pages/LoginPage'
import ProjectList from './pages/ProjectList'

const App =()=>{
  return(
    <div>
      <Switch>
        <Route exact path ='/' component={MainPage}></Route>
        <Route exact path='/login' component={LoginPage}/>
        <Route exact path ='/project/:page' component={ProjectList}/>
      </Switch>
    </div>
  )
}
export default App;
