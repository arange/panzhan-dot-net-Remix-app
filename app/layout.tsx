import { Link } from "remix";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <article className="flex flex-col pt-32 pb-20 mx-auto max-w-prose">
      <h1 className="font-extrabold text-4xl mb-3">
        <Link to="/">Pan Zhan</Link>
      </h1>
      <nav className="self-end underline gap-2 flex">
        <Link to="posts">Posts</Link>
        <Link to="arts">Arts</Link>
      </nav>
      {children}
      <small className="mt-32 block">
        <time>2022</time>
        © Pan Zhan.
      </small>
    </article>
  );
}
