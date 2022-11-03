import { StyleSheet, View ,Image, ImageBackground} from 'react-native';
import TextButton from '../Button/TextButton';

export default function CircularCard({source,text}) {
  return (
    <View>
      <ImageBackground style={styles.category}  imageStyle={{ borderRadius: 80}}
        source={source}>
         <TextButton text={text} style={styles.text}></TextButton>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
    text:{
        color:'black',
        fontSize:40,
        padding:40,
        textAlign:'center',
        
    },
   category:{
        backgroundColor:'white',
        height:150,
        width:150,
        opacity:0.6,
        margin:20,
   }
});

