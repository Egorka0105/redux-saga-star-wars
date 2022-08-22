import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    posts: [],
    users: [],
};

export const Slice = createSlice({
    name: 'test',
    initialState,
    reducers: {
        getUsers: (state, action) => {
            state.users = action.payload;
        },
        getPosts: (state, action) => {
            state.posts = action.payload;
        }
    },
});

export const { getUsers, getPosts } = Slice.actions;
export default Slice.reducer;