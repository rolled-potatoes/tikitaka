import React from 'react'
import styles from './styles.scss'
import classnames from 'classnames'

const cx =classnames.bind(styles);
const List = ({data,agreeApplyAction,DenyApplyAction})=>{
  
  let list = data.map(item=>{
    const {nickname,email,_id,organization} = item;
    return(
      <div className='candidate-content-item' >
        <label for ={email}>{email}</label>
        <label for ={email}>{nickname}</label>
        <button value ={_id} onClick={agreeApplyAction}>수락</button>
        <button value ={_id} onClick={DenyApplyAction}>거부</button>
        <input type='checkbox' id = {email} className='checkboxs'/>
        <ul className ='hi'>
          <li>
            소속 : {organization}
          </li>
        </ul>
      </div>
    )
  })
  return list
}
const ProjectCandidate = ({visible,onModals,data,agreeApplyAction,DenyApplyAction}) => {
  console.log(data)
  return(
    <div className={cx('candidate-Wrapper',{"candidate-close":!visible})}>
      <div className='candidate-container'>
        <span className='close-btn' onClick={onModals}>
          <i className="far fa-times-circle"></i>
        </span>
        <div className='candidate-bottom'>
          <div className='candidate-td'> 
            <div>이메일</div>
            <div>닉네임</div>
          </div>
          <div className='candidate-content'>
            <List data={data} agreeApplyAction={agreeApplyAction} DenyApplyAction={DenyApplyAction}/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProjectCandidate
