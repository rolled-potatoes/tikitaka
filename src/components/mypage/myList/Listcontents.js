import React from 'react';
import {format} from 'lib/functions.js'
const List =({LinkToPost,projects})=>{
    let temp=[];

    for(let item of projects){
        console.log(item._id);
        
        temp.push(
            <li data-value={item._id} onClick={LinkToPost} className='myList-bottom-item'>
                <div className='myList-bottom-item-date'>
                    {format(new Date(item.writeDate))}
                </div>
                <div className='myList-bottom-item-title'>
                    {item.title}
                </div>
            </li>
        )
    }
    return temp;
}
const Listcontents = ({LinkToPost,projects}) => {
    return (
        <div className='myList-bottom'>
            <div className='myList-bottom-title'>
                <div className='myList-bottom-title-date'>등록일</div>
                <div className='myList-bottom-title-title'>제목</div>
            </div>
            <ul>
                <List 
                    LinkToPost={LinkToPost}
                    projects={projects}
                />
            </ul>
        </div>
    );
};

export default Listcontents;