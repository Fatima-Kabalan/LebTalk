import { StyleSheet, Text, View ,Image } from 'react-native';

export default function Logo() {
  return (
    <View style={styles.logoContainer}>
       <Image
          style={styles.MediumLogo}
          source={require('../assets/tarboush.jpg')}
        />
    </View>
  );
}

const styles = StyleSheet.create({
    logoContainer: {
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        paddingTop:30,
        height:'30%',
        width:'100%',
    },
    MediumLogo: {
        width: 120,
        height: 120,
        borderRadius:60,
    },
});
