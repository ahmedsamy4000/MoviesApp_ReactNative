import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



const FavouritesSlice=createSlice({
    name:"favourites",
    initialState:{favourites:[]},
    reducers:{
        setfavourites:(state,action)=>{
            state.favourites=action.payload;
        },
        addToFavourites:(state,action)=>{
            state.favourites.push(action.payload);
        },

        deletefromfavourites:(state,action)=>{
            if(state.favourites.length!==0){
                state.favourites=state.favourites.filter((item)=>item.id!==action.payload.id);
            }
            
        }
    },
})
 
export const {setfavourites,deletefromfavourites,addToFavourites} =FavouritesSlice.actions
export default FavouritesSlice.reducer