import { StyleSheet, View ,Text ,Image ,ImageBackground ,ScrollView} from 'react-native';
import ContainedButton from '../Components/Button/ContainedButton';
import FlatCard from '../Components/Card/FlatCard';
import HeaderNav from '../Components/HeaderNav';


export default function AnimalsPage({navigation}) {
  return (
    <View style={styles.container}> 
        <HeaderNav text={'Animals'}/> 
        <Image  source={require('../assets/animals.png')} style={styles.img}>
        </Image>
        <ScrollView>
            <View style={styles.flexRow}>
                <Text style={styles.foodText}>Animals</Text>
                {/* <ContainedButton text={"NEXT:Animals"} buttonStyle={styles.button} onPress={() => navigation.navigate('Animals')}  textStyle={styles.btnText}/> */}
            </View>
            <View style={styles.flatCards}>
                <FlatCard source={require('../assets/chipmunk.jpg')} name="car-sports" text1={'Rafting'}  text2={'تجديف'}/>
                <FlatCard source={require('../assets/chipmunk.jpg')} name="car-sports" text1={'Rafting'}  text2={'تجديف'}/>
                <FlatCard source={require('../assets/chipmunk.jpg')} name="car-sports" text1={'Rafting'}  text2={'تجديف'}/>
                <FlatCard source={require('../assets/chipmunk.jpg')} name="car-sports" text1={'Rafting'}  text2={'تجديف'}/>
                
            </View>   
            <View style={styles.testContainer}>
                <ContainedButton text={"Test Now"} buttonStyle={styles.testButton} textStyle={styles.btnText} />
            </View>
        </ScrollView>
    </View>
);
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:'#F29D38',
        borderRadius:30,
        marginTop:9,
        paddingLeft:12,
        paddingRight:12,
        marginRight:30,
        marginButtom:20
    },
    testButton:{
        backgroundColor:'#F29D38',
        borderRadius:30,
        marginLeft:18,
        marginTop:12,
        width:'90%',
    },
    testContainer:{
        marginBottom:100,
    },
    btnText:{
        color:'white',
        textAlign:'center',
        padding:10,
        fontSize:16,
        fontWeight:'bold',
    },
    flexRow:{
        justifyContent:'space-between',
        flexDirection:'row',
    },
    container: {
        flex: 1,
        flexDirection:'column',
        backgroundColor: 'white',
    },
    flatCards:{
        alignItems:'center',
    },
    img:{
        width: '100%',
        height: '30%',
        opacity:0.9,
    },
    foodText:{
        paddingLeft:30,
        textAlign:"left",
        fontWeight:'bold',
        fontSize:28,
        color:'#F29D38',
        paddingTop:10,
    }
});