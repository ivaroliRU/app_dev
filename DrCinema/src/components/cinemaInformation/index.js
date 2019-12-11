import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from './styles';

class CinemaInformation extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
          <View style={styles.container}>
            <Text style={styles.textHeader}>{this.props.cinema.name}</Text>
            <Text style={styles.information}>{this.props.cinema.description}</Text>
            <Text style={styles.information}>{this.props.cinema.address}</Text>
            <Text style={styles.information}>{this.props.cinema.phone}</Text>
            <Text style={styles.information}>{this.props.cinema.website}</Text>
          </View>
        );
    }
}

export default CinemaInformation;