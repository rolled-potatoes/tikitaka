import React from 'react';

const List =({follower}) =>{
    let temp  = [];
    for(let i = 0 ; i< follower.length; i++){
        const {nickName, email,id} = follower[i];
        temp.push(
            <li className='follower-li'>
                <div className='follower-li-div1'>{nickName}</div>
                <div className='follower-li-div2'>{email}</div>
                <button>취소</button>
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