

/**
 * Extract H2 and H3 headings from markdown content
 * @param {string} markdown
 * @returns {Array<{text: string, id: string, level: number}>}
 */
export function extractHeadings(markdown) {
  const lines = markdown.split("\n");
  const headings = [];
  let inCodeBlock = false;
  let count = 0;

  for (const line of lines) {
    // Check for code block
    if (/^\s*```/.test(line)) {
      inCodeBlock = !inCodeBlock;
      continue;
    }

    if (inCodeBlock) continue;

    // Match H2
    const h2 = line.match(/^##\s+(.+)/);
    // Match H3
    const h3 = line.match(/^###\s+(.+)/);

    if (h2) {
      count++;
      headings.push({
        level: 2,
        text: h2[1],
        id: `heading-${count}`,
      });
    } else if (h3) {
      count++;
      headings.push({
        level: 3,
        text: h3[1],
        id: `heading-${count}`,
      });
    }
  }

  return headings;
}
