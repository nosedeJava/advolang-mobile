import {StyleSheet} from "react-native";

export const RecommendationStyle = StyleSheet.create({
    overview: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#A7CCE5'
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        width: '100%'
    },
    title:{
        fontSize: 25,
        marginTop: 10,
        marginBottom: 28,
        fontWeight: 'bold',
        color: '#000'
    },
    post:{
        width: '100%',
        height: 'auto',
        borderTopLeftRadius:10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderWidth: 2,
        padding: 10,
        backgroundColor: '#ffffff',
        margin: 5
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
        marginBottom: 4,
        padding:10
    }
})