
import React from 'react'
import styles from './styles.scss'
import classNames from 'classnames'
import {Link} from 'react-router-dom'
import {format} from 'lib/functions.js'
import {removePost} from 'lib/api.js'

const cx = classNames.bind('styles')

const ProjectPost = ({ post,id,mycontent,onModals ,applyProject,logged}) => {
  
  if (post !== "") {
    {
      const { writeDate, dueDate, title, price, categoryList, description, period,userId
        , nickname, organization, candiList, maxPeople } = post
      let _writeDate = format(new Date(writeDate))
      let _dueDate =format(new Date(dueDate))
      return (

        <div className={cx('postwrapper')}>
          <div className={cx('post-content')}>

            <div className={cx('post-top')}>

              <div className={cx('post-title')}>
                {title}
                
                {mycontent && <div className={cx('post-btn')} onClick = {(e)=>{removePost(id);window.location.href ='/project/1'}}>삭제</div>}
                {mycontent && <div className={cx('post-btn')}><Link  to={`/write/${id}`}>수정</Link></div>}
              </div>

              <div className={cx('post-dates')}>

                <div className={cx('post-writeDate', 'dates')}>
                  {`등록일 ${_writeDate}`}
                </div>
                <div className={cx('post-dueDate', 'dates')}>
                  {`마감일 ${_dueDate}`}
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
                {categoryList.map((cat,index) => {
                  return (
                    `${cat} ${index+1 === categoryList.length?'':','}`
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
                <img className={cx('writer-img')} src={`/public/images/${userId}`} className={cx('writer-profile')}></img>
                <div className={cx('writer-nickname')}>
                  {nickname}
                </div>
              </div>
            </div>
            <div className={cx('writer-organization')}>
              {organization}
            </div>
            {logged&&<div className={cx('chat-btn')} onClick={applyProject}>지원하기</div>}
            {mycontent && <div className={cx('chat-btn')} onClick={onModals}>지원자보기</div>}
            {/* {mycontent && <div className={cx('chat-btn')}>완료하기</div>} */}
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
