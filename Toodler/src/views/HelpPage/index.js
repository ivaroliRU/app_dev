import React from 'react';
import {WebView} from 'react-native';


class Help extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <WebView
              style={{ marginTop: 20, width: '100%', height: '100%' }}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              source={{ uri: "https://www.youtube.com/embed/p466ZH3On8Q" }}
            />
    )
  }
};

export default Help;
