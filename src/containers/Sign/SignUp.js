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
            
            organization,
            agree,
            duplicate_check,
        } = this.props
        const {
            onChange_agree,
            onChange_things,
        } = this
        return (
            <SignComponent
                email={email}
                password={password}
                passwordR={passwordR}
                name={name}
                nickname={nickname}
                organization={organization}
                agree={agree}
                duplicate_check={duplicate_check}
                onChange={onChange_things}
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
        organization: state.signup.get('organization'),
        agree: state.signup.get('agree'),
        duplicate_check: state.signup.get('duplicate_check'),
    }),
    (dispatch) => ({
        SingupActions: bindActionCreators(singupActions, dispatch)
    })
)(SignUp);