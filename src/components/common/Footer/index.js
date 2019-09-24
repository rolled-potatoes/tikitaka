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
    
    <div className={cx('aboutus')}>
      <div>
        <div>(주) 티키타카</div>
        <div>대표 : 아무개 | 사업자등록번호 : test-number | 주소 : 경상북도 경산시 대학로 280 </div>
        <div>고객센터 : 평일(공휴일 휴무) 10:00 ~ 19:00 | 010-xxxx-xxxx | test@naver.com</div>
        <div>Copyright 2018 Freemoa Inc., All rights reserved.</div>
      </div>
    </div>
    
  </footer>
);

export default Footer
