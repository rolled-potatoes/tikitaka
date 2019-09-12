import React from 'react'
import styles from './styles.scss'
import classnames from 'classnames'
import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom'
import Button from '../../common/Button'
/*import { prependOnceListener } from 'cluster';*/
const cx = classnames.bind(styles)
const proImg = require('imgs/프로필.png')

//경력 학력 => 년도 
//기술 자격증 => 그냥
const Revise = ({ info }) => {
  const {
    name, nickName, organization, email,
    careeList, userId, grade, categoryList,
    location, intro, licenseList, educationList,
    proList, follow
  } = info
  return (
    <div className={cx('mypage-page')}>
      <div className={cx('mypageTxt')}>
        프로필 수정
      </div>
      <div className={cx('revise-tem')}>
        <div className={cx('aside')}>
          <div className={cx('nicknameBox')}>
            <div className={cx('proImg')}>
              <img src={proImg} />
            </div>
            <div className={cx('revise-button')}>
              <Button>프로필 수정</Button>
            </div>
            <div className={cx('usdrId')}>
              {userId}
            </div>
            <div className={cx('profile-td')}>
              <StarRatings
                rating={grade}
                starRatedColor='rgb(252, 234,33)'
                numberOfStars={5}
                starDimension='20px'
                starSpacing='1px'
                name='rating' />
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
              {proList.length}
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
              {follow.length}
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
                <th className={cx('Id')}>이메일</th><tr className={cx('compo')}>{email}</tr>
              </tr>
              <tr className={cx('info')}>
                <th>이름</th>
                <tr className={cx('compo')}>{name}</tr>
              </tr>
              <tr className={cx('info')}>
                <th>닉네임</th>
                <tr className={cx('compo')}>
                  <input value ={nickName}/>
                </tr>
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
