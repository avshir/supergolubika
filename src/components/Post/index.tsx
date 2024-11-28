import { IPost, posts } from "../../constans/posts";
import { InfoPost } from "../InfoPost";

interface PostProps {
  id: number;
}

export const Post = ({ id }: PostProps) => {
  const post: IPost = posts[id - 1];

  return (
    <div className="max-w-xl mx-auto">
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-left">{post.title}</h2>
          <InfoPost post={post} />
        </div>
        <img
          src={post.thumbnail}
          alt="голубика"
          role="presentation"
          className="object-cover w-full sm:min-h-96 max-h-60 sm:max-h-96 rounded-xl bg-primary/80"
        />
        <div>{post.content}</div>
      </div>
    </div>
  );
};
