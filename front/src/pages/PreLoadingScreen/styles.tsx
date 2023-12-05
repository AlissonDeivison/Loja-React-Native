import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 40,
      alignSelf:'center',
      gradient: {
        gradientStart: {x: 0.0, y: 0.0},
        gradientEnd: {x: 0.0, y: 1.0},
        colors: ['#F88DBE', '#B398D6']
      },
    },
    logo:{
        height:'30%',
        resizeMode:'contain'
    }
  });
  export default styles;