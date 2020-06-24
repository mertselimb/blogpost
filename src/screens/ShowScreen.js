import React, { useContext } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import { FontAwesome } from "@expo/vector-icons";
const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  const id = navigation.getParam("id");
  const BlogPost = state.find((item) => item.id === id);

  return (
    <View>
      <Text style={styles.label}>{BlogPost.title}</Text>
      <Text style={styles.label}>{BlogPost.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Edit", { id: navigation.getParam("id") });
        }}
      >
        <FontAwesome style={styles.edit} name="pencil-square-o" size={40} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  edit: { marginRight: 10 },
  label: {
    fontSize: 20,
    marginBottom: 5,
  },
});

export default ShowScreen;
