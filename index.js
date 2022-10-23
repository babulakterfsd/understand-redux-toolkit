const store = require('./app/store')
const fetchSinglePost = require('./features/singlePost/fetchSinglePost')
const fetchSimiliarPosts = require('./features/similiarPosts/fetchSimiliarPosts')

store.subscribe(() => {
    console.log(store.getState().singlePost.singlePostTitle);
    console.log(store.getState().similiarPosts.similiarPosts.length);
})

store.dispatch(fetchSinglePost())