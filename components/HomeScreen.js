import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import SearchBar from './Search'
import axios from 'axios'
import { Button } from 'react-native-paper'
import MovieItem from './movieItem'
import { useDispatch, useSelector } from 'react-redux'
import { filterMovies, getMoviesAction, resetfilterMovies } from '../Redux/Slices/moviesSlice'
import LoadingProgress from './loading'
import storage from './StorageComponent'
import { addToFavourites, deletefromfavourites, setfavourites } from '../Redux/Slices/favouritesSlice'

export default function HomeScreen() {
  const isloading=useSelector(state=>state.movies.isloading)
  const dispatch=useDispatch();
  const [filter,setfilter]=useState('filter');
  const [search,changeSearch]=useState("");
  const filteredmovies=useSelector(state=>state.movies.filteredMovies)
  const movies=useSelector(state=>state.movies.movies)
  const favourites=useSelector(state=>state.favourites.favourites)
    

 const updateFavourites=async(item)=>{
  try{
    const favs=await storage.load({key:'favourites'});
    
    if(favs._i!=0){
      if(!favs.some(fav=>fav.id===item.id)){
        await storage.save({key:'favourites',data:[...favourites,item]});
        dispatch(addToFavourites(item));
      }else{
        const updatedFavourites=favs.filter((fav)=>fav.id!==item.id);
        await storage.save({key:'favourites',data:updatedFavourites});
        dispatch(deletefromfavourites(item))
        console.log("item deleted")
      }
    
  }
  }catch(error){
    await storage.save({key:'favourites',data:[item]});
    console.log("item added",item);
    dispatch(addToFavourites(item));
  }
  

//  storage.remove({key:'favourites'})
 } 
    useEffect(()=>{
      // storage.save({
      //   key:'local',
      //   data:{
      //     name:"ahmed",
      //     age:"samy"
      //   },
      //   expires:1000*3600
      // })
    //  const fav= storage.load({
    //     key:'favourites',
    //   }).then((res)=>{
    //     console.log("hello",res);
    //   });
      // storage.remove({
      //   key:'favourites'
      // });
      // console.log("removed")
      
      dispatch(getMoviesAction(filter))
    },[filter,dispatch]);

    useEffect(()=>{
      searchmovies(search);
    },[search]);
   
    const searchmovies=(searching)=>{
      if(searching!==""){
        dispatch(filterMovies(searching));
    }else{
      dispatch(resetfilterMovies());
    }}
    // if(isloading){return (<LoadingProgress></LoadingProgress>)}
  if(search!==""){
      return (
        <View style={{flex:1,backgroundColor:'#2C2F33'}}>
        <SearchBar style={{flex:1}} changeFilter={setfilter} changeSearch={changeSearch} search={search} myfilter={filter}></SearchBar>
        <View style={{flex:2}}>
        {!isloading&&<FlatList
            data={filteredmovies}
            renderItem={({item}) => <MovieItem item={item} updatefavourites={updateFavourites}
            icon={favourites.some((fav)=>fav.id===item.id)?'red':'white'}
            ></MovieItem>}
            keyExtractor={item => item.id}
          />}
        </View>
       </View> 
      )
    }else {
        return (
          <View style={{flex:1,backgroundColor:'#2C2F33'}}>
         <SearchBar style={{flex:1}} changeFilter={setfilter} changeSearch={changeSearch} myfilter={filter}></SearchBar>
         <View style={{flex:2}}>
       {!isloading&&  <FlatList
             data={movies}
             renderItem={({item}) => <MovieItem item={item} updateFavourites={updateFavourites}
             icon={favourites.some((fav)=>fav.id===item.id)?'red':'white'}></MovieItem>}
             keyExtractor={item => item.id}
           />}
         </View>
        </View>   
       )
    }
 
}

const styles ={
    container: {
      flex: 1,
      //backgroundColor: '#0E1111',
      justifyContent: 'center',
    },};


        // const [movies,setMovies]=useState([
    //     {
    //         "adult": false,
    //         "backdrop_path": "/iHYh4cdO8ylA3W0dUxTDVdyJ5G9.jpg",
    //         "genre_ids": [
    //           878,
    //           12,
    //           28
    //         ],
    //         "id": 653346,
    //         "original_language": "en",
    //         "original_title": "Kingdom of the Planet of the Apes",
    //         "overview": "Several generations in the future following Caesar's reign, apes are now the dominant species and live harmoniously while humans have been reduced to living in the shadows. As a new tyrannical ape leader builds his empire, one young ape undertakes a harrowing journey that will cause him to question all that he has known about the past and to make choices that will define a future for apes and humans alike.",
    //         "popularity": 2138.511,
    //         "poster_path": "/gKkl37BQuKTanygYQG1pyYgLVgf.jpg",
    //         "release_date": "2024-05-08",
    //         "title": "Kingdom of the Planet of the Apes",
    //         "video": false,
    //         "vote_average": 7.099,
    //         "vote_count": 141
    //       },
    //       {
    //         "adult": false,
    //         "backdrop_path": "/sI6uCeF8mUlZx22mFfHSi9W3XQ9.jpg",
    //         "genre_ids": [
    //           10749,
    //           35
    //         ],
    //         "id": 843527,
    //         "original_language": "en",
    //         "original_title": "The Idea of You",
    //         "overview": "40-year-old single mom Solène begins an unexpected romance with 24-year-old Hayes Campbell, the lead singer of August Moon, the hottest boy band on the planet.",
    //         "popularity": 1380.647,
    //         "poster_path": "/zDi2U7WYkdIoGYHcYbM9X5yReVD.jpg",
    //         "release_date": "2024-05-02",
    //         "title": "The Idea of You",
    //         "video": false,
    //         "vote_average": 7.552,
    //         "vote_count": 558
    //       },
    // ])