
import React from 'react'
import LoginComponent from 'components/login/Login'
import {withRouter} from 'react-router-dom'
import * as baseActions from 'store/modules/base.js'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email : '',
      password :''
    };
  }
  /**
   * Login 페이지에서 email입력할 때 state에 저장
   */
  inputEmail=(e)=>{
    const email = e.target.value;
    this.setState({
      email: email
    })
  }
  /**
   * Login 페이지에서 비밀번호 입력 할 때 state에 저장
   */
  inputPassword=(e)=>{
    const password = e.target.value;
    this.setState({
      password : password
    })
  }

  /**
   * 회원가입 버튼클릭 했을 때 '/sign' 페이지로 이동 함수
   */
  goSignPage=()=>{
    const {history} = this.props;
    history.push('/sign')
  }

  /**
   * 로그인 버튼 클릭 함수
   */
  onLogin=()=>{
    const { BaseActions} =this.props
    const {email,password} = this.state;
    BaseActions.login({email: email,password : password})
  }

  render() {
    const {
      inputEmail,
      inputPassword,
      goSignPage,
      onLogin,
    } = this
    const {
      email,
      password
    } = this.state
    return (
      <LoginComponent 
        email = {email}
        password={password}
        onChangeEmail = {inputEmail}
        onChangePassword ={ inputPassword}
        onClickSign = {goSignPage}
        onClickLogin = {onLogin}
      />
    );
  }
}

export default connect(
  (state)=>({
    logged : state.base.get('logged'),
  }),
  (dispatch) =>({
    BaseActions : bindActionCreators(baseActions,dispatch),
  })
)(withRouter(LoginContainer))
