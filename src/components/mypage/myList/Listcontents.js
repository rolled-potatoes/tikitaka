import React from 'react';
const List =({LinkToPost})=>{
    let temp=[];
    for(let  i = 1 ; i < 10 ; i++){
        temp.push(
            <li value={i} onClick={LinkToPost} className='myList-bottom-item'>
                <div className='myList-bottom-item-date'>
                    2019-09-07
                </div>
                <div className='myList-bottom-item-title'>
                    행사 중개 플랫폼 웹서비스 제작
                </div>
            </li>
        )
    }
    return temp;
}
const Listcontents = ({LinkToPost}) => {
    return (
        <div className='myList-bottom'>
            <div className='myList-bottom-title'>
                <div className='myList-bottom-title-date'>등록일</div>
                <div className='myList-bottom-title-title'>제목</div>
            </div>
            <ul>
                <List 
                    LinkToPost={LinkToPost}
                />
            </ul>
        </div>
    );
};

export default Listcontents;