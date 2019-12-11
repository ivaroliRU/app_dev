import React from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from './styles';
import MovieList from '../movieList'

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
              <Text style={styles.movies}> Movies in this cinema </Text>
              <MovieList/>
          </View>
        );
    }
}

export default CinemaInformation;