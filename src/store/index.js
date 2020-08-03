import { configureStore, createAction, createReducer } from '@reduxjs/toolkit'

const action1 = createAction("action1")
const loginUser = createAction("loginUser")
const logoutUser = createAction('logoutUser')
const authUser = createAction('authUser')

const reducer = createReducer([], {
    [action1] : (state, action) => {
        //immutate someting
    },
    [loginUser] : (state, action) => {
        return {...state, user: action.payload}
    },
    [logoutUser]: (state, action) => {
        return null
    },
    [authUser]: (state, action) => {
        return {...state}
    }
})

export const actionCreators = {
    action1,
    loginUser,
    logoutUser,
    authUser
}

export default configureStore({reducer})
