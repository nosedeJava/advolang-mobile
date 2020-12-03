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
import {memoryData} from '../recommendationComponent/RecommendationController';

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
        },
        videoContainer: {
            alignItems: 'center',
            justifyContent: 'center'
        },
    })

    const generalContent = () => {
        return (
            <CardBase style={{flex: 1, marginLeft: 0, marginRight: 0}}>
                <Card.Title style={{fontSize: 20, fontWeight: "bold", padding: 15, textAlign: "left"}}>{currentRecom.title}</Card.Title>
                <Card.Divider/>
                <Text style={{padding: 10, textAlign: "left"}}>
                    {currentRecom.description}
                </Text>
                <CardBase style={{marginBottom: 15}}>
                    <ResourceController resource={currentRecom.resource} resourceType={currentRecom.resourceType}/>
                </CardBase>
            </CardBase>
        );
    }

    const contentWithScrollView = () => {
        return(
            <ScrollView  contentContainerStyle={styles.videoContainer}>
                {generalContent()}
            </ScrollView>
        );
    }

    /*return (
        <View style={styles.generalContainer} >
            {alert(JSON.stringify(currentRecom))}
            <ScrollView style={{borderWidth:3, borderColor : 'transparent', flex:1}} >
                <Card>
                    <Card.Title style={{textAlign: "left"}}>{currentRecom.title}</Card.Title>
                    <Card.Divider/>
                    <Text style={{padding: 10, textAlign: "left"}}>
                        {currentRecom.description}
                    </Text>
                    <CardPaper.Content>

                        <ResourceController resource={currentRecom.resource} resourceType={currentRecom.resourceType}/>

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
                    <CardBase>

                    <ResourceController resource={"https://ia800204.us.archive.org/11/items/hamlet_0911_librivox/hamlet_act3_shakespeare.mp3"} resourceType="audio/mp3"/>
                        </CardBase>

                </Card>

            </ScrollView>
        </View>
  )*/

   return (
        <View style={styles.generalContainer} >
            <ScrollView style={{borderWidth:3, borderColor : 'transparent', flex:1}} >
                {(currentRecom.resourceType.toLowerCase().split("/")[0] === "video") ?
                    contentWithScrollView()
                :
                    generalContent()

                }

            </ScrollView>
        </View>
    )
}
