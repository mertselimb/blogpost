import React, { useContext } from "react";
import { Text, View, StyleSheet, FlatList, Button } from "react-native";
import BlogContext from "../context/BlogContext";

const IndexScreen = () => {
  const { data, addBlogPost } = useContext(BlogContext);

  return (
    <View>
      <Text> Index Screen</Text>
      <FlatList
        data={data}
        keyExtractor={(blogPost) => {
          blogPost.title;
        }}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
      <Button title="Add" onPress={addBlogPost} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
