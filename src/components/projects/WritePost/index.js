import React from 'react'
import styles from './styles.scss'
import classNames from 'classnames'
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import datas from 'data/datas.json';
import Button from 'components/common/Button/index.js'
const cx = classNames.bind(styles)

const WritePost = ({ }) => {
  const category = datas.category;
  return (
    <div className={cx('WritePost-wrapper')}>
      <h1 className={cx('WritePost-top')}>
        프로젝트 등록
    </h1>
      <div className={cx('WritePost-content')}>
        <div className={cx('WritePost-title', 'pair', 'line')}>
          <div className={cx('item-title')}>제목</div>
          <input />
        </div>
        <div className={cx('WritePost-price', 'pair', 'line')}>
          <div className={cx('item-title')}>비용</div>
          <input />
        </div>
        <div className={cx('pair', 'line')}>
          <div className={cx('item-title')}>모집기간</div>
          {/* <DayPicker /> */}
        </div>
        <div className={cx('pair')}>
          <div className={cx('item-title')}>분야</div>
          <div className={cx('category-wrapper')}>
            {category.map(item => {
              return (
                <div className={cx('category-item')}>{item}</div>
              )
            })}
          </div>
        </div>
        <div className={cx('others')}>
          <div className={cx('WritePost-period', 'others-item', 'line')}>
            <div className={cx('item-title')}>예상작업기간</div>
            <div className={cx('text')}>
              < input />일
            </div>
          </div>

          <div className={cx('WritePost-maxPeople', 'others-item', 'line')}>
            <div className={cx('item-title')}>모집인원</div>
            <div className={cx('text')}>
              <input placeholder="" />명

            </div>
          </div>
        </div>

        <div className={cx('WritePost-description')}>
          <div className={cx('item-title', 'description-title')}>상세설명</div>
          <textarea className={cx('description-textArea')} />
        </div>

        <div className={cx('btns')}>
          <Button theme='submit-btn'>등록</Button>
          <Button theme='submit-btn'>초기화</Button>
        </div>
      </div>
    </div>
  )
}

export default WritePost
