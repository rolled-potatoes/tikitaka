import React from 'react'
import styles from './styles.scss'
import classnames from 'classnames'

//const categorys = ["디자인", "영상", '번역', '코딩', '음악', '공학', '스터디', '기타'];
const cx =classnames.bind(styles);
const List = ({data,agreeApplyAction,DenyApplyAction})=>{
  
  let list = data.map(item=>{
    
    const {nickname,email,_id,organization,categoryList} = item;
    let data =' ';
    let i =0  ;
    if(categoryList!=null){

      for(let item of categoryList){
        
        data = data +' '+ item + (categoryList.length-1 === i? '':', ')
        i ++;
      }
    }
    return(
      <div className='candidate-content-item' >
        <label for ={email}>{email}</label>
        <label for ={email}>{nickname}</label>
        <button value ={_id} onClick={agreeApplyAction}>수락</button>
        <button value ={_id} onClick={DenyApplyAction}>거부</button>
        <input type='checkbox' id = {email} className='checkboxs'/>
        <ul className ='hi'>
          <li>
            <div>소속 : </div>
            <div>{organization} </div>
            
            
          </li>
          <li>
            <div>분야 : </div><div>{data}</div>
          </li>
        </ul>
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
