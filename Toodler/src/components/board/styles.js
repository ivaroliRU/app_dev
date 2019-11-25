import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    card: {
        marginTop: 30,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },

    cardImage: {
        borderRadius: 10
    }
  });

export default styles;