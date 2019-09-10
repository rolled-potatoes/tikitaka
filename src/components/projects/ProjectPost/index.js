
import React from 'react'
import styles from './styles.scss'
import classNames from 'classnames'
import Button from '../../common/Button';
import {Link} from 'react-router-dom'
const cx = classNames.bind('styles')

const ProjectPost = ({ post,id }) => {
  if (post !== null) {
    {
      const { writeDate, dueDate, title, price, categoryList, description, period
        , nickName, organization, candiList, maxPeople } = post
      const writeDates = writeDate.split('-')
      const dueDates = dueDate.split('-')
      const writeYear = writeDates[0]
      const writeDay = writeDates[2]
      const writeMonth = writeDate[1]
      const dueYear = dueDates[0]
      const dueDay = dueDates[2]
      const dueMonth = dueDates[1]
      return (

        <div className={cx('postwrapper')}>
          <div className={cx('post-content')}>

            <div className={cx('post-top')}>

              <div className={cx('post-title')}>
                {title}
                <div className={cx('post-btn')}>삭제</div>
                <div className={cx('post-btn')}><Link  to={`/write/${id}`}>수정</Link></div>
              </div>

              <div className={cx('post-dates')}>

                <div className={cx('post-writeDate', 'dates')}>
                  {`등록일 ${writeYear}년 ${writeMonth}월 ${writeDay}일`}
                </div>
                <div className={cx('post-dueDate', 'dates')}>
                  {`마감일 ${dueYear}년 ${dueMonth}월 ${dueDay}일`}
                </div>

              </div>

            </div>

            <div className={cx('post-table')}>
              <div className={cx('table-item', 'table-border')}>
                <p>예상비용</p>
                <p>{price}</p>
              </div>
              <div className={cx('table-item', 'table-border')}>
                <p>예상기간</p>
                <p>{period}</p>
              </div>
              <div className={cx('table-item', 'table-border')}>
                <p>모집인원</p>
                <p>{maxPeople}</p>
              </div>
              <div className={cx('table-item', 'candidateNum')}>
                <p>지원자 수</p>
                <p>{candiList.length}</p>
              </div>
            </div>

            <div className={cx('categoryList')}>
              <div className={cx('item-title')}>
                필요기술
              </div>
              <div className={cx('item-contents')}>
                {categoryList.map(cat => {
                  return (
                    `${cat}, `
                  )
                })}
              </div>
            </div>

            <div className={cx('description')}>
              <div className={cx('description-title')}>
                상세내용
              </div>
              <div className={cx('description-blank')}></div>
              <div className={cx('description-contents')}>
                {description}
              </div>
            </div>
          </div>
          <div className={cx('writer-content')}>
            <div className={cx('writer')}>
              <div className={cx('writer-profile')}>
                <img className={cx('writer-img')} src="https://scontent.ficn3-1.fna.fbcdn.net/v/t1.0-1/p200x200/42135641_1894679573979032_7136233916314157056_n.jpg?_nc_cat=108&_nc_oc=AQlwd9nh7sPfN1VZJ75panQPdTySUMTdtP51y1RFleHYHAFS92s2yZlM4qDzHG5I8Wk&_nc_ht=scontent.ficn3-1.fna&oh=4a6b9e8645545cc0b5190f5e1c9b3a3a&oe=5DD275CF" className={cx('writer-profile')}></img>
                <div className={cx('writer-nickname')}>
                  {nickName}
                </div>
              </div>
            </div>
            <div className={cx('writer-organization')}>
              {organization}
            </div>
            <div className={cx('chat-btn')}>채팅하기</div>
            <div className={cx('chat-btn')}>지원하기</div>
          </div>
        </div>
      )
    }
  }
  else {
    return (

      <div className={cx('postwrapper')}>

      </div>
    )
  }
}
export default ProjectPost
