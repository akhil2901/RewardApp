import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {vouchers} from '../../constants/constant';
import LinearGradient from 'react-native-linear-gradient';

const Vouchers = ({navigation}) => {
  renderVoucher = ({item}) => {
    return (
      <TouchableOpacity
        style={{width: '50%'}}
        disabled={item.status === 'LOCKED' ? true : false}
        onPress={() => navigation.navigate('VoucherDetail', {details: item})}>
        <LinearGradient
          colors={[
            item.status === 'UNLOCKED' ? item.backgroundColors[0] : '#2F2F2F',
            item.status === 'UNLOCKED' ? item.backgroundColors[1] : '#414141',
          ]}
          style={styles.linearGradient}>
          <View
            style={{
              flex: 0.5,
              justifyContent: 'center',
            }}>
            <Image source={item.image} />
          </View>

          <View>
            <Text style={{color: '#FFF', textAlign: 'center'}}>
              Win Gift Cards Upto{' '}
              <Text
                style={{
                  color: '#FFF',
                  fontSize: 18,
                  fontWeight: '800',
                }}>
                worth 5000
              </Text>
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              backgroundColor:
                item.status === 'UNLOCKED' ? item.coinBackground : '#000000',
              width: '60%',
              alignItems: 'center',
              borderRadius: 100,
              justifyContent: 'space-evenly',
              height: '18%',
            }}>
            <Image
              source={
                item.status === 'UNLOCKED'
                  ? require('../../assets/Coin.png')
                  : require('../../assets/Lock.png')
              }
              style={{
                height: item.status === 'UNLOCKED' ? 20 : 30,
                width: item.status === 'UNLOCKED' ? 20 : 30,
              }}
            />
            <Text style={{color: '#FFF', fontSize: 18}}>2000</Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{width: '90%', alignSelf: 'center', marginTop: '5%'}}>
      <Text style={{color: '#FFF', fontSize: 18, fontWeight: '800'}}>
        Vouchers you have won
      </Text>
      <View>
        <FlatList
          data={vouchers}
          renderItem={renderVoucher}
          numColumns={2}
          style={{
            width: '100%',
          }}
          contentContainerStyle={{
            marginTop: '2%',
            paddingBottom: 300,
          }}
        />
      </View>
    </View>
  );
};

export default Vouchers;

const styles = StyleSheet.create({
  linearGradient: {
    width: '95%',
    height: 200,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: '10%',
  },
});
