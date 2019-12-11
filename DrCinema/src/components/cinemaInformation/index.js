import React from 'react';
import { Text, View, WebView } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from './styles';

class CinemaInformation extends React.Component {
    constructor (props) {
        super(props);
    }

    stripDescription(text) {
        console.log(text)
        if (text != null){
            text = text.replace(/<br>/gi, "\n")
            text = text.replace(/<(?:.|\s)*?>/g, "")
        }
        return text
    }

    render() {
        return (
          <View style={styles.container} >
              <Text style={styles.textHeader}>{this.props.cinema.name}</Text>
              <Text style={styles.information}>{this.stripDescription(this.props.cinema.description)}</Text>
              <Text style={styles.information}>{this.props.cinema.address}</Text>
              <Text style={styles.information}>{this.props.cinema.phone}</Text>
              <Text style={styles.information}>{this.props.cinema.website}</Text>

          </View>
        );
    }
}

export default CinemaInformation;
