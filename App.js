import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from './components/Search';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from './components/drawer';

import store from "./Redux/store/store"
import { Provider } from 'react-redux';


export default function App() {

  return (
    <Provider store={store}>
         <NavigationContainer>
      <DrawerNavigation></DrawerNavigation>
    </NavigationContainer>
    </Provider>
   
  //  {/* <View style={styles.container}>
  //   <SearchBar></SearchBar>
  //  </View> */}
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#0E1111',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
