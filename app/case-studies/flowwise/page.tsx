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
import FlowPreview, { FlowGroup } from "@/components/FlowPreview";

const flowwiseDefaultScreen = {
  screen: "/Flow_wise_Images/Home.png",
  label: "FLOWWISE DASHBOARD · HOVER ANY STEP",
  altText: "FlowWise main dashboard screen",
};

const flowwiseLeftGroups: FlowGroup[] = [
  {
    title: "ONBOARDING",
    subtitle: "setting the philosophy",
    steps: [
      {
        id: "01",
        label: "Welcome & privacy-first intro",
        screen: "/Flow_wise_Images/Ounboarding%20flow%201.png",
        altText: "FlowWise onboarding step 1: Welcome screen",
      },
      {
        id: "02",
        label: "Financial persona discovery",
        screen: "/Flow_wise_Images/Ounboarding%20flow%202.png",
        altText: "FlowWise onboarding step 2: Financial persona",
      },
      {
        id: "03",
        label: "Flexible monthly budget setup",
        screen: "/Flow_wise_Images/Ounboarding%20flow%203.png",
        altText: "FlowWise onboarding step 3: Setting budget",
      },
      {
        id: "04",
        label: "Offline SQLite storage pledge",
        screen: "/Flow_wise_Images/Ounboarding%20flow%204.png",
        altText: "FlowWise onboarding step 4: Privacy & offline pledge",
      },
      {
        id: "05",
        label: "Empathetic notification preferences",
        screen: "/Flow_wise_Images/Ounboarding%20flow%205.png",
        altText: "FlowWise onboarding step 5: AI nudge setup",
      },
      {
        id: "06",
        label: "Setup complete confirmation",
        screen: "/Flow_wise_Images/Ounboarding%20flow%206.png",
        altText: "FlowWise onboarding step 6: Setup complete",
      },
    ],
  },
  {
    title: "EXPENSE LOGGING",
    subtitle: "5-second friction-free entry",
    steps: [
      {
        id: "07",
        label: "One-tap amount & merchant entry",
        screen: "/Flow_wise_Images/Add%20expense.png",
        altText: "FlowWise expense logging: Amount entry",
      },
      {
        id: "08",
        label: "Category & context tagging",
        screen: "/Flow_wise_Images/Add%20expense%202.png",
        altText: "FlowWise expense logging: Category selection",
      },
      {
        id: "09",
        label: "Proactive budget impact preview",
        screen: "/Flow_wise_Images/Add%20expense%203.png",
        altText: "FlowWise expense logging: Budget impact preview",
      },
    ],
  },
];

const flowwiseRightGroups: FlowGroup[] = [
  {
    title: "INTELLIGENCE",
    subtitle: "nudges without judgment",
    steps: [
      {
        id: "10",
        label: "Home dashboard with budget health",
        screen: "/Flow_wise_Images/Home.png",
        altText: "FlowWise dashboard overview",
      },
      {
        id: "11",
        label: "AI-driven behavioral insights",
        screen: "/Flow_wise_Images/Insights.png",
        altText: "FlowWise behavioral insights screen",
      },
      {
        id: "12",
        label: "Category spending breakdown",
        screen: "/Flow_wise_Images/Spending.png",
        altText: "FlowWise category spending breakdown",
      },
      {
        id: "13",
        label: "Full transaction history & search",
        screen: "/Flow_wise_Images/All%20transactions.png",
        altText: "FlowWise transaction history",
      },
      {
        id: "14",
        label: "Goal progress & milestone tracking",
        screen: "/Flow_wise_Images/Goal.png",
        altText: "FlowWise financial goals screen",
      },
      {
        id: "15",
        label: "Profile, local backup & security",
        screen: "/Flow_wise_Images/Profile.png",
        altText: "FlowWise profile & security settings",
      },
    ],
  },
];

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
              { 
                label: "Links", 
                value: (
                  <div style={{ display: "flex", gap: "12px" }}>
                    <a href="https://www.behance.net/gallery/247562999/Flow-Wise-Case-Study" target="_blank" rel="noreferrer" style={{ color: "var(--heading)", textDecoration: "underline", textUnderlineOffset: "4px" }}>Behance ↗</a>
                    <a href="https://github.com/Anubhx/flow-wise" target="_blank" rel="noreferrer" style={{ color: "var(--heading)", textDecoration: "underline", textUnderlineOffset: "4px" }}>GitHub ↗</a>
                  </div>
                )
              },
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

      </div>

      {/* FULL-WIDTH CENTERED INTERACTIVE FLOW PREVIEW SECTION */}
      <section
        style={{ maxWidth: '1152px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '16px', paddingRight: '16px' }}
        className="my-16 w-full"
      >
        <FlowPreview
          className="w-full"
          accentColor="#6366f1"
          heading={
            <>
              Behavioral finance flows: <br className="hidden sm:inline" />
              frictionless entry, <em className="font-display italic text-[#6366f1] font-normal">zero guilt</em>.
            </>
          }
          hintText="HOVER ANY STEP TO PREVIEW THE INTERACTIVE SCREEN FLOW"
          defaultScreen={flowwiseDefaultScreen}
          leftGroups={flowwiseLeftGroups}
          rightGroups={flowwiseRightGroups}
          footerNote="100% offline-first. All data stays encrypted in local SQLite storage."
        />
      </section>

      <div className="editorial-container">

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
