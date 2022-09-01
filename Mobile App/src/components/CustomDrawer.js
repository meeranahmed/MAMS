import React from 'react';
import {
  View,
 
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';

// import Ionicons from 'react-native-vector-icons/Ionicons';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const CustomDrawer = (props) => {


  
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props} >
      
        <View style={{flex: 1, backgroundColor: '#fff', bottom:'5%',borderTopLeftRadius: 30,borderTopRightRadius: 30,}}>
          <DrawerItemList {...props} />
          {/* <DrawerItem
          label="Help"
          onPress={() => console.log("here")}
          /> */}
        </View>
      </DrawerContentScrollView>
      </View>

  );
};

export default CustomDrawer;