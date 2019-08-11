import React from 'react'
import styles from './styles.scss'
import classnames from 'classnames'
import {Link} from'react-router-dom'
import Button from '../../common/Button'
const cx = classnames.bind(styles)


const Mypage = ({}) => (
  <div className ={cx('sign page')}>
    <h1 className={cx('sign-text')}>My Page</h1>
  </div>
);

export default Mypage
