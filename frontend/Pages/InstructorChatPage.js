import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ChatCard from '../Components/Card/ChatCard';

export default function InstructorChatPage(){
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
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
})