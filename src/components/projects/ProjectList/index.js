/**
 * 프로젝트 게시판 목록 조회 컴포넌트
 * 게시글에 필요한 정보 : 제목, 비용, 마감, 등록일, 프로젝트 설명, 작업기간, 작성자, 요구되는 기술, 현재 지원자 수
 * 필요 기능 : 검색, 필터, 정렬, 페이징
 */
import React from 'react'
import  styles from './styles.scss'
import classnames from 'classnames'
import Button from '../../common/Button'
import {Link} from 'react-router-dom'
import {DropdownButton,ButtonToolbar,Dropdown} from 'react-bootstrap';
const cx = classnames.bind(styles)

const Lists= ({projectList})=>{
  let list = projectList.map(item =>{
    const {title,price,dueDate,categoryList,writeDate,id,
            description,period,nickName,candiList,freeList,maxPeople,organization} = item
    const writeDates = writeDate.split('-')
    const dueDates = dueDate.split('-')
    const writeYear = writeDates[0]
    const writeDay =writeDates[2]
    const writeMonth = writeDate[1]
    const dueYear =dueDates[0]
    const dueDay =dueDates[2]
    const dueMonth = dueDates[1]
    return(
      <div className={cx('project')}>
        <div className={cx('writer-content')}>
          <div className={cx('writer')}>
            <img  src="https://scontent.ficn3-1.fna.fbcdn.net/v/t1.0-1/p200x200/42135641_1894679573979032_7136233916314157056_n.jpg?_nc_cat=108&_nc_oc=AQlwd9nh7sPfN1VZJ75panQPdTySUMTdtP51y1RFleHYHAFS92s2yZlM4qDzHG5I8Wk&_nc_ht=scontent.ficn3-1.fna&oh=4a6b9e8645545cc0b5190f5e1c9b3a3a&oe=5DD275CF"className={cx('writer-profile')}></img>
            <h3 className={cx('writer-nickName')}>{nickName}</h3>
          </div>
          
          <div className={(cx('writer-info'))}> {organization}</div>
        </div>

        <div className={cx('project-content')}>
          <div className={cx('title')}>
            <h2><Link to={`/post/${id}`}>{title}</Link></h2>
            <div className={cx('writeDate')}>
              {`등록일 ${writeYear}년 ${writeMonth}월 ${writeDay}일`}
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
            <div className={cx('categoryList')}>{categoryList.map(item=>{
              return(
                `${item}, `
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
                {`마감일 ${dueYear}년 ${dueMonth}월 ${dueDay}일`}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  })
  return list
}
const ProjectList = ({onClickSearch,projectList,searchString,changeSearch,keyPressSearchSring}) => (
  <div className={cx('projectList')}>
    <div className={cx('projectList-top')}>
      <h1 className={cx('title')}>
        프로젝트
      </h1>

      <div className={cx('search')}>
        <ButtonToolbar>
          <DropdownButton
            size = 'lg'
            title={'카테고리'}
            id={`dropdown-variants-Secondary`}
            variant={'asdasdasd'}
          >
            <Dropdown.Item eventKey="1">제목</Dropdown.Item>
            <Dropdown.Item eventKey="2">내용</Dropdown.Item>
            <Dropdown.Item eventKey="3">기술</Dropdown.Item>
          </DropdownButton>
        </ButtonToolbar>
        <input 
          value ={searchString} 
          onChange={changeSearch}
          onKeyPress={keyPressSearchSring}
          className={cx('input-search')}
        />
        <button onClick={onClickSearch} className={cx('button-search')}>검색</button>
      </div>
    </div>
      <div className={cx('filter')}>
        <Button>전체보기</Button>
        <Button>마감순</Button>
        <Button>최신등록순</Button>
        <Button>높은금액순</Button>
        <Button>낮은금액순</Button>
      </div>

    

    <div className={cx('projectList-bottom')}>
      <Lists projectList={projectList}/>
    </div>
  </div>
);

export default ProjectList
