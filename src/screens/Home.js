import {View, Text} from 'react-native';
import React from 'react';

const Home = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
      }}>
      <Text style={{color: '#FFF'}}>Home</Text>
    </View>
  );
};

export default Home;
