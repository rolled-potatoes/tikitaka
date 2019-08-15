
import React from 'react'
import styles from './styles.scss'
import classnames from 'classnames'
import {Link} from'react-router-dom'
import Button from '../../common/Button'
const cx = classnames.bind(styles)


const Sign = ({}) => (
  <div className ={cx('sign-page')}>
    <h1 className={cx('sign-text')}>회원가입</h1>
    <h2 className={cx('welcome')}>티키타카에 오신 것을 환영합니다.</h2>
    <div className={cx('table')}>
      <tr className={cx('IDtlabe')}> 
        <th className={cx('userId')}>아이디</th>
       <td className={cx('inID')}><input type="text" name="userId"></input></td>
      </tr>
      <tr className={cx('passwordtable')}> 
        <th className={cx('password')}>비밀번호</th>
       <td className={cx('inpassword')}><input type="text" name="password"></input></td>
      </tr>
      <tr className={cx('passwordtable2')}> 
       <th className={cx('pasword2')}>비밀번호 확인         </th>
       <td className={cx('inpassword2')}><input type="text" name="password2" ></input></td>
      </tr>
      <tr className={cx('nametable')}> 
       <th className={cx('name')}>이름</th>
        <td className={cx('inname')}><input type="text" name="name"/></td>
      </tr>
      <tr className={cx('nicknametable')}> 
       <th className={cx('nickname')} float="left">닉네임</th>
       <td className={cx('inNickname')}><input type="text" name="nickname"></input>
      </td>
      <th className={cx('checkNickname')}><button id="checkNickname">중복확인</button></th>
      </tr>
      <tr className={cx('tablephone')}> 
       <th className={cx('phonenumber')}>휴대폰 번호</th>
       <td className={cx('inphone')}><input type="text" name="phonenumber"></input></td>
      </tr>
    </div>
    <h2 className={cx('info')}>
    <input type="radio" name="info" checked></input>
      <Button theme={'term'}>이용약관</Button> 및 <Button them={'info'}>개인정보취급방침</Button>에 동의합니다.
    </h2>
 <h2 className={cx('sign-button')}>
 <Button to="/">회원가입</Button>
 </h2>
  
  </div>
);

export default Sign
