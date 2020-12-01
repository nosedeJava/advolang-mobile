import React from "react";
import { Image, Text, View, ScrollView } from "react-native";
import ImageBackground from "react-native/Libraries/Image/ImageBackground";
import { LanguageStyle } from "./LanguagesStyle";

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
        <View>
          
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
