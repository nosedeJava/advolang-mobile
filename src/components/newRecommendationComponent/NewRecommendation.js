import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { RecommendationStyle } from "./NewRecommendationStyle";
import RNPickerSelect from "react-native-picker-select";

export default function NewRecommendation({ navigation }) {
  const style = RecommendationStyle;
  const [recommendation, setRecommendation] = useState({
    type: "Select a type",
  });

  function handleChange(name, value) {
    setRecommendation({ ...recommendation, [name]: value });
  }

  return (
    <View style={style.overview}>
      <Text style={style.title} h1>
        New Recommendation
      </Text>
      <View style={style.post}>
        <TextInput
          placeholder={"Set a title"}
          onChangeText={(value) => handleChange("title", value)}
          style={style.simpleInput}
        />
        <TextInput
          placeholder={"Set a description"}
          onChangeText={(value) => handleChange("description", value)}
          style={style.simpleInput}
          multiline
          numberOfLines={4}
          editable
          maxLength={40}
        />
      </View>
      <View style={style.post}>
        <Text
          style={{
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          Select a content type
        </Text>
        <RNPickerSelect
          useNativeAndroidPickerStyle={false}
          onValueChange={(value) => handleChange("type", value)}
          style={pickerSelectStyles}
          items={[
            { label: "Url", value: "url" },
            { label: "Multimedia File", value: "multimediaFile" },
          ]}
        />

        <TextInput
          placeholder={"Set your resource"}
          onChangeText={(value) => handleChange("resource", value)}
          style={style.simpleInput}
        />

        <Text
          style={{
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          Select a content category
        </Text>

        <RNPickerSelect
          useNativeAndroidPickerStyle={false}
          onValueChange={(value) => handleChange("type", value)}
          style={pickerSelectStyles}
          items={[
            { label: "Video", value: "video" },
            { label: "Music", value: "music" },
            { label: "Document", value: "document" },
            { label: "Game play", value: "gameplay" },
          ]}
        />
      </View>

      <View
        style={{
          width: "90%",
          margin: 20,
        }}
      >
        <Button title="Create recommendation" />
      </View>
    </View>
  );
}

const pickerSelectStyles = StyleSheet.create({
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "purple",
    borderRadius: 8,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
    marginTop:5,
    marginBottom: 5,
    width: '100%'
  }
});
