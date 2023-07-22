import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const Likes = () => {
  return (
    <View>
      <Text style={styles.desc}>
        <Text style={styles.author}>Saint-Deni</Text> Contrary to popular
        belief, Lorem Ipsum is not simply random text. It has roots in a piece
        of classical Latin literature from 45 BC, making it over 2000 years old.
        Richard McClintock, a Latin professor at Hampden-Sydney College in
        Virginia
      </Text>
      <Text>View all 16 comments</Text>
    </View>
  );
};

export default Likes;
