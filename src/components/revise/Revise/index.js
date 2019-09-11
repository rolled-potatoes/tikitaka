import React from 'react'
import styles from './styles.scss'
import classnames from 'classnames'
import StarRatings from 'react-star-ratings';
import {Link} from'react-router-dom'
import Button from '../../common/Button'
/*import { prependOnceListener } from 'cluster';*/
const cx = classnames.bind(styles)
const proImg=require('imgs/프로필.png')
const dumyData={
  phonenumber:'01031010885',
  name:'권경혜',
  nickname:['Tasha'],
  description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  period: 45,
  organization:"YU student",
  userId:"dys02024@gmail.com",
  proList: ['1', '2', '3', '4'],
  location:"대구",
  followUserList:['라이언','어피치','무지'],
  categoryList: ['php', 'python', 'C++', 'java', 'javaScript', 'javaScriptjavaScript'],
  intro: 'hello world!hello world!hello world!hello world!',
  careerList:['입사','퇴사','프리랜서'],
  licenseList:['컴활', '워드', '전기사'],
  educationList:['영선초등학교','대구중학교','경일여자고등학교','영남대학교'],
  proList:['1','2','3']
}

  const Revise = ({}) => {
    const {phonenumber, name, nickname,organization,careerList,userId,location,intro,licenseList, educationList, proList} =dumyData
    return(
  <div className={cx('mypage-page')}>
    <div className={cx('mypageTxt')}>
      프로필 수정
    </div>
    <div className={cx('revise-tem')}>
    <div className={cx('aside')}>
    <div className={cx('nicknameBox')}>
      <div className={cx('proImg')}>
        <img src={proImg}/>
      </div>
      <div className={cx('revise-button')}>
        <Button>프로필 수정</Button>
      </div>
      <div className={cx('usdrId')}>
        {userId}
      </div>
      <div className={cx('profile-td')}>
            <StarRatings
              rating={dumyData.grade}
              starRatedColor='rgb(252, 234,33)'
              numberOfStars={5}
              starDimension='20px'
              starSpacing='1px'
              name='rating'/>
          </div>
    </div>
    <div classaName={cx('introduceBox')}>
      <div className={cx('intro-txt')}>
        한줄소개
        </div>
        <div>{intro}</div>
      </div>
      <div className={cx('projectBox')}>
        <div className={cx('variable')}>
          진행한 프로젝트
        </div>
        <div className={cx('prop')}>
        {dumyData.proList.length}
        </div>
      </div>
      <div className={cx('projectBox')}>
        <div className={cx('variable')}>
          지역
        </div>
        <div className={cx('prop')}>
        {location}
        </div>
      </div>
    <div className={cx('projectBox')}>
        <div className={cx('variable')}>
          소속
        </div>
        <div className={cx('prop')}>
        {organization}
        </div>
      </div>
     <div className={cx('projectBox')}>
        <div className={cx('variable')}>
          팔로우
        </div>
        <div className={cx('prop')}>
        {dumyData.followUserList.length}
        </div>
      </div>

    </div>
    <div className={cx('revise-box')}>
      <div className={cx('info-box')}>
        <div className={cx('info-txt')}>
          기본정보
        </div>
        <div clssName={cx('container')}>
        <tr className={cx('info')}>
        <th className={cx('Id')}>아이디</th><tr className={cx('compo')}>{userId}</tr>
        </tr>
        <tr className={cx('info')}>
        <th>이름</th><tr className={cx('compo')}>{name}</tr>
        </tr>
        <tr className={cx('info')}>
        <th>닉네임</th><tr className={cx('compo')}>{nickname}</tr>
        </tr>
        <tr className={cx('info')}> 
          <th className={cx('password')}>기존 비밀번호         </th>
          <td className={cx('inpassword')}><input type="text" name="password" ></input></td>
          </tr>
        <tr className={cx('info')}> 
          <th className={cx('password')}>변경할 비밀번호     </th>
          <td className={cx('inpassword')}><input type="text" name="newpassword" ></input></td>
       </tr>
       <tr className={cx('info')}> 
          <th className={cx('password')}>비밀번호 확인        </th>
          <td className={cx('inpassword')}><input type="text" name="password2" ></input></td>
        </tr>
        <tr className={cx('info')}> 
          <th className={cx('phonenumber')}>전화번호        </th>
          <td className={cx('inpassword')}><input type="text" name="password2" ></input></td>
        </tr>
        <tr className={cx('info')}>
        <th>지역</th><tr className={cx('compo')}>{location}</tr>
        </tr>
      </div>
      </div>
      <div className={cx('info-box')}>
      <div className={cx('info-txt')}>
          경력
        </div>
        <div className={cx('careerlist')}>
          {careerList.map(cat =>{
              return(
                `'${cat}' ` 
              )
            })}
        </div>
        <div className={cx('add-button')}>
          <Button>수정하기</Button>
        </div>
      </div>
      <div className={cx('info-box')}>
      <div className={cx('info-txt')}>
          학력
        </div>
      <div className={cx('edulist')}>
          {educationList.map(cat =>{
              return(
                `'${cat}' `
              )
            })}
        </div>
        <div className={cx('add-button')}>
          <Button>수정하기</Button>
        </div>
      </div>
      <div className={cx('info-box')}>
      <div className={cx('info-txt')}>
          보유기술
        </div>
        <div className={cx('FreeLenserDetail-content')}>
            {dumyData.categoryList.map(cat =>{
              return(
                `'${cat}' `
              )
            })}
         </div>
        <div className={cx('add-button')}>
          <Button>수정하기</Button>
        </div>
      </div>
      <div className={cx('info-box')}>
      <div className={cx('info-txt')}>
          자격증
        </div>
        <div className={cx('lilist')}>
          {licenseList.map(cat =>{
              return(
                `'${cat}' `
              )
            })}
        </div>
        <div className={cx('add-button')}>
          <Button>수정하기</Button>
        </div>
      </div>
      <div className={(cx('end'))}>
        <div className={cx('end-button')}>
          <Button>수정완료</Button>
        </div>
      </div>
    </div>
    </div>
  </div>

)
    }
  export default Revise
  