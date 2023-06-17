import { View, Text,Image } from 'react-native'
import React from 'react'

    const ScreenTwo = ({ route }) => {
      const { selectedItem } = route.params;
    
      return (
        <View style={{marginTop:30,paddingHorizontal:10}}>
         
          <Image
            source={{ uri: selectedItem.thumbnailUrl }}
            style={{ width: '100%', height: 200 }}
          />
          <Text style={{fontSize:20,fontWeight:'bold'}}>{selectedItem.title}</Text>
          <Text>{selectedItem.description}</Text>
          {/* Add other fields you want to display */}
        </View>
      );
    };
  

export default ScreenTwo