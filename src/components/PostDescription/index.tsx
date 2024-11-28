import { Link } from "react-router-dom";

import { InfoPost } from "../InfoPost";
import { IPost } from "../../constans/posts";

interface PostDescription {
  post: IPost;
}

export const PostDescription = ({ post }: PostDescription) => {
  return (
    <Link
      key={post.id}
      rel="noopener noreferrer"
      to={`/blog/${post.id}`}
      className="max-w-sm w-full mx-auto group hover:no-underline focus:no-underline bg-white rounded-xl hover:shadow-xl transition-shadow"
    >
      <img
        role="presentation"
        className="object-cover w-full rounded-xl h-44 bg-primary/80"
        loading="lazy"
        src={post.thumbnail}
      />
      <div className="p-6 space-y-2">
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
          {post.title}
        </h3>
        <InfoPost post={post} />
        <p className="max-h-[100px] text-ellipsis overflow-hidden">
          {post.description}
        </p>
      </div>
    </Link>
  );
};
