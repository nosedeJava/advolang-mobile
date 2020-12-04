import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { SettingsStyle } from "./SettingsStyle";

export default function Settings() {
  const styles = SettingsStyle;
  const [newUser, setNewUser] = useState(null);

  function handleChange(name, value) {
    setNewUser({ ...newUser, [name]: value });
  }

  return (
    <View style={styles.overview}>
      <ScrollView style={styles.scroll}>
        <Text style={styles.text}>Update your profile</Text>
        <TextInput
          label="User name"
          onChangeText={(value) => handleChange("username", value)}
          style={styles.inputText}
          placeholder={"Set your new username"}
          underlineColor="blue"
          mode="flat"
        />
        <TextInput
          label="Full name"
          onChangeText={(value) => handleChange("fullName", value)}
          style={styles.inputText}
          placeholder={"Set your new full name"}
          underlineColor="blue"
          mode="flat"
        />
        <TextInput
          label="Email"
          onChangeText={(value) => handleChange("email", value)}
          style={styles.inputText}
          placeholder={"Set your new email"}
          underlineColor="blue"
          mode="flat"
        />
        <TextInput
          label="Description"
          onChangeText={(value) => handleChange("description", value)}
          style={styles.inputText}
          placeholder={"Set your new description"}
          underlineColor="blue"
          mode="outlined"
          multiline
          numberOfLines={5}
        />

        <Button
          style={{
            width: "100%",
            marginTop: 30,
          }}
          mode="contained"
          onPress={() => alert("Upload info")}
        >
          Update
        </Button>
      </ScrollView>
    </View>
  );
}
