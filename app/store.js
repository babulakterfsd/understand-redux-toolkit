const {configureStore} = require('@reduxjs/toolkit')
const singlePostReducer = require('../features/singlePost/singlePostSlice')
const similiarPostsReducer = require('../features/similiarPosts/similiarPostsSlice')

const store = configureStore({
    reducer: {
        singlePost: singlePostReducer,
        similiarPosts: similiarPostsReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat()
})

module.exports = store