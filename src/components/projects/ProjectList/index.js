/**
 * 프로젝트 게시판 목록 조회 컴포넌트
 * 게시글에 필요한 정보 : 제목, 비용, 마감, 등록일, 프로젝트 설명, 작업기간, 작성자, 요구되는 기술, 현재 지원자 수
 * 필요 기능 : 검색, 필터, 정렬, 페이징
 */
import React from 'react'
import styles from './styles.scss'
import classnames from 'classnames'
import Button from '../../common/Button'
import {format} from 'lib/functions.js'

import { Link } from 'react-router-dom'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const cx = classnames.bind(styles)

const Lists = ({ projectList }) => {
  let list = projectList.map(item => {
    const { title, price, dueDate, categoryList, writeDate, _id,userId,
      description, period, nickName, candiList, freeList, maxPeople, organization } = item
    let _writeDate = format(new Date(writeDate))
    let _dueDate =format(new Date(dueDate))
    console.log(item);
    
    return (
      <div className={cx('project')}>
        <div className={cx('writer-content')}>
          <div className={cx('writer')}>
            <img src={`/public/images/${userId}.PNG`} className={cx('writer-profile')}></img>
            <h3 className={cx('writer-nickName')}>{nickName}</h3>
          </div>

          <div className={(cx('writer-info'))}> {organization}</div>
        </div>

        <div className={cx('project-content')}>
          <div className={cx('title')}>
            <h2 title={title}><Link to={`/project/post/${_id}`}>{title}</Link></h2>
            <div className={cx('writeDate')}>
              {`등록일 ${_writeDate}`}
            </div>
          </div>

          <div className={cx('item-left')}>
            <ul>
              <li>
                <div className={cx('item-name')}>비용</div>
                <div className={cx('item-content')}>{price}</div>
              </li>
              <li>
                <div className={cx('item-name')}>예상기간</div>
                <div className={cx('item-content')}>{period}</div>
              </li>
              <li>
                <div className={cx('item-name')}>모집인원</div>
                <div className={cx('item-content')}>{maxPeople}</div>
              </li>
            </ul>
          </div>

          <div className={cx('item-right')}>
            <div className={cx('categoryList')}>{categoryList.map((item,index) => {
              return (
                `${item}${index+1 === categoryList.length? '':','} `
              )
            })}</div>
            <div className={cx('description')}>
              {description}
            </div>
          </div>

          <div className={cx('item-bottom')}>
            <div className={cx('bottom-wrapper')}>
              <div className={cx('item-name')}>지원자 수</div>
              <div className={cx('candiListNumber')}>{candiList.length}</div>
            </div>
            <div className={cx('bottom-wrapper')}>
              <div className={cx('dueDate')}>
                {`마감일 ${_dueDate}`}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  })
  return list
}
const ProjectList = ({ onClickSearch, projectList, searchString, changeSearch, keyPressSearchSring,
  ontoggle, dropdownOnClick, dropdownName, dropdowndispaly ,onOrderFilter}) => (
    <div className={cx('projectList')}>
      <div className={cx('projectList-top')}>
        <h1 className={cx('title')}>
          프로젝트
      </h1>
        <div className={cx('search')}>
          <Dropdown toggle={ontoggle} isOpen={dropdowndispaly}>
            <DropdownToggle>
              {dropdownName}
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem value="제목" onClick={dropdownOnClick}>제목</DropdownItem >
              <DropdownItem divider />
              <DropdownItem value="분야" onClick={dropdownOnClick}>분야</DropdownItem >
            </DropdownMenu>
          </Dropdown>
          <input
            value={searchString}
            onChange={changeSearch}
            onKeyPress={keyPressSearchSring}
            className={cx('input-search')}
          />
          <button onClick={(e)=>onClickSearch(0)} className={cx('button-search')}>검색</button>
        </div>
      </div>
      <div className={cx('filter')} onClick={onOrderFilter}>
        <button data-value="0" className='filter-btn'>전체보기</button>
        <button data-value='1' className='filter-btn'>마감순</button>
        <button data-value='2' className='filter-btn'>높은금액순</button>
        <button data-value='3' className='filter-btn'>낮은금액순</button>
      </div>



      <div className={cx('projectList-bottom')}>
        <Lists projectList={projectList} />
      </div>
    </div>
  );

export default ProjectList
