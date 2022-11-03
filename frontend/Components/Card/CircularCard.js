import { StyleSheet, View ,Image, ImageBackground} from 'react-native';
import TextButton from '../Button/TextButton';

export default function CircularCard({source,text,onPress,textStyle}) {
  return (
    <View>
      <ImageBackground style={styles.category}  imageStyle={{ borderRadius: 80}}
        source={source}>
            <TextButton text={text} onPress={onPress} style={styles.text}></TextButton>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
   category:{
        backgroundColor:'black',
        borderRadius:80,
        height:150,
        width:150,
        opacity:0.7,
        margin:20,
   },
   text:{
    textAlign:'center',
    fontSize:25,
    fontWeight:'700',
    paddingTop:50,
    color:'white',
    fontStyle:"SemiBold", 
   }
});

