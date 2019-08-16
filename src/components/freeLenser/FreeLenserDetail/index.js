
import React from 'react'
import styles from './styles.scss'
import classnames from 'classnames'
import DetailRow from './DetailRow'
import StarRatings from 'react-star-ratings';
import Button from 'components/common/Button/index.js'
const cx = classnames.bind(styles)
const imgSrc = "https://scontent.ficn3-1.fna.fbcdn.net/v/t1.0-1/p200x200/42135641_1894679573979032_7136233916314157056_n.jpg?_nc_cat=108&_nc_oc=AQlwd9nh7sPfN1VZJ75panQPdTySUMTdtP51y1RFleHYHAFS92s2yZlM4qDzHG5I8Wk&_nc_ht=scontent.ficn3-1.fna&oh=4a6b9e8645545cc0b5190f5e1c9b3a3a&oe=5DD275CF"

const dumyData = {
  nickName: 'ParkSeunHwan',
  organization: 'YU Student',
  grade: 4.5,
  educationList:['경산초등학교','경산중학교','경산고등학교','영남대학교'],
  lisenceList:['정보처리기사','MOS','치믈리에','CCNA'],
  careeList:['영남대 행정실'],
  intro: 'hello world!hello world!hello world!hello world!',
  categoryList: ['php', 'python', 'C++', 'java', 'javaScript', 'javaScriptjavaScript'],
  proList: ['1', '2', '3', '4']
}
const FreeLenserDetail = ({ }) => (
  <div className={cx('FreeLenserDetail-wrapper')}>
    <div className={cx('FreeLenserDetail-profile')}>
      <img src={imgSrc} className={cx('profile-img')} />
      <div className={cx('profile-nickname')}>{dumyData.nickName}</div>
      <div className={cx('profile-table')}>
        <div>
          <div className={cx('profile-tr')}>평점</div>
          <div className={cx('profile-td')}>
            <StarRatings
              rating={dumyData.grade}
              starRatedColor='rgb(252, 234,33)'
              numberOfStars={5}
              starDimension='20px'
              starSpacing='1px'
              name='rating'
            />
          </div>
        </div>
        <div>
          <div className={cx('profile-tr')}>소속</div>
          <div className={cx('profile-td')}>{dumyData.organization}</div>
        </div>
        <div>
          <div className={cx('profile-tr')}>진행 프로젝트 수</div>
          <div className={cx('profile-td')}>{dumyData.proList.length}</div>
        </div>
      </div>
      <div className={cx('profile-intro')}>
        {dumyData.intro}
      </div>
    </div>

    <div className={cx('FreeLenserDetail-info')}>
      <div className={cx('FreeLenserDetail-menu')}>
        <Button>경력</Button>
        <Button>학력</Button>
        <Button>보유기술</Button>
        <Button>자격증</Button>
      </div>
      <div className={cx('FreeLenserDetail-content')}>
        <DetailRow data = {dumyData.categoryList}/>
      </div>
    </div>
  </div>
);

export default FreeLenserDetail
