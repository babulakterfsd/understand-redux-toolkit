const {createSlice} = require('@reduxjs/toolkit')
const fetchSimiliarPosts = require('../similiarPosts/fetchSimiliarPosts')

const initialState = {
    loading: false,
    similiarPosts: [],
    error: ''
}

const similiarPostsSlice = createSlice({
    name: 'similiarPosts',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchSimiliarPosts.pending, (state, action) => {
            state.loading = true;
            state.similiarPosts = [];
            state.error = ''
        })
        builder.addCase(fetchSimiliarPosts.fulfilled, (state, action) => {
            console.log(action.payload);
            state.loading = false;
            state.similiarPosts = action.payload
            state.error = ''
        })
        builder.addCase(fetchSimiliarPosts.rejected, (state, action) => {
            state.loading = false;
            state.similiarPosts = [];
            state.error = action.error.message
        })
    }
})

module.exports = similiarPostsSlice.reducer