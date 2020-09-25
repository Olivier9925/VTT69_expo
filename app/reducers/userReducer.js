import { createSlice } from '@reduxjs/toolkit'

const initState = {
    isConnected: false,
    user: {},
};

export default createSlice({
    name: 'userReducer',
    initialState: initState,
    reducers: {
        loginSaisie: {
            reducer: (state, action) => { },
            prepare: (user, password) => { return { payload: { user, password } }; }
        },
    }
});


// SELECTEURS
export const getWatchList = state => state.userReducer.watchList;
