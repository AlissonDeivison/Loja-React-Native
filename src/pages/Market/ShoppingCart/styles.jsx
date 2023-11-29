import { StyleSheet } from "react-native"

const styles = StyleSheet.create({

    cardContainer: {

        margin: 10,
        padding: 40,
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,

    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#B398D6',
        marginBottom:20
    },

    cardText: {
        marginTop: 10,
        color: '#4E342E', 
        fontSize: 15,  
    },

    cardTextValue: {
        marginTop: 80,
        color: '#4E342E',
        alignSelf:'center',
        fontWeight: 'bold',
        fontSize: 20,  
    },

    cardTextPrice: {
        marginTop: 10,
        color: '#4E342E',
        fontSize: 25,  
        fontWeight: 'bold',  
    },

    button: {
        backgroundColor: '#F88DBE',
        borderRadius: 30,
        marginTop: 100,

    },
    buttonContainer: {
        width: 200,
        alignSelf: 'center'
    },
    buttonTitle: {
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    emptyCartContainer: {
        alignSelf: 'center',
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        marginTop: '80%',
      },
      emptyCartText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#555', 
        textAlign: 'center', 
      }

})

export default styles;
