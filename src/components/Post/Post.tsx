import React from 'react';
import {View} from 'react-native';
import Header from './componets/Header';
import PostImage from './componets/PostImage';
import Footer from './componets/Footer';
import Likes from './componets/Likes';
import PostDesc from './componets/PostDesc';
import Comment from './componets/Comment';

const Post = () => {
  return (
    <View>
      <Header />
      <PostImage />
      <Footer />
      <Likes />
      <PostDesc />
      <Comment />
    </View>
  );
};

export default Post;
