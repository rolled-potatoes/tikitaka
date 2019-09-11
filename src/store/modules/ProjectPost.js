//단일 포스트 상태를 다룸
import {createAction, handleActions} from 'redux-actions'
import {Map, fromJS} from 'immutable'
import {pender} from 'redux-pender'
import * as api from '../../lib/api'

const GET_POST = 'ProjectPost/GET_POST'

export const getPost = createAction(GET_POST)

const initialState=Map({
    project:""
})

export default handleActions({
    [GET_POST] : (state,action) =>{
        const{id} = action.payload
        const data = api.getPost(id);
        return state.set('project',data)
    }
},initialState)