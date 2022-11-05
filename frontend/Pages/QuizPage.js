import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ContainedButton from '../Components/Button/ContainedButton';
import QuestionCard from '../Components/Card/QuestionCard';

export default function QuizPage() {
  return (
    <View style={styles.container}>
        <QuestionCard questionNum={'Question1'} question={'What is the name of this meal?'}/>
      
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
  
});