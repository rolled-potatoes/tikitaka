import {createAction, handleActions} from 'redux-actions'
import {Map,List} from 'immutable'

const GET_INFO = 'info/GET_INFO'

export const getInfo = createAction(GET_INFO)

const initialState =Map({
    email:"",
    name :"",
    nickname :"",
    followList:List(),

})

export default handleActions({
    [GET_INFO] : (state,action)=>{
        return state.set('email','keep4404@gmail.com')
                    .set('name','박승환')
                    .set('nickname','potato')
                    .set('followList',["ak3198@naver.com","tjdtngkgh@naver.com","wlsaud@google.com"])
    }
},initialState)