import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaRegComment, FaHeart } from "react-icons/fa";
import { PostList } from "../store/post-list-store";
import './Post.css';

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <div className="card mb-3 shadow-sm rounded">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h5 className="card-title mb-0">{post.title}</h5>
          <button className="btn btn-sm btn-danger" onClick={() => deletePost(post.id)}>
            <AiFillDelete />
          </button>
        </div>
        <p className="text-muted mb-1">Posted just now</p>
        <p className="card-text">{post.body}</p>
        <div className="mb-2">
          {post.tags.map((tag) => (
            <span key={tag} className="badge bg-primary me-1">{tag}</span>
          ))}
        </div>
        <div className="d-flex gap-3">
          <span><FaHeart /> {post.reactions}</span>
          <span><FaRegComment /> 0 Comments</span>
        </div>

      </div>
    </div>
  );
};

export default Post;
