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
      <tr className={cx('purposetable')}>
      <th className={cx('purpose')}>이용목적</th>
      <td className={cx('purposebox')}><select name="purpose" size="1">
        <option name=''>선택하세요</option>
        <option name='client'>클라이언트</option>
        <option name='free'>프리랜서</option>
        </select></td>
       </tr>
      <tr className={cx('IDtlabe')}> 
        <th className={cx('ID')}>아이디</th>
       <td className={cx('inID')}><input type="text" name="mbID"></input></td>
      </tr>
      <tr className={cx('passwordtable')}> 
        <th className={cx('password')}>비밀번호</th>
       <td className={cx('inpassword')}><input type="text" name="mbpassword"></input></td>
      </tr>
      <tr className={cx('passwordtable2')}> 
       <th className={cx('pasword2')}>비밀번호 확인         </th>
       <td className={cx('inpassword2')}><input type="text" name="mbpassword2" ></input></td>
      </tr>
      <tr className={cx('nametable')}> 
       <th className={cx('name')}>이름</th>
        <td className={cx('inname')}><input type="text" name="mbname"></input></td>
      </tr>
      <tr className={cx('tablephone')}> 
       <th className={cx('phone')}>휴대폰 번호</th>
       <td className={cx('inphone')}><input type="text" name="mbphone"></input></td>
      </tr>
      <tr className={cx('mailphone')}> 
       <th className={cx('mail')}>이메일</th>
       <td className={cx('inmail')}><input type="text" name="mbmail"></input></td>
      </tr>
      <tr className={cx('tablephone')}> 
        <th className={cx('phone')}>휴대폰 번호</th>
       <td className={cx('inphone')}><input type="text" name="mbphone"></input></td>
      </tr>
      <tr className={cx('projecttable')}>
        <th className={cx('purpose')}>관심 프로젝트</th>
         <td className={cx('projectbox')}>
          <select name="project" size="1">
           <option name=''>선택하세요</option>
           <option name='1'>앱/웹 디자인</option>
           <option name='2'>웹사이트/앱 개발</option>
           <option name='3'>소프트웨어 개발</option>
           <option name='4'>서비스 및 시스템 기획</option>
           <option name='5'>모션/영상 그래픽</option>
           <option name='6'>ERP 및 시스템 개발</option>
           <option name='7'>UNITY/GAME 개발</option>
           <option name='8'>사업제안서 및 PPT</option>
          </select>
         </td>
       </tr>
    </div>
    <h2 className={cx('info')}>
    <input type="radio" name="info" checked></input>
      <Button theme={'term'}>이용약관</Button> 및 <Button them={'pinfo'}>개인정보취급방침</Button>에 동의합니다.
    </h2>
  
  </div>
);

export default Sign
