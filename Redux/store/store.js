import { configureStore } from "@reduxjs/toolkit";
import moviesReducer  from '../Slices/moviesSlice';
import favouritesReducer  from '../Slices/favouritesSlice';
const store=configureStore({
    reducer:{
        movies:moviesReducer,
        favourites:favouritesReducer
    }
})

export default store;