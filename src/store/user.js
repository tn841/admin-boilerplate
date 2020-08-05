import { createSlice } from '@reduxjs/toolkit'

const user = createSlice({
    name: 'userReducer',
    initialState: null,
    reducers: {
        login: (state, action) => {
            return action.payload
        },
        logout: (state, action) => {
            return null
        },
        authUser: (state, action) => {
            return state
        }
    }
})

export const { login, logout, authUser } = user.actions;

export default user.reducer