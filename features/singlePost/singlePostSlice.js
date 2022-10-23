const {createSlice} = require('@reduxjs/toolkit')
const fetchSinglePost = require('../singlePost/fetchSinglePost')

const initialState = {
    loading: false,
    singlePost: {},
    singlePostTitle: '',
    error: ''
}

const singlePostSlice = createSlice({
    name: 'singlePost',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchSinglePost.pending, (state, action) => {
            state.loading = true;
            state.singlePost = {};
            state.singlePostTitle = '';
            state.error = ''
        })
        builder.addCase(fetchSinglePost.fulfilled, (state, action) => {
            state.loading = false;
            state.singlePost = action.payload[0][0];
            state.singlePostTitle = action.payload[0][0].title
            state.error = ''
        })
        builder.addCase(fetchSinglePost.rejected, (state, action) => {
            state.loading = false;
            state.singlePost = {};
            state.singlePostTitle = '';
            state.error = action.error.message
        })
    }
})

module.exports = singlePostSlice.reducer