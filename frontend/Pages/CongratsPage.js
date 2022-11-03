import { StyleSheet, Text, View ,height,TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

export default function CoongratsPage() {
  return (
    <View style={styles.congratsContainer}>
        <View style={styles.close} > 
            <AntDesign name="close" size={24} color="black" />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    congratsContainer:{
        backgroundColor:'#FFFCF3',
        flex:1,
    },
    close:{
        flexDirection:'row',
        paddingTop:50,
        paddingLeft:10,
    }
})
