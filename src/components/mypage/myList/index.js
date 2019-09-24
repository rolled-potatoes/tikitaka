
import React from 'react'
import styles from'./styles.scss'
import classnames from 'classnames'
import MypageSide from '../mypageSide'
import MyPageListContents from 'components/mypage/myList/Listcontents.js'
const cx = classnames.bind(styles)

const myList = ({myInfo,LinkToPost}) =>{
  const { 
    nickName, organization, 
    userId, location, Intro,  grade,
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
            nickName={nickName}
            organization={organization}
            location={location}
            Intro={Intro}
            grade={grade}
            proList={proList}
          />
          <div className='myList-wrapper'>
            <div className='myList-top'>
              <div className='myList-title'>나의 프로젝트 목록</div>
            </div >
            <MyPageListContents
              LinkToPost={LinkToPost}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default myList
