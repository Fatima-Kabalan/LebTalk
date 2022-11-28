import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
} from "react-native";
import Logo from "../Components/Logo/SmallLogo";
import ContainedButton from "../Components/Button/ContainedButton";
import { useState, useEffect } from "react";
import axios from "axios";
import { IMAGE_URL, SERVER_URL } from "../env";
import { AntDesign } from "@expo/vector-icons";
import { Audio } from "expo-av";
import CountDown from "react-native-countdown-component";

export default function QuestionPage({ route, navigation }) {
  const category_id = route.params.category_id;

  const [cards, setCards] = useState();
  const [lengthh, setlengthh] = useState(0);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [sound, setSound] = useState();
  const [pressed, setPressed] = useState(false);
  const [score, setScore] = useState(0);

  async function playWrongSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/sounds/wrong-answer.mp3")
    );
    setSound(sound);
    await sound.playAsync();
  }

  async function playSuccessSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/sounds/yay.mp3")
    );
    setSound(sound);
    await sound.playAsync();
  }

  function randomize(values) {
    let index = values.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (index != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * index);
      index--;

      // And swap it with the current element.
      [values[index], values[randomIndex]] = [
        values[randomIndex],
        values[index],
      ];
    }

    return values;
  }

  useEffect(async () => {
    await axios({
      method: "GET",
      url: `${SERVER_URL}/api/v1/getQuestion/${category_id}`,
    })
      .then((res) => {
        setCards(randomize(res.data.data));
        setlengthh(Object.keys(res.data.data).length);
      })
      .catch((error) => console.error(error));
  }, []);

  const success = (x) => {
    if (x === 1) {
      setScore(score + 1);
      playSuccessSound();
    } else {
      playWrongSound();
    }
  };

  if (cards) {
    let card = cards[currentQuestion];
    return (
      <View style={styles.container}>
        <View style={styles.nav}>
          <TouchableOpacity
            style={styles.close}
            onPress={() => navigation.navigate("Category")}
          >
            <AntDesign name="close" size={24} color="black" />
          </TouchableOpacity>
          <CountDown
            until={1000}
            timeToShow={["M", "S"]}
            digitStyle={{
              backgroundColor: "#FFF",
              borderWidth: 2,
              borderRadius: 50,
              borderColor: "#F29D38",
            }}
            onFinish={() => {
              playWrongSound();
            }}
            onPress={() => alert("hello")}
            size={20}
          />
          <Logo />
        </View>
        {
          <>
            <Image
              source={{ uri: IMAGE_URL + card.question.question_image }}
              style={styles.image}
            ></Image>
            <View>
              <Text style={styles.question}>{card.question.question}</Text>
            </View>
            <View>
              {card.answers?.map((answer) => {
                return (
                  <ContainedButton
                    buttonStyle={
                      pressed && answer.is_correct === 0
                        ? styles.btnWrong
                        : pressed && answer.is_correct === 1
                        ? styles.btnCorrect
                        : styles.btn
                    }
                    text={answer.name}
                    textStyle={styles.btnText}
                    isCorrect={answer.is_correct}
                    onPress={() => {
                      success(answer.is_correct);
                      setPressed(true);
                    }}
                    disabled={pressed}
                  />
                );
              })}
            </View>
            <View>
              <ContainedButton
                buttonStyle={styles.btnNext}
                text={"Next"}
                textStyle={styles.btnNextText}
                onPress={() => {
                  setPressed(false);
                  currentQuestion === lengthh - 1
                    ? score < lengthh
                      ? navigation.navigate("Failed")
                      : navigation.navigate("Congrats", { score: score })
                    : setCurrentQuestion(currentQuestion + 1);
                }}
              />
            </View>
          </>
        }
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    marginTop: 25,
  },
  image: {
    height: "30%",
    width: " 90%",
    borderRadius: 30,
    marginLeft: 15,
    marginRight: 20,
  },
  btnText: {
    color: "white",
    textAlign: "center",
    padding: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  btnNextText: {
    color: "#BB271A",
    textAlign: "center",
    padding: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  btnNext: {
    backgroundColor: "#F29D38",
    borderRadius: 30,
    marginLeft: 18,
    marginTop: 40,
    width: "90%",
  },
  question: {
    fontSize: 18,
    marginRight: 25,
    marginTop: 20,
    marginLeft: 25,
    fontWeight: "bold",
  },
  btn: {
    backgroundColor: "#F29D38",
    borderRadius: 30,
    marginLeft: 18,
    marginTop: 12,
    width: "90%",
  },
  btnWrong: {
    backgroundColor: "red",
    width: "90%",
    marginLeft: 20,
    marginTop: 20,
    borderRadius: 40,
  },
  btnCorrect: {
    backgroundColor: "green",
    width: "90%",
    marginLeft: 20,
    marginTop: 20,
    borderRadius: 40,
  },
});
