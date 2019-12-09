import React from 'react';
import { Text, TouchableOpacity, ImageBackground, View } from 'react-native';
import {withNavigation} from 'react-navigation'
import styles from './styles';


class BackgroundImage  extends React.Component  {
    constructor (props) {
      super(props);
    }

    render() {
        const {navigate} = this.props.navigation;
        return ( 
        <TouchableOpacity style={styles.touchableContainer} onPress={() => navigate(this.props.destination)}>
            <ImageBackground style={styles.imageContainer} source={{uri: this.props.image}} >
              <View style={styles.textContainer}>
                <Text style={styles.textHeader}>{this.props.text}</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        )
    }
};

export default withNavigation(BackgroundImage)