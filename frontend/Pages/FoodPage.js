import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View ,Text ,Image ,ImageBackground ,ScrollView} from 'react-native';
import HeaderNav from '../Components/HeaderNav';


export default function FoodPage() {
  return (
    <View style={styles.container}>
        <HeaderNav text={'Food'}/>
        <View style={styles.top}> 
            
            <ImageBackground  source={require('../assets/food.png')} style={styles.img}>
           
            </ImageBackground>
        </View>
        <ScrollView >
            <Text style={styles.foodText}>Food</Text>
            <View style={styles.buttom}>

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
buttom:{
    height:'60%',
    width:'100%',
    flexDirection:'column',
    borderTopLeftRadius:50,
    borderTopRightRadius:50,
    alignItems:'center',
    justifyContent:'space-evenly',
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
foodText:{
    paddingLeft:45,
    textAlign:"left",
    fontWeight:'bold',
    fontSize:20,
    paddingTop:10,
}
});