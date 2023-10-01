import Post, { IPostProps } from "@/components/Post";
import { getPosts } from "@/utils/getPosts";

export default async function PostsGrid() {
  const posts = await getPosts();

  return (
    <section className="container mt-16">
      <h1 className="text-2xl font-semibold text-neutral-900 md:text-4xl">
        Latest Articles
      </h1>

      {posts ? (
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post: IPostProps) => (
            <Post key={post._id} {...post} />
          ))}
        </div>
      ) : (
        <div className="mt-12 flex flex-col items-center justify-center gap-4 py-20 text-red-600">
          <svg
            className="h-8 w-8"
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11.001 10h2v5h-2zM11 16h2v2h-2z"></path>
            <path d="M13.768 4.2C13.42 3.545 12.742 3.138 12 3.138s-1.42.407-1.768 1.063L2.894 18.064a1.986 1.986 0 0 0 .054 1.968A1.984 1.984 0 0 0 4.661 21h14.678c.708 0 1.349-.362 1.714-.968a1.989 1.989 0 0 0 .054-1.968L13.768 4.2zM4.661 19 12 5.137 19.344 19H4.661z"></path>
          </svg>
          <p className="text-xl font-semibold">
            Failed to fetch posts from API!
          </p>
        </div>
      )}
    </section>
  );
}
