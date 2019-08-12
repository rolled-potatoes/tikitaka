import React from 'react';
import {Route,Switch} from 'react-router-dom'
import MainPage from './pages/MainPage'
import LoginPage from './pages/LoginPage'
import SignPage from './pages/SignPage'
import MyPagePage from './pages/MyPagePage'
import Project from './pages/ProjectList'
const App =()=>{
  return(
    <div>
      <Switch>
        <Route exact path ='/' component={MainPage}></Route>
        <Route exact path='/login' component={LoginPage}/>
        <Route exact path='/sign' component={SignPage}/>
        <Route exact path='/mypage' component={MyPagePage}/>
        <Route exact path='/project/:page' component={Project}/>
      </Switch>
    </div>
  )
}
export default App;
