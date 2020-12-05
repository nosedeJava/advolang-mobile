import React from "react";
import Recommendation from "./Recommendation";
import {SafeAreaView} from "react-native";

export default function ListRecommendations(props) {
    const listContent = props.recommendations.map((recommendation, i) => {
        return <Recommendation key={"recomItem-" +i}{...recommendation} nav={props.nav} />;
    });

    return (
        <SafeAreaView style={{width: "100%", backgroundColor:"#373A4E"}} >
            {listContent}
        </SafeAreaView>
    );
}

