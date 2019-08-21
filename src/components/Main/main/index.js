
import React from 'react'
import styles from './styles.scss'
import classnames from 'classnames'
import { Link } from 'react-router-dom'
import Button from '../../common/Button'
import { COPYFILE_EXCL } from 'constants';
const cx = classnames.bind(styles)
const adImg = require('imgs/광고.png')
const deImg = require('imgs/디자인.png')
const movImg = require('imgs/영상.png')
const transImg = require('imgs/번역.png')
const contImg = require('imgs/콘텐츠제작.png')
const marcketImg = require('imgs/마케팅.png')
const lesImg = require('imgs/레슨.png')
const doImg = require('imgs/문서.png')
const proImg = require('imgs/프로필.png')
const dumyData = {
  title: "행사 중개 플랫폼 웹서비스 제작",
  price: 500,
  nickname: ['Tasha'],
  dueDate: new Date("2020-01-01"),
  categoryList: ["front end", "Back end", "Android", "Android", "Android"],
  writeDate: new Date(),
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  period: 45,
  nickName: "ParkSeungHwan",
  organization: "YU student",
  candiList: ['tom', 'bob', 'kim'],
  freeList: ['park'],
  maxPeople: 5,
}

const Main = ({ }) => {
  const { nickname, writeDate, dueDate, title, price, categoryList, description, period
    , nickName, organization, candiList, maxPeople } = dumyData
  return (
    <container>
      <div className={cx('main-page')}>
        <section class="ad">
          <a className={cx('advertise')}>
            <img src={adImg} /></a></section>
        <div className={cx('category')}>
          <div className={cx('category-txt')}>
            새로운 프로젝트를 시작해보세요!
        </div>
          <div className={cx('top-cate')}>
            <th className={cx('api-design')}>
              <Button theme={'apibtn'}>
                <img src={deImg} />
              </Button>
              <div className={cx('icon-text')}>디자인</div>
            </th>
            <td className={cx('api-design')}>
              <Button theme={'apibtn'}>
                <img src={movImg} />
              </Button>
              <div className={cx('icon-text')}>영상</div>
            </td>
            <td className={cx('api-design')}>
              <Button theme={'apibtn'}>
                <img src={transImg} />
              </Button>
              <div className={cx('icon-text')}>번역</div>
            </td>
            <td className={cx('api-design')}>
              <Button theme={'apibtn'}>
                <img src={contImg} />
              </Button>
              <div className={cx('icon-text')}>콘텐츠 제작</div>
            </td>
          </div>
        </div>
        <div className={cx('category2')}>
          <div className={cx('bottom-cate')}>
            <td className={cx('api-marcket')}>
              <Button theme={'apibtn'}>
                <img src={marcketImg} />
              </Button>
              <div className={cx('icon-text')}>마켓팅</div>
            </td>
            <td className={cx('api-marcket')}>
              <Button theme={'apibtn'}>
                <img src={doImg} />
              </Button>
              <div className={cx('icon-text')}>문서</div>
            </td>
            <td className={cx('api-marcket')}>
              <Button theme={'apibtn'}>
                <img src={lesImg} />
              </Button>
              <div className={cx('icon-text')}>레슨</div>
            </td>
          </div>
        </div>
        <div className={cx('follow')}>
          <div className={cx('timeTxt')}>
            최신 등록 프로젝트
        </div>
          <div className={cx('Card')}>
            <div className={cx('topBox')}>
              <th className={cx('pro-box')}>
                <tr className={cx('thumbnail')}>
                  <img src={proImg} />
                </tr>
              </th>
              <div className={cx('name-box')}>
                <div className={cx('project-nickname')}>
                  {nickname}
                </div>
                <div className={cx('writeDate')}>
                  1일전
        </div>
              </div>
            </div>
            <td className={cx('project-box')}>
              <div className={cx('post-title')}>
                {title}
              </div>
              <div className={cx('post-box')}>
                <div className={cx('table-item')}>
                  예상비용          :          {price}
                </div>
                <div className={cx('table-item')}>
                  예상기간          :          {period}
                </div>
                <div className={cx('table-item')}>
                  모집인원          :          {maxPeople}
                </div>
                <div className={cx('categoryList')}>
                  <div className={cx('item-contents')}>
                    {categoryList.map(cat => {
                      return (
                        `${cat}, `
                      )
                    })}
                  </div>
                </div>

              </div>
            </td>
          </div>
          <div className={cx('Card')}>
            <div className={cx('topBox')}>
              <th className={cx('pro-box')}>
                <tr className={cx('thumbnail')}>
                  <img src={proImg} />
                </tr>
              </th>
              <div className={cx('name-box')}>
                <div className={cx('project-nickname')}>
                  {nickname}
                </div>
                <div className={cx('writeDate')}>
                  1일전
        </div>
              </div>
            </div>
            <td className={cx('project-box')}>
              <div className={cx('post-title')}>
                {title}
              </div>
              <div className={cx('post-box')}>
                <div className={cx('table-item')}>
                  예상비용          :          {price}
                </div>
                <div className={cx('table-item')}>
                  예상기간          :          {period}
                </div>
                <div className={cx('table-item')}>
                  모집인원          :          {maxPeople}
                </div>
                <div className={cx('categoryList')}>
                  <div className={cx('item-contents')}>
                    {categoryList.map(cat => {
                      return (
                        `${cat}, `
                      )
                    })}
                  </div>
                </div>

              </div>
            </td>
          </div>
          <div className={cx('Card')}>
            <div className={cx('topBox')}>
              <th className={cx('pro-box')}>
                <tr className={cx('thumbnail')}>
                  <img src={proImg} />
                </tr>
              </th>
              <div className={cx('name-box')}>
                <div className={cx('project-nickname')}>
                  {nickname}
                </div>
                <div className={cx('writeDate')}>
                  1일전
        </div>
              </div>
            </div>
            <td className={cx('project-box')}>
              <div className={cx('post-title')}>
                {title}
              </div>
              <div className={cx('post-box')}>
                <div className={cx('table-item')}>
                  예상비용          :          {price}
                </div>
                <div className={cx('table-item')}>
                  예상기간          :          {period}
                </div>
                <div className={cx('table-item')}>
                  모집인원          :          {maxPeople}
                </div>
                <div className={cx('categoryList')}>
                  <div className={cx('item-contents')}>
                    {categoryList.map(cat => {
                      return (
                        `${cat}, `
                      )
                    })}
                  </div>
                </div>

              </div>
            </td>
          </div>
          <div className={cx('Card')}>
            <div className={cx('topBox')}>
              <th className={cx('pro-box')}>
                <tr className={cx('thumbnail')}>
                  <img src={proImg} />
                </tr>
              </th>
              <div className={cx('name-box')}>
                <div className={cx('project-nickname')}>
                  {nickname}
                </div>
                <div className={cx('writeDate')}>
                  1일전
        </div>
              </div>
            </div>
            <td className={cx('project-box')}>
              <div className={cx('post-title')}>
                {title}
              </div>
              <div className={cx('post-box')}>
                <div className={cx('table-item')}>
                  예상비용          :          {price}
                </div>
                <div className={cx('table-item')}>
                  예상기간          :          {period}
                </div>
                <div className={cx('table-item')}>
                  모집인원          :          {maxPeople}
                </div>
                <div className={cx('categoryList')}>
                  <div className={cx('item-contents')}>
                    {categoryList.map(cat => {
                      return (
                        `${cat}, `
                      )
                    })}
                  </div>
                </div>

              </div>
            </td>
          </div>

        </div>
      </div>
    </container>
  )
}

export default Main
