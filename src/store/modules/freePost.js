import {createAction, handleActions} from 'redux-actions'
import {pender} from 'redux-pender'
import {Map,List} from 'immutable'
import * as api from 'lib/api.js'

const GET_FREE = 'freePost/GET_FREE'

export const getFree = createAction(GET_FREE,api.getFreeInfo)

const initialState=Map({
    info : "",
})
export default handleActions({
    ...pender({
        type:GET_FREE,
        onSuccess:(state,action)=>{
            const {user} = action.payload.data
            return state.set('info',user)

        }
    })
},initialState)