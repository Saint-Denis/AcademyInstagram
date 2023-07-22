import {StyleSheet} from 'react-native';
import fonts from '@theme/fonts';
import colors from '@theme/colors';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontWeight: fonts.weight.bold,
    color: colors.black,
  },
  dots: {
    marginLeft: 'auto',
  },
});

export default styles;
