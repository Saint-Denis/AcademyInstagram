import React from 'react';
import {View, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '@theme/colors';
import styles from './styles';

const Likes = () => {
  return (
    <View>
      <View style={styles.comment}>
        <Text style={styles.commentText}>
          <Text style={styles.author}>Saint-Deni</Text> Contrary to popular
          belief, Lorem Ipsum is not simply random text. It has roots in a piece
          of classical Latin literature from 45 BC
        </Text>
        <AntDesign
          name={'hearto'}
          size={16}
          style={styles.icon}
          color={colors.black}
        />
      </View>
      <Text>22 July, 2023</Text>
    </View>
  );
};

export default Likes;
