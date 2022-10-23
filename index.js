const store = require('./app/store')
const fetchSinglePost = require('./features/singlePost/fetchSinglePost')
const fetchSimiliarPosts = require('./features/similiarPosts/fetchSimiliarPosts')

store.subscribe(() => {
    console.log(store.getState().singlePost.singlePost.title);
    console.log(store.getState().similiarPosts.similiarPosts);
})

store.dispatch(fetchSinglePost())