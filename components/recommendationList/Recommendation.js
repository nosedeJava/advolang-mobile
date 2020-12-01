import React from "react";
import {Dimensions, StyleSheet, View, Button, Text} from "react-native";
import {calculatePublication} from '../auxiliar/AuxiliarTools.js';

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
            width: '90%',
            maxWidth: '90%',
        },
        recommendationContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        informationContainer: {
            padding: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'stretch',
            fontSize: Dimensions.get('window').width * 0.04,
        },
        title: {
            flex: 1,
            padding: 10,
            fontSize: Dimensions.get('window').width * 0.05,
            fontWeight: '700',
            color: '#b3b8e0',
        },
        score: {
            borderRadius: 50,
            height: Dimensions.get('window').width * 0.1,
            width: Dimensions.get('window').width * 0.1,
            alignItems: 'center',
            justifyContent: 'center',
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
            <View style={styles.recommendationContainer} onStartShouldSetResponder={handleRedirectSpecific}>
                <Text style={styles.title}>
                    {props.title}
                </Text>
                <View style={styles.score}>
                    <Text style={{color: '#FFF'}}>
                        {props.score}
                    </Text>
                </View>
            </View>
            <View style={styles.informationContainer}>
                <View>
                    <Text style={{color: '#b3b8e0'}}>
                        {props.level}
                    </Text>
                </View>
                <View>
                    <Text style={{color: '#b3b8e0'}}>
                        {props.creator}
                    </Text>
                </View>
                <View>
                    <Text style={{color: '#b3b8e0'}}>
                        {calculatePublication(props.creationDate)}
                    </Text>
                </View>
            </View>
        </View>

    )
        ;

}