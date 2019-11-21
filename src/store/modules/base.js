import {createAction, handleActions} from 'redux-actions'
import {pender} from 'redux-pender'
import {Map,List,fromJS} from 'immutable'
import * as api from '../../lib/api'
const LOGIN = 'base/LOGIN'
const LOGOUT = 'base/LOGOUT'
const NAVER_LOGIN= 'base/NAVER_LOGIN'
const CHANGE_EMAIL= 'base/CHANGE_EMAIL'
const CHANGE_PASSWORD = 'base/CHANGE_PASSWORD'
const CHECK_LOGIN = 'base/CHECK_LOGIN'
const LOGINERROR = 'base/LOGINERROR'
const TEMP_LOGIN = 'base/TEMP_LOGIN'
const TEST = 'base/TEST'
const GET_INFO = 'base/GET_INFO'
const NORFOUND ='base/NORFOUND'

export const naverLogin = createAction(NAVER_LOGIN,api.naver)
export const test = createAction(TEST,api.test)
export const getInfo = createAction(GET_INFO)
export const login = createAction(LOGIN, api.login)
export const logout = createAction(LOGOUT,api.logout);
export const loginError = createAction(LOGINERROR)
export const changeEmail = createAction(CHANGE_EMAIL)
export const changePassword = createAction(CHANGE_PASSWORD)
export const checkLogin = createAction(CHECK_LOGIN,api.checkLogin)
export const tempLogin = createAction(TEMP_LOGIN)
export const notFound = createAction(NORFOUND)

const initialState = Map({
    email : '',
    password:'',
    loginError:false,
    logged : false,
    myInfo:"",
    timeline: "",
    pageNot: false,
    isAPI:false
})

export default handleActions ({
    [NORFOUND] : (state,action)=>{
        return state.set('pageNot',!state.get('pageNot'))
    },  
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
        const myinfo = api.getMyInfo();
        return state.set('myInfo',myinfo)
    },
    ...pender({
        type: LOGIN,
        onSuccess:(state,action) =>{
        const {data} =action.payload
        if(action.payload.data.message){
            return state.set('logged',false)
        }
            return state.set('logged',true)
                        .set('myInfo',data.user)
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
            const {data} =action.payload    
            return state.set('logged',data.logged)
                        .set('myInfo',data.user?data.user:"")
                        .set('timeline',data.timeline?data.timeline:"")
                        .set('isAPI',data.isAPI? data.isAPI : false)
        },
        
    }),
    ...pender({
        type:LOGOUT,
        onSuccess:(state,action)=>{
            console.log('logout');
            localStorage.logged= 'false'
            return initialState
        },
        onError:(state,action)=>{
            console.log('logout fales');
            
            return state;
        }
    }),
    ...pender({
        type:TEST,
        onSuccess:(state,action)=>{
            return state;
        }
    })
},initialState)