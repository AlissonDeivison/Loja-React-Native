import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    justifyContent: 'center'
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
    flexBasis: '50%',
  },
  selectedBackground: {
    backgroundColor: '#B398D6',
  },
});

export default styles;