import { createSlice } from '@reduxjs/toolkit';

// export const fetchBanner = createAsyncThunk(
//     'banner/fetchBanner',   
//     async () => {
//         console.log('fetchBanner')
//         const res = await Axios.get('/api/getBanner')
//         .then( res => res.data)
//         return res
//     }
// )


const banner = createSlice({
    name: 'banner',
    initialState: [],
    reducers: {
        getBanner : (state, action) => {
            console.log('getBanner')
            return state
        },
        addBanner : (state, action) => {
            console.log('addBanner Reducer')
            return [...state, action.payload]
        },
        removeBanner : (state, action) => {
            state.filter( banner => banner.id !== action.payload)
        },
        updateBanner : (state, action) => {
            return state
        },
        clearBanner: (state, action) => {
            return []
        }
    }
    // extraReducers: {
    //     [fetchBanner.pending.type]: (state, action) => {
    //         return state
    //     },
    //     [fetchBanner.fulfilled.type]: (state, action) => {
    //         console.log(action)
    //         if(!action.success){
    //             state.banner = null
    //         } else {
    //             return action.payload
    //         }
    //     },
    //     [fetchBanner.rejected.type]: (state, action) => {
    //         return state
    //     }
    // }
});

export const { getBanner, addBanner, removeBanner, updateBanner, clearBanner} = banner.actions;

export default banner.reducer;