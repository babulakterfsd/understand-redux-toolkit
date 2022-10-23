const {createAsyncThunk} = require('@reduxjs/toolkit')
const fetch = require('node-fetch')
const fetchSimiliarPosts = require('../similiarPosts/fetchSimiliarPosts')

const fetchSinglePost = createAsyncThunk('fetch/singlePost', async(_, {dispatch}) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=1')
    const post = await response.json()
    dispatch(fetchSimiliarPosts(post[0].title))
    return [post, post.title]
})

module.exports = fetchSinglePost