import { createSlice } from '@reduxjs/toolkit';

const banner = createSlice({
    name: 'banner',
    initialState: [],
    reducers: {
        getBanner : (state, action) => {
            console.log('getBanner')
            return state
        },
        addBanner : (state, action) => {
            return [...state, action.payload]
        },
        removeBanner : (state, action) => {
            state.filter( banner => banner.id !== action.payload)
        },
        updateBanner : (state, action) => {
            return state
        }
    }
});

export const { getBanner, addBanner, removeBanner, updateBanner} = banner.actions;

export default banner.reducer;