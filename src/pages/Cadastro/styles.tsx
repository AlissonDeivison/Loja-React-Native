import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      padding: 40,
    },
    input: {
      height: 40,
      width: "100%",
      borderColor: "#848484",
      borderWidth: 1,
      marginTop: "3%",
      marginBottom: "5%",
    },
  
    createForgotLink: {
      flexDirection:"row",
      alignSelf:"flex-end",
    },
    links:{
      marginLeft:8,
      marginBottom:10,
      color:"#2196F3"
    }
  });
  export default styles;