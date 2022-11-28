import { StyleSheet, Text, View } from "react-native";
import ContainedButton from "../Components/Button/ContainedButton";
import EmailInput from "../Components/Input/EmailInput";
import NameInput from "../Components/Input/NameInput";
import PasswordInput from "../Components/Input/PasswordInput";
import PhoneInput from "../Components/Input/PhoneInput";
import Logo from "../Components/Logo/MediumLogo";
import { useState } from "react";
import { SERVER_URL } from "../env";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SignupPage({ navigation }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();

  const signup = async () => {
    const data = {
      email: email,
      password: password,
      name: name,
      phone_number: phoneNumber,
    };

    const config = {
      method: "post",
      data,
      url: `${SERVER_URL}/api/v1/register`,
    };
    try {
      const res = await axios(config);

      if (res.data.status == "success") {
        await AsyncStorage.setItem("@token", res.data.authorisation.token);
        navigation.navigate("Home");
      }
    } catch (error) {
      return error;
    }
  };

  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.lebText}>
        Leb<Text style={styles.talkText}>Talk</Text>
      </Text>
      <View style={styles.boxContainer}>
        <NameInput setName={setName} name={name} />
        <EmailInput setEmail={setEmail} email={email} />
        <PasswordInput setPassword={setPassword} password={password} />
        <PhoneInput setPhoneNumber={setPhoneNumber} phoneNumber={phoneNumber} />
        <ContainedButton
          text={"Signup"}
          onPress={signup}
          textStyle={styles.btnText}
          buttonStyle={styles.button}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#A42E2C",
    alignItems: "center",
  },
  boxContainer: {
    height: "70%",
    width: "100%",
    padding: 30,
    backgroundColor: "#fff",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  button: {
    backgroundColor: "#F29D38",
    borderRadius: 30,
    marginTop: 70,
    marginBottom: 20,
  },
  btnText: {
    color: "white",
    textAlign: "center",
    padding: 6,
    fontSize: 18,
    fontWeight: "bold",
  },
  lebText: {
    fontWeight: "bold",
    fontSize: 30,
    color: "white",
  },
  talkText: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#E1943C",
  },
});
