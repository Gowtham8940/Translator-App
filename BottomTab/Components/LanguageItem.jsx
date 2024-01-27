import {TouchableOpacity, View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default LanguageItem = props => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.iconContainer}>
        {props.selected && <Icon name="check" size={20} color="green" />}
      </View>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderBottomWidth: 1,
  },
  iconContainer: {
    paddingRight: 7,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
  },
  text: {
    flex: 1,
    letterSpacing: 0.3,
  },
});
