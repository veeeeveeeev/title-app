import { Link } from "react-router-dom";

const Cards = ({ post }) => {
    return (
        <div className="catagories">
        <Link to={`/content/${post._id}`}>
            <div></div>
            <p>{post.title}</p>
            </Link>
        </div>
    )
}

export default Cards;