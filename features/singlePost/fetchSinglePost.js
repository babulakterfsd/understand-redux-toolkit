const {createAsyncThunk} = require('@reduxjs/toolkit')
const fetch = require('node-fetch')
const fetchSimiliarPosts = require('../similiarPosts/fetchSimiliarPosts')

const fetchSinglePost = createAsyncThunk('fetch/singlePost', async(_, {dispatch}) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${Math.floor(Math.random() * (100 - 1 + 1) ) + 1}`)
    const post = await response.json()
    dispatch(fetchSimiliarPosts(post.title))
    return [post, post.title]
})

module.exports = fetchSinglePost