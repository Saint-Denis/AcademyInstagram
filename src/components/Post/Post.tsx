import React from 'react';
import {View, Text, Image} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import colors from '@theme/colors';
import styles from './styles';

const Post = () => {
  return (
    <View style={styles.post}>
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
      <Image
        source={{
          uri: 'https://loremflickr.com/320/240',
        }}
        style={styles.image}
      />
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

        <Text style={styles.likeInfo}>
          Liked by <Text style={styles.likeLink}>Marat Safin</Text> and{' '}
          <Text style={styles.likeLink}>66 others</Text>
        </Text>
      </View>
    </View>
  );
};

export default Post;
