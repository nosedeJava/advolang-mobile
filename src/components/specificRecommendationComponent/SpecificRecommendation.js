import React, { useState, useCallback, useRef } from 'react';
import {ScrollView, Text, View, TouchableOpacity, Alert, Dimensions, StyleSheet} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import RNUrlPreview from 'react-native-url-preview';
import YoutubePlayer from "react-native-youtube-iframe";
import Constant from 'expo-constants'
import { Card as CardBase, CardItem } from 'native-base';

import { WebView } from 'react-native-webview';
import YouTube from 'react-native-youtube';
import {ResourceController} from './resourcesController/ResourceController';
import {Card as CardPaper} from "react-native-paper";
import memoryData from '../recommendationComponent/RecommendationController';

import { Video } from 'expo-av';
import VideoPlayer from 'expo-video-player'

export default function SpecificRecommendation({ route, navigation }) {

    const currentId = route.params.id;
    const currentRecom = memoryData.find(element => element.id === currentId);
    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#FFF',
            flex: 1,
        },
        contentContainer: {
            alignItems: 'center',
            justifyContent: 'center'
        },

        generalContainer: {
            backgroundColor: '#FFF',
            flex: 1,
        }
    })
    return (
        <View style={styles.generalContainer} >
            {JSON.stringify(currentRecom)}
            <ScrollView style={{borderWidth:3, borderColor : 'transparent', flex:1}} >
                <Card>
                    <Card.Title style={{textAlign: "left"}}>HELLO WORLD</Card.Title>
                    <Card.Divider/>
                    <Text style={{padding: 10, textAlign: "left"}}>
                        The idea with React Native Elements is more about component structure than actual design.
                    </Text>
                    <CardPaper.Content>

                        <ResourceController resource={"https://rtvc-assets-radionica3.s3.amazonaws.com/s3fs-public/styles/image_750x424/public/field/image/article/33.jpg?itok=BoGn4zGl"} resourceType="image/jpg"/>

                    </CardPaper.Content>
                </Card>

                <Card>
                    <Card.Title style={{textAlign: "left"}}>HELLO WORLD</Card.Title>
                    <Card.Divider/>
                    <Text style={{padding: 10, textAlign: "left"}}>
                        The idea with React Native Elements is more about component structure than actual design.
                    </Text>
                    <CardPaper.Content>
                        <ResourceController resource={"https://www.youtube.com/watch?v=Kmiw4FYTg2U"} resourceType="url"/>
                    </CardPaper.Content>
                </Card>

                <ResourceController resource={"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"} resourceType="video/mp4"/>

                <Card>
                    <Card.Title style={{textAlign: "left"}}>HELLO WORLD</Card.Title>
                    <Card.Divider/>
                    <Text style={{padding: 10, textAlign: "left"}}>
                        The idea with React Native Elements is more about component structure than actual design.
                    </Text>
                        <ResourceController resource={"https://ia800204.us.archive.org/11/items/hamlet_0911_librivox/hamlet_act3_shakespeare.mp3"} resourceType="audio/mp3"/>
                </Card>

            </ScrollView>
        </View>
  )
}
