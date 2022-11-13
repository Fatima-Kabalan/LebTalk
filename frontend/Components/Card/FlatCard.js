import { StyleSheet, View ,Image, Text,ImageBackground, TouchableOpacity} from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
// import { Audio } from 'react-native-audio-recorder-player';


export default function FlatCard({source,text1,text2,onPress,textStyle,name}) {
    // const audio = new Audio('Transformation-sound-effect.mp3')
    return (
      <View style={styles.FlatCardContainer}>
        <Image 
            style={styles.imageCard}  
            source={source} 
        ></Image>
        <View  style={styles.row} >
            <View style={styles.bar1}>
                <MaterialCommunityIcons name={name} size={24} color="white" />
                <Text style={styles.text}>{text1}</Text>
            </View>
            <View style={styles.bar1}>
                <Text style={styles.text}>{text2}</Text>
                <MaterialCommunityIcons name={name} size={24} color="white" />
            </View>
        </View>
        <View style={styles.bar}>
            <TouchableOpacity>
                    <MaterialIcons name="audiotrack" size={24} color="white" />
            </TouchableOpacity>
      
          <FontAwesome name="heart-o" size={24} color="white" />
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    FlatCardContainer:{
        borderRadius:30,
        backgroundColor:'#BD4543',
        height:195,
        width:330,
       margin:20
    },
    imageCard:{
        borderRadius:30,
        height:120,
        width:330,
        
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft:10,
        paddingRight:10,
      
        paddingTop:2,
    },
    bar:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft:50,
        paddingRight:50,
        paddingTop:10,
    },
    bar1:{
        flexDirection:'row',
        paddingTop:6,
    },
    text:{
        paddingLeft:5,
        paddingRight:5,
        color:'white',
        fontSize:19
    }

})

