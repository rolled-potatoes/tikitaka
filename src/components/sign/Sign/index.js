/**
 * 회원가입 페이지
 * ! 아이디, 비밀번호, 비밀번호 확인, 이름, 닉네임 + 닉네임 중복 확인, 소속
 */
import React from 'react'
import styles from './styles.scss'
import classnames from 'classnames'
import { Link } from 'react-router-dom'
import Button from '../../common/Button'
const cx = classnames.bind(styles)


const Sign = ({ 
  email,
  password,
  passwordR,
  name,
  nickname,
  organization,
  onCheck,
  agree,
  phone,
  duplicate_check, 
  onChange,
  onSingUp,
}) => (
    <div className={cx('signup-wrapper')}>
      <div className={cx('signup-top')}>
        <h1 className={cx('signup-title')}>회원가입</h1>
        <h2 className={cx('signup-text')}>티키타카에 오신 것을 환영합니다.</h2>
      </div>
      <div className={cx('signup-bottom')}>

        <div className={cx('bottom-email', 'bottoms')}>
          <h3>
            <label>이메일</label>
          </h3>
          <span>
            <input value={email} id ="email" onChange={onChange}/>
          </span>
        </div>

        <div className={cx('bottom-pw', 'bottoms')}>
          <h3>
            <label>비밀번호</label>
          </h3>
          <span>
            <input type ='password' value={password}  id ="password" onChange={onChange}/>
          </span>
          <h3>
            <label>비밀번호 확인</label>
          </h3>
          <span>
            <input type ='password' value={passwordR}  id ="passwordR" onChange={onChange}/>
          </span>
        </div>

        <div className={cx('bottom-name', 'bottoms')}>
          <h3>
            <label>이름</label>
          </h3>
          <span>
            <input value={name}  id ="name" onChange={onChange} />
          </span>
        </div>

        <div className={cx('bottom-nicname', 'bottoms')}>
          <h3>
            <label>닉네임</label>
          </h3>
          <span>
            <input value={nickname}  id ="nickname" onChange={onChange}/>
            <button>중복확인</button>
          </span>
        </div>

        <div className={cx('bottoms')}>
          <h3>
            <label>전화번호</label>
          </h3>
          <span>
            <input value={phone}  id ="phone" onChange={onChange} />
          </span>
        </div>

        <div className={cx('bottom-organization', 'bottoms')}>
          <h3>
            <label>소속</label>
          </h3>
          <span>
            <input value={organization}  id ="organization" onChange={onChange}/>
          </span>
        </div>


        <div className={cx('bottom-check', 'bottoms')}>
          <label for="agree"><h3 className="check-h3">이용약관 및 개인정보취급방침에 동의합니다.</h3></label>
          <input type='checkbox' className="chkbox" id="agree" onChange={onCheck} checked={agree}/>
          <label for="agree" className="chk-div"></label>
        </div>

        <div className={cx('signup-btn')}>
          <button onClick={onSingUp}>회원가입</button>
        </div>
      </div>

    </div>
  );

export default Sign
