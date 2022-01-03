import React, { useEffect, useState } from 'react';
import {StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import Card from '../components/Card';
import MyScrollView from "../components/MyScrollView";
import Loader from "../components/Loader";

const SelectedUser = props => {
  const { navigation, route } = props;
  const { userId } = route.params;
  const [loaded, setLoaded] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  const [userPosts, setUserPosts] = useState([])

  const fetchUser = async id => {
    const response = await fetch(`http://localhost:8080/api/users/${id}`);
    const result = await response.json();
    setSelectedUser(result.oneUser);
  };

  const fetchUserPosts = async id => {
    const response = await fetch(`http://localhost:8080/api/post/${id}`);
    const result = await response.json();
    setUserPosts(result.userPosts);
    setLoaded(true);
  };

  useEffect(() => {
    if (!loaded) {
      fetchUser(userId);
      fetchUserPosts(userId);
    }
  }, [])

  return(
    <View style={styles.container}>
      <Text style={styles.heading}>{selectedUser.name} {selectedUser.surname}</Text>
      {!loaded ? <Loader />
        : <MyScrollView>
          {userPosts.length ? userPosts.map((post) => (
              <Card key={post.id}>
                <Text style={styles.postTitle}>{post.title}</Text>
                <Text style={styles.postContent}>{post.content}</Text>
              </Card>
            ))
            : <Card style={styles.noPosts}>
              <Text>This user don't have any post</Text>
            </Card>
          }
        </MyScrollView>
      }
    </View>
  );
};

export default SelectedUser;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  heading: {
    marginTop: 15,
    fontSize: 26,
    fontWeight: '700',
  },
  postTitle: {
    paddingBottom: 5,
    fontSize: 18,
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
  postContent: {
    fontSize: 16,
  },
  noPosts: {
    alignItems: 'center',
  },
});