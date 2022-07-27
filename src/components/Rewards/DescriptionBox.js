import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {vouchers} from '../../constants/constant';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DescriptionBox = () => {
  return (
    <View style={styles.container}>
      <View style={{width: '70%'}}>
        <Text style={{color: '#FFF', fontSize: 18, fontWeight: '800'}}>
          Earn 700 Neon Coins
        </Text>
        <Text style={{color: '#FFF', fontSize: 15, fontWeight: '600'}}>
          make a prediction for 7 days and win 700 bonus Neon coins
        </Text>
        <View style={{flexDirection: 'row', marginTop: '4%'}}>
          {vouchers.map((item, index) => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={[
                    styles.progress,
                    {
                      borderColor:
                        item.status === 'UNLOCKED' ? '#73FDAA' : '#FFF',

                      opacity: item.status === 'UNLOCKED' ? 1 : 0.6,
                    },
                  ]}>
                  {item.status === 'UNLOCKED' ? (
                    <Ionicons
                      name="checkmark-outline"
                      color={'#73FDAA'}
                      size={18}
                    />
                  ) : (
                    <Text style={{color: '#FFF'}}>{index + 1}</Text>
                  )}
                </View>
                {index + 1 < vouchers.length && (
                  <Text style={{color: '#FFF', fontSize: 16}}>-</Text>
                )}
              </View>
            );
          })}
        </View>
      </View>

      <View>
        <Image source={require('../../assets/Frame.png')} />
      </View>
    </View>
  );
};

export default DescriptionBox;

const styles = StyleSheet.create({
  container: {
    marginTop: '5%',
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#008070',
    borderRadius: 10,
    padding: 20,
    flexDirection: 'row',
  },
  progress: {
    height: 25,
    width: 25,
    borderRadius: 12.5,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
});
