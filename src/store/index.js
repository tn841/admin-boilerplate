import { configureStore, combineReducers } from '@reduxjs/toolkit'
import user from './user'
import banner from './banner'
import webapp from './webapp'

const rootReducer = combineReducers({
    user,
    banner,
    webapp,
})


export default configureStore({ reducer: rootReducer})
