import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import Homepages from './components/home/home';

interface TabBarIconProps {
  focused: boolean;
  routeName: string;
}

// Componentes das telas
const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
     <Homepages/>
    </View>
  );
};

const ExploreScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Explore Screen</Text>
    </View>
  );
};

const MessagesScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Messages Screen</Text>
    </View>
  );
};

const ProfileScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
    </View>
  );
};

const LibraryScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Library Screen</Text>
    </View>
  );
};

// Função para renderizar o ícone da aba
const TabBarIcon: React.FC<TabBarIconProps> = ({ focused, routeName }) => {
  let iconSource;

  switch (routeName) {
    case 'Home':
      iconSource = require('./assets/footer/Home(1).png');
      break;
    case 'Explore':
      iconSource = require('./assets/footer/Frame.png');
      break;
    case 'Messages':
      iconSource = require('./assets/footer/Messages.png');
      break;
    case 'Profile':
      iconSource = require('./assets/footer/Frame(1).png');
      break;
    case 'Library':
      iconSource = require('./assets/footer/Library.png');
      break;
    default:
      iconSource = require('./assets/footer/Home(1).png');
      break;
  }

  return (
    <Image
      source={iconSource}
      style={{ width: 24, height: 24, tintColor: focused ? '#000' : '#888' }}
    />
  );
};


const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} routeName={route.name} />
          ),
          headerShown: false, // Esconde o cabeçalho se não precisar
          tabBarShowLabel: false, // Esconde os rótulos das abas
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Explore" component={ExploreScreen} />
        <Tab.Screen name="Messages" component={MessagesScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Library" component={LibraryScreen} />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
