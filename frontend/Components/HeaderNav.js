import { StyleSheet, View ,TouchableOpacity ,Text} from 'react-native';
import Logo from '../Components/Logo/SmallLogo';
import { AntDesign } from '@expo/vector-icons'; 
import BackButton from '../Components/Button/BackButton';

export default function HeaderNav({text , onPress}){
    return(
        <View style={styles.container}>
            <View style={styles.flex}>
                <BackButton onPress={onPress} />
                <Text style={styles.text}>{text}</Text>   
                <Logo/>
            </View>  
        </View>
    );
};

const styles = StyleSheet.create({
leftIcon:{
    marginButtom:70
},
container:{
    justifyContent:'center',
    backgroundColor:'#BD4543',
    height:'13%',
},
text:{
    fontSize:24,
    color:'white',
    fontWeight:'bold',
},
flex:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingTop:20,
    paddingLeft:10,
    paddingRight:20
},
});