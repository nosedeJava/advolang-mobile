import React from 'react';
import {ScrollView, Text, View, StyleSheet} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { Card as CardBase, CardItem } from 'native-base';

import {ResourceController} from './resourcesController/ResourceController';
import {memoryData} from '../recommendationComponent/RecommendationController';


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
