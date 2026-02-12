import Link from "next/link";
import SafeImage from "@/components/ui/SafeImage";
import FadeUp from "@/components/animation/FadeUp";
import TableOfContents from "@/components/shared/TableOfContents";
import MarkdownRenderer from "@/components/shared/MarkdownRenderer";

export default function ArticleLayout({
  meta,
  toc = [],
  breadcrumb = [],
  children,
}) {
  const { title, description, date, readingTime, image } = meta;

  return (
    <main className="article-layout">
      {/* Spacer for fixed navbar */}
      <div className="sm:h-[82px] h-[50px]"></div>

      <article>
        {/* Header Section */}
        <header className="py-10 px-4 max-w-7xl mx-auto">
          {/* Breadcrumb */}
          {breadcrumb.length > 0 && (
            <nav
              className="breadcrumb mb-5 text-sm flex items-center gap-1"
              aria-label="Breadcrumb"
            >
              {breadcrumb.map((item, index) => (
                <div key={index} className="flex items-center gap-1">
                  {item.href ? (
                    <Link href={item.href} className="hover:underline">
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-gray-700 font-medium">
                      {item.label}
                    </span>
                  )}
                  {index < breadcrumb.length - 1 && <span>/</span>}
                </div>
              ))}
            </nav>
          )}

          <FadeUp>
            <h1 className="mb-3 text-h3">{title}</h1>
          </FadeUp>

          {description && (
            <FadeUp delay={0.05}>
              <p className="description mb-3">{description}</p>
            </FadeUp>
          )}

          <FadeUp delay={0.1}>
            <div className="meta flex items-center gap-4 text-sm text-gray-500">
              {date && <span className="date">{date}</span>}
              {readingTime && (
                <span className="reading-time">{readingTime}</span>
              )}
            </div>
          </FadeUp>
        </header>

        {/* Content Section */}
        <div className="content">
          <div className="wrapper mx-auto max-w-7xl px-4 py-8">
            {/* Main Image */}
            {image && (
              <div className="main-image rounded-xl overflow-hidden">
                <FadeUp>
                  <SafeImage
                    src={image}
                    width={1280}
                    height={640}
                    alt={title}
                    preload={true}
                    className="w-full h-auto object-cover"
                  />
                </FadeUp>
              </div>
            )}

            <div className="flex flex-col lg:flex-row gap-8 justify-center items-start">
              {/* Sidebar / TOC */}
              {toc.length > 0 && (
                <aside className="hidden lg:block w-64 shrink-0 sticky top-24">
                  <TableOfContents headings={toc} />
                </aside>
              )}

              {/* Markdown Content */}
              <FadeUp className="flex-1 w-full max-w-3xl">
                <div className="detail font-serif">
                  {/* If children is string, assume it's markdown and render it */}
                  {typeof children === "string" ? (
                    <MarkdownRenderer content={children} />
                  ) : (
                    children
                  )}
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
