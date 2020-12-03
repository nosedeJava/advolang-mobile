import React from "react";
import Recommendation from "./Recommendation";
import {View, ScrollView} from "react-native";

export default function ListRecommendations(props) {

    const listContent = props.recommendations.map((recommendation, i) => {
        return <Recommendation key={"recomItem-" +i}{...recommendation} nav={props.nav} />;
    });

    return (
        <View style={{width: "100%"}} >

            {listContent}
        </View>
    );
}

