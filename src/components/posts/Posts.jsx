import "./posts.scss";
import { posts } from "../../constants/";
import Post from "./Post";

export default function Posts() {
  return (
    <article className="posts">
      {posts.map((post, index) => (
        <div className="post" key={index}>
          <Post post={post} />
        </div>
      ))}
    </article>
  );
}
