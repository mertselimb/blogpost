import React, { useContext, useState } from "react";
import { Text, View, StyleSheet, Button, TextInput } from "react-native";
import { Context } from "../context/BlogContext";

const EditScreen = ({ navigation }) => {
  const { state, editBlogPost } = useContext(Context);
  const id = navigation.getParam("id");
  const BlogPost = state.find((item) => item.id === id);
  const [title, setTitle] = useState(BlogPost.title);
  const [content, setContent] = useState(BlogPost.content);
  return (
    <View>
      <Text style={styles.label}> Edit Title: </Text>
      <TextInput style={styles.input} value={title} onChangeText={setTitle} />
      <Text style={styles.label}> Edit Content: </Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={setContent}
      />
      <Button
        onPress={() => {
          editBlogPost(id, title, content, () => navigation.navigate("Index"));
        }}
        title="EDIT BLOG POST"
      />
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

export default EditScreen;
