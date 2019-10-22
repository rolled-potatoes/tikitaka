import React, { Component } from 'react';
import SignComponent from 'components/sign/Sign'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as singupActions from 'store/modules/signup.js'
class SignUp extends Component {
    state={
        passwordStr : "",
        password_check: false,
    }
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
    onSingUp = () => {
        const { 
            email, 
            password, 
            SingupActions,
            duplicate_check,
        } = this.props;
        const {
            password_check
        } = this.state;
        
        /**
         * 회원가입 api 연결 이전 확인 해야할 사항
         * 모든 항목 입력여부 확인, 닉네임 중복확인, 비밀번호 일치확인, 개인정보동의체크
         */
        if(email === "" || password === "" || !duplicate_check){

        }
        if(!password_check){
            return alert('비밀번호가 일치하지 않습니다.')
        }
        
        SingupActions.submit(email, password);
    }
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
            password_check
        } = this.state;
        return (
            <SignComponent
                passwordStr={passwordStr}
                onkeyPressInput={onkeyPressInput}
                password_check={password_check}
                email={email}
                password={password}
                passwordR={passwordR}
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
        organization: state.signup.get('organization'),
        agree: state.signup.get('agree'),
        duplicate_check: state.signup.get('duplicate_check'),
    }),
    (dispatch) => ({
        SingupActions: bindActionCreators(singupActions, dispatch)
    })
)(SignUp);