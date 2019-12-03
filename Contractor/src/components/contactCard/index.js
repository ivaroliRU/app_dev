import React from 'react';
import styles from './styles';
import { withNavigation } from 'react-navigation';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'

const defaultImage = 'https://image.shutterstock.com/image-photo/handsome-unshaven-young-darkskinned-male-260nw-640011838.jpg'

class ContactCard extends React.Component {

    constructor (props) {
        super(props);
        
        this.handleNavigation = this.handleNavigation.bind(this);
      }
    
    handleNavigation() {
    }

    render() {
    const {navigate} = this.props.navigation;
    const image = (this.props.contact.image)?this.props.contact.image:defaultImage;
    
    return (
        <TouchableOpacity onPress={this.handleNavigation}>
            <View style={styles.container}>
                <Image source={{uri: defaultImage}} style={styles.contactImage} />
                <Text style={styles.contactName}>{this.props.contact.name}</Text>
                <View style={styles.arrow}>
                    <Icon name='angle-right' type='font-awesome' size={40} color='#AAA' />
                </View>
            </View>
        </TouchableOpacity>
    );
    }
}

export default withNavigation(ContactCard);
