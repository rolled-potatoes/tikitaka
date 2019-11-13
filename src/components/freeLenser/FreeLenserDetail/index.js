
import React from 'react'
import styles from './styles.scss'
import classnames from 'classnames'
import DetailRow from './DetailRow'
import DetailColum from './DetailColum'
import Button from 'components/common/Button/index.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
//5a7aa85a42
const cx = classnames.bind(styles)
const imgSrc = "https://scontent.ficn3-1.fna.fbcdn.net/v/t1.0-1/p200x200/42135641_1894679573979032_7136233916314157056_n.jpg?_nc_cat=108&_nc_oc=AQlwd9nh7sPfN1VZJ75panQPdTySUMTdtP51y1RFleHYHAFS92s2yZlM4qDzHG5I8Wk&_nc_ht=scontent.ficn3-1.fna&oh=4a6b9e8645545cc0b5190f5e1c9b3a3a&oe=5DD275CF"

const FreeLenserDetail = ({ freeInfo, visibles, onClickMenuitem, follow_check,onFollowClick }) => {
  if (freeInfo != "") {
    return (
      <div className={cx('FreeLenserDetail-wrapper')}>
        <div className={cx('FreeLenserDetail-profile')}>
          <img src={`/public/images/${freeInfo.userId}.PNG`} className={cx('profile-img')} />
          <div className={cx('profile-nickname')}>{freeInfo.nickname}</div>
          <div className={cx('profile-table')}>
            
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
          <div className={cx('profil-follow', { 'following': follow_check })} data-value={follow_check?0:1} onClick={onFollowClick}>
            {follow_check ? (
              <div className='follow-div' >
                <div className='follow-text'>팔로우 취소</div>
                < i  className={cx("fas fa-heart")} />
              </div>
            ) :
              (
                <div className='follow-div'>
                  <div className='follow-text'>팔로우</div>
                  <i className={cx("far fa-heart")} />
                </div>
              )
            }

          </div>
        </div>

        <div className={cx('FreeLenserDetail-info')}>
          <div className={cx('FreeLenserDetail-menu')}>
            <Button id='1' onClick={onClickMenuitem} theme={`isOn-${visibles[0]}`}>보유기술</Button>
            <Button id='2' onClick={onClickMenuitem} theme={`isOn-${visibles[1]}`}>자격증</Button>
            <Button id='3' onClick={onClickMenuitem} theme={`isOn-${visibles[2]}`}>학력</Button>
            <Button id='4' onClick={onClickMenuitem} theme={`isOn-${visibles[3]}`}>경력</Button>
          </div>
          <div className={cx('FreeLenserDetail-content')}>
            <DetailRow data={freeInfo.categoryList} visible={`visible-${visibles[0]}`} />
            <DetailRow data={freeInfo.lisenceList} visible={`visible-${visibles[1]}`} />
            <DetailColum list={freeInfo.careerList} visible={`visible-${visibles[2]}`} />
            <DetailColum list={freeInfo.educationList} visible={`visible-${visibles[3]}`} />
          </div>
        </div>
      </div>
    )
  }
  else {
    return (

      <div className={cx('FreeLenserDetail-wrapper')}>

      </div>
    )
  }
}

export default FreeLenserDetail
