import React from 'react';
import {View, ScrollView} from 'react-native';
import Post from './src/components/Post';

const App = () => {
  return (
    <View>
      <ScrollView>
        <Post />
        <Post />
      </ScrollView>
    </View>
  );
};

export default App;
