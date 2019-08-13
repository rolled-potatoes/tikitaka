/**
 * 프로젝트 게시판 목록 조회 컴포넌트
 * 게시글에 필요한 정보 : 제목, 비용, 마감, 분야, 등록일, 프로젝트 설명, 작업기간, 작성자, 요구되는 기술, 현재 지원자 수, 지역
 * 필요 기능 : 검색, 필터, 정렬, 페이징
 */
import React from 'react'
import  styles from './styles.scss'
import classnames from 'classnames'
import Button from '../../common/Button'
import {Link} from 'react-router-dom'

const cx = classnames.bind(styles)
const dumyData=[
  {
    title: "test",
    minCost: 100,
    maxCost: 500,
    deadLine: new Date("2020-01-01"),
    cat:"wed programing",
    filed: ["front end","Back end","Android"],
    resisterDate: new Date(),
    description:"test description",
    durings: 45,
    writer:"ParkSeungHwan",
    writerInfo:"YU student",
    currentCandidate:1,
    Area : "서울"
  },
  {
    title: "test",
    minCost: 100,
    maxCost: 500,
    deadLine: new Date("2020-01-01"),
    cat:"wed programing",
    filed: ["front end","Back end","Android"],
    resisterDate: new Date(),
    description:"test description",
    durings: 45,
    writer:"ParkSeungHwan",
    writerInfo:"YU student",
    currentCandidate:1,
    Area : "서울"
  },
  {
    title: "test",
    minCost: 100,
    maxCost: 500,
    deadLine: new Date("2020-01-01"),
    cat:"wed programing",
    filed: ["front end","Back end","Android"],
    resisterDate: new Date(),
    description:"test description",
    durings: 45,
    writer:"ParkSeungHwan",
    writerInfo:"YU student",
    currentCandidate:1,
    Area : "서울"
  },
  {
    title: "test",
    minCost: 100,
    maxCost: 500,
    deadLine: new Date("2020-01-01"),
    cat:"wed programing",
    filed: ["front end","Back end","Android"],
    resisterDate: new Date(),
    description:"test description",
    durings: 45,
    writer:"ParkSeungHwan",
    writerInfo:"YU student",
    currentCandidate:1,
    Area : "서울"
  },
  {
    title: "test",
    minCost: 100,
    maxCost: 500,
    deadLine: new Date("2020-01-01"),
    cat:"wed programing",
    filed: ["front end","Back end","Android"],
    resisterDate: new Date(),
    description:"test description",
    durings: 45,
    writer:"ParkSeungHwan",
    writerInfo:"YU student",
    currentCandidate:1,
    Area : "서울"
  },
  {
    title: "test",
    minCost: 100,
    maxCost: 500,
    deadLine: new Date("2020-01-01"),
    cat:"wed programing",
    filed: ["front end","Back end","Android"],
    resisterDate: new Date(),
    description:"test description",
    durings: 45,
    writer:"ParkSeungHwan",
    writerInfo:"YU student",
    currentCandidate:1,
    Area : "서울"
  },
  {
    title: "test",
    minCost: 100,
    maxCost: 500,
    deadLine: new Date("2020-01-01"),
    cat:"wed programing",
    filed: ["front end","Back end","Android"],
    resisterDate: new Date(),
    description:"test description",
    durings: 45,
    writer:"ParkSeungHwan",
    writerInfo:"YU student",
    currentCandidate:1,
    Area : "서울"
  },
  {
    title: "test",
    minCost: 100,
    maxCost: 500,
    deadLine: new Date("2020-01-01"),
    cat:"wed programing",
    filed: ["front end","Back end","Android"],
    resisterDate: new Date(),
    description:"test description",
    durings: 45,
    writer:"ParkSeungHwan",
    writerInfo:"YU student",
    currentCandidate:1,
    Area : "서울"
  },
  {
    title: "test",
    minCost: 100,
    maxCost: 500,
    deadLine: new Date("2020-01-01"),
    cat:"wed programing",
    filed: ["front end","Back end","Android"],
    resisterDate: new Date(),
    description:"test description",
    durings: 45,
    writer:"ParkSeungHwan",
    writerInfo:"YU student",
    currentCandidate:1,
    Area : "서울"
  },
  {
    title: "test",
    minCost: 100,
    maxCost: 500,
    deadLine: new Date("2020-01-01"),
    cat:"wed programing",
    filed: ["front end","Back end","Android"],
    resisterDate: new Date(),
    description:"test description",
    durings: 45,
    writer:"ParkSeungHwan",
    writerInfo:"YU student",
    currentCandidate:1,
    Area : "서울"
  },
  {
    title: "test",
    minCost: 100,
    cat:"wed programing",
    maxCost: 500,
    deadLine: new Date("2020-01-01"),
    filed: ["front end","Back end","Android"],
    resisterDate: new Date(),
    description:"test description",
    durings: 45,
    writer:"ParkSeungHwan",
    writerInfo:"YU student",
    currentCandidate:1,
    Area : "서울"
  },
  {
    title: "test",
    minCost: 100,
    cat:"wed programing",
    maxCost: 500,
    deadLine: new Date("2020-01-01"),
    filed: ["front end","Back end","Android"],
    resisterDate: new Date(),
    description:"test description",
    durings: 45,
    writer:"ParkSeungHwan",
    writerInfo:"YU student",
    currentCandidate:1,
    Area : "서울"
  }
]
const Lists= ({})=>{
  let list = dumyData.map(item =>{
    const {title,minCost,maxCost,deadLine,filed,resisterDate,cat,
            description,durings,writer,currentCandidate,Area,writerInfo} = item
    return(
      <div className={cx('project')}>
        <div className={cx('writer-content')}>
          <div className={cx('writer')}>{writer}</div>
          <div className={(cx('writer-info'))}> {writerInfo}</div>
        </div>
        <div className={cx('project-content')}>
          <div className={cx('title')}>
            <h4><Link to='/'>{title}</Link></h4>
            <div>{resisterDate.toDateString()}</div>
          </div>
          <div className={cx('item1')}>
            <div>비용: {minCost} ~ {maxCost}</div>
            <div>기간 : {durings}</div>
            <div>지역 : {Area}</div>
            <div>지원자 수 : {currentCandidate}</div>
          </div>
          <div className={cx('item2')}>
            <div>분야 :{cat}</div>
            <div>기술 : {filed}</div>
          </div>
          <div className={cx('item3')}>
            <div>설명</div>
            <div>{description}</div>
            <div>{deadLine.toDateString()}</div>
          </div>
        </div>
      </div>
    )
  })
  return list
}
const ProjectList = ({ }) => (
  <div className={cx('projectList')}>
    <div className={cx('projectList-top')}>
      <h1 className={cx('title')}>
        프로젝트
      </h1>

      <div className={cx('search')}>
        <input/>
        <input type ='button'/>
      </div>
    </div>
      <div className={cx('filter')}>
        <Button>마감순</Button>
        <Button>높은금액순</Button>
        <Button>낮은금액순</Button>
        <Button>최신등록순</Button>
      </div>

    

    <div className={cx('projectList-bottom')}>
      <Lists/>
    </div>
  </div>
);

export default ProjectList
