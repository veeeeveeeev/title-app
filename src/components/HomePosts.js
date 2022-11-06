import { usePostsContext } from "../hooks/usePostsContext";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const HomePosts = () => {
  const { posts, dispatch } = usePostsContext();

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/posts");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_POSTS", payload: json });
      }
    };

    fetchPosts();
  }, [dispatch]);

  return (
    <div className="posts">
      <div className="bigPost">
        {posts &&
          posts.slice(0, 1).map((post) => (
            <Link to={`/content/${post._id}`}>
              <p>{posts && post.title}</p>
            </Link>
          ))}
      </div>
      <div className="smallPostContainer">
        {posts &&
          posts.slice(1, 5).map((post) => (
            <div className="smallPost">
              <Link to={`/content/${post._id}`}>
                <p key={post._id}>{post.title}</p>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HomePosts;
