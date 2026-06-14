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

export default function ZomatoCaseStudy() {
  return (
    <article className="editorial-case-study">
      <div className="editorial-container">

        {/* HERO */}
        <CaseStudyHero
          title={<><i>Zomato</i> Group Ordering.</>}
          subtitle="A frictionless approach to collective food delivery, eliminating the chaos of group coordination and manual bill splitting."
        >
          <MetricsBar
            metrics={[
              { label: "Role", value: "Product Designer" },
              { label: "Timeline", value: "4 Weeks" },
              { label: "Platform", value: "iOS & Android" },
              { 
                label: "Links", 
                value: (
                  <div style={{ display: "flex", gap: "12px" }}>
                    <a href="https://www.behance.net/gallery/250727725/Zomato-Group-Order" target="_blank" rel="noreferrer" style={{ color: "var(--heading)", textDecoration: "underline", textUnderlineOffset: "4px" }}>Behance ↗</a>
                  </div>
                )
              },
            ]}
          />
        </CaseStudyHero>

        {/* 01 CONTEXT */}
        <EditorialSection number="01" title="Context">
          <InsightQuote>
            If you&apos;ve ever ordered food with friends, you already know this problem.
          </InsightQuote>
          <Prose>
            Someone opens their phone. It gets passed around. Everyone forgets their modifications.
            The bill arrives, and someone has to do math while the food gets cold.
            The existing Zomato flow wasn&apos;t just inefficient — it was killing the joy of a shared meal.
          </Prose>

          <ImageShowcase
            src="/images/zomato/Affinity_zomato.png"
            alt="Affinity Mapping"
            priority
          />

          <TwoByTwoCards
            cards={[
              "Phone passing causes errors and delays",
              "No visibility into what others are ordering",
              "Dietary constraints are forgotten",
              "Manual bill splitting creates social awkwardness",
            ]}
          />
        </EditorialSection>

        {/* 02 STRATEGY */}
        <EditorialSection number="02" title="Strategy">
          <InsightQuote>
            Competitors solved the cart. Nobody solved the trust.
          </InsightQuote>
          <Prose>
            I audited Swiggy, UberEats, and DoorDash. Competitors either forced cart-sharing links
            that required app installs, or they lacked integrated payment splitting entirely.
          </Prose>

          <ImageShowcase
            src="/images/zomato/CompiteterAnalysisZomato.png"
            alt="Competitive Analysis"
          />

          <InsightCallout>
            Trust collapses at the payment stage. If splitting the bill is hard,
            users abandon the group order entirely and place individual orders.
          </InsightCallout>
        </EditorialSection>

        {/* 03 DESIGN */}
        <EditorialSection number="03" title="Design">
          <InsightQuote>
            Decoupling the cart from the device was the unlock.
          </InsightQuote>
          <Prose>
            I restructured the cart flow to introduce a Host and Guest model.
            Hosts control checkout. Guests add items from their own devices via a deep link.
            The cart syncs in real-time across all sessions.
          </Prose>

          <ImageShowcase
            src="/images/zomato/IA_ZOmato.png"
            alt="Information Architecture"
          />

          <TwoByTwoCards
            cards={[
              "Hosts control checkout and delivery.",
              "Guests join via deep link — no install needed.",
              "Real-time cart sync across all devices.",
              "Automatic proportional bill splitting.",
            ]}
          />

          <ImageShowcase
            src="/images/zomato/Zomato Final Screen8.png"
            alt="Final Solution Mocks"
          />
        </EditorialSection>

        {/* 04 OUTCOMES */}
        <EditorialSection number="04" title="Outcomes">
          <MetricGrid
            metrics={[
              { value: "9", unit: "M", label: "Estimated Users" },
              { value: "28", unit: "%", label: "AOV Increase" },
              { value: "96", unit: "%", label: "Adoption Rate" },
            ]}
          />
        </EditorialSection>

        {/* 05 LESSONS */}
        <EditorialSection number="05" title="Lessons">
          <LessonsGrid
            lessons={[
              {
                title: "Software is social",
                desc: "The hardest part wasn't the UI. It was mapping human behavior — trust, awkwardness, generosity — into software states.",
              },
              {
                title: "Deep links win",
                desc: "Forcing app installs kills group features. Guest web-views via deep links drove our 96% adoption rate.",
              },
              {
                title: "Edge cases are the core",
                desc: "What happens if a guest leaves? Designing graceful degradation for state failures was the real engineering challenge.",
              },
              {
                title: "Visibility builds trust",
                desc: "Live cursors and real-time updates in the cart weren't flair — they proved to the group the system was working.",
              },
            ]}
          />
        </EditorialSection>

      </div>

      <NextProject href="/case-studies/flowwise" title="FlowWise" />
    </article>
  );
}
