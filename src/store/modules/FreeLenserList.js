import {createAction, handleActions} from 'redux-actions'
import {Map,fromJS,List} from 'immutable'
import {pender} from 'redux-pender'
import * as api from '../../lib/api'

const GET_LIST = 'FreeLenserList/GET_LIST';
const GET_LIST_FIRST = 'FreeLenserList/GET_LIST_FIRST';
const ABLE_LOADDING = 'FreeLenserList/ABLE_LOADDING'

export const getList = createAction(GET_LIST,api.getFreeList)
export const getListFirst = createAction(GET_LIST_FIRST,api.getFreeList)
export const able_loadding = createAction(ABLE_LOADDING)

const initialState = Map({
    FreeList: List([
    ]),
    loadding: true,
    isLast:false,
    page: 1,
})

export default handleActions({ 
    [ABLE_LOADDING]:(state,action)=>{
        const {bol} = action.payload
        return state.set('loadding',bol);
    },
    ...pender({
        type:GET_LIST_FIRST,
        onSuccess:(state,action) =>{
            const {user,lastPage} = action.payload.data
            
            return state.set("FreeList", List(user))
                        .set('loadding',true)
                        .set('page',1)
                        .set('isLast',1 == lastPage? true: false)
        }
    }),
    ...pender({
        type: GET_LIST,
        onSuccess:(state,action)=>{
            const {user,lastPage} = action.payload.data
            const page = state.get('page');
            return state.set("FreeList", state.get("FreeList").merge(user))
                        .set('loadding',true)
                        .set('page',page == lastPage? page: page+1)
                        .set('isLast',page == lastPage? true: false)
        }
    })
},initialState)