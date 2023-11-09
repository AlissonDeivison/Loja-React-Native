
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
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
    borderRadius: 15
  },
  createForgotLink: {
    flexDirection: "row",
    alignContent:"space-between",
    alignSelf: "flex-end",
  },
  links: {
    marginLeft: 8,
    marginBottom: 10,
    color: "#2196F3",
  },
  logo: {
    alignItems: "center",
  },
  text: {
    fontSize: 28,
    color: "#1A1A1A",
  },
  logo_img: {
    height: '55%',
    resizeMode: 'contain'
  }
});

export default styles;