import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  card: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width:300
  },
  selectedBackground: {
    backgroundColor: '#B398D6',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F88DBE',
    alignSelf:'center'
  },
  cardText: {
    marginTop: 10,
    color: '#4E342E',
  },
  favorite: {
    alignSelf:'center',
    padding:10
  },
});

export default styles;