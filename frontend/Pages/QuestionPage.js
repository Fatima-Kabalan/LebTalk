import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ContainedButton from '../Components/Button/ContainedButton';
import QuestionCard from '../Components/Card/QuestionCard';
import HeaderNav from '../Components/HeaderNav';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { IMAGE_URL, SERVER_URL } from "../env";
import AnswersPage from './AnswersPage';


export default function QuestionPage({route, navigation}) {
  const category_id = route.params.category_id

  const [cards, setCards] = useState([])

  useEffect(() => {
    axios({
      method: "GET",
      url: `${SERVER_URL}/api/v1/getQuestion/${category_id}`,
    }).then((res) => { 
      setCards(res.data.data);
    }).catch((error) => console.error(error));
  }, [])
 

if (cards)
  return (
    <View style={styles.container} >
      <HeaderNav text={'Questions'} />
        <ScrollView>
        <View style={styles.questionContainer}>
            { cards?.map((card,index) =>{
                    return(
                        <QuestionCard onPress={() => navigation.navigate('Answers', {question_id: card.id})}  quizNum={card.title} />
                    )
                })}
                </View>
        </ScrollView>
       
      
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