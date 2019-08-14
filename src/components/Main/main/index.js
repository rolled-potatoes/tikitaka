
import React from 'react'
import styles from './styles.scss'
import classnames from 'classnames'
import {Link} from'react-router-dom'
import Button from '../../common/Button'
const cx = classnames.bind(styles)
const adImg=require('imgs/광고.jpg')


  const Main = ({}) => (
    <container>
    <div className={cx('main-page')}>
      <section class="ad">
      <a className={cx('advertise')} href="http://meaningone.tistory.com">
          <img src={adImg} align="center"/></a></section>
      <section class="category">카테고리</section>
      <section class="follow">팔로우</section>
      <section class="x">x</section>
    </div>
    </container>
  );
  
  export default Main
  