import React from 'react'
import styles from './styles.scss'
import classnames from 'classnames'
import MypageSide from '../mypageSide'
import MypageContent from '../mypageContent'
/*import { prependOnceListener } from 'cluster';*/
const cx = classnames.bind(styles)

const Mypage = ({myInfo,visibles,onClickMenuitem }) => {
  const { 
    nickName, organization, careerList, 
    userId, location, Intro, licenseList, grade,
    educationList ,categoryList,proList,follow
  } = myInfo
  if(myInfo ==""){
    return (
      <div></div>
    )
  }
  else{

    return (
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
          <MypageContent
            onClickMenuitem={onClickMenuitem}
            visibles={visibles}
            categoryList={categoryList}
            educationList={educationList}
            careerList={careerList}
            licenseList={licenseList}
          />
        </div>
      </div>
  
    )
  }
}

export default Mypage
