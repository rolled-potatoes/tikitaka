
import React from 'react'
import styles from './styles.scss'
import classnames from 'classnames'
import DetailRow from './DetailRow'
import DetailColum from './DetailColum'
import StarRatings from 'react-star-ratings';
import Button from 'components/common/Button/index.js'

const cx = classnames.bind(styles)
const imgSrc = "https://scontent.ficn3-1.fna.fbcdn.net/v/t1.0-1/p200x200/42135641_1894679573979032_7136233916314157056_n.jpg?_nc_cat=108&_nc_oc=AQlwd9nh7sPfN1VZJ75panQPdTySUMTdtP51y1RFleHYHAFS92s2yZlM4qDzHG5I8Wk&_nc_ht=scontent.ficn3-1.fna&oh=4a6b9e8645545cc0b5190f5e1c9b3a3a&oe=5DD275CF"

const FreeLenserDetail = ({ freeInfo,visibles,onClickMenuitem }) => {
  if (freeInfo !== null) {
    return (
      <div className={cx('FreeLenserDetail-wrapper')}>
        <div className={cx('FreeLenserDetail-profile')}>
          <img src={imgSrc} className={cx('profile-img')} />
          <div className={cx('profile-nickname')}>{freeInfo.nickName}</div>
          <div className={cx('profile-table')}>
            <div>
              <div className={cx('profile-tr')}>평점</div>
              <div className={cx('profile-td')}>
                <StarRatings
                  rating={freeInfo.grade}
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
              <div className={cx('profile-td')}>{freeInfo.organization}</div>
            </div>
            <div>
              <div className={cx('profile-tr')}>진행 프로젝트 수</div>
              <div className={cx('profile-td')}>{freeInfo.proList.length}</div>
            </div>
          </div>
          <div className={cx('profile-intro')}>
            {freeInfo.intro}
          </div>
        </div>

        <div className={cx('FreeLenserDetail-info')}>
          <div className={cx('FreeLenserDetail-menu')}>
            <Button id ='1' onClick={onClickMenuitem} theme={`isOn-${visibles[0]}`}>보유기술</Button>
            <Button id ='2' onClick={onClickMenuitem} theme={`isOn-${visibles[1]}`}>자격증</Button>
            <Button id ='3' onClick={onClickMenuitem} theme={`isOn-${visibles[2]}`}>학력</Button>
            <Button id ='4' onClick={onClickMenuitem} theme={`isOn-${visibles[3]}`}>경력</Button>
          </div>
          <div className={cx('FreeLenserDetail-content')}>
            <DetailRow data={freeInfo.categoryList} visible={`visible-${visibles[0]}`}/>
            <DetailRow data={freeInfo.lisenceList} visible={`visible-${visibles[1]}`}/>
            <DetailColum list ={freeInfo.careeList} visible={`visible-${visibles[2]}`}/>
            <DetailColum list ={freeInfo.educationList} visible={`visible-${visibles[3]}`}/>
          </div>
        </div>
      </div>
    )
  }
  else {
    return(

      <div className={cx('FreeLenserDetail-wrapper')}>

      </div>
    )
  }
}

export default FreeLenserDetail
