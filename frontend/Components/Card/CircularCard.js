import { StyleSheet, View ,Image, Text,ImageBackground, TouchableOpacity} from 'react-native';
import TextButton from '../Button/TextButton';

export default function CircularCard({source,text,onPress,textStyle}) {
  return (
    <View>
        <TouchableOpacity  onPress={onPress}>
        <ImageBackground 
            style={styles.category}  
            imageStyle={{ borderRadius: 80}}
            source={source} 
        >
        <Text  style={textStyle}>{text}</Text>
        </ImageBackground>
        </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
   category:{
        backgroundColor:'black',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        height:150,
        width:150,
        opacity:0.7,
        margin:20,
        borderRadius:80,
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

