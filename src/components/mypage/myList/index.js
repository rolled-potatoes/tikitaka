
import React from 'react'
import styles from'./styles.scss'
import classnames from 'classnames'
import MypageSide from '../mypageSide'
import MyPageListContents from './Listcontents.js'
const cx = classnames.bind(styles)

const myList = ({myInfo,LinkToPost,projects}) =>{
  const { 
    nickname, organization, 
    userId, location, intro, 
    proList,follow
  } = myInfo
  if(myInfo ==""){
    return (
      <div></div>
    )
  }
  else{
    return(
      <div className={cx('mypage-page')}>
        <div className={cx('mypage-title')}>
          <h1>마이페이지</h1>
        </div>
        <div className={cx('FreeLenserDetail-wrapper')}>
          <MypageSide
            nickName={nickname}
            organization={organization}
            location={location}
            Intro={intro}
            proList={proList}
            userId={userId}
          />
          <div className='myList-wrapper'>
            <div className='myList-top'>
              <div className='myList-title'>나의 프로젝트 목록</div>
            </div >
            <MyPageListContents
              projects={projects}
              LinkToPost={LinkToPost}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default myList
