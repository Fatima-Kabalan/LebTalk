import { ScrollView, StyleSheet, Text, TouchableOpacity, View , Linking } from 'react-native';
import ChatCard from '../Components/Card/ChatCard';
import HeaderNav from '../Components/HeaderNav';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { IMAGE_URL, SERVER_URL } from "../env";

export default function InstructorChatPage(){
  const [cards, setCards] = useState([])

  useEffect(() => {
    axios({
      method: "GET",
      url: `${SERVER_URL}/api/v1/getInstructors`,
    }).then((res) => { 
      setCards(res.data.data);
    }).catch((error) => console.error(error))
    .finally(() => setLoading(false));
  }, [])

console.log(cards);

if (cards)
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <HeaderNav text={'Instructors'}/>
        { cards?.map((card,index) =>{
                    console.log(cards)
                    return(
                        <ChatCard source={ IMAGE_URL + card.profile_picture}  username={card.username} onPress={ ()=> Linking.openURL(
                          'http://api.whatsapp.com/send?phone=961' + card.phone_number
                        )}  
                       
                        />
                    )
                })}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  // container:{
  //   flex:1,
  //   flexDirection:'column',
  //   justifyContent:'center',
  //   alignItems:'center'
  // }
  container:{
    //  margin:20,
  },
  scroll:{
    // marginBottom:20
  }
})