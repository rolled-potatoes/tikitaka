
import React, { Fragment } from 'react'
import styles from './styles.scss'
import classnames from 'classnames'

import { Link } from 'react-router-dom'
const cx = classnames.bind(styles)

//let imgSrc = "https://scontent.ficn3-1.fna.fbcdn.net/v/t1.0-1/p200x200/42135641_1894679573979032_7136233916314157056_n.jpg?_nc_cat=108&_nc_oc=AQlwd9nh7sPfN1VZJ75panQPdTySUMTdtP51y1RFleHYHAFS92s2yZlM4qDzHG5I8Wk&_nc_ht=scontent.ficn3-1.fna&oh=4a6b9e8645545cc0b5190f5e1c9b3a3a&oe=5DD275CF"
const mypageSide = ({
  nickName,
  organization,
  location,
  Intro,
  onChangeImg,
  proList, 
  userId,
}) => {
  return (
    <div className={cx('FreeLenserDetail-profile')}>
      <img className={cx('profile-img')} id='myimg'  src={`/public/images/${userId}.PNG`}/>
      <div className={cx('profile-nickname')}>{nickName}</div>
      {onChangeImg&&
      <label className='imgInput-wrapper' for='imgInput'>
        <input  type="file" onChange={onChangeImg} id = 'imgInput' accept=".png"/>
        <div>사진 변경</div>
      </label>
      }
      <div className={cx('profile-table')}>
        
        <div>
          <div className={cx('profile-tr')}>소속</div>
          <div className={cx('profile-td')}>{organization}</div>
        </div>
        <div>
          <div className={cx('profile-tr')}>진행 프로젝트 수</div>
          <div className={cx('profile-td')}>{proList== null? 0 : proList.length}</div>
        </div>
        <div>
          <div className={cx('profile-tr')}>지역</div>
          <div className={cx('profile-td')}>{location}</div>
        </div>
      </div>

      <div className={cx('profile-intro')}>
        {Intro}
      </div>
      <Link className={cx('profil-follow')} to='/mypage'>
        <div >프로필 보기</div>
      </Link>
      <Link className={cx('profil-follow')} to='/mypage/mylist'>
        <div >마이 프로젝트</div>
      </Link>
      <Link className={cx('profil-follow')} to='/mypage/revise'>
        <div >프로필 수정</div>
      </Link>
      <Link className={cx('profil-follow')} to='/mypage/follow'>
        <div >팔로우 목록</div>
      </Link>
    </div>
  )
}


export default mypageSide