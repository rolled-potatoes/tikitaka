
import React from 'react'
import styles from './styles.scss'
import classNames from 'classnames'
import Button from '../../common/Button';

const cx = classNames.bind('styles')
const dumyData={
  title: "행사 중개 플랫폼 웹서비스 제작",
  price: 500,
  dueDate: new Date("2020-01-01"),
  categoryList: ["front end","Back end","Android","Android","Android"],
  writeDate: new Date(),
  description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  period: 45,
  nickName:"ParkSeungHwan",
  organization:"YU student",
  candiList:['tom','bob','kim'],
  freeList:['park'],
  maxPeople: 5,
}
const ProjectPost = ({ }) => {
  const {writeDate,dueDate,title,price,categoryList,description,period
          ,nickName,organization,candiList,maxPeople} =dumyData
  const writeYear = writeDate.getFullYear();
  const writeDay = writeDate.getDate();
  const writeMonth = writeDate.getMonth()+1;
  const dueYear = dueDate.getFullYear();
  const dueDay = dueDate.getDate();
  const dueMonth = dueDate.getMonth()+1;
  return(
    <div className={cx('postwrapper')}>
      <div className={cx('post-content')}>

        <div className={cx('post-top')}>  

          <div className={cx('post-title')}>
            {title}
          </div>

          <div className={cx('post-dates')}>

            <div className={cx('post-writeDate','dates')}>
              {`등록일 ${writeYear}년 ${writeMonth}월 ${writeDay}일`}
            </div>
            <div className={cx('post-dueDate','dates')}>
              {`마감일 ${dueYear}년 ${dueMonth}월 ${dueDay}일`}
            </div>

          </div>

        </div>

        <div className={cx('post-table')}>
          <div className={cx('table-item','table-border')}>
            <p>예상비용</p>
            <p>{price}</p>
          </div>
          <div className={cx('table-item','table-border')}>
            <p>예상기간</p>
            <p>{period}</p>
          </div>
          <div className={cx('table-item','table-border')}>
            <p>모집인원</p>
            <p>{maxPeople}</p>
          </div>
          <div className={cx('table-item','candidateNum')}>
            <p>지원자 수</p>
            <p>{candiList.length}</p>
          </div>
        </div>

        <div className={cx('categoryList')}>
          <div className={cx('item-title')}>
            필요기술
          </div>
          <div className={cx('item-contents')}>
            {categoryList.map(cat =>{
              return(
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
              <img className={cx('writer-')} src="https://scontent.ficn3-1.fna.fbcdn.net/v/t1.0-1/p200x200/42135641_1894679573979032_7136233916314157056_n.jpg?_nc_cat=108&_nc_oc=AQlwd9nh7sPfN1VZJ75panQPdTySUMTdtP51y1RFleHYHAFS92s2yZlM4qDzHG5I8Wk&_nc_ht=scontent.ficn3-1.fna&oh=4a6b9e8645545cc0b5190f5e1c9b3a3a&oe=5DD275CF"className={cx('writer-profile')}></img>
              <div className={cx('writer-nickname')}>
                {nickName}
              </div>
            </div>
        </div>
        <div className={cx('writer-organization')}>
            {organization}
        </div>
        <div className={cx('chat-btn')}>채팅하기</div>
      </div>
    </div>
  )
}

export default ProjectPost
