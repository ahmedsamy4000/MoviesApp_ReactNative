import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'

export default function LoadingProgress() {
  return (
    <View style={[styles.container, styles.horizontal,{backgroundColor:'black'}]}>
    <ActivityIndicator size="large" />
  </View>
  )
}

const styles = {
    
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    horizontal: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10,
    },
  };