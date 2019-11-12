import React from 'react'
import styles from './styles.scss'
import classnames from 'classnames'

const cx =classnames.bind(styles);
const List = ({data,agreeApplyAction,DenyApplyAction})=>{
  
  let list = data.map(item=>{
    const {nickname,email,_id} = item;
    return(
      <div className='candidate-content-item'>
        <div>{email}</div>
        <div>{nickname}</div>
        <button value ={_id} onClick={agreeApplyAction}>수락</button>
        <button value ={_id} onClick={DenyApplyAction}>거부</button>
      </div>
    )
  })
  return list
}
const ProjectCandidate = ({visible,onModals,data,agreeApplyAction,DenyApplyAction}) => {
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
