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

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import { RingLoader } from 'react-spinners';
const imgSrc = "https://scontent.ficn3-1.fna.fbcdn.net/v/t1.0-1/p200x200/42135641_1894679573979032_7136233916314157056_n.jpg?_nc_cat=108&_nc_oc=AQlwd9nh7sPfN1VZJ75panQPdTySUMTdtP51y1RFleHYHAFS92s2yZlM4qDzHG5I8Wk&_nc_ht=scontent.ficn3-1.fna&oh=4a6b9e8645545cc0b5190f5e1c9b3a3a&oe=5DD275CF"

const cx = classnames.bind(styles)
const FreeLenserContent = ({ list }) => {
  const doms = list.map(item => {
    const { nickname, organization, intro, categoryList, proList, _id,userId } = item;
    
    const cat = categoryList.map(item => {
      return (
        <div className={cx('category-item')}>
          {item}
        </div>
      )
    })
    return (
      <div className={cx('FreeLenserList-post')}>
        <div className={cx('post-img', 'post-item')}>
          <Link to={`/freeLenser/detail/${_id}`}>
            <img src={`/public/images/${userId}.PNG`} />
          </Link>
        </div>
        <div className={cx('post-nickname', 'post-item')}>
          <Link to={`/freeLenser/detail/${_id}`}>
            {nickname}
          </Link>
        </div>
        <div className={cx('post-organization', 'post-item')}>
          {organization}
        </div>
        <div className={cx('post-item', 'post-intro')} title={intro}>
          {intro}
        </div>
        <div className={cx('post-skill', 'post-item')}>
          <div>보유기술</div>
          <div className={cx('categoryList', 'post-item')}>{cat}</div>
        </div>
        <div className={cx('post-pro', 'post-item')}>
          <div>진행 프로젝트 수</div>
          <div className={cx('prolength')}>{proList.length}</div>
        </div>
      </div>
    )
  })
  return (
    doms
  )
}
const FreeLenserList = ({ showcat, _ontoggle, list, onChange, 
  searchString, onKeyPress, onClickSearch, loadding, catName,onClickCat }) => (

  <div className={cx('FreeLenserList-wrapper')}>
    <div className={cx('FreeLenserList-top')}>
      <h1 className={cx("title")}>
        프리랜서
      </h1>

      <div className={cx('searchBox')}>
        <Dropdown toggle={_ontoggle} isOpen={showcat}>
          <DropdownToggle caret>
            {catName}
            </DropdownToggle>
          <DropdownMenu>
            <DropdownItem value ="이름"onClick={onClickCat}>이름</DropdownItem >
            <DropdownItem divider />
            <DropdownItem value = "기술" onClick={onClickCat}>기술</DropdownItem >
          </DropdownMenu>
        </Dropdown>

        <input className={cx('input-search')} onChange={onChange} value={searchString} onKeyPress={onKeyPress} />
        <button className={cx('button-search')} onClick={onClickSearch}>검색</button>
      </div>
    </div>
    <div className={cx('FreeLenserList-filter')}>
    </div>
    <div className={cx('FreeLenserList-contents')}>
      <FreeLenserContent list={list} />
    </div>
    <div className={cx('loadding-div', { 'hidden': loadding })}>
      <RingLoader
        sizeUnit={"px"}
        size={150}
        color={'#123abc'}
        loading={true}
      />
    </div>
  </div>
);

export default FreeLenserList
