import React from 'react';
import styles from './styles';
import { withNavigation } from 'react-navigation';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'

class CinemaCard extends React.Component {

    constructor (props) {
        super(props);

        this.handleNavigation = this.handleNavigation.bind(this);
    }

    //handle click and navigation
    handleNavigation() {
      //this.props.navigation.navigate('ContactDetails', {contact:this.props.contact})
    }

    render() {        
        return (
            <TouchableOpacity onPress={this.handleNavigation}>
                <View style={styles.container}>
                    <Text style={styles.contactName}>{this.props.cinema.name}</Text>
                    <View style={styles.arrow}>
                        <Icon name='angle-right' type='font-awesome' size={40} color='#AAA' />
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

export default withNavigation(CinemaCard);
