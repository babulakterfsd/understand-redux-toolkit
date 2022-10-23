const {createAsyncThunk} = require('@reduxjs/toolkit')
const fetch = require('node-fetch')

const fetchSimiliarPosts = createAsyncThunk('fetch/similiarPosts', async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    const posts = await response.json()
    return posts
})

module.exports = fetchSimiliarPosts