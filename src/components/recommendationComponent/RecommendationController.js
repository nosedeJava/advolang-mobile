import React, {useEffect, useState} from "react";
import ListRecommendations from "./ListRecommendations";
import {get} from "../../api/fetch";
import {View, ScrollView, Text} from "react-native";

export default function RecommendationController({ navigation }) {

    const [recommendationsData, setRecommendations] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        getRecommendations();
    }, []);

    const getRecommendations = async() => {
        let recommendations = await get('/api/recommendations');
        setRecommendations(recommendations);
        setLoading(false);
    }

    if(loading){
        return <View><Text>Loading...</Text></View>;
    }
    
    return (
        <View style={{width:"100%"}}>
            <ScrollView>
                <ListRecommendations recommendations={recommendationsData} nav={navigation}/>
            </ScrollView>
        </View>
    );
}