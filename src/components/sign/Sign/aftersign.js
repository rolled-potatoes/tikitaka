import React from 'react';
import {withRouter} from 'react-router-dom'
const logo = require('imgs/logo.png')
const aftersign = ({match,history}) => {
    const {name} = match.params;
    return (
        <div className='after-warpper'>
            <div className='after-logo-container'>
                <img src = {logo}/>
            </div>

            <div className='after-contant'>
                <p>
                    {name}님 환영합니다.
                </p>
                <p>
                    이메일 인증완료 후 로그인이 가능합니다.
                </p>
            </div>

            <div className='after-button'>
                <button onClick={()=>{history.push('/')}}>
                    홈으로
                </button>
            </div>
        </div>
    );
};

export default withRouter(aftersign);