import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ContactListScreen from "../screens/ContactListScreen";
import AddContactScreen from "../screens/AddContactScreen";

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'ContactList'}>
        <Stack.Screen
          name={'ContactList'}
          component={ContactListScreen}
          options={{title: 'ContactList'}}
        />
        <Stack.Screen
          name={'AddContact'}
          component={AddContactScreen}
          options={{title: 'AddContact'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
