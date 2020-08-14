import { configureStore, combineReducers } from '@reduxjs/toolkit'
import user from './user'
import banner from './banner'
import service from './service'

const rootReducer = combineReducers({
    user,
    banner,
    service,
})


export default configureStore({ reducer: rootReducer})
