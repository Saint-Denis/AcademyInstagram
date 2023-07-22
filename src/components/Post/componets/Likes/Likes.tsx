import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

const Likes = () => {
  return (
    <Text style={styles.likeInfo}>
      Liked by <Text style={styles.likeLink}>Marat Safin</Text> and{' '}
      <Text style={styles.likeLink}>66 others</Text>
    </Text>
  );
};

export default Likes;
