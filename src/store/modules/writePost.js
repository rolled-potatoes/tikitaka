import {createAction, handleActions} from 'redux-actions'
import {Map,List} from 'immutable'
import * as api from 'lib/api.js'
import {pender} from 'redux-pender'

const CHANGE_INPUT = 'writePost/CHANGE_INPUT'
const CHANGE_CATRHORY = 'writePost/CHANGE_CATEGORY'
const RESET = 'writePost/RESET'
const GET_CONTAINT = 'writePost/GET_CONTAINT'
const POST_PROJECT ='writePost/POST_PROJECT'

export const getContaint = createAction(GET_CONTAINT)
export const changeCategory = createAction(CHANGE_CATRHORY)
export const changeInput = createAction(CHANGE_INPUT)
export const reset = createAction(RESET)
export const postProject = createAction(POST_PROJECT,api.postProject)

const initialState=Map({
    title:'',
    price:'',
    dueDate:new Date(),
    catList:List([]),
    period:'',
    maxPeople:'',
    description:'',
})

export default handleActions({
    [GET_CONTAINT] : (state,action) =>{
        const {project} = action.payload;
        
        return state.set('title', project.title)
                    .set('price',project.price)
                    .set('dueDate',new Date(project.dueDate))
                    .set('catList',project.catList)
                    .set('period',project.period)
                    .set('maxPeople',project.maxPeople)
                    .set('description',project.description)
    },
    [CHANGE_INPUT]: (state,action) =>{
        const {id,data} = action.payload;
        return state.set(id,data);
    },
    [CHANGE_CATRHORY] : (state,action) =>{
        const {value} = action.payload
        const catList = state.get('catList')
        const existenceItem =catList.findIndex(item =>{
            return item === value
        })
        if(existenceItem === -1){
            return state.set('catList',catList.push(value))
        }
        else{
            return state.set('catList',catList.delete(existenceItem))
        }
    },
    [RESET] : (state,action) =>{
        return initialState
    },
    ...pender({
        type:POST_PROJECT,
        onSuccess:(state,action)=>{
            console.log('글 저장 성공');
            return initialState;
        }
    })
},initialState)