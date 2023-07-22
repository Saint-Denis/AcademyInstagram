import {StyleSheet} from 'react-native';
import fonts from '@theme/fonts';
import colors from '@theme/colors';

const styles = StyleSheet.create({
  post: {},
  image: {
    width: '100%',
    aspectRatio: 4 / 3,
  },
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
  icons: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  icon: {
    marginHorizontal: 5,
  },
  iconRight: {
    marginLeft: 'auto',
  },
  footer: {
    padding: 10,
  },
  likeInfo: {
    color: colors.black,
  },
  likeLink: {
    fontWeight: fonts.weight.bold,
  },
});

export default styles;
