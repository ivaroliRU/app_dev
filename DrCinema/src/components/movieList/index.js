import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import styles from './style';

class MovieList extends React.Component {
    constructor (props) {
        super(props);

    }

    render() {

        return (
            <View>
              <Text style={styles.movies}>hello</Text>
            </View>
        );
    }
}

export default MovieList;
