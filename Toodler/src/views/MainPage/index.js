
import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import BoardList from '../../components/boardlist';

const cards = [
  {
    "id": 1,
    "name": "Trip to the Netherlands!",
    "thumbnailPhoto": "https://s25743.pcdn.co/wp-content/uploads/2018/05/points-of-interest-where-to-go-and-places-to-visit-in-the-netherlands-featured-1400x735.jpg"
  },
  {
      "id": 2,
      "name": "Boring stuff",
      "thumbnailPhoto": "https://hbr.org/resources/images/article_assets/2019/06/Jun19_05_1040477378.jpg"
  },
  {
      "id": 3,
      "name": "Bucket list",
      "thumbnailPhoto": "https://images-na.ssl-images-amazon.com/images/I/61fq9A8jEGL._SL1500_.jpg"
  }
];

const Main = ({ navigation: { navigate } }) => (
  <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>
      <BoardList boards={cards} />
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