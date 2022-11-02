import { StyleSheet, View ,Text ,ImageBackground} from 'react-native';
import { useFonts } from 'expo-font';
import * as Font from 'expo-font';
import Logo from '../Components/Logo/SmallLogo';


export default function HomePage() {
  return (
        <View style={styles.container}>
            <View >
                <ImageBackground  source={require('../assets/lebanon.jpg')} style={styles.img}>
                    <View styles={styles.logoBar}> 
                        <Logo/>
                        {/* <Text style={styles.lebText}>
                            Leb<Text style={styles.talkText}>Talk</Text>
                        </Text> */}
                    </View>
                <View style={styles.textContainer}><Text style={styles.imgText}> “In learning you will teach, and in teaching you will learn.”
                    ― Phil Collins</Text></View>
                </ImageBackground>
            </View>
        </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        backgroundColor: '#A42E2C',
    },
    img:{
        width: '100%',
        height: '75%',
        opacity:0.8,
    },
    textContainer:{
        position: 'absolute',
        top: 0, 
        left: 0, 
        right: 0,
        bottom: 55, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgText:{
        color:'white',
        fontWeight:'bold',
        fontSize:25,
        opacity:7,
        backgroundColor:'#A42E2C',
        fontFamily: 'sans-serif',
    },
    lebText:{
        fontWeight:'bold',
        fontSize:30,
        color:'white',
       
    },
    talkText:{
        fontWeight: 'bold',
        fontSize:30,
        color:'#E1943C',
    },
    logoBar:{
        flexDirection:'column'
    }
});