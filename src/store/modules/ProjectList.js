import {createAction, handleActions} from 'redux-actions'
import {Map,fromJS,List} from 'immutable'
import {pender} from 'redux-pender'
import * as api from '../../lib/api'

const GETLIST = 'ProjectList/GETLIST'

export const getList = createAction(GETLIST)

const initialState=Map({
    projectList : List([]),
    lastPage : 1,
})

export default handleActions({
    [GETLIST] : (state,action)=>{
        const{page} =action.payload;
        let {data,lastNumber} = api.getPorjectList(page);
        return state.set('projectList' ,data)
                    .set('lastPage', lastNumber)
    }
},initialState)