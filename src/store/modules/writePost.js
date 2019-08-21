import {createAction, handleActions} from 'redux-actions'
import {Map,List} from 'immutable'

const CHANGE_INPUT = 'writePost/CHANGE_INPUT'
const CHANGE_CATRHORY = 'writePost/CHANGE_CATEGORY'

export const changeCategory = createAction(CHANGE_CATRHORY)
export const changeInput = createAction(CHANGE_INPUT)

const initialState=Map({
    title:'',
    price:null,
    dueDate:new Date(),
    catList:List([]),
    period:null,
    maxPeople:0,
    description:'',
})


export default handleActions({
    [CHANGE_INPUT]: (state,action) =>{
        const {id,data} = action.payload;
        return state.set(id,data);
    },
    [CHANGE_CATRHORY] : (state,action) =>{
        const {value} = action.payload
        const existenceItem =state.get('catList').findIndex(item =>{
            return item === value
        })
        if(existenceItem === -1){
            return state.set('catList',state.get('catList').push(value))
        }
        else{
            return state.set('catList',state.get('catList').delete(existenceItem))
        }
    }
},initialState)