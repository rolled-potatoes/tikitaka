import React, { Component,Fragment } from 'react';
import Findcomponent from 'components/FindId/FindID'
import Loading from 'components/FindId/FindID/loading.js'
import {findPassword} from 'lib/api'

/**
 * 비밀번호 변경 페이지
 * api에 필요한 값 post- userId, => return값 flag : (fail or suceess) , message :(alert 값)
 */
class password extends Component {
    state={
        email : null,
        loading:false,
    }
    /**
     * 비밀번호 입력창 값 받아옴
     */
    onChangeInput=(e)=>{
        const {value} = e.target
        this.setState({
            email : value
        })
    }

    onClickSubmit=async ()=>{
        const {email} = this.state;
        this.setState({
            loading:true
        })
        let res =await findPassword(email);
        this.setState({
            loading:false
        })
        const {flag,message} =res
        if(flag === 'success'){
            alert(message)
            window.location.href='/'
        }
        else{
            alert(message)
            
        }
        
    }
    render() {
        const {
            onChangeInput,
            onClickSubmit
        } =this
        const {
            email,loading

        } =this.state
        console.log(loading);
        
        return (
            <Fragment>
                <Findcomponent
                    onChange ={onChangeInput}
                    onClick= {onClickSubmit}
                    email={email}
                />
                {loading &&
                    <Loading />
                }
                
            </Fragment>
        );
    }
}

export default password;