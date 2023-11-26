import React, { useState, useEffect } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View, Text, Image, Pressable } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ScrollView } from "react-native-web";

const AnhVietScreen = ({ searchText, translations, keyText, phoneticsText }) => {
  return (
    <ScrollView>
      <View>
        <Text>{keyText}</Text>
        <Text>{phoneticsText}</Text>
        <View style={{ flexDirection: "column", marginTop: 10 }}>
          {translations.map((translation, index) => (
            <View key={index} style={{ marginLeft: 10 }}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontWeight: 'bold', marginRight: 5 }}>{translation.en}:</Text>
                <Text>{translation.vi}</Text>
              </View>
            </View>
          ))}
        </View>
        <Image
          style={{ width: 60, height: 60, marginLeft: 300, marginTop: 60, zIndex: 1 }}
          source={require("/assets/cs.png")}
        />
      </View>
    </ScrollView>
  );
};

const NguPhapScreen = ({ translations }) => (
  <View>
    <View style={{ flexDirection: "column", marginTop: 10 }}>
      {translations.map((translation, index) => (
        <View key={index} style={{ marginLeft: 10 }}>
          <View style={{ flexDirection: 'row' }}>
            <Text>{translation.synonyms.length > 0 ? `Synonyms: ${translation.synonyms.join(', ')}` : ''}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text>{translation.antonyms.length > 0 ? `Antonyms: ${translation.antonyms.join(', ')}` : ''}</Text>
          </View>
        </View>
      ))}
    </View>
  </View>
);

const AnhAnhScreen = ({ translations }) => (
  <View>
    <View style={{ flexDirection: "column", marginTop: 10 }}>
      {translations.map((translation, index) => (
        <View key={index} style={{ marginLeft: 10 }}>
          <View style={{ flexDirection: 'column' }}>
            <Text>{translation.definitions}</Text>
          </View>
        </View>
      ))}
    </View>
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
  const [data, setData] = useState([]);
  const [translations, setTranslations] = useState([]);
  const [key, setKey] = useState(null);
  const [phonetics, setPhonetics] = useState(null);

  useEffect(() => {
    const fetchTranslation = async () => {
      try {
        const keyTran = await fetch(
          `https://api.mymemory.translated.net/get?q=${searchText}&langpair=en|vi`
        );
        const keyData = await keyTran.json();
        setKey(keyData.responseData.translatedText);

        const response = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${searchText}`
        );

        if (!response.ok) {
          throw new Error(`Error fetching translation: ${response.status}`);
        }

        const data = await response.json();
        setData(data[0].meanings);
        console.log(data[0].meanings);
        if (Array.isArray(data) && data.length > 0) {
          const translationsArray = [];
          for (const meaning of data[0].meanings) {
            for (const definitionObj of meaning.definitions) {
              const translationResponse = await fetch(
                `https://api.mymemory.translated.net/get?q=${definitionObj.example}&langpair=en|vi`
              );

              if (!translationResponse.ok) {
                throw new Error(`Error fetching translation: ${translationResponse.status}`);
              }

              const translationData = await translationResponse.json();
              if (
                translationData &&
                translationData.responseData &&
                definitionObj.example != null &&
                definitionObj.example != undefined &&
                definitionObj.example != ""
              ) {
                translationsArray.push({
                  definitions: definitionObj.definition,
                  synonyms: definitionObj.synonyms,
                  en: definitionObj.example,
                  vi: translationData.responseData.translatedText,
                });
              }
            }
          }

          setTranslations(translationsArray);
          setPhonetics(data[0].phonetics[0]?.text || null);

          try {
            const saveResponse = await fetch("http://localhost:3000/dataTuDaTra", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                id: Math.floor(Math.random() * 1000) + 1,
                title: searchText,
                phonetically: data[0].phonetics[0].text,
                translate: keyData.responseData.translatedText,
                not: false,
              }),
            });

            if (!saveResponse.ok) {
              throw new Error(`Error saving data: ${saveResponse.status}`);
            }
          } catch (saveError) {
            console.error("Error saving data:", saveError);
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchTranslation();
  }, [searchText]);

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
          {() => <AnhVietScreen searchText={searchText} translations={translations} keyText={key} phoneticsText={phonetics} />}
        </Tab.Screen>
        <Tab.Screen name="NGỮ PHÁP">
          {() => <NguPhapScreen translations={data} />}
        </Tab.Screen>
        <Tab.Screen name="ANH ANH">
          {() => <AnhAnhScreen translations={translations} />}
        </Tab.Screen>
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
