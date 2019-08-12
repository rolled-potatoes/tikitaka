//단일 포스트 상태를 다룸
import {createAction, handleActions} from 'redux-actions'
import {Map, fromJS} from 'immutable'
import {pender} from 'redux-pender'
import * as api from '../../lib/api'

const GET_POST = 'ProjectPost/GET_POST'

export const getPost = createAction(GET_POST,api.getProject)

const initialState=Map({
    project:Map({})
})

export default handleActions({
    ...pender({
        type: GET_POST,
        onSuccess:(state,action)=>{
            const {data: project} = action.payload;
            return state.set('project',fromJS(project))
        }
    })
},initialState)