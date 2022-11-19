import { StyleSheet, View, Text, ImageBackground, FlatList ,ScrollView} from 'react-native';
import Card from '../Components/Card/CircularCard';
import { useState, useEffect } from 'react';
import { IMAGE_URL, SERVER_URL } from "../env";
import axios from "axios";

export default function HomePage({navigation}) {
    
    const [categories, setCategories] = useState([])
    const [isLoading, setLoading] = useState(true);

    const Item = ({ item }) => (
        <Card source={ IMAGE_URL + item.category_image} text={item.category_name} textStyle={styles.cardText} onPress={()=>navigation.navigate("Category", {category: item})}  />
    );

    const renderItem = ( {item} ) => { 
        return (
            <View>
          <Item
            item={item}
          />
          </View>
        );
    };

    useEffect(() => {
        axios({
          method: "GET",
          url: `${SERVER_URL}/api/v1/getAllCategories`,
        }).then((res) => { 
          setCategories(res.data.data);
        }).catch((error) => console.error(error))
        .finally(() => setLoading(false));
      }, [])

    // console.log(categories);

    if (categories)
    return (
            <ScrollView style={{flexGrow:1}}>
                <View style={styles.top}>
                    <ImageBackground  source={require('../assets/lebanon.jpg')} style={styles.img}>
                    <View style={styles.textContainer}>
                        <Text style={styles.imgText}> “In learning you will teach, and in teaching you will learn.”
                        ― Phil Collins</Text>
                    </View>
                    </ImageBackground>
                </View>

                <FlatList
                    data={categories}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    numColumns={2}
                />
            </ScrollView>
  );
  return <></>
}

const styles = StyleSheet.create({
    top:{
        height:'35%',
        width:'100%',
    },
    container: {
        maxHeight: '100%'
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
    cardText:{
        color:'white',
        fontSize:24,
        fontWeight:'bold'
    }
});