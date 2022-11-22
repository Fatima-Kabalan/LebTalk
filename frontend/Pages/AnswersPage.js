import { StyleSheet, Text, View, Image , TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import Logo from '../Components/Logo/SmallLogo';
import ContainedButton from '../Components/Button/ContainedButton';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { IMAGE_URL, SERVER_URL } from "../env";
import btn from '../Components/Button/btn';
import { Audio } from 'expo-av';
import wrong from '../assets/sounds/wrong.mp3'

export default function AnswersPage({route, navigation}) {
    const question_id = route.params.question_id;
    const category_id = route.params.category_id;

    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);
    

    useEffect(() => {
      axios({
        method: "GET",
        url: `${SERVER_URL}/api/v1/getQuestion/${question_id}`,
      }).then((res) => { 
        setQuestions(res.data.data);
        console.log('questions:', res.data.data)
      }).catch((error) => console.error(error));
    }, [])

    useEffect(() => {
      axios({
        method: "GET",
        url: `${SERVER_URL}/api/v1/getAnswers/${question_id}`,
      }).then((res) => { 
        setAnswers(res.data.data);
        console.log('answers:', res.data.data)
      }).catch((error) => console.error(error));
    }, [])


    const success = (x)  => {
        if(x === 1)
        return (
           
            <ContainedButton text={'hi'}/>
         
        )
       
        else{
             Audio.Sound.createAsync({
                uri : wrong
            })
            console.log('wrong')
        }
    }

  if(questions)
    return (
        <View style={styles.container}>
            <View style={styles.nav}>
                <TouchableOpacity style={styles.close} onPress={() => navigation.navigate('Questions')}> 
                    <AntDesign name="close" size={24} color="black" />
                </TouchableOpacity>
                <MaterialCommunityIcons name="alarm-multiple" size={24} color="black" />
                <Logo/>
            </View>
            <Image source={require('../assets/Kibbeh.jpg')} style={styles.image}>
            </Image>
            <View>
                
                <Text style={styles.question}>What is the name of this meal?</Text>
            </View>
            <View style={styles.btnFlex}>
            { answers?.map((answer,index) =>{
                    return(
                        <ContainedButton buttonStyle={styles.btn} text={answer.name} textStyle={styles.text} isCorrect = {answer.is_correct} onPress={()=>{success(answer.is_correct)}} />
                    )
                })} 
                 {/* <ContainedButton buttonStyle={styles.btn} text={"كبة"} textStyle={styles.text} onPress={()=>navigation.navigate('Congrats') } />
                 <ContainedButton buttonStyle={styles.btn} text={"فتوش"} textStyle={styles.text} onPress={()=>navigation.navigate('Failed') } />
                 <ContainedButton buttonStyle={styles.btn} text={"حمص"} textStyle={styles.text} onPress={()=>navigation.navigate('Failed')} />
               */}
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    nav:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:20,
        marginTop:25,
    },
    image:{
        height:'30%',
        width:' 90%', 
        borderRadius:30,
        marginLeft:15,
        marginRight:20
    },
    questionNum:{
        color:'#BB271A',
        fontWeight:'bold',
        fontSize:18,
        marginTop:20,
        marginRight:20,
        marginLeft:20,
    },
    question:{
        fontSize:16,
        marginRight:20,
        marginTop:20,
        marginLeft:20,
    },
    btnSuccess:{
        backgroundColor:'green',
        width:'90%',
        marginLeft:20,
        marginTop:20,
        borderRadius:40
    },
    btn:{
        backgroundColor:'#F29D38',
        width:'90%',
        marginLeft:20,
        marginTop:20,
        borderRadius:40
    },
    btnFail:{
        backgroundColor:'red',
        width:'90%',
        marginLeft:20,
        marginTop:20,
        borderRadius:40
    },
    text:{
        fontSize:35,
        color:'#BB271A',
        textAlign:'center',
        padding:10
    },
    text2:{
        fontSize:35,
        color:'#778899',
        textAlign:'center',
        padding:10
    }
})