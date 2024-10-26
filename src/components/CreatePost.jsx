import React, { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const navigate = useNavigate();

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const postTagsElement = useRef();
  const postLikesElement = useRef();
  const postShareElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const title = postTitleElement.current.value;
    const body = postBodyElement.current.value;
    const tags = postTagsElement.current.value.split(" ");
    const reaction = postLikesElement.current.value;
    const share = postShareElement.current.value;

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    postTagsElement.current.value = "";
    postLikesElement.current.value = "";
    postShareElement.current.value = "";

    addPost(userId, title, body, tags, reaction, share);
    navigate("/");
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userid" className="form-label">
          Enter UserId
        </label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control"
          placeholder="User ID"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Enter Title of the Post
        </label>
        <input
          type="text"
          ref={postTitleElement}
          className="form-control"
          placeholder="Title"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Enter Body of the Post
        </label>
        <textarea
          type="text"
          ref={postBodyElement}
          rows="4"
          className="form-control"
          placeholder="Body"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter Tags of the Post
        </label>
        <input
          type="text"
          ref={postTagsElement}
          className="form-control"
          placeholder="Enter tags with space as separator"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="like" className="form-label">
          Enter Number of Likes of Post
        </label>
        <input
          type="text"
          ref={postLikesElement}
          className="form-control"
          placeholder="Like"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="share" className="form-label">
          Enter Number of Shares of the Post
        </label>
        <input
          type="text"
          ref={postShareElement}
          className="form-control"
          placeholder="Share"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
export default CreatePost;
