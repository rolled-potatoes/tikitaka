
import React from 'react'
import styles from './styles.scss'
import classNames from 'classnames'
import {Link} from 'react-router-dom'
import Button from '../Button'
const logoImage = require('imgs/logo.png')
const cx = classNames.bind(styles)
const Header = ({ }) => {
  return(
    <header className={cx('header')}>
      <div className={cx('header-content')}>
        <div className={cx('brand')}>
          <Link to="/">
            <img src = {logoImage} alt='logo' className={cx('logo-img')}/>
            &ensp;티키타카
          </Link>
        </div>
        <div className={cx('menu')}>
          <Button to="/project/1" disabled>프로젝트</Button>
          <Button to="/freeLenser/1" disabled>프리랜서</Button>
          <Button to="/" >프로젝트 등록</Button>
          <Button to="/mypage" disabled>My Page</Button>
        </div>
        <div className={cx('client')}>
          <Button to="/login" disabled>로그인</Button>
          <Button to="/sign" disabled>회원가입</Button>
        </div>
      </div>
    </header>

  )
}

export default Header