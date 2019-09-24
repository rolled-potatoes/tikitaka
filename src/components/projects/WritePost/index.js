import React from 'react'
import styles from './styles.scss'
import classNames from 'classnames'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import datas from 'data/datas.json';
import Button from 'components/common/Button/index.js'
const cx = classNames.bind(styles)

const WritePost = ({onSubmit,onClickReset,onClickCategory,onDayClick,onChangeInput,title,price,dueDate,period,maxPeople,description}) => {
  const category = datas.categoryList;
  return (
    <div className={cx('WritePost-wrapper')}>
      <h1 className={cx('WritePost-top')}>
        프로젝트 등록
    </h1>
      <div className={cx('WritePost-content')}>
        <div className={cx('WritePost-title', 'pair', 'line')}>
          <div className={cx('item-title')}>제목</div>
          <input id ='title' onChange={onChangeInput} value={title}/>
        </div>
        <div className={cx('WritePost-price', 'pair', 'line')}>
          <div className={cx('item-title')}>비용</div>
          <div className={cx('price-input')}>
            <input id='price' value ={price }type='number' onChange={onChangeInput} placeholder='단위 : 10,000'/>만원
          </div>
        </div>
        <div className={cx('pair', 'line','Write-dueDate')}>
          <div className={cx('item-title')}>모집기간</div>
            <DayPickerInput 
              onDayChange={onDayClick}
              value ={dueDate}
              placeholder ='날짜 선택'
              dayPickerProps={{
                enableOutsideDaysClick :true,
                month: new Date(),
                todayButton: 'Today',
              }}
            />
        </div>
        <div className={cx('pair')}>
          <div className={cx('item-title')}>분야</div>
          <div className={cx('category-wrapper')}>
            {category.map(item => {
              const {id,category} = item
              return (
                <button className={cx('category-item')} value = {id} onClick={onClickCategory}>{category}</button>
              )
            })}
          </div>
        </div>
        <div className={cx('others')}>
          <div className={cx('WritePost-period', 'others-item', 'line')}>
            <div className={cx('item-title')}>예상작업기간</div>
            <div className={cx('text')}>
              < input id='period' value={period} type='number' onChange={onChangeInput}/>일
            </div>
          </div>

          <div className={cx('WritePost-maxPeople', 'others-item', 'line')}>
            <div className={cx('item-title')}>모집인원</div>
            <div className={cx('text')}>
              <input placeholder=""  value={maxPeople} type='number' onChange={onChangeInput} id='maxPeople'/>명

            </div>
          </div>
        </div>

        <div className={cx('WritePost-description')}>
          <div className={cx('item-title', 'description-title')}>상세설명</div>
          <textarea className={cx('description-textArea')} id='description' value ={description} onChange={onChangeInput}/>
        </div>

        <div className={cx('btns')}>
          <Button theme='submit-btn' onClick={onSubmit}>등록</Button>
          <Button theme='submit-btn' onClick={onClickReset}>초기화</Button>
        </div>
      </div>
    </div>
  )
}

export default WritePost
