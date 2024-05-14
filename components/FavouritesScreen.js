import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import storage from './StorageComponent'
import { useDispatch, useSelector } from 'react-redux';
import MovieItem from './movieItem';
import { deletefromfavourites, setfavourites } from '../Redux/Slices/favouritesSlice';
import FavouritesItem from './FavouritesItem';
import EmptyFavs from './EmptyFavs';

export default function FavouritesScreen() {
  const favourites=useSelector(state=>state.favourites.favourites)
  const dispatch=useDispatch();
  
  
  const updateFavourites=async(item)=>{
    try{ 
          const updatedFavourites=favourites.filter((fav)=>fav.id!==item.id);
          await storage.save({key:'favourites',data:updatedFavourites});
          dispatch(deletefromfavourites(item))
          console.log("item deleted")
    }catch(error){
      console.log("Cannot delete Item");
      console.log(error);
      // getfavourites();
    }
    
  
  //  storage.remove({key:'favourites'})
   } 
 const getfavourites=async()=>{
  try{
    const favs=await storage.load({key:'favourites'});
    console.log("favvvs is ",favs);
    if(favs._i!=0){
      dispatch(setfavourites(favs));
    }
console.log("favss is ",favs);
  }catch(error){
    console.log(error);
  }

  // storage.remove({key:'favourites'})
 } 
  useEffect(()=>{
  getfavourites();
  },[])
  console.log("favourites is ",favourites);
  if(favourites.length!==0){
    return (
      <View style={{flex:1,backgroundColor:'#2C2F33'}}>
      <View style={{flex:2}}>
      <FlatList
          data={favourites}
          renderItem={({item}) => <FavouritesItem item={item} key={item.id} updateFavourites={updateFavourites}></FavouritesItem>}
          keyExtractor={item => item.id}
        />
      </View>
     </View> );
  }else{
    return(<View style={{
      backgroundColor:'#2C2F33',flex:1,justifyContent:'center',alignItems:'center'
    }}><EmptyFavs></EmptyFavs><Text style={{padding:20,color:'white'}}>No Favourites Yet !!</Text></View>)
  }
 
}