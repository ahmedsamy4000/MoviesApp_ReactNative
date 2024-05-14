import { View, Text, Image } from 'react-native'
import React from 'react'

export default function EmptyFavs() {
  return (
    <View>
    <Image
   source={require('../assets/empty.png')} style={{width:200,height:200}}>
      </Image>
    </View>
  )
}