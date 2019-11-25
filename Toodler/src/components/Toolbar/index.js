import React from 'react';
import {View, TouchableHighlight, Text,} from 'react-native';
import styles from './styles';

const Toolbar = ({ onAdd, onRemove }) => (
  <View styleName ="horizontal" style={styles.toolbar}>
    <TouchableHighlight style={styles.toolbarAction} onPress={onAdd}>
      <Text style={styles.toolbarActionText}>Add new list</Text>
    </TouchableHighlight>
    <TouchableHighlight style={styles.toolbarAction} onPress={onRemove}>
      <Text style={styles.toolbarActionText}>Delete list</Text>
    </TouchableHighlight>
  </View>
);

export default Toolbar;
