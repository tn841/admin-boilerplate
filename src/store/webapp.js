import { createSlice } from '@reduxjs/toolkit'

const webapp = createSlice({
    name: 'webapp',
    initialState: [],
    reducers: {
        getapps: (state, action) => state
    }
});

export const { getapps } = webapp.actions;

export default webapp.reducer;