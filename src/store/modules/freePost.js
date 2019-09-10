import {createAction, handleActions} from 'redux-actions'
import {pender} from 'redux-pender'
import {Map,List} from 'immutable'
import * as api from 'lib/api.js'

const GET_FREE = 'freePost/GET_FREE'

export const getFree = createAction(GET_FREE)

const initialState=Map({
    info : "",
})
export default handleActions({
    [GET_FREE] : (state,action)=>{
        const {id} = action.payload;
        return state.set('info',api.getFreeInfo(id))
    }
},initialState)