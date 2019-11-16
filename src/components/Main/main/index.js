
import React from 'react'
import styles from './styles.scss'
import classnames from 'classnames'
import { Link } from 'react-router-dom'
import Button from '../../common/Button'
const cx = classnames.bind(styles)

// 디자인 영상 번역 코딩 음악 공학 스터디 기타
const categoryList =["디자인",'영상','번역','코딩','음악','공학','스터디','기타']
const imageList =[
                  require('imgs/디자인.png'),require('imgs/영상.png'),require('imgs/번역.png'),
                  require('imgs/코딩.png'),require('imgs/음악.png'),require('imgs/공학.png'),
                  require('imgs/스터디.png'),require('imgs/기타.png')
                ]
const Category =()=>{
  let doms = categoryList.map((item,index)=>{
    return(
      <div className='main-category-wrapper'> 
        <div className='main-category-img'>
          <img src={imageList[index]}/>
        </div>
        <div className='main-category-text'>{item}</div>
      </div>
    )
  })
  return doms;
}
const Main = ({LinkToProject,LinkToFree,LinkToSign,LinkToLogin,logged}) => {
  console.log(logged);
  
  return (  
    <div className='main-wrapper'>
      <section className='main-background'>
        <h1 className='main-intro'>
          대학생을 위한 아웃소싱 플랫폼
        </h1>
        {!logged &&
        <div className='main-intro-under'>
          <button onClick={LinkToLogin}>로그인</button>
          <button onClick={LinkToSign}>회원가입</button>
        </div>}
        
      </section>

      <div className='main-select'>
        <div className='main-select-project' onClick={LinkToProject}>프로젝트 조회</div>
        <div className='main-select-free' onClick={LinkToFree}>프리랜서 조회</div>
      </div>

      <div className='main-currentnumber'>
          <div className='main-currentnumber-project'>
            <span>현재 등록된 프로젝트 수</span>
            <div>7</div>
          </div>

          <div className='main-currentnumber-resister'>
            <span>현재 등록된 프리랜서 수</span>
            <div>5</div>
          </div>

          <div className='main-currentnumber-done'>
            <span>현재 완료된 프로젝트 수</span>
            <div>1</div>
          </div>
        </div>
        
      <h1 className='main-intro2'>
        다양한 분야에서 사람을 만나보세요!
      </h1>

      <div className='main-category'>
        <Category/>
      </div>

    </div>
  )
}

export default Main
