import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import Card from "../components/Card";
import MyScrollView from "../components/MyScrollView";
import ModalForm from "../components/ModalForm";

const UsersScreen = props => {
  const { navigation } = props;
  const [users, setUsers] = useState([]);

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

  return(
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <MyScrollView style={styles.scrollWrapper} >
          {users.map((user) => (
            <Card key={user.id}>
              <TouchableOpacity onPress={() => navigation.navigate('Selected user', { userId: user.id })}>
                <Text style={styles.userInfo}>{user.name} {user.surname}</Text>
              </TouchableOpacity>
            </Card>
          ))}
        </MyScrollView>
      </SafeAreaView>
      <ModalForm />
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
    fontSize: 20,
  },
});