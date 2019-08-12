/**
 * 프로젝트 게시판 목록 조회 컴포넌트
 * 게시글에 필요한 정보 : 제목, 비용, 마감, 분야, 등록일, 프로젝트 설명, 작업기간, 작성자, 요구되는 기술, 현재 지원자 수, 지역
 * 필요 기능 : 검색, 필터, 정렬, 페이징
 */
import React from 'react'
import  styles from './styles.scss'
import classnames from 'classnames'
import Button from '../../common/Button'
import { Card, CardGroup} from 'react-bootstrap';
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
    const groupStyle={
      height:"200px",
      marginBottom: "20px"
    }
    return(
      <CardGroup style={groupStyle}>
        <Card className='writer'>
          <Card.Body >
            <Card.Title>{writer}</Card.Title>
            <Card.Text>
              {writerInfo}
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{flex:3}}>
          <Card.Body>
            <Card.Title>
              {title}
              <div style={{float:"right"}}>
                {resisterDate.toDateString()}
              </div>
            </Card.Title>
            <CardGroup>
              <Card style={{flex:1}}>
                  <Card.Body >
                    <Card.Text>
                      비용 : {minCost} ~ {maxCost} 
                    </Card.Text>
                    <Card.Text>
                      기간 : {durings}
                    </Card.Text>
                    <Card.Text>
                      현재 지원 수 : {currentCandidate}
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card style={{flex:1}}>
                  <Card.Body >
                    <Card.Text>
                      분야 : {cat}
                    </Card.Text>
                    <Card.Text>
                      기술 : {filed.map(item =>{
                        return(
                            item+" "
                        )
                      })}
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card style={{flex:1}}>
                  <Card.Body >
                    <Card.Text>
                      {description}
                    </Card.Text>
                  </Card.Body>
                </Card>
            </CardGroup>
          </Card.Body>
        </Card>
      </CardGroup>
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
