import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Audio } from "expo-av";
import axios from "axios";
import { SERVER_URL } from "../../env";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function FlatCard({
  source,
  voice_note,
  text1,
  text2,
  name,
  card_id,
}) {
  const [sound, setSound] = React.useState();
  const image = { uri: source };
  const voice = { uri: voice_note };
  const [fav, setFav] = useState(false);

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(voice);
    setSound(sound);
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  React.useEffect(() => {
    const fetchDatas = async () => {
      const token = await AsyncStorage.getItem("@token");
      await axios({
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        url: `${SERVER_URL}/api/v1/checkFavCard`,
        data: {
          card_id: `${card_id}`,
        },
      })
        .then((res) => {
          if (res.data.data === false) {
            setFav(false);
          } else {
            setFav(true);
          }
        })
        .catch((error) => console.error(error));
    };
    fetchDatas();
  }, [fav]);

  async function fetchData() {
    const token = await AsyncStorage.getItem("@token");
    console.log(token);
    await axios({
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      url: `${SERVER_URL}/api/v1/favCard`,
      data: {
        card_id: `${card_id}`,
      },
    })
      .then((res) => {
        if (res.data === "deleted") {
          setFav(false);
        } else {
          setFav(true);
        }
      })
      .catch((error) => console.error(error));
  }

  return (
    <View style={styles.FlatCardContainer}>
      <Image style={styles.imageCard} source={image}></Image>
      <View style={styles.row}>
        <View style={styles.bar1}>
          <MaterialCommunityIcons name={name} size={24} color="white" />
          <Text style={styles.text}>{text1}</Text>
        </View>
        <View style={styles.bar1}>
          <Text style={styles.text}>{text2}</Text>
          <MaterialCommunityIcons name={name} size={24} color="white" />
        </View>
      </View>
      <View style={styles.bar}>
        <TouchableOpacity source1={voice} onPress={playSound}>
          <MaterialIcons name="audiotrack" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            fetchData();
            setFav(!fav);
          }}
        >
          <FontAwesome
            name={fav ? "heart" : "heart-o"}
            size={24}
            color="white"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  FlatCardContainer: {
    borderRadius: 30,
    backgroundColor: "#BD4543",
    height: 206,
    width: 330,
    margin: 20,
  },
  imageCard: {
    borderRadius: 20,
    height: 120,
    width: 330,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 2,
  },
  bar: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 10,
  },
  bar1: {
    flexDirection: "row",
    paddingTop: 6,
  },
  text: {
    paddingLeft: 5,
    paddingRight: 5,
    color: "white",
    fontSize: 19,
  },
});
