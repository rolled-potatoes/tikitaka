import {createAction, handleActions} from 'redux-actions'
import {pender} from 'redux-pender'
import {Map} from 'immutable'

const LOGIN = 'base/LOGIN'

export const login = createAction(LOGIN)


const initialState = Map({
    logged : false
})

export default handleActions ({
    [LOGIN]: (state,action) =>{
        const {payload:email} = action
        const {payload:password} = action
        console.log(state.get('logged'));
        return state.set('logged',true)
    }
},initialState)