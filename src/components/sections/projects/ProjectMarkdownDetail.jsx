"use client";
import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import slugify from "slugify";

// Helper: convert children to plain text
function childrenToText(children) {
  if (typeof children === "string") return children;
  if (Array.isArray(children)) return children.map(childrenToText).join("");
  if (typeof children === "object" && children && "props" in children) {
    return childrenToText(children.props.children);
  }
  return "";
}

export default function ProjectMarkdownDetail({ body }) {
  const components = {
    h2: ({ node, ...props }) => {
      const text = childrenToText(props.children);
      const id = slugify(text, { lower: true, strict: true });
      return <h2 id={id} {...props} />;
    },
    h3: ({ node, ...props }) => {
      const text = childrenToText(props.children);
      const id = slugify(text, { lower: true, strict: true });
      return <h3 id={id} {...props} />;
    },
  };
  return (
    <ReactMarkdown rehypePlugins={[rehypeHighlight]} components={components}>
      {body}
    </ReactMarkdown>
  );
}
