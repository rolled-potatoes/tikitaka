/**
 * 회원가입 리덕스
 */

import {createAction, handleActions} from 'redux-actions'
import {Map, fromJS} from 'immutable'
import {pender} from 'redux-pender'

const CHANGE_INPUT = 'signup/CHANGE_INPUT'

export const changeInput = createAction(CHANGE_INPUT)

const initialState = Map({
    email:"",
    password:"",
    passwordR:"",
    name :"",
    nickname :"",
    organization :"",
    agree :false,
    duplicate_check: false,
})


export default handleActions({
    [CHANGE_INPUT] : (state,action)=>{
        const {target, value} = action.payload
        return state.set(target, value);
    }
},initialState)