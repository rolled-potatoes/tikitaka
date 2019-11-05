import {createAction, handleActions} from 'redux-actions'
import {Map,fromJS,List} from 'immutable'
import {pender} from 'redux-pender'
import * as api from '../../lib/api'

const GETLIST = 'ProjectList/GETLIST'
const CHANGE_SEARCH = 'ProjectList/CHANGE_SEARCH'
const CHANGE_CATEGORY= 'ProjectList/CHANGE_CATEGORY'

export const changetSearch = createAction(CHANGE_SEARCH)
export const getList = createAction(GETLIST,api.getProjectList)
export const changeCategory = createAction(CHANGE_CATEGORY)

const initialState=Map({
    projectList : List([]),
    lastPage : 1,
    searchText:null,
    searchCategory:"카테고리",
})

export default handleActions({
    [CHANGE_SEARCH] : (state,action)=>{
        const {value} =action.payload
        return state.set('searchText',value)
    },
    [CHANGE_CATEGORY]:(state,action)=>{
        const {value} =action.payload
        return state.set('searchCategory',value)
    },
    ...pender({
        type: GETLIST,
        onSuccess:(state,action)=>{
            const {project} = action.payload.data;
            return state.set('projectList', project)
                        .set('lastPage',1)
        }
    })
},initialState)