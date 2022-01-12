import React, {useEffect, useState} from 'react';
import { View, StyleSheet, Text } from 'react-native';

const PostsScreen = () => {
  const [allPosts, setAllPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch('http://localhost:8080/api/post');
    const result = await response.json();
    setAllPosts(result);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return(
    <View style={styles.container}>
      {allPosts.length && allPosts.map((post) => (
        <View key={post.id}>
          <Text>{post.title}</Text>
          <Text>{post.content}</Text>
        </View>
      ))}
    </View>
  );
}

export default PostsScreen;

const styles = StyleSheet.create({
  
});