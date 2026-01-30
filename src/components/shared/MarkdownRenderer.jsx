import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

export default function MarkdownRenderer({ content }) {
    let headingCount = 0;
    const components = {
        h2: ({ node, ...props }) => {
            headingCount++;
            const id = `heading-${headingCount}`;
            return <h2 id={id} {...props} />;
        },
        h3: ({ node, ...props }) => {
            headingCount++;
            const id = `heading-${headingCount}`;
            return <h3 id={id} {...props} />;
        },
    };

    return (
        <div className="prose prose-invert max-w-none">
            <ReactMarkdown rehypePlugins={[rehypeHighlight]} components={components}>
                {content}
            </ReactMarkdown>
        </div>
    );
}
