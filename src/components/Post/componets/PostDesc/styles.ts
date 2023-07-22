import {StyleSheet} from 'react-native';
import fonts from '@theme/fonts';
import colors from '@theme/colors';

const styles = StyleSheet.create({
  desc: {
    color: colors.black,
    lineHeight: fonts.size.lg,
  },
  author: {
    fontWeight: fonts.weight.bold,
  },
});

export default styles;
