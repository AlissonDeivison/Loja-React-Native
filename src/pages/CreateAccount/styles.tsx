import { StyleSheet, TextStyle, ViewStyle } from "react-native";

export interface Styles {
  buttonsContainer: ViewStyle,
  buttonRegister: ViewStyle,
  buttonRegisterContainer: ViewStyle,
  buttonRegisterTitle: TextStyle,
}

const styles = StyleSheet.create({
    container: {
      height:'100%',
      backgroundColor: '#fff',
      justifyContent: 'center',
      padding: 40,
    },
    title:{
      fontSize: 18,
      alignSelf:'center',
      marginBottom:'20%',
    },
    
    input: {
      height: 40,
      width: "100%",
      borderColor: "#848484",
      borderWidth: 1,
      marginTop: "3%",
      marginBottom: "5%",
      borderRadius: 15,
      padding: 6
    },

    errorMessage:{
      textAlign:'center',
      fontSize: 10,
      marginTop: '-4%',
      color: '#C80000'
    },

  
    createForgotLink: {
      flexDirection:"row",
      alignSelf:"flex-end",
    },
    links:{
      marginLeft:8,
      marginBottom:10,
      color:"#2196F3"
    },
    buttonRegister: {
      backgroundColor: '#F88DBE',
      borderRadius: 30,
      marginBottom: 20,
    },
    buttonRegisterContainer: {
      width: 200,
      alignSelf:'center'
    },
    buttonRegisterTitle: {
      fontWeight: 'bold',
      color:'#FFFFFF',
    }
  });
  export default styles;