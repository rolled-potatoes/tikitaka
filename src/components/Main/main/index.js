
import React from 'react'
import styles from './styles.scss'
import classnames from 'classnames'
import {Link} from'react-router-dom'
import Button from '../../common/Button'
const cx = classnames.bind(styles)
const adImg=require('imgs/광고.png')
const deImg=require('imgs/디자인.png')
const movImg=require('imgs/영상.png')
const transImg=require('imgs/번역.png')
const contImg=require('imgs/콘텐츠제작.png')
const marcketImg=require('imgs/마케팅.png')
const lesImg=require('imgs/레슨.png')
const doImg=require('imgs/문서.png')
const proImg=require('imgs/프로필.png')

  const Main = ({}) => (
    <container>
    <div className={cx('main-page')}>
      <section class="ad">
      <a className={cx('advertise')}>
          <img src={adImg}/></a></section>
      <div className={cx('category')}>
        <div className={cx('category-txt')}>
          새로운 프로젝트를 시작해보세요!
        </div>
      <div className={cx('top-cate')}>
        <th className={cx('api-design')}>
          <Button theme={'apibtn'}>
            <img src={deImg}/>
          </Button>
          <div className={cx('icon-text')}>디자인</div>
        </th>
        <td className={cx('api-design')}>
          <Button theme={'apibtn'}>
            <img src={movImg}/>
          </Button>
          <div className={cx('icon-text')}>영상</div>
        </td>
        <td className={cx('api-design')}>
          <Button theme={'apibtn'}>
            <img src={transImg}/>
          </Button>
          <div className={cx('icon-text')}>번역</div>
        </td>
        <td className={cx('api-design')}>
          <Button theme={'apibtn'}>
            <img src={contImg}/>
          </Button>
          <div className={cx('icon-text')}>콘텐츠 제작</div>
        </td>
       </div>
       </div>
    <div className={cx('category2')}>
      <div className={cx('bottom-cate')}>
      <td className={cx('api-marcket')}>
          <Button theme={'apibtn'}>
            <img src={marcketImg}/>
          </Button>
          <div className={cx('icon-text')}>마켓팅</div>
      </td>
      <td className={cx('api-marcket')}>
          <Button theme={'apibtn'}>
            <img src={doImg}/>
          </Button>
          <div className={cx('icon-text')}>문서</div>
        </td>
        <td className={cx('api-marcket')}>
          <Button theme={'apibtn'}>
            <img src={lesImg}/>
          </Button>
          <div className={cx('icon-text')}>레슨</div>
        </td>
      </div>
      </div>
      <div class={cx('follow')}>
        <th class={cx('pro-box')}>
        <tr className={cx('pro List[]')}>
          <img src={proImg}/>
        </tr>
        </th>
        <td className={cx('name-box')}>
        <td className={cx('project-team')}>
        대구대학교 사진동아리
       </td>
      <tr className={cx('writeDate')}>
        1일전
      </tr>
        </td>
      </div>
      <div class="x">x</div>
    </div>
    </container>
  );
  
  export default Main
  