
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
  const {writeDate,dueDate} =dumyData
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

        </div>

        <div className={cx('post-table')}>

        </div>
        <div className={cx('categoryList')}>

        </div>
        <div className={cx('description')}>

        </div>
      </div>
      <div className={cx('writer-content')}>
        <div className={cx('writer')}>

        </div>
        <Button>채팅하기</Button>
      </div>
    </div>
  )
}

export default ProjectPost
