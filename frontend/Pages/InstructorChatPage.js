import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ChatCard from '../Components/Card/ChatCard';
import HeaderNav from '../Components/HeaderNav';

export default function InstructorChatPage(){
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <HeaderNav text={'Instructors'}/>
        <ChatCard username={'Ahmad Kanso'} />
        <ChatCard username={'Ahmad Kanso'} />
        <ChatCard username={'Ahmad Kanso'} />
        <ChatCard username={'Ahmad Kanso'} />
        <ChatCard username={'Ahmad Kanso'} />
        <ChatCard username={'Ahmad Kanso'} />
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