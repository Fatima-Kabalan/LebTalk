import { Text, TouchableOpacity } from "react-native";


export default function TextButton({onPress, title, styles}){
    return (
        <TouchableOpacity 
            onPress={onPress}
        >
            <Text style={styles.redText}>
              {title}
            </Text>
        </TouchableOpacity>
    )
}