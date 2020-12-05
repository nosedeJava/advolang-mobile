import React, {useEffect} from 'react';
import { Card } from 'react-native-elements'
import {View, SafeAreaView, StyleSheet, ScrollView} from 'react-native';

import { Video } from 'expo-av';
import VideoPlayer from 'expo-video-player'
import {CardItem} from "native-base";
import {WebView} from "react-native-webview";

import preview from 'react-native-page-previewer';


const defaultAzureRecs = [
    {
        "image": "https://www.flashlyrics.com/image/tw/keane/disconnected-09"
    },
    {
        "video": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    },
    {
        audio: "https://ia800204.us.archive.org/11/items/hamlet_0911_librivox/hamlet_act3_shakespeare.mp3"
    }
]

export function ResourceController ({recom }) {
    const rec = recom.resource;
    const type = recom.resourceType.toLowerCase();

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: 80
        },

        videoContainer: {
            alignItems: 'center',
            justifyContent: 'center'
        },
    });

    const imageDiv=()=>{
        return (
            <Card.Image source={{uri: "https://www.flashlyrics.com/image/tw/keane/disconnected-09"}} />
        );
    };

    const audioDiv=()=>{
        return (
            <CardItem style={{height:200}}>
                <WebView
                    source={{uri: "https://ia800204.us.archive.org/11/items/hamlet_0911_librivox/hamlet_act3_shakespeare.mp3"}}
                    style={{marginTop: 20}}
                />
            </CardItem>
        )
    };

    const videoDiv=()=>{
        return (
            <VideoPlayer
                videoProps={{
                    shouldPlay: true,
                    resizeMode: Video.RESIZE_MODE_CONTAIN,
                    source: {uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"},
                }}
                inFullscreen={true}
                videoBackground='transparent'
                height={220}
            />
        );
    };

    const urlTextDiv = () => {
        return (
            <WebView source={{uri: rec}} style={{height: 250}}/>
        );
    }

    const options = () => {
        if(type === 'url'){
            return urlTextDiv();
        }

        const typeParts = type.split("/");
        const specificType = typeParts[0]

        if(specificType === "image"){
            return imageDiv()
        }

        if(specificType == "video"){
            return videoDiv();
        }

        if(specificType === "audio"){
            return audioDiv();
        }
    }
    useEffect(()=>{
    }, [urlTextDiv]);

    return <SafeAreaView>{options()}</SafeAreaView>;


}