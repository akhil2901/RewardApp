import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{width: '50%'}}>
        <Image source={require('../assets/Userpic.png')} />
      </TouchableOpacity>
      <View
        style={{
          width: '50%',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity style={{width: '40%'}}>
          <Text style={styles.text}>Help</Text>
        </TouchableOpacity>
        <View style={styles.coin}>
          <Image
            source={require('../assets/Coin.png')}
            style={{height: 20, width: 20}}
          />
          <Text style={{color: '#FFF', fontSize: 18}}>2000</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    marginTop: '5%',
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#FFF',
    backgroundColor: '#3F3F3F',
    textAlign: 'center',
    borderRadius: 100,
    fontSize: 18,
    height: 35,
    textAlignVertical: 'center',
  },
  coin: {
    flexDirection: 'row',
    backgroundColor: '#3F3F3F',
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    justifyContent: 'space-evenly',
  },
});
