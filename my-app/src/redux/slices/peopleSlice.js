import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    people:[],
    isLoading: false,
};

export const catSlice = createSlice({
    name: 'people',
    initialState,
    reducers: {
        getPeopleFetch(state) {
            state.isLoading = true;
        },
        getPeopleSuccess: (state, action) => {
            state.people = action.payload;
            state.isLoading = false;
        },
    },
});

export const { getPeopleFetch, getPeopleSuccess } = catSlice.actions;
export default catSlice.reducer; // peopleReducer