import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LanguageCode from './LanguageCode';
import LanguageItem from './Components/LanguageItem';

const LanguageSelectScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={Object.keys(LanguageCode)}
        renderItem={itemData => {
          const languageKey = itemData.item;
          const languageString = LanguageCode[languageKey];
          return (
            <LanguageItem
              text={languageString}
              selected={languageKey === 'English'}
            />
          );
        }}
      />
    </View>
  );
};

export default LanguageSelectScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
