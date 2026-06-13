import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getCaseStudy } from "@/lib/mdx";
import MDXContent from "@/components/MDXContent";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return { title: "Not Found" };
  return {
    title: study.title,
    description: study.description,
    openGraph: {
      title: `${study.title} — Anubhav Raj`,
      description: study.description,
    },
  };
}

const coverImages: Record<string, string> = {
  "zomato-group-ordering": "/Zomato.png",
  flowwise: "/FlowWise.png",
};

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const coverImage = coverImages[slug];

  return (
    <div style={{ paddingTop: "120px" }}>
      {/* Header */}
      <section className="section" style={{ paddingTop: "40px" }}>
        <div className="container">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            style={{ marginBottom: "32px", display: "flex", gap: "8px", alignItems: "center" }}
          >
            <Link
              href="/#featured-work-heading"
              style={{
                fontSize: "13px",
                color: "var(--muted)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
            >
              Work
            </Link>
            <span style={{ color: "var(--border-2)", fontSize: "12px" }}>→</span>
            <span style={{ fontSize: "13px", color: "var(--muted-2)" }}>{study.title}</span>
          </nav>

          {/* Meta row */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              alignItems: "center",
              marginBottom: "40px",
            }}
          >
            {study.tags.map((tag) => (
              <span key={tag} className="tag tag-accent">
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(40px, 7vw, 88px)",
              fontWeight: 300,
              lineHeight: 1.0,
              letterSpacing: "-0.03em",
              color: "var(--heading)",
              maxWidth: "800px",
              marginBottom: "24px",
            }}
          >
            {study.title}
          </h1>

          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(18px, 2vw, 24px)",
              fontStyle: "italic",
              fontWeight: 300,
              color: "var(--muted-2)",
              maxWidth: "640px",
              marginBottom: "48px",
              lineHeight: 1.4,
            }}
          >
            {study.subtitle}
          </p>

          {/* Metadata cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: "1px",
              background: "var(--border)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius)",
              overflow: "hidden",
              marginBottom: "64px",
            }}
          >
            {[
              { label: "Year", value: study.year },
              { label: "Role", value: study.role },
              { label: "Duration", value: study.duration },
              { label: "Tools", value: study.tools },
            ].map(({ label, value }) => (
              <div
                key={label}
                style={{
                  padding: "20px 24px",
                  background: "var(--surface)",
                }}
              >
                <p
                  style={{
                    fontSize: "10px",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                    marginBottom: "6px",
                  }}
                >
                  {label}
                </p>
                <p style={{ fontSize: "14px", fontWeight: 500, color: "var(--heading)" }}>
                  {value}
                </p>
              </div>
            ))}
          </div>

          {/* Cover image */}
          {coverImage && (
            <div
              style={{
                width: "100%",
                height: "clamp(280px, 50vw, 560px)",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                position: "relative",
                marginBottom: "80px",
                border: "1px solid var(--border)",
              }}
            >
              <Image
                src={coverImage}
                alt={`${study.title} — project preview`}
                fill
                style={{ objectFit: "cover", objectPosition: "top center" }}
                sizes="(max-width: 1200px) 100vw, 1200px"
                priority
              />
            </div>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="section" style={{ paddingTop: "0" }}>
        <div className="container">
          <div style={{ maxWidth: "720px", margin: "0 auto" }}>
            <MDXContent content={study.content} />
          </div>
        </div>
      </section>

      {/* Footer Nav */}
      <section
        className="section"
        style={{
          borderTop: "1px solid var(--border)",
          paddingTop: "48px",
          paddingBottom: "48px",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <Link
              href="/"
              style={{
                fontSize: "14px",
                fontWeight: 500,
                color: "var(--muted-2)",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              ← Back to home
            </Link>
            <Link
              href="/contact"
              className="btn btn-primary"
              style={{ fontSize: "14px", padding: "10px 20px" }}
            >
              Work together →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
