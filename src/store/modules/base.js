import {createAction, handleActions} from 'redux-actions'
import {pender} from 'redux-pender'
import {Map,List} from 'immutable'
import * as api from 'lib/api.js'
const LOGIN = 'base/LOGIN'
const LOGOUT = 'base/LOGOUT'

const CHANGE_EMAIL= 'base/CHANGE_EMAIL'
const CHANGE_PASSWORD = 'base/CHANGE_PASSWORD'
const CHECK_LOGIN = 'base/CHECK_LOGIN'
const LOGINERROR = 'base/LOGINERROR'
const TEMP_LOGIN = 'base/TEMP_LOGIN'

const GET_INFO = 'info/GET_INFO'

export const getInfo = createAction(GET_INFO)
export const login = createAction(LOGIN, api.login)
export const logout = createAction(LOGOUT,api.logout);
export const loginError = createAction(LOGINERROR)
export const changeEmail = createAction(CHANGE_EMAIL)
export const changePassword = createAction(CHANGE_PASSWORD)
export const checkLogin = createAction(CHECK_LOGIN,api.checkLogin)
export const tempLogin = createAction(TEMP_LOGIN)

const initialState = Map({
    email : '',
    password:'',
    loginError:false,
    logged : false,

    myemail:"",
    myname :"",
    mynickname :"",
    myfollowList:List(),
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
    [GET_INFO] : (state,action)=>{
        return state.set('myemail','keep4404@gmail.com')
                    .set('myname','박승환')
                    .set('mynickname','potato')
                    .set('myfollowList',["ak3198@naver.com","tjdtngkgh@naver.com","wlsaud@google.com"])
    },
    ...pender({
        type: LOGIN,
        onSuccess:(state,action) =>{
            return state.set('logged',true)
                        .set('email','')
                        .set('password','')
                        .set('myemail','keep4404@gmail.com')
                        .set('myname','박승환')
                        .set('mynickname','potato')
                        .set('myfollowList',["ak3198@naver.com","tjdtngkgh@naver.com","wlsaud@google.com"])
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
            console.log('chk');
            
            return state.set('logged',logged)
                        .set('myemail','keep4404@gmail.com')
                        .set('myname','박승환')
                        .set('mynickname','potato')
                        .set('myfollowList',["ak3198@naver.com","tjdtngkgh@naver.com","wlsaud@google.com"])
        }
    }),
    ...pender({
        type:LOGOUT,
        onSuccess:(state,action)=>{
            return state.set('logged',false)
        }
    })
},initialState)