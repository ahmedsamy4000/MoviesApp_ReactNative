import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Provider, Searchbar } from 'react-native-paper'
import { Dropdown, SelectCountry } from 'react-native-element-dropdown';



export default function SearchBar({changeFilter,changeSearch,myfilter}) {
    const [barsearch,setbarsearch]=useState("");
    const [index,changeindex]=useState("1")
 
    const local_data = [
        {
          value: '1',
          lable: 'filter',
        },
        {
          value: '2',
          lable: 'now_playing',
         
        },
        {
          value: '3',
          lable: 'upcoming',
          
        },
        {
          value: '4',
          lable: 'top_rated',
         
        },
       
      ];
   
  return (
   
    
    <View style={{flexDirection:'row',alignItems:'center',padding:10}}>
        <Searchbar style={{margin:5,width:250,height:50,backgroundColor:'#898B8C',borderRadius:10}} placeholder="Search"
        value={barsearch} onChangeText={(e)=>{
         // console.log("your search is ",e);
          setbarsearch(e);
          changeSearch(e);
        }}
            />
            <SelectCountry
        style={styles.dropdown}
        selectedTextStyle={styles.selectedTextStyle}
        placeholderStyle={styles.placeholderStyle}
        value={index}
        data={local_data}
        valueField="value"
        labelField="lable"
        placeholder="Select country"
        searchPlaceholder="Search..."
        onChange={e => {
          changeindex(e.value);
          changeFilter(e.lable);

        }}
      />
       
    </View>
    
  )
}

const styles = StyleSheet.create({
    dropdown: {
      height: 50,
      width:120,
      backgroundColor: '#898B8C',
      borderRadius: 10,
      
    },
  
      placeholderStyle: {
        fontSize:15,
        fontSize: 16,
        color:'black'
      },
      selectedTextStyle: {
        fontSize: 16,
        marginLeft: 8,
      },
      iconStyle: {
        color:'white',
        width: 20,
        height: 20,
      },
    
  });