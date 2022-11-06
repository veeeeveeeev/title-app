import { usePostsContext } from "../hooks/usePostsContext";
import { useEffect } from "react";

import Cards from "../components/Cards";

const Content = () => {
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
    <div className="pages">
      <div className="content">
        <p>See what we have for you!</p>
        <div className="scroller">
          {posts && posts.map((post) => <Cards key={post._id} post={post} />)}
        </div>
      </div>
    </div>
  );
};

export default Content;
