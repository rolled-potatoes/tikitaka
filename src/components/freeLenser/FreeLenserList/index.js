/**
 * 프리랜서 리스트를 출력하는 컴포넌트
 * userId, nickName, intro, grade ,categoryList(보유기술), careeList(경력)
 * educationList(학력) , lisenceList(자격증), proList(진행한 프로젝트)
 * 검색 정렬 필터 페이징 
 */
import React from 'react';
import styles from './styles.scss';
import { Link } from 'react-router-dom';
import classnames from 'classnames'
import StarRatings from 'react-star-ratings';
import Button from 'components/common/Button/index.js'
import {DropdownButton,ButtonToolbar,Dropdown} from 'react-bootstrap';

const imgSrc ="https://scontent.ficn3-1.fna.fbcdn.net/v/t1.0-1/p200x200/42135641_1894679573979032_7136233916314157056_n.jpg?_nc_cat=108&_nc_oc=AQlwd9nh7sPfN1VZJ75panQPdTySUMTdtP51y1RFleHYHAFS92s2yZlM4qDzHG5I8Wk&_nc_ht=scontent.ficn3-1.fna&oh=4a6b9e8645545cc0b5190f5e1c9b3a3a&oe=5DD275CF"

const cx = classnames.bind(styles)
const FreeLenserContent= ({list})=>{
  const doms=list.map(item =>{
    const {nickName,organization,grade,intro,categoryList,proList,id} = item;
    const cat = categoryList.map(item =>{
      return(
        <div className={cx('category-item')}>
          {item}
        </div>
      )
    })
    return(
      <div className={cx('FreeLenserList-post')}>
        <div className={cx('post-img','post-item')}>
          <Link to={`/detail/${id}`}>
            <img src={imgSrc}/>
          </Link>
        </div>
        <div className={cx('post-nickname','post-item')}>
          <Link to={`/detail/${id}`}>
            {nickName}
          </Link>
        </div>
        <div className={cx('post-organization','post-item')}>
          {organization}
        </div>
        <div className={cx('post-grade','post-item')}>
          <StarRatings
              rating={grade}
              starRatedColor='rgb(252, 234,33)'
              numberOfStars={5}
              starDimension='30px'
              starSpacing='2px'
              name='rating'
            />
        </div>
        <div className={cx('post-item','post-intro')}>
          {intro}
        </div>
        <div className={cx('post-skill','post-item')}>
          <div>보유기술</div>
          <div className={cx('categoryList','post-item')}>{cat}</div>
        </div>
        <div className={cx('post-pro','post-item')}>
          <div>진행 프로젝트 수</div>
          <div className={cx('prolength')}>{proList.length}</div>
        </div>
      </div>
    )
  })
  return(
    doms
  )
}
const FreeLenserList = ({list ,onChange,searchString,onKeyPress,onClickSearch}) => (
  <div className={cx('FreeLenserList-wrapper')}>
    <div className={cx('FreeLenserList-top')}>
      <h1 className={cx("title")}>
        프리랜서
      </h1>
      <div className={cx('searchBox')}>
        <ButtonToolbar>
            <DropdownButton
              size = 'lg'
              title={'카테고리'}
              id={`dropdown-variants-Secondary`}
              variant={'asdasdasd'}
            >
              <Dropdown.Item eventKey="1">이름</Dropdown.Item>
              <Dropdown.Item eventKey="2">기술</Dropdown.Item>
            </DropdownButton>
          </ButtonToolbar>
        <input className={cx('input-search')}onChange={onChange} value ={searchString} onKeyPress={onKeyPress}/>
        <button  className={cx('button-search')} onClick={onClickSearch}>검색</button>
      </div>
    </div>

    <div className={cx('FreeLenserList-filter')}>
      <Button>전체보기</Button>
      <Button>프로젝트 수</Button>
      <Button>평점순</Button>
    </div>
    <div className={cx('FreeLenserList-contents')}>
      <FreeLenserContent list = {list}/>
    </div>
  </div>
);

export default FreeLenserList
