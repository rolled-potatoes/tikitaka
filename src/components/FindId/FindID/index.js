import React from 'react'
import styles from './styles.scss'
import classnames from 'classnames'
import Button from '../../common/Button'
const cx = classnames.bind(styles)

  const FindId = ({}) => (
    <div className={cx('find-page')}>
    <div className={cx('findtxt')}>
    <div>아이디를 잊으셨나요?</div>
    <div>빈칸에 해당하는 정보를 정확하게 기입해 주십시오.</div>
  </div>
  <div className={cx('findBox')}>
    <div className={cx('context')}>
    <tr className={cx('nametable')}> 
      <th className={cx('name')}>이름</th>
      <td className={cx('inname')}><input type="text" name="name"/></td>
    </tr>
    <tr className={cx('tablephone')}> 
      <th className={cx('phonenumber')}>휴대폰 번호</th>
      <td className={cx('inphone')}><input type="text" name="phonenumber"></input></td>
   </tr>
   <div className={cx('findId')}><button id="findId">아이디 찾기</button></div>
  </div>
  </div>
  <div className={cx('findtxt')}>
    <div>비밀번호를 잊으셨나요?</div>
    <div>빈칸에 해당하는 정보를 정확하게 기입해 주십시오.</div>
  </div>
  <div className={cx('findBox')}>
    <div className={cx('context')}>
    <tr className={cx('IDtlabe')}> 
      <th className={cx('userId')}>아이디</th>
      <td className={cx('inID')}><input type="text" name="userId"></input></td>
    </tr>
    <tr className={cx('tablephone')}> 
      <th className={cx('phonenumber')}>휴대폰 번호</th>
      <td className={cx('inphone')}><input type="text" name="phonenumber"></input></td>
   </tr>
   <div className={cx('findId')}><button id="find">비밀번호 찾기</button></div>
   </div>
  </div>
 </div>

  );
  
  export default FindId
  