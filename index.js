const store = require('./app/store')
const fetchSinglePost = require('./features/singlePost/fetchSinglePost')

store.subscribe(() => {
    console.log(store.getState().singlePost.singlePost);
    console.log(store.getState().singlePost.singlePost.title);
})

store.dispatch(fetchSinglePost())