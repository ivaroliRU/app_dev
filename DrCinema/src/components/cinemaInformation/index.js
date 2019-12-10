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
        <View>
          <Text>{this.props.cinema.name}</Text>
          <Text>{this.props.cinema.description}</Text>
          <Text>{this.props.cinema.address}</Text>
          <Text>{this.props.cinema.phone}</Text>
          <Text>{this.props.cinema.website}</Text>
        </View>

        );
    }
}

export default CinemaInformation;
