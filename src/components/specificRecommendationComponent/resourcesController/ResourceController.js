import React, {useState} from 'react';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import {Text, View, TouchableOpacity, Alert, Dimensions, StyleSheet, ScrollView} from 'react-native';
import RNUrlPreview from "react-native-url-preview";
import { Card as CardPaper, Title, Paragraph } from 'react-native-paper';

import { Video } from 'expo-av';
import VideoPlayer from 'expo-video-player'
import SoundPlayer from 'react-native-sound-player'
import ReactAudioPlayer from 'react-audio-player';
import {Card as CardBase, CardItem} from "native-base";
import {WebView} from "react-native-webview";


export function ResourceController(props) {
    const rec = props.resource;
    const type = props.resourceType.toLowerCase();

    const [isPlaying, setIsPlaying] = useState(false);


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
            <Card.Image source={{uri: rec}} />
        );
    };

    const audioDiv=(rec)=>{
        return (
            <CardItem style={{height:200}}>
                <WebView
                    source={{uri: rec}}
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
                    source: {uri: rec},
                }}
                inFullscreen={true}
                videoBackground='transparent'
                height={220}
            />
        );
    };

    const urlTextDiv = () => {
        return (
            <TouchableOpacity>
                <RNUrlPreview text={rec}/>
            </TouchableOpacity>
        );
    }

    const options = () => {
        if(type === 'url'){
            return urlTextDiv()
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
            return audioDiv(rec);
        }
    }

    return <View>{options()}</View>;

}