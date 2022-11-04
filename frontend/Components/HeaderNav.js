import { StyleSheet, View ,TouchableOpacity ,Text} from 'react-native';
import Logo from '../Components/Logo/SmallLogo';
import { AntDesign } from '@expo/vector-icons'; 

export default function HeaderNav({text}){
    return(
        <View style={styles.container}>
            <View style={styles.flex}>
                <AntDesign name="left" size={23} color="white" />
                <Text style={styles.text}>{text}</Text>   
                <Logo/>
            </View>
          
        </View>
        );
    
};

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        backgroundColor:'#BD4543',
        width:'100%',
        height:'10%',
    },
    text:{
        fontSize:24,
        color:'white',
        fontWeight:'bold',
    },
    flex:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        padding:20
    },
});