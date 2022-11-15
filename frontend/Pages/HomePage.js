import { StyleSheet, View ,Text ,Image ,ImageBackground ,ScrollView} from 'react-native';
import { useFonts } from 'expo-font';
import * as Font from 'expo-font';
import Logo from '../Components/Logo/SmallLogo';
import Card from '../Components/Card/CircularCard';
import HeaderNav from '../Components/HeaderNav';
import { useState, useEffect } from 'react';
import { IMAGE_URL, SERVER_URL } from "../env";
import axios from "axios";

export default function HomePage({navigation}) {
    
    const [categories, setCategories] = useState([])

    // let categories = [
    //     {
    //         category_image: require('../assets/Kibbeh.jpg'),
    //         category_name: 'Food'
    //     },
    //     {
    //         category_image: require('../assets/fam.jpg'),
    //         category_name: 'Family'
    //     },
    //     {
    //         category_image: require('../assets/dog.jpg'),
    //         category_name: 'Animals'
    //     },
    //     {
    //         category_image: require('../assets/sports.jpg'),
    //         category_name: 'Sports'
    //     },
    // ]

    // const getAllCategories = () => {
    //     return(
    //         axios({
    //             method: "GET",
    //             url: `${SERVER_URL}/api/v1/getAllCategories`,
    //           }).then((res) => {
    //             console.log(res.data);
    //             setCategories(res.data);
    //           })
    //     )
    // }

    // useEffect(() => {
    //     categories = getAllCategories();
    //     console.log(categories)
    // }, [])

    useEffect(() => {
        console.log(categories);
        axios({
          method: "GET",
          url: `${SERVER_URL}/api/v1/getAllCategories`,
        }).then((res) => {
          console.log(res.data);   
          setCategories(res.data.data);
        });
      }, [categories])

    if (categories)
    return (
        <View>
            <View style={styles.top}>
                <ImageBackground  source={require('../assets/lebanon.jpg')} style={styles.img}>
                <View style={styles.textContainer}>
                    <Text style={styles.imgText}> “In learning you will teach, and in teaching you will learn.”
                    ― Phil Collins</Text>
                </View>
                </ImageBackground>
            </View>
            <ScrollView>
                <View >
                    <View> 
                    {categories?.map((category, index) => {
                        console.log(categories)
                        return(
                            <Card source={ IMAGE_URL + category.category_image} text={category.category_name} textStyle={styles.cardText} onPress={()=>navigation.navigate(category.category_name)} />
                        );
                    })}
                    </View>
                </View>
            </ScrollView>
        </View>
  );
  return <></>
}

const styles = StyleSheet.create({
    top:{
        height:'40%',
        width:'100%',
    },
    cardFlex:{
        // flexWrap: 'wrap',
        // flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center',
        // padding:30,
        // marginTop:10
        flexDirection: "column",
        flexWrap: "wrap",
      
    },
    buttom:{
        // height:'10%',
        // width:'100%',
        flexWrap: 'wrap',
        flexDirection:'row',
        // flexDirection:'column',
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
        alignItems:'center',
        // justifyContent:'space-evenly',
        // marginTop:30
    },
    cards:{
        marginButtom:70,
        paddingTop:20,  
    },
    container: {
        flex: 1,
        // flexDirection:'row',
        // padding:10,
        backgroundColor: 'white',
        flexWrap: 'wrap',
    },
    img:{
        width: '100%',
        height: '100%',
        opacity:0.9,
    },
    textContainer:{
        position: 'absolute',
        top: 60, 
        left: 0, 
        right: 0,
        bottom: 1, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgText:{
        color:'white',
        fontWeight:'bold',
        fontSize:25,
        opacity:7,
        backgroundColor:'#A42E2C',
        fontFamily: 'sans-serif',
    },
    lebText:{
        fontWeight:'bold',
        fontSize:30,
        color:'white',
       
    },
    talkText:{
        fontWeight: 'bold',
        fontSize:30,
        color:'#E1943C',
    },
    logoBar:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
    },
    courseText:{
        paddingLeft:45,
        textAlign:"left",
        fontWeight:'bold',
        fontSize:25,
        paddingTop:10,
    },
    cardText:{
        color:'white',
        fontSize:24,
        fontWeight:'bold'
    }
});