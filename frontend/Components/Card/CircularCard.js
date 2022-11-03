import { StyleSheet, View } from 'react-native';

export default function CircularCard({}) {
  return (
    <View style={styles.category}>
      <Image
        style={styles}
        source={require('../../assets/tarboush.jpg')}
      />
    </View>
  );
}
const styles = StyleSheet.create({
   category:{
        borderRadius:50,
        backgroundColor:'white',
   }
});

