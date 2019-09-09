import {createAction, handleActions} from 'redux-actions'
import {Map,fromJS,List} from 'immutable'
import {pender} from 'redux-pender'
import * as api from '../../lib/api'

const GET_LIST = 'FreeLenserList/GET_LIST';
const ABLE_LOADDING = 'FreeLenserList/ABLE_LOADDING'

export const getList = createAction(GET_LIST)
export const able_loadding = createAction(ABLE_LOADDING)

const initialState = Map({
    FreeList: List([
    ]),
    loadding: true,
    isLast:false,
    page: 1,
})

export default handleActions({
    [GET_LIST]:(state,acion) =>{
        const page = state.get('page');
        let {data,isLast} = api.getFreeList((page+1))
        return state.set("FreeList", state.get("FreeList").merge(data))
                    .set('loadding',true)
                    .set('isLast',isLast)
                    .set('page',(page+1))
    },
    [ABLE_LOADDING]:(state,action)=>{
        const {bol} = action.payload
        return state.set('loadding',bol);
    }
},initialState)