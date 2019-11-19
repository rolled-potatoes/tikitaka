//단일 포스트 상태를 다룸
import {createAction, handleActions} from 'redux-actions'
import {Map, fromJS} from 'immutable'
import {pender} from 'redux-pender'
import * as api from '../../lib/api'

const GET_POST = 'ProjectPost/GET_POST'
const GET_CANDIDATE = 'ProjectPost/GET_CANDIDATE'
const MODAL_VISIBLE = 'ProjectPost/MODAL_VISIBLE'

export const getPost = createAction(GET_POST ,api.getPost)
export const getCandiInfo = createAction(GET_CANDIDATE)
export const onModal = createAction(MODAL_VISIBLE)
const initialState=Map({
    project:"",
    modalVisible : false,
})

export default handleActions({
    [MODAL_VISIBLE]: (state,action)=>{
        return state.set('modalVisible',!state.get('modalVisible'))
    },
    ...pender({
        type: GET_POST,
        onSuccess:(state,action)=>{
            const {project} = action.payload.data
            if(project == null){
                alert('존재하지않는 프로젝트 입니다.')
                window.location.href='/'
                return initialState
            }
            return state.set('project',project)
        }
    })

},initialState)