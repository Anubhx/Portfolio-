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

export default function FlowwiseCaseStudy() {
  return (
    <article className="editorial-case-study">
      <div className="editorial-container">

        {/* HERO */}
        <CaseStudyHero
          title={<><i>FlowWise</i>, A finance app that nudges instead of judges.</>}
          subtitle="Designing a privacy-first finance companion that helps users make better financial decisions through behavioral design and AI-powered nudges."
        >
          <MetricsBar
            metrics={[
              { label: "Role", value: "Product Designer" },
              { label: "Timeline", value: "6 Weeks" },
              { label: "Stack", value: "React Native, SQLite" },
            ]}
          />
        </CaseStudyHero>

        {/* 01 CONTEXT */}
        <EditorialSection number="01" title="Context">
          <InsightQuote>
            How might we help users before the mistake happens?
          </InsightQuote>
          <Prose>
            Young professionals don&apos;t struggle because they lack discipline. They struggle because money
            creates anxiety. Existing apps amplify that anxiety through red charts, guilt-driven messaging,
            and invasive data practices.
          </Prose>
          <Prose>
            FlowWise was designed to become a financial companion rather than a financial auditor.
          </Prose>

          <ImageShowcase
            src="/images/flowwise/affinity mapflowise.png"
            alt="Affinity Map"
            priority
          />

          <TwoByTwoCards
            cards={[
              "Judge after mistakes happen",
              "Depend heavily on cloud infrastructure",
              "Ignore emotional behaviour",
              "Ask users to trade privacy for convenience",
            ]}
          />
        </EditorialSection>

        {/* 02 STRATEGY */}
        <EditorialSection number="02" title="Strategy">
          <InsightQuote>
            The opportunity wasn&apos;t better analytics. It was a better relationship with money.
          </InsightQuote>
          <Prose>
            Behavioural patterns revealed that users avoided finance apps because opening them triggered stress.
            Existing products focused on reporting. None focused on guidance.
          </Prose>

          <ImageShowcase
            src="/images/flowwise/CompiteterAnalysisFlowwise.png"
            alt="Competitor Analysis"
          />

          <InsightCallout>
            FlowWise positions itself as proactive rather than retrospective — nudging before mistakes happen, not punishing after.
          </InsightCallout>
        </EditorialSection>

        {/* 03 DESIGN */}
        <EditorialSection number="03" title="Design">
          <InsightQuote>
            Five seconds to log an expense. Zero server costs. Total privacy.
          </InsightQuote>
          <Prose>
            The experience was designed around three rituals: Capture expenses quickly.
            Understand context without judgment. Build healthier financial habits over time.
          </Prose>

          <ImageShowcase
            src="/images/flowwise/IA_FLOWWISE.png"
            alt="Information Architecture"
          />

          <TwoByTwoCards
            cards={[
              "Guidance over guilt.",
              "Privacy by default.",
              "Motion builds trust.",
              "Ritual over feature.",
            ]}
          />

          <ImageShowcase
            src="/images/flowwise/FlowWise Final Screens.png"
            alt="FlowWise Final Screens"
          />
        </EditorialSection>

        {/* 04 OUTCOMES */}
        <EditorialSection number="04" title="Outcomes">
          <MetricGrid
            metrics={[
              { value: "<1", unit: "s", label: "Load Time" },
              { value: "0", unit: "%", label: "API Errors" },
              { value: "₹0", label: "Cloud Cost" },
            ]}
          />
        </EditorialSection>

        {/* 05 LESSONS */}
        <EditorialSection number="05" title="Lessons">
          <LessonsGrid
            lessons={[
              {
                title: "Philosophy matters",
                desc: "The most important design decisions in FlowWise were philosophical, not visual. What does trust look like?",
              },
              {
                title: "Trust is behavior",
                desc: "Trust isn't created through security badges. It's created through consistency, clarity, and moments of reassurance.",
              },
              {
                title: "Speed is retention",
                desc: "If logging an expense takes longer than 5 seconds, the habit fails. Every millisecond was a retention decision.",
              },
              {
                title: "Guilt doesn't work",
                desc: "Red numbers and aggressive alerts lead to app abandonment, not financial discipline. Tone is a product decision.",
              },
            ]}
          />
        </EditorialSection>

      </div>

      <NextProject href="/case-studies/zomato-group-ordering" title="Zomato Group Ordering" />
    </article>
  );
}
