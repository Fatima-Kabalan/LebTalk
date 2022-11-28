import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function QuestionCard({ quizNum, question, onPress }) {
  return (
    <View style={styles.container}>
      <View style={styles.btnFlex}>
        <Text style={styles.quizNum}>{quizNum}</Text>
        <TouchableOpacity onPress={onPress}>
          <Entypo name="chevron-small-right" size={40} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    paddingRight: 40,
    justifyContent: "space-evenly",
    borderRadius: 10,
    paddingButtom: 40,
    paddingLeft: 20,
    height: 114,
    width: 330,
    backgroundColor: "#dcdcdc",
    margin: 10,
  },
  quizNum: {
    color: "#BB271A",
    fontWeight: "bold",
    fontSize: 20,
  },
  btnFlex: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
});
