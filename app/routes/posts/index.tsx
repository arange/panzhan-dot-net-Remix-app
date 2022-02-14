import { Link, useLoaderData } from "remix";

// Import all your posts from the app/routes/posts directory. Since these are
// regular route modules, they will all be available for individual viewing
// at /posts/a, for example.
import * as postB from "./clean-git-branches.mdx";
import * as postC from "./github-online-editor.mdx";
import * as postD from "./my-first-post.mdx";
import * as postE from "./notes-on-nextjs-tutorial.mdx";
import * as postF from "./tailwind-is-awesome.mdx";
import * as postG from "./topic-of-interest.mdx";

type Mod = {
  attributes: {
    description?: string;
    title: string;
    date?: string;
  };
  filename: string;
};

type Post = {
  title: string;
  description?: string;
  date?: string;
  slug: string;
};

function postFromModule(mod: Mod) {
  return {
    slug: mod.filename.replace(/\.mdx?$/, ""),
    ...mod.attributes,
    date: new Date(mod.attributes.date || Date()).toLocaleDateString(
      undefined,
      {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
      }
    ),
  };
}

function sortPostsByDate(postA: Post, postB: Post) {
  if (!postA.date || !postB.date) return 0;
  const dateA = new Date(postA.date);
  const dateB = new Date(postB.date);
  return dateB.getTime() - dateA.getTime();
}

export async function loader() {
  // Return metadata about each of the posts for display on the index page.
  // Referencing the posts here instead of in the Index component down below
  // lets us avoid bundling the actual posts themselves in the bundle for the
  // index page.
  return [postB, postC, postD, postE, postF, postG]
    .map((post) => postFromModule(post))
    .sort(sortPostsByDate);
}

export default function Posts() {
  const posts = useLoaderData<Post[]>();

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.slug}>
          <Link to={post.slug} className="font-bold text-lg">
            {post.title}
          </Link>
          {post.description ? <p>{post.description}</p> : null}
          <time className="text-gray-400 text-sm">{post.date}</time>
        </li>
      ))}
    </ul>
  );
}
