import { useParams } from "react-router-dom";
import { usePostsContext } from "../hooks/usePostsContext"
import { useEffect } from "react";


const Posts = () => {
    const { id } = useParams();

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
  
console.log();
    return (
        <div className="pages">
        {posts && posts.map(post => (
            post._id === id &&
            <div>
                <p className="title">{post.title}</p>
                <div className="content-container">
                <p>{post.content}</p>
                </div>
            </div>
        ))}
        </div>
    )
}

export default Posts;