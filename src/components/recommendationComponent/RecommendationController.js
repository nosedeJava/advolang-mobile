import React from "react";
import ListRecommendations from "./ListRecommendations";
import {View, ScrollView} from "react-native";

export const memoryData = [
    {
        "id": "5f99a3ec2eefc3611895fed0",
        "creator": "user",
        "title": "Nata's recommendation url youtube",
        "description": "This is the first Nata's recommendation",
        "language": "spanish",
        "level": "Beginner",
        "creationDate": "2020-10-28T17:01:32.138+00:00",
        "thumbnail": "casablancas.jpg",
        "resource": "https://www.youtube.com/watch?v=BjC0KUxiMhc&ab_channel=thestrokesVEVO",
        "resourceType": "Url",
        "categories": [
            {
                "id": "5f850af842e04307a5cf8217",
                "value": "music",
                "popularity": 15
            },
            {
                "id": "5f8765bc2e412c2c7d1c4a91",
                "value": "video",
                "popularity": 9
            }
        ],
        "reported": false,
        "promo": true,
        "score": 5.0
    },
    {
        "id": "5f99a3ec2eefc3611895fed1",
        "creator": "user",
        "title": "Nata's recommendation image",
        "description": "This is the first Nata's recommendation",
        "language": "spanish",
        "level": "Beginner",
        "creationDate": "2020-10-28T17:01:32.138+00:00",
        "thumbnail": "casablancas.jpg",
        "resource": "https://rtvc-assets-radionica3.s3.amazonaws.com/s3fs-public/styles/image_750x424/public/field/image/article/33.jpg?itok=BoGn4zGl",
        "resourceType": "image/jpg",
        "categories": [
            {
                "id": "5f850af842e04307a5cf8217",
                "value": "music",
                "popularity": 15
            },
            {
                "id": "5f8765bc2e412c2c7d1c4a91",
                "value": "video",
                "popularity": 9
            }
        ],
        "reported": false,
        "promo": true,
        "score": 5.0
    },
    {
        "id": "5f99a3ec2eefc3611895fed2",
        "creator": "user",
        "title": "Nata's recommendation audio",
        "description": "This is the first Nata's recommendation",
        "language": "spanish",
        "level": "Beginner",
        "creationDate": "2020-10-28T17:01:32.138+00:00",
        "thumbnail": "casablancas.jpg",
        "resource": "https://ia800204.us.archive.org/11/items/hamlet_0911_librivox/hamlet_act3_shakespeare.mp3",
        "resourceType": "audio/mpeg",
        "categories": [
            {
                "id": "5f850af842e04307a5cf8217",
                "value": "music",
                "popularity": 15
            },
            {
                "id": "5f8765bc2e412c2c7d1c4a91",
                "value": "video",
                "popularity": 9
            }
        ],
        "reported": false,
        "promo": true,
        "score": 4.1
    },
    {
        "id": "5f99a3ec2eefc3611895fed3",
        "creator": "user",
        "title": "Nata's recommendation video",
        "description": "This is the first Nata's recommendation",
        "language": "spanish",
        "level": "Beginner",
        "creationDate": "2020-10-28T17:01:32.138+00:00",
        "thumbnail": "casablancas.jpg",
        "resource": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        "resourceType": "video/mp4",
        "categories": [
            {
                "id": "5f850af842e04307a5cf8217",
                "value": "music",
                "popularity": 15
            },
            {
                "id": "5f8765bc2e412c2c7d1c4a91",
                "value": "video",
                "popularity": 9
            }
        ],
        "reported": false,
        "promo": true,
        "score": 3.5
    },
    {
        "id": "5f99a3ec2eefc3611895fed4",
        "creator": "user",
        "title": "Nata's recommendation normal url",
        "description": "This is the first Nata's recommendation",
        "language": "spanish",
        "level": "Beginner",
        "creationDate": "2020-10-28T17:01:32.138+00:00",
        "thumbnail": "casablancas.jpg",
        "resource": "https://stackoverflow.com/questions/57946854/webview-in-react-native-is-not-showing",
        "resourceType": "Url",
        "categories": [
            {
                "id": "5f850af842e04307a5cf8217",
                "value": "music",
                "popularity": 15
            },
            {
                "id": "5f8765bc2e412c2c7d1c4a91",
                "value": "video",
                "popularity": 9
            }
        ],
        "reported": false,
        "promo": true,
        "score": 2.3
    }
]

export default function RecommendationController({ navigation }) {

    
    return (
        <View style={{width:"100%"}}>
            <ScrollView>
                <ListRecommendations recommendations={memoryData} nav={navigation}/>
            </ScrollView>
        </View>
    );
}