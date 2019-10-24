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
  MyList,
  PageNotFound,
  MyFollowerPage,
  AftersignPage,
} from './pages'
import TT from 'pages/tt.js'
import Base from './containers/common/Base'

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path ='/' component={MainPage}/>
        <Route exact path='/login' component={LoginPage}/>
        <Route exact path='/sign' component={SignPage}/>
        <Route exact path = '/sign/success/:name' component={AftersignPage}/>
        <Route exact path='/mypage' component={MyPagePage}/>
        <Route exact path='/mypage/mylist' component={MyList}/>
        <Route exact path ='/mypage/revise' component={RevisePage}/>
        <Route exact path ='/mypage/follow' component={MyFollowerPage}/>

        <Route exact path='/project/:page' component={ProjectListPage}/>
        <Route exact path='/project/post/:id' component={PostPage}/>
        <Route exact path ='/write/:id?' component={WritePostPage}/>

        <Route exact path ='/freeLenser' component={FreeLenserListPage}/>
        <Route exact path ='/freeLenser/detail/:id' component={FreeLenserDetailPage}/>
        
        <Route exact path ='/FindID' component={FindIdPage}/>
        
        {/* <Route exact path ='/exit' component={TT}/> */}
        <Route component = {PageNotFound}/>
      </Switch>
      <Base />
    </div>
  )
}
export default App;
