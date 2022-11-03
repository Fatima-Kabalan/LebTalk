import { StyleSheet, View ,Image} from 'react-native';

export default function CircularCard({source}) {
  return (
    <View >
      <Image style={styles.category}
        source={source}
      />
    </View>
  );
}
const styles = StyleSheet.create({
   category:{
        borderRadius:70,
        backgroundColor:'white',
        height:'45%',
        width:'40%',
        opacity:0.6,
   }
});

