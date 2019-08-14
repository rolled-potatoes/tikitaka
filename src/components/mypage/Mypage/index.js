import React from 'react'
import styles from './styles.scss'
import classnames from 'classnames'
import {Link} from'react-router-dom'
import Button from '../../common/Button'
const cx = classnames.bind(styles)
const proImg=require('imgs/프로필.png')


const Mypage = ({}) => (
  <div className={cx('mypage-page')}>
    <div className={cx('mypageTxt')}>
      My page
    </div>
    <div className={cx('mypage-tem')}>
    <div className={cx('aside')}>
      <div className={cx('proImage')}>
        <img src={proImg}/>
      </div>
      <div className={cx('nickname')}>
        Tasha
      </div>
    </div>
    <div className={cx('nav')}>
      포트폴리오
    </div>
 
    <div className={cx('section')}>section</div>
    </div>
  </div>

);

export default Mypage
