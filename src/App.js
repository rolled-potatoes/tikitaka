import React from 'react';
import { Route, Switch } from 'react-router-dom'
import {
  MainPage,
  LoginPage,
  SignPage,
  MyPagePage,
  ProjectListPage,
  PostPage,
  FreeLenserListPage,
  FreeLenserDetailPage,
  WritePostPage,
  FindIdPage,
  RevisePage,
} from './pages'

import Base from './containers/common/Base'
const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path ='/' component={MainPage}/>
        <Route exact path='/login' component={LoginPage}/>
        <Route exact path='/sign' component={SignPage}/>
        <Route exact path='/mypage' component={MyPagePage}/>
        <Route exact path='/project/:page' component={ProjectListPage}/>
        <Route exact path='/post/:id' component={PostPage}/>
        <Route exact path ='/freeLenser' component={FreeLenserListPage}/>
        <Route exact path ='/detail/:id' component={FreeLenserDetailPage}/>
        <Route exact path ='/write' component={WritePostPage}/>
        <Route exact path ='/FindID' component={FindIdPage}/>
        <Route exact path ='/Revise' component={RevisePage}/>
      </Switch>
      <Base />
    </div>
  )
}
export default App;
