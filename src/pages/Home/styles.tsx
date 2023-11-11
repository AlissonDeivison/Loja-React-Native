// styles.ts
import { ViewStyle, ImageStyle, TextStyle } from 'react-native';

interface Gradient {
  gradientStart: {x: number, y: number},
  gradientEnd: {x: number, y: number},
  colors: string[]
}

export interface Styles {
  container: ViewStyle & {gradient: Gradient},
  logo_img: ImageStyle,
  buttonsContainer: ViewStyle,
  buttonLogin: ViewStyle,
  buttonLoginContainer: ViewStyle,
  buttonLoginTitle: TextStyle,
  buttonSignUp: ViewStyle,
  buttonSignUpContainer: ViewStyle,
  buttonSignUpTitle: TextStyle,
  forgotPassword: TextStyle,
  forgotLink: TextStyle
}

const styles: Styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 40,
    gradient: {
      gradientStart: {x: 0.0, y: 0.0},
      gradientEnd: {x: 0.0, y: 1.0},
      colors: ['#F88DBE', '#B398D6']
    }
  },
  logo_img: {
    height: '40%',
    resizeMode: 'contain',
    alignSelf: "center",
  },
  buttonsContainer:{
    marginBottom:'20%',
  },
  buttonLogin: {
    backgroundColor: 'white',
    borderRadius: 30,
    marginBottom: 20,
  },
  buttonLoginContainer: {
    width: 200,
    alignSelf:'center'
  },
  buttonLoginTitle: {
    fontWeight: 'bold',
    color:'#F88DBE',
  },
  buttonSignUp: {
    backgroundColor: '#FF799E',
    borderRadius: 30,
    marginBottom: 20,
  },
  buttonSignUpContainer: {
    width: 200,
    alignSelf:'center'
  },
  buttonSignUpTitle: {
    fontWeight: 'bold',
    color:'#FFF',
  },
  forgotPassword:{
    alignSelf:'center',
    color:'#FFF',
    fontSize:12,
    marginTop:-10
  },
  forgotLink:{
    alignSelf:'center',
    color:'#FFFFFF',
    fontSize:12
  }
};

export default styles;
