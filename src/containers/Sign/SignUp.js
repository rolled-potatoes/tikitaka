/**
 * 회원가입 컨테이너
 * 이메일, 비밀번호, 비밀번호 확인, 닉네님, 소속, 개인정보동의 입력 받음.
 */
import React, { Component ,Fragment} from 'react';
import SignComponent from 'components/sign/Sign'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as singupActions from 'store/modules/signup.js'
import * as api from 'lib/api.js'
import {withRouter} from 'react-router-dom'
import Loading from '../../components/FindId/FindID/loading'
class SignUp extends Component {
    state={
        passwordStr : "", // 비밀번호 일치 여부 text
        password_check: false, // 비밀번호 일치 여부 flag
        modal : false,
    }
    /**
     * input에서 입력 할 때 onChange이벤트 처리
     */
    onChange_things =  (e) => {
        const { id, value } = e.target;
        let values=value;
        //공백방지
        let str_space = /\s/
        if(str_space.exec(value)){
            values= values.replace(' ','');
        }
        //--

        //리덕스에 입력
        const { SingupActions,password ,passwordR} = this.props;
        SingupActions.changeInput({ target: id, value: values })
        //--

        //비밀번호와 비밀번호 확인이 일치하는지 검사하여 표시할 텍스트 설정
        if(id === 'passwordR'){
            if( (password === value)){
                this.setState({
                    password_check: true,
                    passwordStr: '일치해요!'
                    
                })
            }
            else{
                this.setState({
                    password_check: false,
                    passwordStr : '일치하지 않아요!'
                })
            }
        }
        else if(id === 'password'){
            if( (passwordR === value)){
                this.setState({
                    password_check: true,
                    passwordStr: '일치해요!'
                })
            }
            else{
                this.setState({
                    password_check: false,
                    passwordStr : '일치하지 않아요!'
                })
            }
        }
        //--
    }

    /**
     * 입력받은거 확인 후 서버에 전송 함수 
     */
    onSingUp = async () => {
        const { 
            email, 
            password, 
            agree,
            nickname,
            location_,
            organization,
            name,
            history,
            SingupActions
        } = this.props;
        const {
            password_check,
        } = this.state;
        
        /**
         * 회원가입 api 연결 이전 확인 해야할 사항
         * 모든 항목 입력여부 확인, 닉네임 중복확인, 비밀번호 일치확인, 개인정보동의체크
         */
        // if(organization!=="" && name !== "" && email !== "" && password !== "" && duplicate_check &&agree &&password_check){
        //     SingupActions.submit(email, password,name,nickname,location_,organization);
        // }
        if(!password_check){
            return alert('비밀번호가 일치하지 않습니다.')
        }
        else if(agree && location_!==""&& organization!=="" && name !== "" && email !== "" && password !== ""){
            
            try{
                this.setState({
                    modal: true
                })
                const ret = await api.singup(email, password,name,nickname,location_,organization);
                if(ret.message){
                    alert(ret.message);
                    this.setState({
                        modal: false
                    })
                    return;
                }
                if(ret.flag === 'success'){
                        SingupActions.reset();
                        history.push(`/sign/success/${name}`)
                }
            }
            catch(e){
                console.log(e);
                
            }
            // const a = await SingupActions.submit(email, password,name,nickname,location,organization);
            
        }
        else{
            this.setState({
                modal: false
            })
            return alert('입력되지 않은 값이 있습니다.')
        }
        
        
    }
    
    /**
     * 개인정보동의 이벤트
     */
    onChange_agree = (e) => {
        const { checked, id } = e.target;
        const { SingupActions } = this.props;
        SingupActions.changeInput({ target: id, value: checked })
    }

    render() {
        const {
            email,
            password,
            passwordR,
            name,
            nickname,
            phone,
            organization,
            agree,
            location_,
            duplicate_check,
        } = this.props
        const {
            onChange_agree,
            onChange_things,
            onSingUp,
            onkeyPressInput,
        } = this
        const {
            passwordStr,
            password_check,
            modal,
        } = this.state;
        return (
            <Fragment>
                <SignComponent
                    passwordStr={passwordStr}
                    onkeyPressInput={onkeyPressInput}
                    password_check={password_check}
                    email={email}
                    password={password}
                    passwordR={passwordR}
                    location={location_}
                    name={name}
                    phone={phone}
                    nickname={nickname}
                    organization={organization}
                    agree={agree}
                    duplicate_check={duplicate_check}
                    onChange={onChange_things}
                    onSingUp={onSingUp}
                    onCheck={onChange_agree}
                />
                {modal&&
                    <Loading/>
                }

            </Fragment>
        );
    }
}

export default connect(
    (state) => ({
        email: state.signup.get('email'),
        password: state.signup.get('password'),
        passwordR: state.signup.get('passwordR'),
        name: state.signup.get('name'),
        nickname: state.signup.get('nickname'),
        phone: state.signup.get('phone'),
        location_: state.signup.get('location_'),
        organization: state.signup.get('organization'),
        agree: state.signup.get('agree'),
        duplicate_check: state.signup.get('duplicate_check'),
        
    }),
    (dispatch) => ({
        SingupActions: bindActionCreators(singupActions, dispatch)
    })
)(withRouter(SignUp));