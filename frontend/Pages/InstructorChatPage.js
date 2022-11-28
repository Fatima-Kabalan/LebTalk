import {
  ScrollView,
  View,
  Linking,
} from "react-native";
import ChatCard from "../Components/Card/ChatCard";
import HeaderNav from "../Components/HeaderNav";
import { useState, useEffect } from "react";
import axios from "axios";
import { IMAGE_URL, SERVER_URL } from "../env";

export default function InstructorChatPage() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: `${SERVER_URL}/api/v1/getInstructors`,
    })
      .then((res) => {
        setCards(res.data.data);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  if (cards)
    return (
      <View >
        <ScrollView >
          <HeaderNav text={"Instructors"} />
          {cards?.map((card, index) => {
            return (
              <ChatCard
                source={IMAGE_URL + card.profile_picture}
                username={card.username}
                onPress={() =>
                  Linking.openURL(
                    "http://api.whatsapp.com/send?phone=961" + card.phone_number
                  )
                }
              />
            );
          })}
        </ScrollView>
      </View>
    );
}