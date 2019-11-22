/**
 * 회원가입 리덕스
 */

import {createAction, handleActions} from 'redux-actions'
import {Map, fromJS} from 'immutable'
import {pender} from 'redux-pender'
import * as api from 'lib/api.js'

const RESET = 'signup/RESET';
const CHANGE_INPUT = 'signup/CHANGE_INPUT'
const SUBMIT = 'signup/SUBMIT'

export const reset = createAction(RESET)
export const changeInput = createAction(CHANGE_INPUT)
export const submit = createAction(SUBMIT,api.singup)

const initialState = Map({
    email:"",
    password:"",
    passwordR:"",
    name :"",
    nickname :"",
    organization :"",
    location_:"",
    agree :false,
})


export default handleActions({
    [CHANGE_INPUT] : (state,action)=>{
        const {target, value} = action.payload
        return state.set(target, value);
    },
    [RESET]:(state,action)=>{
        return initialState
    },
    ...pender({
        onSuccess:(state,action) =>{
            console.log('success');
            return initialState
        },
        onError:(state,action)=>{
            console.log('error');
            return state;
        }
    })
},initialState)