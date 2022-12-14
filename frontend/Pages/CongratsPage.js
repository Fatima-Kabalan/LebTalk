import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import { Audio } from "expo-av";

export default function CongratsPage({ route, navigation }) {
  const [sound, setSound] = useState();
  const score = route.params.score;

  async function playWinSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/sounds/success.mp3")
    );
    setSound(sound);
    await sound.playAsync();
  }

  useEffect(() => {
    playWinSound();
  }, []);

  return (
    <View style={styles.congratsContainer}>
      <TouchableOpacity
        style={styles.close}
        onPress={() => navigation.navigate("Home")}
      >
        <AntDesign name="close" size={24} color="black" />
      </TouchableOpacity>
      <Image
        source={require("../assets/trophy.gif")}
        style={styles.trophy}
      ></Image>
      <Text style={styles.congratsText}>Congratulations!</Text>
      <Text style={styles.scoreText}>You scored {score} points!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  congratsContainer: {
    backgroundColor: "#FFFCF3",
    flex: 1,
  },
  close: {
    flexDirection: "row",
    paddingTop: 50,
    paddingLeft: 10,
  },
  trophy: {
    marginLeft: 60,
    width: "70%",
    height: "50%",
  },
  congratsText: {
    fontWeight: "bold",
    color: "#A30000",
    fontSize: 24,
    textAlign: "center",
  },
  scoreText: {
    fontStyle: "normal",
    fontSize: 17,
    color: "#A42E2C",
    paddingTop: 12,
    textAlign: "center",
  },
});
