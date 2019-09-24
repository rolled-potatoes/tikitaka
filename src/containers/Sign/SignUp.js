import React, { Component } from 'react';
import SignComponent from 'components/sign/Sign'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as singupActions from 'store/modules/signup.js'
class SignUp extends Component {

    onChange_things = (e) => {
        const { id, value } = e.target;
        const { SingupActions } = this.props;
        SingupActions.changeInput({ target: id, value: value })
    }   
    onSingUp= ()=>{
        const {email, password,SingupActions} = this.props;
        console.log(email,password);
        
       SingupActions.submit(email,password);

    }
    onChange_agree =(e)=>{
        const {checked,id} = e.target;
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
        } = this
        return (
            <SignComponent
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