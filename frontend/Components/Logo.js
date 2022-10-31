import { StyleSheet, Text, View ,Image } from 'react-native';

export default function Logo() {
  return (
    <View style={styles.container1}>
       <Image
          style={styles.tinyLogo}
          source={require('../assets/tarboush.jpg')}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});
