import React from "react";
import { Image, Text, View, ScrollView } from "react-native";
import ImageBackground from "react-native/Libraries/Image/ImageBackground";
import { LanguageStyle } from "./LanguagesStyle";

const countries = [
  {
    source: require("./img/english.png"),
    name: "English",
  },
  {
    source: require("./img/french.png"),
    name: "French",
  },
  {
    source: require("./img/german.png"),
    name: "German",
  },
  {
    source: require("./img/italian.png"),
    name: "Italian",
  },
  {
    source: require("./img/portuguese.png"),
    name: "portuguese",
  },
  {
    source: require("./img/russian.png"),
    name: "russian",
  },
  {
    source: require("./img/spanish.png"),
    name: "Spanish",
  },
];

export default function Languages() {
  const styles = LanguageStyle;

  return (
    <ImageBackground
      source={require("./img/rec-background.jpg")}
      style={{
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
      }}
    >
      <ScrollView
        style={{
          width: "100%",
        }}
      >
        <View style={styles.overview}>
          {countries.map((country) => (
            <View key={country.name} style={styles.flag}>
              <Image style={styles.image} source={country.source}/>
              <Text style={styles.text}>{country.name}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
