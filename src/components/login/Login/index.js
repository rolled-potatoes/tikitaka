/**
 * 로그인 화면
 * 네이버 계정, local 계정 선택
 */
import React from 'react'
import styles from './styles.scss'
import classnames from 'classnames'
import Button from '../../common/Button'
const cx = classnames.bind(styles)
const naverImg = require('imgs/naver.jpg')
const googleImg = require('imgs/google.jpg')
const kakaoImg = require('imgs/kakao.jpg')
const facebookImg = require('imgs/페이스북.png')

const Login = ({onChangeEmail, onChangePassword, onClickLogin,email,password,onKeyPressEnter,onNaver,onKakao}) => (
  <div className={cx('login-wrapper')}>
    <div className={cx('login-page')}>
      <h1 className={cx('login-text')}>로그인</h1>
      <div className={cx('bottom')}>
        <div className={cx('left')}>
          <div className={cx('local')}>
            <input 
              onKeyPress={onKeyPressEnter}
              placeholder="email" 
              className={cx('input-id')}
              onChange={onChangeEmail} 
              value={email}
            />
            <input 
              onKeyPress={onKeyPressEnter}
              placeholder='Password' 
              className={cx('input-pw')} 
              type = 'password'
              onChange={onChangePassword} 
              value={password}
            />
            <Button to="/login/password" theme={'find'}>비밀번호 찾기</Button>
            <Button theme={'login colorbtn'}  onClick={onClickLogin}>로그인</Button>
            <Button to="/sign" theme={'login colorbtn'}>회원가입</Button>
          </div>
        </div>

        <div className={cx('right')}>
          <div className={cx('api-login')}>
            <div className={cx('api-naver')}>
              <Button theme={'apibtn'}>
                <img src={naverImg} onClick={onNaver}/>
              </Button>
            </div>
            
            <div className={cx('api-naver')}>
              <Button theme={'apibtn'}>
                <img src={kakaoImg}  onClick={onKakao}/>
              </Button>
            </div>
            

          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Login
