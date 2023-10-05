import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LogicGateScreen from './screens/gate.jsx';
import OtherProjectsScreen from './screens/otherProjects.jsx';
import ReachOutScreen from './screens/reachOut.jsx';
import CreditsScreen from './screens/credits';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LogicGateComponent" >
        <Stack.Screen
          name="LogicGateScreen"
          component={LogicGateScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OtherProjectsScreen"
          component={OtherProjectsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ReachOutScreen"
          component={ReachOutScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreditsScreen"
          component={CreditsScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
