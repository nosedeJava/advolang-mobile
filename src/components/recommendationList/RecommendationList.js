import React from "react";
import Recommendation from "./Recommendation";
import {View} from "react-native";

export default function ListRecommendations(props) {

    const listContent = props.recommendations.map((recommendation, i) => {
        return <Recommendation {...recommendation} />;
    });

    return (
        <View style={{width:"100%"}}>
            {listContent}
        </View>
    );
}