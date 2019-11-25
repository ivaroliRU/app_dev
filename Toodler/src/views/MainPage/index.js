
import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import BoardList from '../../components/boardlist';

import boards from '../../../assets/data';

const Main = ({ navigation: { navigate } }) => (
  <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>
      <BoardList boards={boards.boards} />
    </ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EEE'
    },
    scrollView: {
      marginHorizontal: 20,
      flex:1,
    },
  });

export default Main;