import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View, StyleSheet} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { Card as CardBase, CardItem } from 'native-base';
import { useIsFocused } from '@react-navigation/native'

import {ResourceController} from './resourcesController/ResourceController';
import {get} from "../../api/fetch";


export default function SpecificRecommendation({ route, navigation }) {

    const isFocused = useIsFocused();
    let currentId= route.params.id;

    const [currentRecom, setCurrentRecom] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        componentDidMount();
    }, [isFocused]);

    const componentDidMount = async() => {
        setCurrentRecom(await get('/api/spanish/recommendations/'+currentId));

        setLoading(false);
    }

    const styles = StyleSheet.create({
        container: {
            backgroundColor: 'black',
            flex: 1,
        },
        contentContainer: {
            alignItems: 'center',
            justifyContent: 'center'
        },

        generalContainer: {
            backgroundColor: '#242847',
            flex: 1,
        },
        videoContainer: {
            alignItems: 'center',
            justifyContent: 'center'
        },
    })

    const generalContent = () => {
        return (
            <CardBase style={{flex: 1, marginLeft: 0, marginRight: 0, backgroundColor:"#585C78"}}>
                <Card.Title style={{fontSize: 20, fontWeight: "bold", padding: 15, textAlign: "left", color:"white"}}>{currentRecom.title}</Card.Title>
                <Card.Divider/>
                <Text style={{padding: 10, textAlign: "left", color:"white"}}>
                    {currentRecom.description}
                </Text>
                <CardBase style={{marginBottom: 15}}>
                    <ResourceController recom={currentRecom} />
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

    if(loading){
        return <View><Text>Loading...</Text></View>;
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
