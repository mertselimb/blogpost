import React, { useContext } from "react";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ navigation }) => {
  const { state, editBlogPost } = useContext(Context);
  const id = navigation.getParam("id");
  const BlogPost = state.find((item) => item.id === id);
  return (
    <BlogPostForm
      initialValues={{ title: BlogPost.title, content: BlogPost.content }}
      onSubmit={(title, content) => {
        editBlogPost(id, title, content, () => {
          navigation.navigate("Index");
        });
      }}
    />
  );
};

export default EditScreen;
