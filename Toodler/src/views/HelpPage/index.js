import React from 'react';
import {WebView} from 'react-native';


class Help extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
        <WebView
            style={{flex:1}}
            javaScriptEnabled={true}
            source={{uri: 'https://www.youtube.com/watch?v=X1jMMFOqxEw'}}
        />
    )
  }
};

export default Help;
