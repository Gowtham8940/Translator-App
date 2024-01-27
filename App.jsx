import LoginScreen from './Screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import HomeScreen from './Screens/ProfileScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeTab from './BottomTab/HomeTab';
import FavTab from './BottomTab/FavTab';
import SearchTab from './BottomTab/SearchTab';
import {Image, StatusBar} from 'react-native';
import icons from './BottomTab/icons';
// import Details from './BottomTab/Details';
import Write from './BottomTab/DetailsScreen/Write';
import Record from './BottomTab/DetailsScreen/Record';
import Scan from './BottomTab/DetailsScreen/Scan';
import languageSelectScreen from './BottomTab/LanguageSelectScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Home">
        <Stack.Group>
          <Stack.Screen name="Home" component={LoginScreen} />
          <Stack.Screen
            name="MyTabs"
            component={MyTabs}
            options={{headerTitle: 'Translator'}}
          />
          <Stack.Screen name="FavTab" component={FavTab} />
          <Stack.Screen name="Write" component={Write} />
          <Stack.Screen name="Record" component={Record} />
          <Stack.Screen name="Scan" component={Scan} />
          <Stack.Group
            screenOptions={{
              presentation: 'modal',
              headerStyle: {backgroundColor: 'gold'},
              headerTitleStyle: {color: 'black'},
            }}>
            <Stack.Screen
              name="languageSelectScreen"
              component={languageSelectScreen}
            />
          </Stack.Group>
        </Stack.Group>
      </Stack.Navigator>
      <StatusBar backgroundColor={'gold'} barStyle={'dark-content'} />
    </NavigationContainer>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: 'white',
          // borderRadius:50,
          // bottom:20,
          // marginHorizontal:26,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeTab}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{
                  tintColor: focused ? 'black' : 'gray',
                }}
                source={icons.icHome}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchTab}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={icons.icSearch}
                style={{
                  tintColor: focused ? 'black' : 'gray',
                }}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Favorites"
        component={FavTab}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={icons.icFav}
                style={{
                  tintColor: focused ? 'black' : 'gray',
                }}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
export default App;
