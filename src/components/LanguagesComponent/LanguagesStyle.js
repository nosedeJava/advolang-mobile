import { StyleSheet } from "react-native";

export const LanguageStyle = StyleSheet.create({
  overview: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    alignItems: 'center',
    paddingTop:20,
    paddingBottom: 20
  },
  flag: {
    width: "90%",
    height: "auto",
    display:'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    backgroundColor:'#397BA7',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  image: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  text:{
    fontSize: 20,
    color: '#FFF',
    marginTop: 20,
    marginBottom: 20
  }
});
