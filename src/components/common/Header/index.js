
import React from 'react'
import styles from './styles.scss'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import Button from '../Button'
const logoImage = require('imgs/logo.png')
const cx = classNames.bind(styles)
const imgSrc = "https://scontent.ficn3-1.fna.fbcdn.net/v/t1.0-1/p200x200/42135641_1894679573979032_7136233916314157056_n.jpg?_nc_cat=108&_nc_oc=AQlwd9nh7sPfN1VZJ75panQPdTySUMTdtP51y1RFleHYHAFS92s2yZlM4qDzHG5I8Wk&_nc_ht=scontent.ficn3-1.fna&oh=4a6b9e8645545cc0b5190f5e1c9b3a3a&oe=5DD275CF"

const Header = ({ logged,onClickLogout,timeline }) => {
  return (
    <header className={cx('header')}>
      <div className={cx('header-content')}>
        <div className={cx('brand')}>
          <Link to="/">
            <img src={logoImage} alt='logo' className={cx('logo-img')} />
            &ensp;티키타카
          </Link>
        </div>
        <div className={cx('menu')}>
          <Button to="/project/1" >프로젝트</Button>
          <Button to="/freeLenser" >프리랜서</Button>
          <Button to="/write" >프로젝트 등록</Button>
          {logged && <Button to="/mypage" >마이페이지</Button>}
        </div>
        <div className={cx('client')}>
          {
            !logged &&
            <div>
              <Button to="/login" >로그인</Button>
              <Button to="/sign" >회원가입</Button>
            </div>
          }
          {
            logged &&
            <div className={cx("client-login-true")}>
              <div className={cx('client-profile')}><img src={imgSrc} /></div>
              <div className={cx('client-nickName')}>nickName</div>
              <Button onClick={onClickLogout} to ='/' theme ={'logout'}>로그아웃</Button>
              
            </div>
          }
        </div>

      </div>
    </header>

  )
}

export default Header