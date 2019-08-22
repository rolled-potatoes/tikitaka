import {createAction, handleActions} from 'redux-actions'
import {Map,List} from 'immutable'

const CHANGE_INPUT = 'writePost/CHANGE_INPUT'
const CHANGE_CATRHORY = 'writePost/CHANGE_CATEGORY'
const RESET = 'writePost/RESET'

export const changeCategory = createAction(CHANGE_CATRHORY)
export const changeInput = createAction(CHANGE_INPUT)
export const reset = createAction(RESET)

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
    }
},initialState)