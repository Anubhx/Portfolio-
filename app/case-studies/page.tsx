"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

const EASE_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

const caseStudies = [
  {
    id: "zomato",
    title: "Zomato Group Ordering",
    metadata: "UX/UI DESIGNER / FOOD DELIVERY",
    description:
      "Redesigning the coordination layer behind shared food experiences. Office teams don't struggle with ordering food. They struggle with organizing people.",
    image: "/Zomato.png",
    link: "/case-studies/zomato-group-ordering",
  },
  {
    id: "flowwise",
    title: "FlowWise",
    metadata: "PRODUCT DESIGNER / FINTECH",
    description:
      "A finance companion designed to guide before mistakes happen rather than after. Combining behavioral design, privacy-first architecture, and AI-powered nudges.",
    image: "/FlowWise.png",
    link: "/case-studies/flowwise",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <main
        style={{
          paddingTop: "120px",
          paddingBottom: "80px",
        }}
      >
        <div className="container">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE_EXPO }}
            style={{ marginBottom: "64px" }}
          >
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--muted)",
              }}
            >
              <Link href="/" style={{ textDecoration: "none", color: "inherit", transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "var(--heading)")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}>Home</Link>
              <span style={{ margin: "0 8px", color: "var(--border-2)" }}>/</span>
              <span style={{ color: "var(--heading)" }}>Case Studies</span>
            </span>
          </motion.div>

          {/* Hero Section */}
          <section style={{ marginBottom: "120px" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: EASE_EXPO }}
            >
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  display: "block",
                  marginBottom: "24px",
                }}
              >
                Featured Work
              </span>
              <h1
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(48px, 8vw, 110px)",
                  fontWeight: 300,
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                  color: "var(--heading)",
                  maxWidth: "900px",
                  marginBottom: "32px",
                }}
              >
                No bad experiences.<br />
                Only <em style={{ fontStyle: "italic", color: "var(--accent)" }}>intentional</em> ones.
              </h1>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "18px",
                  lineHeight: 1.7,
                  color: "var(--muted)",
                  maxWidth: "620px",
                  marginBottom: "40px",
                }}
              >
                Product experiences shaped through research, systems thinking, and implementation. From collaborative ordering experiences to AI-assisted finance products, these case studies document how I approach ambiguity and turn it into usable systems.
              </p>
              
              <Link
                href="#gallery"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontFamily: "var(--font-sans)",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "var(--heading)",
                  textDecoration: "none",
                  paddingBottom: "4px",
                  borderBottom: "1px solid rgba(255,255,255,0.2)",
                  transition: "border-color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderBottomColor = "var(--heading)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.2)")}
              >
                Explore the archive <span style={{ transition: "transform 0.3s ease" }} className="arrow">→</span>
              </Link>
            </motion.div>
          </section>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "80px",
            }}
          >
            <span
              className="scroll-indicator"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "var(--muted)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "12px",
              }}
            >
              Scroll to explore case studies
              <motion.span
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                ↓
              </motion.span>
            </span>
          </motion.div>

          {/* Gallery Section */}
          <section id="gallery" style={{ marginBottom: "160px" }}>
            {/* Header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                borderBottom: "1px solid rgba(255,255,255,0.1)",
                paddingBottom: "24px",
                marginBottom: "64px",
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "32px",
                  fontWeight: 300,
                  letterSpacing: "-0.01em",
                  color: "var(--heading)",
                  fontStyle: "italic",
                }}
              >
                All Case Studies
              </h2>
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                  color: "var(--muted-2)",
                  textTransform: "uppercase",
                }}
              >
                (02 Selected)
              </span>
            </div>

            {/* Grid */}
            <div className="gallery-grid">
              {caseStudies.map((study, i) => (
                <motion.article
                  key={study.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: i * 0.15, ease: EASE_EXPO }}
                  className="gallery-card"
                >
                  <Link href={study.link} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                    {/* Image Container */}
                    <div className="gallery-image-container">
                      <Image
                        src={study.image}
                        alt={study.title}
                        fill
                        className="gallery-image"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    
                    {/* Content */}
                    <div style={{ padding: "32px 0 0 0" }}>
                      <span
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "11px",
                          fontWeight: 600,
                          letterSpacing: "0.18em",
                          color: "var(--muted)",
                          textTransform: "uppercase",
                          display: "block",
                          marginBottom: "16px",
                        }}
                      >
                        {study.metadata}
                      </span>
                      <h3
                        className="gallery-title"
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "clamp(32px, 4vw, 42px)",
                          fontWeight: 400,
                          letterSpacing: "-0.02em",
                          color: "var(--heading)",
                          marginBottom: "16px",
                          transition: "color 0.3s ease",
                        }}
                      >
                        {study.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "17px",
                          lineHeight: 1.7,
                          color: "var(--muted)",
                          maxWidth: "85%",
                        }}
                      >
                        {study.description}
                      </p>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </section>

          {/* Philosophy Section */}
          <section
            style={{
              paddingTop: "120px",
              paddingBottom: "120px",
              borderTop: "1px solid rgba(255,255,255,0.06)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              marginBottom: "120px",
            }}
          >
            <div className="philosophy-grid">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: EASE_EXPO }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(36px, 5vw, 54px)",
                    fontWeight: 300,
                    fontStyle: "italic",
                    lineHeight: 1.1,
                    letterSpacing: "-0.02em",
                    color: "var(--heading)",
                    maxWidth: "540px",
                  }}
                >
                  "Design isn't just how something looks; it's how confidently someone moves through uncertainty."
                </h3>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2, ease: EASE_EXPO }}
                style={{ paddingTop: "12px" }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "18px",
                    lineHeight: 1.8,
                    color: "var(--muted)",
                    maxWidth: "500px",
                  }}
                >
                  I care about creating products that feel clear, dependable, and humane.
                  <br /><br />
                  My process balances research, systems thinking, and implementation—ensuring every decision serves both users and the business. From the first wireframe to the final polished component, I build systems that scale gracefully.
                </p>
              </motion.div>
            </div>
          </section>
        </div>
      </main>
      
      {/* Footer is handled globally or we can use our custom component */}
      <Footer />

      <style jsx global>{`
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 64px 48px;
        }

        .gallery-image-container {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          border-radius: 28px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.04);
        }

        .gallery-image {
          filter: grayscale(100%) brightness(0.8);
          transition: filter 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .gallery-card {
          cursor: pointer;
        }

        .gallery-card:hover .gallery-image {
          filter: grayscale(0%) brightness(1);
          transform: scale(1.02);
        }

        .gallery-card:hover .gallery-title {
          text-shadow: 0 0 16px rgba(255,255,255,0.15);
        }

        .gallery-card:hover .gallery-title::after {
          transform: scaleX(1);
          opacity: 1;
        }

        .gallery-title {
          position: relative;
          display: inline-block;
        }

        .gallery-title::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 1px;
          background: rgba(255,255,255,0.4);
          transform: scaleX(0);
          transform-origin: left;
          opacity: 0;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease;
        }

        a:hover .arrow {
          transform: translateX(4px);
        }

        .philosophy-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
        }

        @media (max-width: 1024px) {
          .gallery-grid {
            gap: 48px 32px;
          }
          .philosophy-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: 1fr;
            gap: 80px;
          }
          .gallery-image-container {
            border-radius: 20px;
          }
        }
      `}</style>
    </>
  );
}
