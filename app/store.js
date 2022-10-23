const {configureStore} = require('@reduxjs/toolkit')
const singlePostReducer = require('../features/singlePost/singlePostSlice')

const store = configureStore({
    reducer: {
        singlePost: singlePostReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat()
})

module.exports = store