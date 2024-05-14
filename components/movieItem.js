import { View, Text, Image } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import storage from './StorageComponent'

export default function MovieItem({item,updateFavourites,icon}) {
 
  // const saveToFavoutites=()=>{
  //   storage.save({
  //     key:'favourites',
  //     data:item
  //   })
  // }
  return (
    <View style={{borderRadius:15,margin:10,backgroundColor:'#141719'}}>
             <Image source={ {uri:`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}}
              style={{ width: '100%', height: 200 ,borderRadius:15}}></Image>
              <View style={{justifyContent:'space-between',flexDirection:'row',alignItems:'center',padding:10}}>
              <Text style={{fontSize:15,fontWeight:'bold',color:'white'}}>{item.title}</Text>
              <Button style={{backgroundColor:icon,width:10,height:30,}} icon="heart-outline" onPress={()=>{
                updateFavourites(item);
              }}></Button>
              </View>
              
             </View>
  )
}