import createDataContext from "../context/createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogpost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case "edit_blogpost":
      return state
        .filter((blogpost) => blogpost.id !== action.payload.id)
        .concat({
          id: action.payload.id,
          title: action.payload.title,
          content: action.payload.content,
        });
    case "delete_blogpost":
      return state.filter((blogpost) => blogpost.id !== action.payload);
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: "add_blogpost", payload: { title, content } });
    callback();
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_blogpost", payload: id });
  };
};

const editBlogPost = (dispatch) => {
  return (id, title, content, callback) => {
    dispatch({ type: "edit_blogpost", payload: { id, title, content } });
    callback();
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  [
    { title: "TEST POST #1", content: "TEST CONTENT #1", id: "1" },
    { title: "TEST POST #2", content: "TEST CONTENT #2", id: "2" },
    { title: "TEST POST #3", content: "TEST CONTENT #3", id: "3" },
    { title: "TEST POST #4", content: "TEST CONTENT #4", id: "4" },
    { title: "TEST POST #5", content: "TEST CONTENT #5", id: "5" },
    { title: "TEST POST #6", content: "TEST CONTENT #6", id: "6" },
  ]
);
