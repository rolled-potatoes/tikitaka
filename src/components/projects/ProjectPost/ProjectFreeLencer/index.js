
import React from 'react'
import './styles.scss'

const List = ({ freeList,onClickRemove,mycontent }) => {
  let a = freeList.map(item => {
    const { _id, nickname, email } = item;
    return (
      <li>
        <div>{nickname}</div>
        <div>{email}</div>
        {!mycontent&&
          <button value={_id} onClick={onClickRemove}>제거</button>
        }
      </li>
    )
  })
  return a;
}
const ProjectFreeLencer = ({ freeList,onModal,onClickRemove ,mycontent}) => {
  
  return (
    <div className='prjectFree-wrapper'>
      <div className='projectFree-top'>
        <span className='close-btn' onClick={onModal}>
          <i className="far fa-times-circle"></i>
        </span>
      </div>

      <ul>
        <li>
          <div>닉네임</div>
          <div>메일</div>
        </li>
        <List freeList={freeList} onClickRemove={onClickRemove} mycontent={mycontent}/>
      </ul>
    </div>
  )
}

export default ProjectFreeLencer
