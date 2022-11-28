import {
  StyleSheet,
  View,
  Image,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

export default function CircularCard({ source, text, onPress, textStyle }) {
  const image = { uri: source };
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <ImageBackground
          style={styles.category}
          imageStyle={{ borderRadius: 80 }}
          source={image}
        >
          <Text style={textStyle}>{text}</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  category: {
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    height: 150,
    width: 150,
    opacity: 0.7,
    marginLeft: 18,
    marginRight: 18,
    marginTop: 18,
    marginBottom: 18,
    borderRadius: 80,
  },
});
