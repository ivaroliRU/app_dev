import React from 'react';
import { Text, TouchableOpacity, ImageBackground, View } from 'react-native';
import styles from './styles';

export default class BackgroundImage extends React.Component {
    constructor (props) {
      super(props);
    }

    render() {
        return ( 
        <TouchableOpacity style={styles.touchableContainer}>
            <ImageBackground style={styles.imageContainer} source={{uri: this.props.image}} >
              <View style={styles.textContainer}>
                <Text style={styles.textHeader}>{this.props.text}</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        )
    }
};