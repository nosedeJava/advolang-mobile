import {StyleSheet} from "react-native";

export const RecommendationStyle = StyleSheet.create({
    overview: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#c5c8e0'
    },
    title:{
        fontSize: 30,
        marginTop: 10,
        marginBottom: 20,
        fontWeight: 'bold'
    },
    post:{
        width: '100%',
        height: 'auto',
        borderTopLeftRadius:10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderWidth: 3,
        padding: 10,
        borderColor: '#000000'
    },
    simpleInput:{
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderColor: '#000',
        borderWidth: 1,
        height: 'auto',
        marginTop: 4,
        marginBottom: 4
    }
})