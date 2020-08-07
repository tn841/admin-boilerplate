import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const user = createSlice({
    name: 'userReducer',
    initialState: null,
    reducers: {
        login: (state, action) => {
            state.user = action.payload
        },
        logout: (state, action) => {
            state.user = {}
        },
        authUser: (state, action) => {
            state.user = action.payload
        }
    }
})

export const { login, logout, authUser } = user.actions;
export default user.reducer

export const fetchUser = () => async dispatch => {
    // loading..

    try{
        const data = await axios.get('/api/auth')
        .then(res => {
            console.log(res)
            if(!res.data.success){
                return data
            } else {
                console.log('login success.')
                dispatch(login(res.user))
                return data
            }
            
        })
        .then( (data) => {
            console.log(data)
        })
        
    } catch (e) {
        console.log(e)
        // error handler
    }    
    
    // console.log('thunk :', res.user)
    // dispatch(authUser(res.user))
}