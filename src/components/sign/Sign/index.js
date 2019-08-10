import React from 'react'
import styles from './styles.scss'
import classnames from 'classnames'
import {Link} from'react-router-dom'
import Button from '../../common/Button'
const cx = classnames.bind(styles)


const Sign = ({}) => (
  <div className ={cx('sign page')}>
    <h1 className={cx('sign-text')}>회원가입</h1>
    <h2 className={cx('welcome')}>티키타카에 오신 것을 환영합니다.</h2>
  </div>
);

export default Sign
