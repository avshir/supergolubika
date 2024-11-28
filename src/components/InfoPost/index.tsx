import { IPost } from "../../constans/posts";

interface InfoPostProps {
  post: IPost;
}

export const InfoPost = ({ post }: InfoPostProps) => {
  return (
    <>
      <data className="inline-block mr-2 text-xs py-1 px-3 rounded-xl bg-accent-green/50">
        {post.data}
      </data>
      <div className="inline-block space-x-2">
        {post.slug.length > 0 &&
          post.slug.map((item) => (
            <span
              key={item}
              className="text-xs py-1 px-3 rounded-xl bg-accent/50"
            >
              {item}
            </span>
          ))}
      </div>
    </>
  );
};
