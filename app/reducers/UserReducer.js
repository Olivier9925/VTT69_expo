import { createSlice } from '@reduxjs/toolkit'

const initState = {
	connexion: false,
};

export default createSlice({
	name: 'UserReducer',
	initialState: initState,
	reducers: {
		loginSaisie: {
			reducer: (state, action) => { },
			prepare: (user, password) => { return { payload: { user, password } }; }
		},
		logout: {
			reducer: (state, action) => {
				state.connexion = false;
			},
			prepare: (connexion) => { return { payload: { connexion } }; }
		},
	}
});
