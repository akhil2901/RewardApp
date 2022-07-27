import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../constants/Header';
import DescriptionBox from '../components/Rewards/DescriptionBox';
import Vouchers from '../components/Rewards/Vouchers';

const Rewards = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#000',
      }}>
      <Header />
      <DescriptionBox />
      <Vouchers navigation={navigation} />
    </View>
  );
};

export default Rewards;

const styles = StyleSheet.create({});
