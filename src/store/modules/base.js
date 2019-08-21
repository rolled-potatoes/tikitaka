import {createAction, handleActions} from 'redux-actions'
import {pender} from 'redux-pender'
import {Map} from 'immutable'
import * as api from 'lib/api.js'
const LOGIN = 'base/LOGIN'
const LOGOUT = 'base/LOGOUT'

const CHANGE_EMAIL= 'base/CHANGE_EMAIL'
const CHANGE_PASSWORD = 'base/CHANGE_PASSWORD'
const CHECK_LOGIN = 'base/CHECK_LOGIN'
const LOGINERROR = 'base/LOGINERROR'
const TEMP_LOGIN = 'base/TEMP_LOGIN'

export const login = createAction(LOGIN, api.login)
export const logout = createAction(LOGOUT,api.logout);
export const loginError = createAction(LOGINERROR)
export const changeEmail = createAction(CHANGE_EMAIL)
export const changePassword = createAction(CHANGE_PASSWORD)
export const checkLogin = createAction(CHECK_LOGIN)
export const tempLogin = createAction(TEMP_LOGIN)

const initialState = Map({
    email : '',
    password:'',
    loginError:false,
    logged : false
})

export default handleActions ({
    [LOGINERROR] : (state,action) =>{
        return state.set('loginError',false)
    },
    [CHANGE_EMAIL]:(state,action)=>{
        const {payload:value} = action;
        return state.set('email',value)
    },
    [CHANGE_PASSWORD]:(state,action)=>{
        const {payload:value} =action
        return state.set('password',value)
    },
    [TEMP_LOGIN] : (state,action)=>{
        return state.set('logged', true)
    },
    ...pender({
        type: LOGIN,
        onSuccess:(state,action) =>{
            return state.set('logged',true)
                        .set('email','')
                        .set('password','')
        },
        onError:(state,action)=>{
            return state.set('email','')
                        .set('password','')
                        .set('loginError',true)
        }
    }),
    ...pender({
        type : CHECK_LOGIN,
        onSuccess:(state,action) =>{
            const {logged} = action.payload.data
            return state.set('logged',logged)
        }
    }),
    ...pender({
        type:LOGOUT,
        onSuccess:(state,action)=>{
            return state.set('logged',false)

        }
    })
},initialState)