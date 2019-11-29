import React, { Component } from "react";
import { Icon, Fab } from 'native-base';

class AddIcon extends Component {

    render() {
      return (
        <Fab
        direction="up"
        style={{ backgroundColor: '#82b6ff', zIndex: 100 }}
        position="bottomRight"
        >
            <Icon name="add" />
        </Fab>
      );
    }
}

export default AddIcon;
