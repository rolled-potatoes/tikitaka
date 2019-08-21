
import React from 'react'
import LoginComponent from 'components/login/Login'
import { withRouter } from 'react-router-dom'
import * as baseActions from 'store/modules/base.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  onKeyPressEnter=(e)=>{
    const {key} =e;
    if(key ==='Enter'){
      this.onLogin()
    }
  }
  /**
   * Login 페이지에서 email입력할 때 state에 저장
   */
  inputEmail = (e) => {
    const { BaseActions } = this.props;
    const { value } = e.target;
    BaseActions.changeEmail(value)
  }
  /**
   * Login 페이지에서 비밀번호 입력 할 때 state에 저장
   */
  inputPassword = (e) => {
    const { BaseActions } = this.props;
    const { value } = e.target;
    BaseActions.changePassword(value)
  }

  /**
   * 로그인 버튼 클릭 함수
   */
  onLogin = async () => {
    const { BaseActions, email, password, history } = this.props
    if (email === '' || password === '') {
      alert('이메일 또는 비밀번호를 입력하십시오')
    }
    else {
      try {
        await BaseActions.login(email, password)
        localStorage.logged = 'true'
        history.push('/')
      }
      catch (e) {
        console.log(e);
      }

    }
  }
 
  render() {
    const {
      inputEmail,
      inputPassword,
      goSignPage,
      onLogin,
      onKeyPressEnter,
      asdasd,
    } = this
    const {
      email,
      password,
      loginError,
      BaseActions
    } = this.props
    
    if(loginError){

      alert('잘못된 이메일 또는 비밀번호입니다.')
      BaseActions.loginError()
    }
    return (
        <LoginComponent
          email={email}
          password={password}
          onChangeEmail={inputEmail}
          onChangePassword={inputPassword}
          onClickSign={goSignPage}
          onClickLogin={onLogin}
          onKeyPressEnter={onKeyPressEnter}
        />
    );
  }
}

export default connect(
  (state) => ({
    logged: state.base.get('logged'),
    email: state.base.get('email'),
    password: state.base.get('password'),
    loginError: state.base.get('loginError'),
  }),
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch),
  })
)(withRouter(LoginContainer))
