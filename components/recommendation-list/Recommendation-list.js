import React from "react";
import {StyleSheet, View, Button, Text} from "react-native";

export default function RecommendationsList(props) {

    const colorSelector = () => {
        return (
            props.score > 3.8 ? 'rgba(35,154,46,1)'
                : props.score < 2.8 ? 'rgba(247,41,6,1)'
                : 'rgba(255,220,107,1)');
    }
    const styles = StyleSheet.create({
        mainContainer: {
            height: 'auto',
            margin: 20,
            alignItems: 'stretch',
            justifyContent: 'center',
            padding: 20,
            backgroundColor: '#242847',
            borderRadius: 10,
            width: '60%',
            maxWidth: '60%',
        },
        recommendationContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        title: {
            flex: 1,
            padding: 10,
            fontSize: 25,
            fontWeight: '700',
            fontFamily: 'Verdana',
            color: '#b3b8e0',
        },
        score: {
            borderRadius: 50,
            height: '3.7rem',
            width: '3.7rem',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'Verdana',
            backgroundColor: colorSelector()
        }
    })
    // OnPress function
    const handleRedirectSpecific = () => {
        alert("It works!");
        alert(props.id);
    }
    return (
        <View style={styles.mainContainer}>
            <View style={styles.recommendationContainer}>
                <Text style={styles.title}>
                    {props.title}
                </Text>
                <View style={{flex: 0.1}}/>
                <View style={styles.score}>
                    <Text style={{color: '#FFF'}}>
                        {props.score}
                    </Text>
                </View>
            </View>
            <Text>
                Que gododea padce
            </Text>
        </View>

    );

}