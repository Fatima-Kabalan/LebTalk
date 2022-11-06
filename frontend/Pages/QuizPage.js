import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ContainedButton from '../Components/Button/ContainedButton';
import QuestionCard from '../Components/Card/QuestionCard';
import HeaderNav from '../Components/HeaderNav';

export default function QuizPage() {
  return (
    <View style={styles.container} >
      <HeaderNav text={'Quiz'}/>
      <View style={styles.questionContainer}>
        <QuestionCard questionNum={'Question1'} question={'What is the name of this meal?'}/>
        <QuestionCard questionNum={'Question1'} question={'What is the name of this meal?'}/>
        <QuestionCard questionNum={'Question1'} question={'What is the name of this meal?'}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection:'column',
    backgroundColor: 'white',
    
  },
  questionContainer:{
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    padding:20,
  },
});