const {createAsyncThunk} = require('@reduxjs/toolkit')
const fetch = require('node-fetch')

const fetchSimiliarPosts = createAsyncThunk('fetch/similiarPosts', async(title) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?${title?.split(" ")?.map(word => `title_like=${word}`).join("&")}`)
    const posts = await response.json()
    return posts
})

module.exports = fetchSimiliarPosts