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
    onkeyPressInput = (e) =>{
        console.log(e.which);
        
        if(e.which  === 32){
            console.log(false);
            
            return false;
        }
    }
    componentDidMount(){

    }
    onChange_things = async (e) => {
        const { id, value } = e.target;
        console.log(e.which);
        
        const { SingupActions,password ,passwordR} = this.props;
        await SingupActions.changeInput({ target: id, value: value })
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
    }
    onSingUp = () => {
        const { email, password, SingupActions } = this.props;
        const {
            password_check
        } = this.state;
        if(email === "" || password === "")
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