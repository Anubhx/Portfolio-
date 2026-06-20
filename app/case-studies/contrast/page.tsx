"use client";

import React from "react";
import {
  CaseStudyHero,
  MetricsBar,
  EditorialSection,
  InsightQuote,
  Prose,
  TwoByTwoCards,
  InsightCallout,
  ImageShowcase,
  MetricGrid,
  LessonsGrid,
  NextProject,
} from "@/components/case-studies/EditorialComponents";

export default function ContrastCaseStudy() {
  return (
    <article className="editorial-case-study">
      <div className="editorial-container">

        {/* HERO */}
        <CaseStudyHero
          title={<><i>Contrast</i>, A design audit tool built for designers, not developers.</>}
          subtitle="A free, public web tool that audits any live URL for design quality and accessibility compliance — returning a scored, shareable report in under 15 seconds."
        >
          <MetricsBar
            metrics={[
              { label: "Role", value: "Designer + Engineer" },
              { label: "Type", value: "Engineering Project" },
              { label: "Timeline", value: "2 Weeks (MVP)" },
              { label: "Stack", value: "Next.js · Playwright · axe-core · Gemini API · Vercel KV" },
              { 
                label: "Links", 
                value: (
                  <div style={{ display: "flex", gap: "12px" }}>
                    <a href="https://getcontrast.vercel.app" target="_blank" rel="noreferrer" style={{ color: "var(--heading)", textDecoration: "underline", textUnderlineOffset: "4px" }}>Live Site ↗</a>
                    <a href="https://github.com/Anubhx/Contrast" target="_blank" rel="noreferrer" style={{ color: "var(--heading)", textDecoration: "underline", textUnderlineOffset: "4px" }}>GitHub ↗</a>
                  </div>
                )
              },
            ]}
          />
        </CaseStudyHero>

        {/* HERO IMAGE */}
        <ImageShowcase
          src="/images/contrast/hero.png"
          alt="Contrast — Design Audit Tool"
          priority
          breakout
        />

        {/* 01 THE PROBLEM */}
        <EditorialSection number="01" title="The Problem">
          <InsightQuote>
            Any designer should be able to paste a URL and know — in 10 seconds — whether their product is accessible.
          </InsightQuote>
          <Prose>
            Manual WCAG reviews are slow, require expertise, and are rarely done pre-launch. Enterprise tools like Siteimprove and Deque are priced out of reach for most teams. Free tools like axe and Lighthouse output raw JSON or developer dashboards — unusable by most designers.
          </Prose>
          <Prose>
            AI-generated UIs are everywhere in 2025. Most of them fail basic accessibility checks. There is a real, growing need for a tool that catches this fast — and presents findings in a way designers can actually act on.
          </Prose>

          <TwoByTwoCards
            cards={[
              "Paid tools cost $500+/month",
              "Free tools output raw JSON, not designer-readable reports",
              "AI-generated UIs routinely fail basic WCAG checks",
              "No one runs accessibility checks pre-launch",
            ]}
          />
        </EditorialSection>

        {/* 02 WHAT IT DOES */}
        <EditorialSection number="02" title="What It Does">
          <InsightQuote>
            Paste a URL. Get a score. Know exactly what to fix.
          </InsightQuote>
          <Prose>
            Contrast audits any publicly accessible URL across four dimensions: color contrast ratios (WCAG AA), alt text coverage, typography consistency, and spacing grid alignment. The entire audit completes in under 15 seconds, powered by a Playwright headless browser injecting axe-core directly into the page DOM.
          </Prose>
          <Prose>
            The output is a scored, shareable report — not a wall of error codes. Each result gets a unique URL that can be shared on LinkedIn or downloaded as a PDF. The tool also generates a social card (OG image) so audit scores can be embedded directly in posts.
          </Prose>

          <InsightCallout title="Scoring Logic">
            Overall = (Contrast × 0.4) + (Alt Text × 0.3) + (Typography × 0.15) + (Spacing × 0.15). Contrast is weighted highest — it has the greatest direct impact on users with low vision or color blindness.
          </InsightCallout>
        </EditorialSection>

        {/* 03 HOW IT WAS BUILT */}
        <EditorialSection number="03" title="How It Was Built">
          <InsightQuote>
            A full backend pipeline — from headless browser to scored, stored, shareable result.
          </InsightQuote>
          <Prose>
            The audit pipeline runs as a Next.js API route. When a URL is submitted, the backend calls Browserless.io (a hosted Playwright service) which visits the page in a real Chromium instance. A custom DOM evaluation script extracts text color pairs, image alt attributes, font families, and spacing values. axe-core is injected into the page for WCAG violation detection.
          </Prose>
          <Prose>
            Four custom detector modules process the raw DOM data: typographyDrift.ts, spacingDrift.ts, colorDrift.ts, and buttonDrift.ts. A scoring engine applies weighted averages to produce the overall score. Results are stored in Vercel KV (Redis) with a 30-day TTL, enabling persistent shareable URLs. A Google Gemini 1.5 Flash integration generates plain-English fix suggestions for each finding.
          </Prose>

          <TwoByTwoCards
            cards={[
              "Playwright via Browserless.io — real browser, real DOM",
              "axe-core injected for WCAG AA violation detection",
              "Gemini 1.5 Flash for plain-English fix suggestions",
              "Vercel KV (Redis) for persistent shareable result URLs",
            ]}
          />

          <ImageShowcase
            src="/images/contrast/audit.png"
            alt="Contrast Audit Results Page"
          />
        </EditorialSection>

        {/* 04 TECHNICAL ARCHITECTURE */}
        <EditorialSection number="04" title="Architecture">
          <InsightQuote>
            350MB of Playwright can&apos;t run in a 50MB serverless function. So it doesn&apos;t.
          </InsightQuote>
          <Prose>
            Vercel serverless functions have a 50MB bundle limit. Playwright + Chromium weighs ~350MB. The solution: offload the browser to Browserless.io&apos;s free tier (1,000 sessions/month). The Next.js API route stays thin — it orchestrates, stores, and scores. The browser work happens remotely.
          </Prose>

          <InsightCallout title="Stack">
            Next.js 14 (App Router) · TypeScript · Playwright via Browserless.io · axe-core · color.js for WCAG math · Google Gemini 1.5 Flash (free tier) · Vercel KV (Redis) · @vercel/og for OG image generation · Vercel for deployment
          </InsightCallout>

          <Prose>
            Rate limiting is applied at 10 audits per IP per hour (stored in Vercel KV to survive cold starts). URL results are cached for 24 hours to avoid burning Browserless sessions on repeated audits of the same URL. The tool itself is required to score 90+ on its own audit — enforced as a pre-launch checklist item.
          </Prose>
        </EditorialSection>

        {/* 05 WHAT I BUILT */}
        <EditorialSection number="05" title="What I Shipped">
          <MetricGrid
            metrics={[
              { value: "<15", unit: "s", label: "Audit time target" },
              { value: "4", label: "Audit dimensions" },
              { value: "10", label: "Rate limit per IP/hour" },
              { value: "30", unit: "d", label: "Result TTL in KV" },
            ]}
          />
          <Prose>
            V1 shipped in two weeks: URL input with validation, full Playwright audit pipeline, scored results page, shareable URLs, OG image generation, and PDF report via browser print. The Gemini integration generates human-readable fix suggestions for each finding — no accessibility jargon, just instructions.
          </Prose>

          <TwoByTwoCards
            cards={[
              "Scored results page at /audit/[id] — persistent, shareable",
              "OG image generation via @vercel/og for social sharing",
              "Gemini 1.5 Flash: plain-English fixes for every finding",
              "PDF report via print-optimised /audit/[id]/report route",
            ]}
          />
        </EditorialSection>

        {/* 06 LESSONS */}
        <EditorialSection number="06" title="What I Learned">
          <LessonsGrid
            lessons={[
              {
                title: "Infrastructure constraints shape product decisions",
                desc: "The 50MB Vercel function limit forced a smarter architecture. Offloading the browser to Browserless.io kept the API thin and the user experience fast.",
              },
              {
                title: "Design the output, not just the input",
                desc: "Most audit tools fail at presentation. Contrast's differentiator is that the results page is as carefully designed as the products it audits.",
              },
              {
                title: "Caching is a product decision",
                desc: "24-hour URL result caching prevents redundant browser sessions — but it also means repeated visits to the same URL feel instant. Performance and cost optimization overlapped.",
              },
              {
                title: "Dogfooding is non-negotiable",
                desc: "The tool must score 90+ on its own homepage before launch. If the accessibility audit tool fails accessibility checks, nothing else matters.",
              },
            ]}
          />
        </EditorialSection>

      </div>

      <NextProject href="/case-studies/flowwise" title="FlowWise" />
    </article>
  );
}
