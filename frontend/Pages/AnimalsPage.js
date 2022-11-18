import { StyleSheet, View ,Text ,Image ,ImageBackground ,ScrollView} from 'react-native';
import ContainedButton from '../Components/Button/ContainedButton';
import FlatCard from '../Components/Card/FlatCard';
import HeaderNav from '../Components/HeaderNav';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { IMAGE_URL, SERVER_URL } from "../env";


export default function AnimalsPage({navigation}) {
    const [cards, setCards] = useState([])

    useEffect(() => {
        axios({
          method: "GET",
          url: `${SERVER_URL}/api/v1/getCards`,
        }).then((res) => { 
          setCards(res.data.data);
        }).catch((error) => console.error(error))
        .finally(() => setLoading(false));
      }, [])

    console.log(cards);

    if (cards)
  return (
    <View style={styles.container}> 
        <HeaderNav text={'Animals'} onPress={() => navigation.navigate('Family')}/> 
        <Image  source={require('../assets/animals.png')} style={styles.img}>
        </Image>
        <ScrollView>
            <View style={styles.flexRow}>
                <Text style={styles.foodText}>Animals</Text>
            </View>
            <View style={styles.flatCards}>
                  { cards?.map((card,index) =>{
                    console.log(cards)
                    if(card.categories_id == 4)
                    return(
                        <FlatCard source={ IMAGE_URL + card.card_image} text1={card.english_text}  text2={card.arabic_text}  voice={card.voice_note}/>
                    )
                })}
            </View>   
            <View style={styles.testContainer}>
                <ContainedButton text={"Test Now"} buttonStyle={styles.testButton} textStyle={styles.btnText} />
            </View>
        </ScrollView>
    </View>
);
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:'#F29D38',
        borderRadius:30,
        marginTop:9,
        paddingLeft:12,
        paddingRight:12,
        marginRight:30,
        marginButtom:20
    },
    testButton:{
        backgroundColor:'#F29D38',
        borderRadius:30,
        marginLeft:18,
        marginTop:12,
        width:'90%',
    },
    testContainer:{
        marginBottom:100,
    },
    btnText:{
        color:'white',
        textAlign:'center',
        padding:10,
        fontSize:16,
        fontWeight:'bold',
    },
    flexRow:{
        justifyContent:'space-between',
        flexDirection:'row',
    },
    container: {
        flex: 1,
        flexDirection:'column',
        backgroundColor: 'white',
    },
    flatCards:{
        alignItems:'center',
    },
    img:{
        width: '100%',
        height: '30%',
        opacity:0.9,
    },
    foodText:{
        paddingLeft:30,
        textAlign:"left",
        fontWeight:'bold',
        fontSize:28,
        color:'#F29D38',
        paddingTop:10,
    }
});