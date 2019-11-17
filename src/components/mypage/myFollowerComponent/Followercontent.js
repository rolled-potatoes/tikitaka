import React from 'react';

const List =({follower}) =>{
    let temp  = [];
    for(let i = 0 ; i< follower.length; i++){
        const {nickname, userId,_id} = follower[i];
        temp.push(
            <li className='follower-li' >
                <a href={`/freeLenser/detail/${_id}`}>
                <div className='follower-li-div1'>{nickname}</div>
                <div className='follower-li-div2'>{userId}</div>
                </a>
            </li>
        )
    }
    return temp;
}
const Followercontent = ({followerInfo}) => {
    return (
            <div className='follower-bottom'>
                <div className='follower-bottom-title'>
                    <div className='follower-bottom-title-nickname'>닉네임</div>
                    <div className='follower-bottom-title-email'>이메일</div>
                </div>

                <ul>
                    <List follower={followerInfo}/>
                </ul>
            </div>
    );
};

export default Followercontent;