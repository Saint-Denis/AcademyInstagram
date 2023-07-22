import {StyleSheet} from 'react-native';
import fonts from '@theme/fonts';
import colors from '@theme/colors';

const styles = StyleSheet.create({
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentText: {
    color: colors.black,
    flex: 1,
    lineHeight: fonts.size.lg,
  },
});

export default styles;
