/**
 * 로그인 화면
 * 네이버 계정, local 계정 선택
 */
import React from 'react'
import styles from './styles.scss'
import classnames from 'classnames'
import {Link} from'react-router-dom'
import Button from '../../common/Button'
const cx = classnames.bind(styles)
const naverImg = require('imgs/naver.jpg')
const googleImg = require('imgs/google.jpg')
const kakaoImg = require('imgs/kakao.jpg')
const facebookImg = require('imgs/페이스북.png')

const Login = ({ }) => (
  <div className={cx('login-wrapper')}>
    <div className={cx('login-page')}>
      <h1 className={cx('login-text')}>로그인</h1>
      <div className={cx('bottom')}>
        <div className={cx('left')}>
          <div className={cx('local')}>
            <input placeholder="email" className={cx('input-id')} />
            <input placeholder='Password' className={cx('input-pw')} />
            <Button theme={'find'}>아이디 | 비밀번호 찾기</Button>
            <Button theme={'login colorbtn'}>로그인</Button>
            <Button theme={'login colorbtn'}>회원가입</Button>
          </div>
        </div>

      <div className={cx('right')}>
        <div className={cx('api-login')}>
          <div className={cx('api-naver')}>
            <Button theme={'apibtn'}>
              <img src ={naverImg}/>
            </Button>
          
          </div>
          <div className={cx('api-naver')}>
            <Button theme={'apibtn'}>
              <img src={googleImg}/>
            </Button>
            
          </div>
          <div className={cx('api-naver')}>
            <Button theme={'apibtn'}>
              <img src={kakaoImg}/>
            </Button> 
          </div>
          <div className={cx('api-naver')}>
            <Button theme={'apibtn'}>
              <img src={facebookImg}/>
            </Button>
          </div>

        </div>
      </div>
    </div>
  </div>
);

export default Login
