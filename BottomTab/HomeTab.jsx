import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

const HomeTab = nav => {
  const [textInput, setTextInput] = React.useState('');
  const [result, setResult] = React.useState(' ');
  const [languageTo, setLanguageTo] = React.useState('en');
  const [languageFrom, setLanguageFrom] = React.useState('ta');

  return (
    <View style={styles.container}>
      <View style={styles.languageContainer}>
        <TouchableOpacity
          style={styles.languageOptions}
          onPress={() =>
            nav.navigation.navigate('languageSelectScreen', {
              title: 'language from',
              selected: languageFrom,
            })
          }>
          <Text style={styles.languages}>English</Text>
        </TouchableOpacity>

        <Icon style={styles.arrow} name="arrowright" size={20} color="gray" />

        <TouchableOpacity
          style={styles.languageOptions}
          onPress={() =>
            nav.navigation.navigate('languageSelectScreen', {
              title: 'language from',
              selected: languageTo,
            })
          }>
          <Text style={styles.languages}>Tamil</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          multiline
          placeholder="Enter Text"
          style={styles.input}
          onChangeText={text => setTextInput(text)}
        />
        <TouchableOpacity
          disabled={textInput === ''}
          style={styles.iconContainer}>
          <Icon
            name="arrowright"
            size={20}
            color={textInput === '' ? 'gray' : 'black'}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.resultContainer}>
        <Text style={styles.resultant}>{result}</Text>

        <TouchableOpacity disabled={result === ''} style={styles.iconContainer}>
          <Icon
            name="copy1"
            size={20}
            color={result === '' ? 'gray' : 'black'}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.historyContainer} />
    </View>
  );
};

export default HomeTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  languageContainer: {
    flexDirection: 'row',
    borderBlockColor: 'black',
    borderBottomWidth: 1,
  },
  languageOptions: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
  },
  arrow: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  languages: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    letterSpacing: 0.3,
  },
  inputContainer: {
    flexDirection: 'row',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  input: {
    flex: 1,
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    letterSpacing: 0.3,
    height: 90,
    color: 'black',
  },
  iconContainer: {
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultContainer: {
    flexDirection: 'row',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    height: 90,
    paddingVertical: 15,
  },
  resultant: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    letterSpacing: 0.3,
    flex: 1,
    marginHorizontal: 20,
  },
  historyContainer: {
    flex: 1,
    padding: 10,
  },
});
