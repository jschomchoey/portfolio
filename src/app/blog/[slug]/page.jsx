import { getPostBySlug, getAllPostSlugs } from "@/lib/posts";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

// Generate static params for all posts
export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs;
}

// Generate metadata for each post
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="blog-detail">
      <article>
        <header>
          <h1>{post.title}</h1>
          <p className="description">{post.description}</p>
          <div className="meta">
            <span className="date">{post.date}</span>
            <span className="reading-time">{post.readingTime}</span>
          </div>
        </header>

        <div className="content">
          <ReactMarkdown>{post.body}</ReactMarkdown>
        </div>
      </article>
    </main>
  );
}
