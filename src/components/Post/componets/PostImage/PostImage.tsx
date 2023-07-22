import React from 'react';
import {Image} from 'react-native';
import styles from './styles';

const PostImage = () => {
  return (
    <Image
      source={{
        uri: 'https://loremflickr.com/320/240',
      }}
      style={styles.image}
    />
  );
};

export default PostImage;
