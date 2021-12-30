import { StyleSheet, Text, View } from 'react-native';
import {useEffect, useState} from "react";
import {getAllUsers} from "./requests/userRequests";

export default function App() {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    const response = await getAllUsers();
    setUsers(response.data);
  }

  console.log(users);

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <View style={styles.container}>
      {users.allUsers && users.allUsers.map((user) => (
        <Text key={user.id}>`${user.name} ${user.surname}`</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
