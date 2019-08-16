import React from 'react';
import {Route,Switch} from 'react-router-dom'
import MainPage from './pages/MainPage'
import LoginPage from './pages/LoginPage'
import SignPage from './pages/SignPage'
import MyPagePage from './pages/MyPagePage'
import ProjectListPage from './pages/ProjectList'
import PostPage from './pages/PostPage'
import FreeLenserListPage from './pages/FreeLenserListPage'
import FreeLensetDetailPage from './pages/FreeLenserDetailPage'
const App =()=>{
  return(
    <div>
      <Switch>
        <Route exact path ='/' component={MainPage}/>
        <Route exact path='/login' component={LoginPage}/>
        <Route exact path='/sign' component={SignPage}/>
        <Route exact path='/mypage' component={MyPagePage}/>
        <Route exact path='/project/:page' component={ProjectListPage}/>
        <Route exact path='/post/:id' component={PostPage}/>
        <Route exact path ='/freeLenser/:page' component={FreeLenserListPage}/>
        <Route exact path ='/detail/:id' component={FreeLensetDetailPage}/>
      </Switch>
    </div>
  )
}
export default App;
