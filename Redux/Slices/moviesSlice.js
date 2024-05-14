import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getMoviesAction=createAsyncThunk('movies/get',async(filter)=>{
    const endpoint=filter==="filter"?"popular":filter;
    const res=await axios.get(`https://api.themoviedb.org/3/movie/${endpoint}?api_key=8f51a62e55e43ad2718920ab0559f484`);
    const data=res.data.results;
    return data;
})

const moviesSlice=createSlice({
    name:"movies",
    initialState:{movies:[],isloading:true,filteredMovies:[]},
    reducers:{
        filterMovies: (state, action) => {
            const filter = action.payload.toLowerCase();
            state.filteredMovies = state.movies.filter(movie=>
            movie.title && movie.title.toLowerCase().includes(filter)
            );
          },
        resetfilterMovies:(state,action)=>{
            state.filteredMovies=[];
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getMoviesAction.fulfilled,(state,action)=>{
            state.isloading=false
            state.movies=action.payload;
        });
        builder.addCase(getMoviesAction.pending,(state,action)=>{
            state.isloading=true;
        })
    }
})
 
export const {filterMovies,resetfilterMovies} =moviesSlice.actions
export default moviesSlice.reducer