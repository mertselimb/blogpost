import React, { useContext, useState } from "react";
import { Text, View, StyleSheet, Button, TextInput } from "react-native";

const BlogPostForm = () => {
  const [title, setTitle] = useState(BlogPost.title);
  const [content, setContent] = useState(BlogPost.content);
  return (
    <View>
      <Text style={styles.label}> Enter Title: </Text>
      <TextInput style={styles.input} value={title} onChangeText={setTitle} />
      <Text style={styles.label}> Enter Content: </Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={setContent}
      />
      <Button onPress={() => {}} title="SAVE BLOG POST" />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderBottomWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
  },
});

export default BlogPostForm;
