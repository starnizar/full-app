import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UsersScreen from './screens/UsersScreen';
import SelectedUser from './screens/SelectedUser';
import AddUserButton from './components/AddUserButton';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import AddPostButton from './components/AddPostButton';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{headerRight: (props) => <AddUserButton {...props} />}}
            name="All users"
            component={UsersScreen}
          />
          <Stack.Screen
            options={{headerRight: (props) => <AddPostButton {...props} />}}
            name="Selected user"
            component={SelectedUser}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
