import React from 'react';
import {Route,Switch} from 'react-router-dom'
import MainPage from './pages/MainPage'
import LoginPage from './pages/LoginPage'
<<<<<<< HEAD
import ProjectList from './pages/ProjectList'

=======
import SignPage from './pages/SignPage'
import MyPagePage from './pages/MyPagePage'
>>>>>>> 40374959a59467251adfb6e2b1ccf3154f3413dd
const App =()=>{
  return(
    <div>
      <Switch>
        <Route exact path ='/' component={MainPage}></Route>
        <Route exact path='/login' component={LoginPage}/>
<<<<<<< HEAD
        <Route exact path ='/project/:page' component={ProjectList}/>
=======
        <Route exact path='/sign' component={SignPage}/>
        <Route exact path='/mypage' component={MyPagePage}/>
>>>>>>> 40374959a59467251adfb6e2b1ccf3154f3413dd
      </Switch>
    </div>
  )
}
export default App;
