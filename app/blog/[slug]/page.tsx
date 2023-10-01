import { getPosts } from "@/utils/getPosts";
import { IPostProps } from "@/components/Post";
import { MDXRemote } from "next-mdx-remote/rsc";
import { convertDate } from "@/utils/convertDate";
import rehypeHighlight from "rehype-highlight";
import "/styles/highlight-js/atom-one-dark.css";
import Image from "next/image";

export default async function Article({
  params,
}: {
  params: { slug: string };
}) {
  const post: IPostProps = await getPosts().then((data) => {
    return data.find((post: IPostProps) => post.slug == params.slug);
  });

  const options = {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [rehypeHighlight],
    },
  };

  return (
    <main className="container mx-auto mt-8 flex max-w-4xl flex-col">
      <a href="/" className="flex w-fit items-center space-x-2 text-sm">
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
        >
          <path
            d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
        <span>Back home</span>
      </a>

      <div className="mt-16 flex flex-col space-y-8">
        <h1 className="text-3xl font-bold "> {post.title}</h1>

        {/* Cover Image and publishing date */}
        <div className="flex flex-col space-y-2">
          <Image
            src={post.coverImage}
            alt={post.title}
            width={1600}
            height={840}
          />
          <p className="text-sm font-normal text-neutral-600">
            Published: {convertDate(post.dateAdded)}
          </p>
        </div>
      </div>

      <article className="prose prose-stone mt-8 mt-[80px] max-w-none lg:prose-xl prose-p:text-sm prose-code:bg-orange-100 prose-code:px-1 prose-pre:bg-transparent prose-pre:px-4 md:prose-p:text-base">
        <MDXRemote source={post?.contentMarkdown} options={options} />
      </article>
    </main>
  );
}

// uncomment this function if you want to enable pre-rendering

// export async function generateStaticParams() {
//   const posts: IPostProps[] = await getPosts();

//   return posts.map((post: IPostProps) => ({
//     slug: post.slug,
//   }));
// }

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post: IPostProps = await getPosts().then((data) => {
    return data.find((post: IPostProps) => post.slug == params.slug);
  });
  return {
    title: `Blog | ${post.title}`,
    description: post.brief,
  };
}
