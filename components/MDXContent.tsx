"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";

const components: Components = {
  h2: ({ children }) => (
    <h2
      style={{
        fontFamily: "var(--font-sans)",
        fontSize: "clamp(22px, 2.5vw, 28px)",
        fontWeight: 700,
        color: "var(--heading)",
        letterSpacing: "-0.02em",
        marginTop: "56px",
        marginBottom: "20px",
        paddingTop: "48px",
        borderTop: "1px solid var(--border)",
      }}
    >
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3
      style={{
        fontFamily: "var(--font-sans)",
        fontSize: "18px",
        fontWeight: 600,
        color: "var(--heading)",
        marginTop: "36px",
        marginBottom: "12px",
        letterSpacing: "-0.01em",
      }}
    >
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p
      style={{
        fontSize: "16px",
        lineHeight: 1.75,
        color: "var(--body)",
        marginBottom: "20px",
      }}
    >
      {children}
    </p>
  ),
  blockquote: ({ children }) => (
    <blockquote
      style={{
        borderLeft: "3px solid var(--accent)",
        paddingLeft: "24px",
        marginLeft: "0",
        marginTop: "32px",
        marginBottom: "32px",
        fontFamily: "var(--font-display)",
        fontSize: "clamp(18px, 2vw, 22px)",
        fontStyle: "italic",
        fontWeight: 300,
        color: "var(--heading)",
        lineHeight: 1.5,
      }}
    >
      {children}
    </blockquote>
  ),
  ul: ({ children }) => (
    <ul
      style={{
        paddingLeft: "20px",
        marginBottom: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol
      style={{
        paddingLeft: "20px",
        marginBottom: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li style={{ fontSize: "16px", lineHeight: 1.7, color: "var(--body)" }}>
      {children}
    </li>
  ),
  strong: ({ children }) => (
    <strong style={{ fontWeight: 700, color: "var(--heading)" }}>{children}</strong>
  ),
  em: ({ children }) => (
    <em style={{ fontStyle: "italic", color: "var(--muted-2)" }}>{children}</em>
  ),
  hr: () => (
    <hr
      style={{
        border: "none",
        borderTop: "1px solid var(--border)",
        margin: "48px 0",
      }}
    />
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: "var(--accent)",
        textDecoration: "underline",
        textUnderlineOffset: "3px",
      }}
    >
      {children}
    </a>
  ),
  code: ({ children }) => (
    <code
      style={{
        fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
        fontSize: "13px",
        background: "var(--surface-2)",
        border: "1px solid var(--border)",
        borderRadius: "4px",
        padding: "2px 6px",
        color: "var(--accent)",
      }}
    >
      {children}
    </code>
  ),
};

interface Props {
  content: string;
}

export default function MDXContent({ content }: Props) {
  return (
    <div className="prose-editorial">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
