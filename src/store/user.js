import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// export const fetchUser = createAsyncThunk(
//     'user/fetchUser',   // 액션 이름
//     async () => {
//         const res = await axios.get('/api/auth');
//         return res.data
//     }
// )

const user = createSlice({
    name: 'user',
    initialState: {
        loading: false,
        user: null
    },
    reducers: {
        login: (state, action) => {
            console.log(action)
            return action.payload
        },
        logout: (state, action) => {
            state.user = {}
        }
    },
    // extraReducers: {
    //     [fetchUser.pending.type]: (state, action) => {
    //         state.loading = true;
    //     },
    //     [fetchUser.fulfilled.type]: (state, action) => {
    //         state.loading = false;
    //         console.log(action);
    //         if(!action.success) {
    //             state.user = null
    //         } else {
    //             return state
    //         }
            
    //     },
    //     [fetchUser.rejected.type]: (state, action) => {
    //         state.loading = false;
    //         state.user = null;
    //     }
    // }
})

export const { login, logout } = user.actions;
export default user.reducer
