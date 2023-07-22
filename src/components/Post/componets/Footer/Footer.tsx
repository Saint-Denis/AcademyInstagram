import React from 'react';
import {View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import colors from '@theme/colors';
import styles from './styles';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.icons}>
        <AntDesign
          name={'hearto'}
          size={24}
          style={styles.icon}
          color={colors.black}
        />
        <Ionicons
          name="chatbubble-outline"
          size={24}
          style={styles.icon}
          color={colors.black}
        />
        <Feather
          name="send"
          size={24}
          style={styles.icon}
          color={colors.black}
        />
        <Feather
          name="bookmark"
          size={24}
          style={[styles.icon, styles.iconRight]}
          color={colors.black}
        />
      </View>
    </View>
  );
};

export default Footer;
