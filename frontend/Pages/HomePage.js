import { StyleSheet, View ,Text ,Image ,ImageBackground ,ScrollView} from 'react-native';
import { useFonts } from 'expo-font';
import * as Font from 'expo-font';
import Logo from '../Components/Logo/SmallLogo';
import Card from '../Components/Card/CircularCard';

export default function HomePage() {
  return (
        <View style={styles.container}>
            <View style={styles.top}>
                <ImageBackground  source={require('../assets/lebanon.jpg')} style={styles.img}>
                <View styles={styles.logoBar}> 
                    <Logo/>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.imgText}> “In learning you will teach, and in teaching you will learn.”
                    ― Phil Collins</Text>
                </View>
                </ImageBackground>
            </View>
            <ScrollView >
                <Text>Courses</Text>
                <View style={styles.buttom}>
                <View style={styles.cardFlex}>  
                    <Card source={require('../assets/lebanon.jpg')} text={'hi'}/>
                    <Card source={require('../assets/lebanon.jpg')} />
                </View>
                <View style={styles.cardFlex}>
                        <Card source={require('../assets/lebanon.jpg')}  />
                        <Card source={require('../assets/lebanon.jpg')} />
                </View>
            </View>
            </ScrollView>
            
          
        </View>
  );
}

const styles = StyleSheet.create({
    top:{
        height:'40%',
        width:'100%',

    },
    cardFlex:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:30,
        marginTop:60
    },
    buttom:{
        height:'60%',
        width:'100%',
        flexDirection:'column',
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
        alignItems:'center',
        justifyContent:'space-evenly',
       
    },
    cards:{
        marginButtom:70,
        paddingTop:20,
        backgroundColor:'green'
        
    },
    container: {
        flex: 1,
        flexDirection:'column',
        backgroundColor: 'white',
    },
    img:{
        width: '100%',
        height: '100%',
        opacity:0.9,
    },
    textContainer:{
        position: 'absolute',
        top: 60, 
        left: 0, 
        right: 0,
        bottom: 1, 
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
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
    },
    boxContainer:{
        height:'40%',
        width:'100%',
        // padding:30,
        backgroundColor:'#fff',
        borderTopRightRadius:50,
        borderTopLeftRadius:50,
    },
});