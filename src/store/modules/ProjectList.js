import {createAction, handleActions} from 'redux-actions'
import {Map,fromJS,List} from 'immutable'
import {pender} from 'redux-pender'
import * as api from '../../lib/api'

const GETLIST = 'ProjectList/GETLIST'
const CHANGE_SEARCH = 'ProjectList/CHANGE_SEARCH'
const CHANGE_CATEGORY= 'ProjectList/CHANGE_CATEGORY'

export const changetSearch = createAction(CHANGE_SEARCH)
export const getList = createAction(GETLIST)
export const changeCategory = createAction(CHANGE_CATEGORY)

const initialState=Map({
    projectList : List([]),
    lastPage : 1,
    searchText:null,
    searchCategory:"카테고리",
})

export default handleActions({
    [GETLIST] : (state,action)=>{
        const{page} =action.payload;
        let {data,lastNumber} = api.getPorjectList(page);
        return state.set('projectList' ,data)
                    .set('lastPage', lastNumber)
    },
    [CHANGE_SEARCH] : (state,action)=>{
        const {value} =action.payload
        return state.set('searchText',value)
    },
    [CHANGE_CATEGORY]:(state,action)=>{
        const {value} =action.payload
        return state.set('searchCategory',value)
    }
},initialState)