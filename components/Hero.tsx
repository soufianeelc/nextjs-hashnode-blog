export default function Hero() {
  return (
    <main className="mt-16">
      <div>
        <h1 className="w-fit bg-gradient-to-tr from-orange-600 to-yellow-400 bg-clip-text py-2 text-5xl font-bold text-transparent md:text-6xl">
          Soufiane E.
        </h1>
        <p className="mt-2 text-lg font-medium text-neutral-700">
          Front-end Developer &mdash; Blogger{" "}
        </p>
      </div>

      <p className="mt-4 max-w-2xl text-sm text-neutral-700 md:text-base">
        Hello! This is a starter template to build your own blog with{" "}
        <a
          href="http://api.hashnode.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline hover:text-blue-600"
        >
          Hashnode API
        </a>
        . Created and maintained by{" "}
        <a
          href="http://twitter.com/soufianeeelc"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline hover:text-blue-600"
        >
          @soufianeelc
        </a>
        . Built using Next.js, Typescript and Tailwind CSS. Open sourced on{" "}
        <a
          href="https://github.com/Soufianeelc/nextjs-hashnode-blog"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline hover:text-blue-600"
        >
          Github
        </a>
        .
      </p>
    </main>
  );
}
