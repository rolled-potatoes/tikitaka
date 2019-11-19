import React from 'react'
import styles from './styles.scss'
import classnames from 'classnames'
import Button from '../../common/Button'
const cx = classnames.bind(styles)

const passwordImg = require('imgs/password.png')
const FindId = ({ email, onChange, onClick }) => {
  return (

    <div className='password-wrapper'>
      <div className='password-top'>
        <h1>비밀번호 찾기</h1>
      </div>

      <div className='password-bottom'>
        <div className='password-section'>
          <span className='password-span'>
            <img src={passwordImg} />
            <div>
              찾으실 이메일을 입력해주십시오.
          </div>
          </span>
          <label for ='inputs' className={cx('div-placeholder',{'input-true':(email !== null && email !== '')})}>
            이메일(ex. aaabbb@aaaa.com)
        </label>
          <input
            id='inputs'
            value={email}
            onChange={onChange}
            className='password-input'
          />
          <button onClick={onClick} className='password-button'>
            찾기
        </button>
        </div>
      </div>
    </div>
  )

};

export default FindId
