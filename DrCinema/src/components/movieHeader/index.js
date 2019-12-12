import React from 'react';
import { StyleSheet, View, Text, WebView, Image, Button, SafeAreaView, ScrollView } from 'react-native';
import styles from './style';

class MovieHeader extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.headerImageContainer}> 
                {(this.props.movie.trailer)?
                <WebView
                style={styles.headerWebView}
                scrollEnabled={false}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                source={{ uri: this.props.movie.trailer }}
                />:
                <Image style={styles.headerImage} source={{uri: this.props.movie.poster}}></Image>}
            </View>
        );
    }
}

export default MovieHeader;
