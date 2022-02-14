import { Link } from "remix";

export default function Layout({
  children,
  name = "Pan Zhan",
}: {
  children: React.ReactNode;
  name?: string;
}) {
  return (
    <>
      <article className="flex flex-col pt-32 pb-20 mx-auto max-w-prose">
        <h1 className="font-extrabold text-4xl mb-3">
          <Link to="/">{name}</Link>
        </h1>
        <nav className="self-end underline gap-2 flex">
          <Link prefetch="intent" to="posts">
            Posts
          </Link>
        </nav>
        {children}
        <div className="flex justify-between mt-32">
          <small>
            <time>2022</time>© {name}.
          </small>
          <a
            target="_blank"
            href="https://github.com/arange/panzhan-dot-net-Remix-app"
          >
            Github
          </a>
        </div>
      </article>
    </>
  );
}
