import React from 'react'
import styles from './styles.scss'
import classnames from 'classnames'
import Button from '../Button'

const cx = classnames.bind(styles)

const Footer = ({ }) => (
  <footer className={cx('footer')}>
    <div className={cx('footer-button')}>
      <Button>이용약관</Button>
      <Button>개인정보취급방침</Button>
      <Button>고객센터</Button>
    </div>
    <div className={cx('notice')}>
      <p>공지사항</p>
      <ul>
        <li>공지 1</li>
        <li>공지 2</li>
        <li>공지 3</li>
      </ul>
    </div>
    <div className={cx('aboutus')}>
      
      <p>(주) 프리모아</p>
      <p>대표이사 : 한경원 | CFO : 주지웅 | 사업자등록번호 : 113-86-89926 | 주소 : 서울시 금천구 벚꽃로 298, 911-912호(가산동, 대륭포스트타워6차)</p>
      <p>고객센터 : 평일(공휴일 휴무) 10:00 ~ 19:00 | 02-6380-7521 | help@freemoa.net</p>
      <p>Copyright 2018 Freemoa Inc., All rights reserved.</p>
      </div>
    
  </footer>
);

export default Footer
