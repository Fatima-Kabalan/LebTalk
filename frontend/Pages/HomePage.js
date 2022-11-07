import { StyleSheet, View ,Text ,Image ,ImageBackground ,ScrollView} from 'react-native';
import { useFonts } from 'expo-font';
import * as Font from 'expo-font';
import Logo from '../Components/Logo/SmallLogo';
import Card from '../Components/Card/CircularCard';
import HeaderNav from '../Components/HeaderNav';

export default function HomePage({navigation}) {
  return (
        <View style={styles.container}>
          
            <View style={styles.top}>
          
                <ImageBackground  source={require('../assets/lebanon.jpg')} style={styles.img}>
                {/* <View styles={styles.logoBar}> 
                    <Logo/>

                </View> */}
                
                <View style={styles.textContainer}>
                    <Text style={styles.imgText}> “In learning you will teach, and in teaching you will learn.”
                    ― Phil Collins</Text>
                </View>
                </ImageBackground>
            </View>
            <ScrollView >
                {/* <Text style={styles.courseText}>Courses</Text> */}
                <View style={styles.buttom}>
                    <View style={styles.cardFlex}>  
                        <Card source={require('../assets/Kibbeh.jpg')} text={'Food'} textStyle={styles.cardText} onPress={()=>navigation.navigate('Food')} />
                        <Card source={require('../assets/fam.jpg')} text={'Family'}  textStyle={styles.cardText} />
                    </View>
                    <View style={styles.cardFlex}>
                        <Card source={require('../assets/dog.jpg')}  text={'Animals'} textStyle={styles.cardText}  />
                        <Card source={require('../assets/sports.jpg')} text={'Sports'} textStyle={styles.cardText} />
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
        // marginTop:60
    },
    buttom:{
        height:'60%',
        width:'100%',
        flexDirection:'column',
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
        alignItems:'center',
        justifyContent:'space-evenly',
        marginTop:30
    },
    cards:{
        marginButtom:70,
        paddingTop:20,  
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
    courseText:{
        paddingLeft:45,
        textAlign:"left",
        fontWeight:'bold',
        fontSize:25,
        paddingTop:10,
    },
    cardText:{
        color:'white',
        fontSize:24,
        fontWeight:'bold'
    }
});