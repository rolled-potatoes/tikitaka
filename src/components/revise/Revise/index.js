import React from 'react'
import styles from './styles.scss'
import classnames from 'classnames'
import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import MypageSide from 'components/mypage/mypageSide'
import Button from '../../common/Button'
/*import { prependOnceListener } from 'cluster';*/
const cx = classnames.bind(styles)
const proImg = require('imgs/프로필.png')

const Input_date = ({ arr, inputChange, name, onDelete, onChangeDay,flag }) => {
  let temp = arr.map((item, index) => {
    const { getDate, things } = item

    return (
      <div className={cx('Revise-input-wrapper',{'Revise-input-wrapper2':!flag})}>
        {flag &&
            <div className={cx('Revise-input-dayPicker')}>
            <DayPickerInput
              value={new Date(getDate)}
              id={`${name}_${index}`}
              onDayChange={onChangeDay}
              dayPickerProps={{
                enableOutsideDaysClick: true,
                month: new Date(),
                todayButton: 'Today',
              }}
            />

          </div>
        }
        

        <div className={cx('Revise-input-input')}>
          <input className={cx('Revise-inputs', `${name}`)} id={index} value={things ===undefined? item:things} onChange={inputChange} />
        </div>

        <div className={cx('Revise-input-removeBtn')} >
          <button className={`${name}`} onClick={onDelete} id={index}>
            삭제
          </button>
        </div>

      </div>
    )
  })
  return temp;
}

//경력 학력 => 년도 
//기술 자격증 => 그냥
const Revise = ({
  info,
  inputdata,
  inputChange,
  onDelete,
  AddInput,
  onChangeDay,
  inputListChange,
  AddListInput,
}) => {

  const {
    name, organization, email,
    userId, grade,
    location, Intro,
    proList, follow
  } = info
  const {
    nickname,
    careerList,
    educationList,
    categoryList,
    licenseList,
  } = inputdata.toJS()


  return (
    <div className={cx('mypage-page')}>
      <div className={cx('mypageTxt')}>
        프로필 수정
      </div>
      <div className={cx('FreeLenserDetail-wrapper')}>
        <MypageSide
              nickName={nickname}
              organization={organization}
              location={location}
              Intro={Intro}
              grade={grade}
              proList={proList}
        />
        <div className={cx('revise-box')}>
          <div className={cx('info-box')}>
            
              <div className={cx('info-top')}>
                <div className={cx('info-txt')}>  
                
                기본정보
              </div>

          </div>
            <div className={cx('container')}>
              <tr className={cx('info')}>
                <th className={cx('Id')}>이메일</th><tr className={cx('compo')}>{email}</tr>
              </tr>
              <tr className={cx('info')}>
                <th>이름</th>
                <tr className={cx('compo')}>{name}</tr>
              </tr>
              <tr className={cx('info')}>
                <th>닉네임</th>
                <tr className={cx('inpassword')}>
                  <input value={nickname} />
                </tr>
              </tr>
              <tr className={cx('info')}>
                <th className={cx('password')}>기존 비밀번호         </th>
                <td className={cx('inpassword')}>
                  <input type="password" name="password" />
                </td>
              </tr>
              <tr className={cx('info')}>
                <th className={cx('password')}>변경할 비밀번호     </th>
                <td className={cx('inpassword')}>
                  <input type="password" name="newpassword" />
                </td>
              </tr>
              <tr className={cx('info')}>
                <th className={cx('password')}>비밀번호 확인        </th>
                <td className={cx('inpassword')}>
                  <input type="password" name="password2" />
                </td>
              </tr>
              <tr className={cx('info')}>
                <th className={cx('phonenumber')}>전화번호        </th>
                <td className={cx('inpassword')}>
                  <input type="number" name="password2" />
                </td>
              </tr>
              <tr className={cx('info')}>
                <th>지역</th>
                <tr className={cx('compo')}>
                  <td className={cx('inpassword')}>
                    <input type="text" name="password2" value={location}/>
                  </td>
                </tr>
              </tr>
            </div>
          </div>
          <div className={cx('info-box')}>
            <div className={cx('info-top')}>
              <div className={cx('info-txt')}>
                경력
              </div>
              <button value='careerList' onClick={AddInput} className='info-insert'>추가</button>
            </div>
            <Input_date
              arr={careerList}
              name='careerList'
              inputChange={inputChange}
              onDelete={onDelete}
              onChangeDay={onChangeDay}
              flag = {true}
            />

          </div>
          <div className={cx('info-box')}>
            <div className={cx('info-top')}>
              <div className={cx('info-txt')}>
                학력
              </div>
              <button value='educationList' onClick={AddInput} className='info-insert'>추가</button>
            </div>
            <Input_date
              arr={educationList}
              name='educationList'
              inputChange={inputChange}
              onChangeDay={onChangeDay}
              onDelete={onDelete}
              flag = {true}
            />
          </div>
          
          <div className={cx('info-box')}>
            <div className={cx('info-top')}>
              <div className={cx('info-txt')}>
                보유기술
              </div>
              <button value='categoryList' onClick={AddListInput} className='info-insert'>추가</button>
            </div>
              <Input_date
                arr={categoryList}
                name='categoryList'
                inputChange={inputListChange}
                flag ={false}
              />
          </div>

          <div className={cx('info-box')}>
            <div className={cx('info-top')}>
              <div className={cx('info-txt')}>
                자격증
              </div>
              <button value='licenseList' onClick={AddListInput} className='info-insert'>추가</button>
            </div>
            <Input_date
                arr={licenseList}
                name='licenseList'
                inputChange={inputListChange}
                flag ={false}
              />
          </div>

          <div className={(cx('end'))}>
            <div className={cx('end-button')}>
              <Button>수정완료</Button>
            </div>
          </div>
        </div>
      </div>

    </div>

  )

}
export default Revise
