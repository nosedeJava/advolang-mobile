import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RecommendationList from "./components/recommendation-list/Recommendation-list";

var info = {
    id: "5f99a3ec2eefc3611895fed0",
    creator: "user",
    title: "Nata's recommendation",
    description: "This is the first Nata's recommendation",
    language: "spanish",
    level: "Beginner",
    creationDate: "2020-10-28T17:01:32.138+00:00",
    thumbnail: "casablancas.jpg",
    resource: "https://www.youtube.com/watch?v=BjC0KUxiMhc&ab_channel=thestrokesVEVO",
    resourceType: "Url",
    categories: [
        {
            id: "5f850af842e04307a5cf8217",
            value: "music",
            popularity: 15
        },
        {
            id: "5f8765bc2e412c2c7d1c4a91",
            value: "video",
            popularity: 9
        }
    ],
    reported: false,
    score: 1
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Stinky Stilink</Text>
      <StatusBar style="auto" />
      <RecommendationList {...info}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
