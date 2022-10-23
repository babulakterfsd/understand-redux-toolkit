const {createAsyncThunk} = require('@reduxjs/toolkit')
const fetch = require('node-fetch')

const fetchSinglePost = createAsyncThunk('fetch/singlePost', async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=1')
    const post = await response.json()
    return [post, post.title]
})

module.exports = fetchSinglePost