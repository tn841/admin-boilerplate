import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import Axios from 'axios';

export const fetchService = createAsyncThunk(
    'service/fetchService',
    async () => {
        const res = await Axios.get('/api/service/list')
        .then(res => res.data)
        return res
    }
)

const service = createSlice({
    name: 'service',
    initialState: [],
    reducers: {
        getservice: (state, action) => state,
        addService: (state, action) => {
            return [...state, ...action.payload]
        },
        clearService: (state, action) => {
            return []
        }
    },
    extraReducers: {
        [fetchService.fulfilled.type]: (state, action) => {
            console.log(action)
            if( !action.success ){
                return state
            } else {
                return action.payload.data
            }
        }
    }
});

export const { getapps, addService, clearService } = service.actions;

export default service.reducer;