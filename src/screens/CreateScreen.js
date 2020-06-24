import React, { useContext, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";
const ShowScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
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
      <Button
        onPress={() => {
          addBlogPost(title, content, () => navigation.navigate("Index"));
        }}
        title="ADD BLOG POST"
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

export default ShowScreen;
