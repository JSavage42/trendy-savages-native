import React from 'react';
import { ScrollView, StyleSheet, FlatList, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { useStoreStateContext } from '../ShopContexts/Products';


export default LinksScreen = () => {
  const { storeCollections } = useStoreStateContext();
  const collectionList = [];
  storeCollections.map(collection => collectionList.push(collection.handle));
  return (
    <ScrollView style={styles.container}>
      <FlatList data={collectionList} renderItem={({item}) => <Text>{item.value}</Text>} />
    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  title: 'Collections',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    paddingLeft: 2,
    backgroundColor: '#fff',
  },
});
