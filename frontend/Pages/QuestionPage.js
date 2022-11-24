import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Logo from "../Components/Logo/SmallLogo";
import ContainedButton from "../Components/Button/ContainedButton";
import QuestionCard from "../Components/Card/QuestionCard";
import HeaderNav from "../Components/HeaderNav";
import { useState, useEffect } from "react";
import axios from "axios";
import { IMAGE_URL, SERVER_URL } from "../env";
import AnswersPage from "./AnswersPage";
import { AntDesign } from "@expo/vector-icons";
import { Audio } from "expo-av";
import CountDown from "react-native-countdown-component";

export default function QuestionPage({ route, navigation }) {
  const category_id = route.params.category_id;
  const category = route.params;

  const [cards, setCards] = useState();
  const [answers, setAnswers] = useState([]);
  const [lengthh, setlengthh] = useState(0);
  const [answered, setAnswered] = useState(false);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentId, setCurrentId] = useState(0);
  const [finishTimer, setFinishTimer] = useState(false);
  const [sound, setSound] = useState();
  const [pressed, setPressed] = useState(false);
  const [score, setScore] = useState(0);

  const [time, setTime] = useState(true);

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/sounds/wrong.mp3")
    );
    setSound(sound);
    await sound.playAsync();
  }

  useEffect(async () => {
    await axios({
      method: "GET",
      url: `${SERVER_URL}/api/v1/getQuestion/${category_id}`,
    })
      .then((res) => {
        setCards(res.data.data);
        setlengthh(Object.keys(res.data.data).length);
        console.log(Object.keys(res.data.data).length);
      })
      .catch((error) => console.error(error));
  }, []);
  const success = (x) => {
    if (x === 1) {
      setScore(score + 1);
      console.log(score);
    } else {
      playSound();
      
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
          {/* <MaterialCommunityIcons
            name="alarm-multiple"
            size={24}
            color="black"
          /> */}
          <CountDown
            until={100}
            timeToShow={["M",'S']}
            digitStyle={{
              backgroundColor: "#FFF",
              borderWidth: 2,
              borderRadius: 40,
              borderColor: "#1CC625",
            }}
            onFinish={() => {
              playSound();
              // setAnswered(true);
              // setFinishTimer(true);
            }}
            onPress={() => alert("hello")}
            size={20}
          />
          <Logo />
        </View>

        {
          // cards.map((card) => {

          <>
            <Image
              source={{ uri: IMAGE_URL + card.question.question_image }}
              style={styles.image}
            ></Image>
            <View>
              <Text style={styles.question}>
                {card.question.question} {score}
              </Text>
            </View>
            {/* <View style={styles.btnFlex}>
              {card.answers?.map((answer) => {
                return (
                  <ContainedButton
                    buttonStyle={styles.btn}
                    text={answer.name}
                    textStyle={styles.text}
                    isCorrect={answer.is_correct}
                    onPress={() => {
                      setAnswered(true);
                      success(answer.is_correct);
                      //
                    }}
                    disabled={answered}
                    onTime = {false}
                  />
                );
              })}
            </View>
            <View>
              <ContainedButton
                buttonStyle={styles.btn}
                text={"Next"}
                onPress={() => {
                  setAnswered(false);
           currentQuestion  === lengthh - 1 ? 
                  score < lengthh ?
                  navigation.navigate("Failed"):
                  navigation.navigate("Congrats")

                  :setCurrentQuestion(currentQuestion + 1);
                  console.log(score);
                  console.log(currentQuestion);
                   setFinishTimer(false);
                  // setTime(!time);
                }}
              />
            </View> */}
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
                    textStyle={styles.text}
                    isCorrect={answer.is_correct}
                    onPress={() => {
                      success(answer.is_correct);
                      setPressed(true);
                      // setFinishTimer(false);
                    }}
                    disabled={pressed}
                  />
                );
              })}
            </View>
            <View>
              <ContainedButton
                buttonStyle={styles.btn}
                text={"Next"}
                onPress={() => {
                  setPressed(false);
                  currentQuestion  === lengthh - 1 ? 
                  score < lengthh ?
                  navigation.navigate("Failed"):
                  navigation.navigate("Congrats")

                  :setCurrentQuestion(currentQuestion + 1);
                  console.log(score);

                 
                }}
              />
            </View>
          </>
          // ;
          // })
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
  container: {
    flex: 1,
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
  questionNum: {
    color: "#BB271A",
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 20,
    marginRight: 20,
    marginLeft: 20,
  },
  question: {
    fontSize: 16,
    marginRight: 20,
    marginTop: 20,
    marginLeft: 20,
  },
  btnSuccess: {
    backgroundColor: "green",
    width: "90%",
    marginLeft: 20,
    marginTop: 20,
    borderRadius: 40,
  },
  btn: {
    backgroundColor: "#F29D38",
    width: "90%",
    marginLeft: 20,
    marginTop: 20,
    borderRadius: 40,
  },
  btnFail: {
    backgroundColor: "red",
    width: "90%",
    marginLeft: 20,
    marginTop: 20,
    borderRadius: 40,
  },
  text: {
    fontSize: 35,
    color: "#BB271A",
    textAlign: "center",
    padding: 10,
  },
  text2: {
    fontSize: 35,
    color: "#778899",
    textAlign: "center",
    padding: 10,
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
