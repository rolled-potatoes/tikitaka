//단일 포스트 상태를 다룸
import {createAction, handleActions} from 'redux-actions'
import {Map, fromJS} from 'immutable'
import {pender} from 'redux-pender'
import * as api from '../../lib/api'

const GET_POST = 'ProjectPost/GET_POST'
const GET_CANDIDATE = 'ProjectPost/GET_CANDIDATE'
const MODAL_VISIBLE = 'ProjectPost/MODAL_VISIBLE'

export const getPost = createAction(GET_POST)
export const getCandiInfo = createAction(GET_CANDIDATE)
export const onModal = createAction(MODAL_VISIBLE)
const initialState=Map({
    project:"",
    modalVisible : false,
    candidateList: [{}],
})

export default handleActions({
    [GET_POST] : (state,action) =>{
        const{id} = action.payload
        const data = api.getPost(id);
        return state.set('project',data)
    },
    [MODAL_VISIBLE]: (state,action)=>{
        return state.set('modalVisible',!state.get('modalVisible'))
    },
    [GET_CANDIDATE] : (state,action)=>{
        const data =api.getCandidateInfo(action.payload.list)
        return state.set('candidateList',data);
    }

},initialState)