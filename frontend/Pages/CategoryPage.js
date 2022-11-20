import { StyleSheet, View ,Text ,Image ,ImageBackground ,ScrollView} from 'react-native';
import ContainedButton from '../Components/Button/ContainedButton';
import FlatCard from '../Components/Card/FlatCard';
import HeaderNav from '../Components/HeaderNav';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { IMAGE_URL, SERVER_URL, VOICE_URL } from "../env";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CategoryPage({route, navigation}) {
    const [cards, setCards] = useState([])

    const { category } = route.params;

    const getCategoryCards = async () => {
        const token = await AsyncStorage.getItem("@token");
        const config = {
            method: "GET",
            headers:{Authorization: `Bearer ${token}`},
            url: `${SERVER_URL}/api/v1/getCategoryCards/${category.id}`, 
        }

        try{
            const res = await axios(config)
      
            if(res.data.status == "success"){
                console.log("res: ", res)
              setCards(res.data.data);
            }
          }catch(error){
            console.warn(error)
            return error
          }
    }

    useEffect(() => {
       getCategoryCards()
      }, [])

    if (cards)
    return (
    <View style={styles.container}> 
        <HeaderNav text={category.category_name} onPress={() => navigation.navigate('Home')}/> 
        { category.category_name == "Family" ? (
            <Image source={require("../assets/fam.gif")} style={styles.img} />
        )
        : <Image source={{uri: IMAGE_URL + category.category_image}} style={styles.img} />
        }
        
           
        
        <ScrollView>
            <View style={styles.flexRow}>
                <Text style={styles.foodText}>{category.category_name}</Text>
            </View>
            <View style={styles.flatCards}>
                 { cards?.map((card,index) =>{
                    return(
                        <FlatCard source={ IMAGE_URL + card.card_image} text1={card.english_text}  text2={card.arabic_text} voice_note={ VOICE_URL + card.voice_note} card_id={card.id} />
                    )
                })}
            </View>   
            <View style={styles.testContainer}>
                <ContainedButton text={"Test Now"} buttonStyle={styles.testButton} textStyle={styles.btnText} onPress={() => navigation.navigate('Quiz', {category_id: category.id})}/>
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