import React, { createContext, useReducer, useEffect } from "react";

const initialPostList = JSON.parse(localStorage.getItem("postList")) || [];

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  switch (action.type) {
    case "DELETE_POST":
      newPostList = currPostList.filter(
        (post) => post.id !== action.payload.postId
      );
      break;
    case "ADD_POST":
      newPostList = [action.payload, ...currPostList];
      break;
    default:
      return currPostList;
  }
  localStorage.setItem("postList", JSON.stringify(newPostList));
  return newPostList;
};

const PostlistProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    initialPostList
  );

  const addPost = (userId, title, body, tags, reaction, share) => {
    const newPost = {
      id: Date.now().toString(),
      title,
      body,
      reactions: reaction,
      share,
      userId,
      tags,
    };
    dispatchPostList({
      type: "ADD_POST",
      payload: newPost,
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: { postId },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

export default PostlistProvider;
