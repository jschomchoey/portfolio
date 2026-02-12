import { getPostBySlug, getAllPostSlugs } from "@/lib/posts";
import { notFound } from "next/navigation";
import ArticleLayout from "@/components/layout/ArticleLayout";
import { extractHeadings } from "@/lib/markdown";

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

  const headings = extractHeadings(post.body);

  const breadcrumb = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: post.title },
  ];

  return (
    <ArticleLayout
      meta={post}
      toc={headings}
      breadcrumb={breadcrumb}
      currentId={post.id}
      contentType="posts"
    >
      {post.body}
    </ArticleLayout>
  );
}
