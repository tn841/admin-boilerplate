import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import Axios from 'axios'

// export const fetchUser = createAsyncThunk(
//     'user/fetchUser',   // 액션 이름
//     async () => {
//         const res = await axios.get('/api/auth');
//         return res.data
//     }
// )


/*
 *  async & await 
 - ES8 문법
 - function 키워드 앞에 async를 붙여 async 함수를 정의한다.
 - async 함수 내부에 비동기 로직 앞에 await 키워드를 붙인다.
 - await 키워드를 붙인 로직은 Promise 객체를 반환해야한다.
 - async 함수도 Promise 객체를 반환해야한다.
 */
export const fetchLoginUser = async (values) => {
    const res = await Axios.post('/api/user/login', JSON.stringify(values))
    return res
    // ({
    //     method: 'post',
    //     url: '/api/user/login',
    //     data: JSON.stringify(values),
    //     headers: {'Content-Type': 'multipart/form-data' }
    // })
}

export const fetchLogoutUser = async () => {
    return await Axios.get('/api/user/logout')
    .then(res => res.data)
}



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
