import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import Card from '../components/Card';
import MyScrollView from '../components/MyScrollView';
import ModalForm from '../components/ModalForm';
import { AntDesign } from '@expo/vector-icons';

const UsersScreen = props => {
  const { navigation } = props;
  const [users, setUsers] = useState([]);
  const [userToDelete, setUserToDelete] = useState(null);

  const inputs = ['Name', 'Lastname']

  const fetchUsers = async () => {
    const response = await fetch('http://localhost:8080/api/users');
    const result = await response.json();
    setUsers(result.allUsers);
  }

  useEffect(() => {
    if (!users.length) {
      fetchUsers();
    }
  }, [])

  const submitHandler = async (data) => {
    try {
      await fetch('http://localhost:8080/api/users', {
        method: 'POST',
        body: JSON.stringify({
          name: data.Name,
          surname: data.Lastname
        }),
        headers: { 'Content-Type': 'application/json' }
      });
      fetchUsers();
    } catch (error) {
      console.error(error);
    }
  };

  const longPressHandler = id => {
    return userToDelete === id
      ? setUserToDelete(null)
      : setUserToDelete(id);
  };

  const deleteUser = async id => {
    try {
      await fetch(`http://localhost:8080/api/users/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
      });
      fetchUsers();
    } catch (error) {
      console.error(error);
    }
  };

  return(
    <View style={styles.container}>

      <SafeAreaView style={styles.safeArea}>
        <MyScrollView style={styles.scrollWrapper} >
          {users.map((user) => (
            <Card key={user.id}>
              <TouchableOpacity
                style={styles.userButton}
                onLongPress={longPressHandler.bind(this, user.id)}
                onPress={() => navigation.navigate('Selected user', { userId: user.id })}
              >

                <Text style={styles.userInfo}>{user.name} {user.surname}</Text>

                {userToDelete === user.id && <TouchableOpacity style={styles.deleteButton} onPress={deleteUser.bind(this, user.id)}>
                  <AntDesign name="delete" size={20} color="white"/>
                </TouchableOpacity>}

              </TouchableOpacity>
            </Card>
          ))}
        </MyScrollView>
      </SafeAreaView>

      <ModalForm inputs={inputs} submitHandler={submitHandler} />

    </View>
  )
}

export default UsersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  safeArea: {
    flex: 1,
  },
  userInfo: {
    paddingVertical: 3,
    fontSize: 20,
  },
  userButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  deleteButton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    backgroundColor: '#ff5858',
    borderRadius: 5,
  },
});