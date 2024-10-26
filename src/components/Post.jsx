import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/post-list-store";
import { CiHeart } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <div className="card post-card" style={{ width: "25vw" }}>
      <MdDelete className="delete" onClick={() => deletePost(post.id)} />
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-dark tags">
            {tag}
          </span>
        ))}
      </div>
      <div className="icon-container">
        <div className="icon-wrapper">
          <CiHeart className="full-icon" />
          <span className="icon-badge">{post.reactions}</span>
        </div>
        <div className="icon-wrapper">
          <CiShare2 className="full-icon" />
          <span className="icon-badge">{post.share}</span>
        </div>
      </div>
    </div>
  );
};
export default Post;
