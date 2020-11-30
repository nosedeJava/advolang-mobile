import React, {useState} from "react";
import {View, Text, TextInput} from "react-native";
import {RecommendationStyle} from "./NewRecommendationStyle";

export default function NewRecommendation({navigation}){

    const style = RecommendationStyle;
    const [recommendation, setRecommendation] = useState();

    function handleChange(name, value){
        setRecommendation({...recommendation, [name]: value});
    }

    return(
        <View style={style.overview}>
            <Text style={style.title} h1>New Recommendation</Text>
            <View style={style.post}>
                <TextInput
                    placeholder={"Set a title"}
                    onChangeText={value => handleChange('title', value)}
                    style={style.simpleInput}
                />
                <TextInput
                    placeholder={"Set a description"}
                    onChangeText={value => handleChange('description', value)}
                    style={style.simpleInput}
                    multiline
                    numberOfLines={4}
                    editable
                    maxLenght={40}
                />
            </View>
            <View>

            </View>
        </View>
    )
}