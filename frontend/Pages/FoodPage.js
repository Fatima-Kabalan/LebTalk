import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View ,Text ,Image ,ImageBackground ,ScrollView} from 'react-native';
import FlatCard from '../Components/Card/FlatCard';
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
            <View style={styles.flatCards}>
                <FlatCard source={require('../assets/Kibbeh.jpg')} />
            </View>   
        </ScrollView>
    </View>
);
}

const styles = StyleSheet.create({

top:{
    width:'100%',
    height:'40%'
},

container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: 'white',
},
flatCards:{
   justifyContent:'center',
   alignItems:'center'
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