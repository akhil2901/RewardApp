import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const VoucherDetail = props => {
  const item = props.route.params.details;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#000',
      }}>
      <Pressable
        onPress={() => props.navigation.goBack()}
        style={{marginTop: '4%', alignSelf: 'flex-end', marginRight: '2%'}}>
        <Text style={{color: '#73FDAA', fontSize: 16, fontWeight: 'bold'}}>
          Close
        </Text>
      </Pressable>
      <Image
        source={require('../assets/Card.png')}
        style={{marginTop: '4%', width: '100%', height: '25%'}}
      />
      <Text style={styles.headerText}>{item.brand} Gift Card Worth ₹5000</Text>
      <Text style={styles.bodyText}>
        Amazon Pay Gift Cards are valid for 365 days from the date of purchase
        and carry no fees Gift cards have great designs for every occasion.
      </Text>
      <View
        style={{
          flexDirection: 'row',
          width: '80%',
          alignSelf: 'center',
          marginTop: '4%',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text style={{color: '#939393'}}>Neon Points</Text>
          <View style={styles.coinContainer}>
            <Image
              source={require('../assets/Coin.png')}
              style={{height: 20, width: 20}}
            />
            <Text style={{color: '#FFF', fontSize: 18}}>{item.coins}</Text>
          </View>
        </View>
        <View>
          <Text style={{color: '#939393'}}>Voucher Value</Text>
          <View style={styles.coinContainer}>
            <Text style={{color: '#FFF', fontSize: 18}}>₹{item.giftCard}</Text>
          </View>
        </View>
      </View>
      <TextInput
        placeholder="Enter your Email ID"
        style={styles.inputStyle}
        placeholderTextColor="#939393"
      />
      <TouchableOpacity style={styles.btnContainer}>
        <Text style={{fontWeight: 'bold'}}>Redeem Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default VoucherDetail;

const styles = StyleSheet.create({
  coinContainer: {
    flexDirection: 'row',
    backgroundColor: '#3F3F3F',
    width: '55%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'space-evenly',
    marginTop: '2%',
  },
  headerText: {
    color: '#FFF',
    fontWeight: '800',
    fontSize: 25,
    marginTop: '4%',
    width: '60%',
    marginLeft: '4%',
  },
  bodyText: {
    color: '#FFF',
    marginTop: '4%',
    width: '80%',
    marginLeft: '4%',
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: '#73FDAA',
    width: '80%',
    alignSelf: 'center',
    marginTop: '5%',
    borderRadius: 5,
    color: '#FFF',
  },
  btnContainer: {
    backgroundColor: '#73FDAA',
    width: '80%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%',
    height: '6%',
    borderRadius: 5,
  },
});
