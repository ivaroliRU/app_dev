import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import BoardList from '../../components/boardlist';
import { getAllBoards } from '../../services/taskService';
import { View } from 'react-native';

const boards = getAllBoards();

const Main = ({ navigation: { navigate } }) => (
  <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>
      <BoardList boards={boards} />
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