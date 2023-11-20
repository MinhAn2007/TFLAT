import React, { useState, useEffect } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View, Text, Image, Pressable } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation, useRoute } from "@react-navigation/native";

const AnhVietScreen = ({ searchText }) => {
  const [translatedText, setTranslatedText] = useState("");

  useEffect(() => {
    const fetchTranslation = async () => {
      try {
        const response = await fetch(
          `https://api.mymemory.translated.net/get?q=${searchText}&langpair=en|vi`
        );
        const data = await response.json();

        if (data && data.responseData) {
          setTranslatedText(data.responseData.translatedText);
        }
      } catch (error) {
        console.error("Error fetching translation:", error);
      }
    };

    fetchTranslation();
  }, [searchText]);

  return (
    <View>
      <View
        style={{
          marginTop: 10,
          marginLeft: 10,
          borderWidth: 2,
          borderRadius: 30,
          borderColor: "blue",
          width: 100,
          padding: 5,
        }}
      >
        <Text
          style={{
            color: "blue",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          Danh từ
        </Text>
      </View>
      <View style={{ flexDirection: "row", marginLeft: 10, marginTop: 10 }}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 18,
            textDecorationLine: "underline",
          }}
        >
          {searchText}
        </Text>
        <Image
          style={{ width: 30, height: 30, marginLeft: 240 }}
          source={require("/assets/s.png")}
        ></Image>
        <Text style={{ color: "blue", marginLeft: 10, fontSize: 16 }}>UK</Text>
      </View>
      <View style={{ flexDirection: "row", marginLeft: 10, marginTop: 10 }}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 18,
            textDecorationLine: "underline",
          }}
        >
          Danh từ
        </Text>
        <Image
          style={{ width: 30, height: 30, marginLeft: 210 }}
          source={require("/assets/s.png")}
        ></Image>
        <Text style={{ color: "blue", marginLeft: 10, fontSize: 16 }}>UK</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        {" "}
        <Image
          style={{
            width: 40,
            height: 40,
            marginLeft: 15,
            marginTop: 10,
            fontWeight: "bold",
          }}
          source={require("/assets/Vector.png")}
        ></Image>
        <Text
          style={{
            color: "#D277D2",
            fontSize: 22,
            marginTop: 10,
            marginLeft: 30,
            fontWeight: "bold",
          }}
        >
          {translatedText}
        </Text>
      </View>
      <Image
        style={{ width: 60, height: 60, marginLeft: 300, marginTop: 60,zIndex:1 }}
        source={require("/assets/cs.png")}
      ></Image>
    </View>
  );
};

const NguPhapScreen = () => (
  <View>
    <Text>NGỮ PHÁP Content</Text>
  </View>
);

const AnhAnhScreen = () => (
  <View>
    <Text>ANH ANH Content</Text>
  </View>
);

const ChuyenNganhScreen = () => (
  <View>
    <Text>CHUYÊN NGÀNH Content</Text>
  </View>
);

const Tab = createMaterialTopTabNavigator();

const TransScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { searchText } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.head}>
        <Pressable onPress={() => navigation.goBack()}>
          <Ionicons
            name="arrow-back"
            size={30}
            style={{ color: "white", left: 20, zIndex: 1 }}
          />
        </Pressable>
        <Text style={{ fontSize: 20, color: "white", left: 40 }}>
          {searchText}
        </Text>
        <View
          style={{
            marginLeft: 260,
            position: "absolute",
            flexDirection: "row",
          }}
        >
          <Icon
            name="search"
            size={20}
            color="white"
            style={{ marginTop: 10, zIndex: 0 }}
          />
          <Image
            style={{ width: 40, height: 40, marginLeft: 15 }}
            source={require("/assets/pen.png")}
          />
          <Image
            style={{ width: 35, height: 30, marginLeft: 15, marginTop: 5 }}
            source={require("/assets/star2.png")}
          />
        </View>
        
      </View>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "white",
          inactiveTintColor: "#9ca0a6",
          style: { backgroundColor: "#0052B4", height: 50 },
          indicatorStyle: { backgroundColor: "white" },
        }}
      >
        <Tab.Screen name="ANH VIỆT">
          {() => <AnhVietScreen searchText={searchText} />}
        </Tab.Screen>
        <Tab.Screen name="NGỮ PHÁP" component={NguPhapScreen} />
        <Tab.Screen name="ANH ANH" component={AnhAnhScreen} />
        <Tab.Screen name="CHUYÊN NGÀNH" component={ChuyenNganhScreen} />
      </Tab.Navigator>
     
    </View>
  );
};

const styles = {
  head: {
    width: "100%",
    height: 60,
    backgroundColor: "#0052B4",
    alignItems: "center",
    flexDirection: "row",
    textAlign: "center",
  },
};

export default TransScreen;
