import React from 'react';
import {View, Text, Image} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';

const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        source={{
          uri: 'https://loremflickr.com/g/320/240/paris',
        }}
        style={styles.avatar}
      />
      <Text style={styles.userName}>Saint-Deni</Text>
      <Entypo name="dots-three-horizontal" size={16} style={styles.dots} />
    </View>
  );
};

export default Header;
