import React from 'react';
import { View, FlatList, Text } from 'react-native';

const List = ({ lists }) => (
  <View style={{ flex: 1 }}>
    <FlatList
      numColumns={1}
      data={lists}
      renderItem={({ item: {name} }) => {
        return (
          <Text>{name}</Text>
        )
      }}
      keyExtractor={(image) => image.name}/>
  </View>
);

export default List;