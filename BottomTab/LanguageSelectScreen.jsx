import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import LanguageCode from './LanguageCode';
import LanguageItem from './Components/LanguageItem';
import {
  HeaderButtons,
  Item,
  HeaderButton,
} from 'react-navigation-header-buttons';
import Icon from 'react-native-vector-icons/AntDesign';

const CustomHeaderButton = (props, navigation) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Icon}
      iconSize={20}
      onPress={() => navigation.navigate('HomeScreen')}
    />
  );
};
const LanguageSelectScreen = ({navigation, route}) => {
  const params = route.params || {};
  const {title, selected} = params;
  useEffect(() => {
    navigation.setOptions({
      headerTitle: title,
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            iconName="close"
            color={'#fff'}
            onPress={() => navigation.goBack()}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  const onLanguageSelect = useCallback(itemKey => {
    const dataKey= params.mode === 'to' ? 'languageTo' : 'languageFrom';
    navigation.navigate('Home', {[dataKey]: itemKey});
  },[params, navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        data={Object.keys(LanguageCode)}
        renderItem={itemData => {
          const languageKey = itemData.item;
          const languageString = LanguageCode[languageKey];
          return (
            <LanguageItem
              onPress={() => onLanguageSelect(languageKey)}
              text={languageString}
              selected={languageKey === selected}
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
