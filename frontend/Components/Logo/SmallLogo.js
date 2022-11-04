import { StyleSheet, View ,Image } from 'react-native';

export default function Logo() {
  return (
    <View >
       <Image
          style={styles.SmallLogo}
          source={require('../../assets/tarboush.jpg')}
        />
    </View>
  );
}
const styles = StyleSheet.create({
    // logoContainer: {
    //     flexDirection:'column',
    //     justifyContent:'center',
    //     alignItems:'center',
    //     paddingTop:30,
    // },
    SmallLogo: {
        width: 40,
        height: 40,
        borderRadius:20,
    },
});
