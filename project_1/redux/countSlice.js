import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	count: 0,
};

export const countSlice = createSlice({
	name: 'count',
	initialState,
	reducers: {
		increaseCount: (state) => {
			state.count = state.count + 1;
		},
		resetCount: (state) => {
			state.count = 0;
		},
	},
});

export const { increaseCount, resetCount } = countSlice.actions;

export default countSlice.reducer;
