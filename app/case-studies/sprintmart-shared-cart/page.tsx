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
  MetricGrid,
  LessonsGrid,
  NextProject,
} from "@/components/case-studies/EditorialComponents";
import FlowPreview, { FlowGroup } from "@/components/FlowPreview";
import Link from "next/link";

const sprintmartDefaultScreen = {
  screen: "/SprintMart/SprintMart Shared Cart.dc.html",
  label: "SPRINTMART SHARED CART · LIVE INTERACTIVE DEMO",
  altText: "SprintMart Shared Cart main interactive dashboard",
};

const sprintmartLeftGroups: FlowGroup[] = [
  {
    title: "ORGANISER",
    subtitle: "control without chasing",
    steps: [
      {
        id: "01",
        label: "Creates the shared cart",
        screen: "/SprintMart/SprintMart Shared Cart.dc.html",
        altText: "Organiser creates the cart",
      },
      {
        id: "02",
        label: "Sets payment mode (Each Pays vs Admin Pays) & cap",
        screen: "/SprintMart/SprintMart Shared Cart.dc.html",
        altText: "Setting payment mode and budget cap",
      },
      {
        id: "03",
        label: "Shares 4-digit invite code or link",
        screen: "/SprintMart/SprintMart Shared Cart.dc.html",
        altText: "Sharing invite code",
      },
      {
        id: "06",
        label: "Reviews joint cart as items arrive",
        screen: "/SprintMart/SprintMart Shared Cart.dc.html",
        altText: "Reviewing joint cart items",
      },
      {
        id: "10",
        label: "Locks the cart & starts checkout review",
        screen: "/SprintMart/SprintMart Shared Cart.dc.html",
        altText: "Locking cart for checkout",
      },
      {
        id: "13",
        label: "Pays own share or covers fallback",
        screen: "/SprintMart/SprintMart Shared Cart.dc.html",
        altText: "Completing checkout settlement",
      },
    ],
  },
  {
    title: "CONTRIBUTOR",
    subtitle: "freedom without being watched",
    steps: [
      {
        id: "04",
        label: "Joins with 4-digit code (no signup wall)",
        screen: "/SprintMart/SprintMart Shared Cart.dc.html",
        altText: "Contributor joins shared cart",
      },
      {
        id: "05",
        label: "Sees live cart, budget progress & members",
        screen: "/SprintMart/SprintMart Shared Cart.dc.html",
        altText: "Viewing live dashboard",
      },
      {
        id: "07",
        label: "Adds items (classified Personal or Shared)",
        screen: "/SprintMart/SprintMart Shared Cart.dc.html",
        altText: "Adding items to shared cart",
      },
      {
        id: "12",
        label: "Pays individual share via UPI in 10-min window",
        screen: "/SprintMart/SprintMart Shared Cart.dc.html",
        altText: "Paying individual share via UPI",
      },
    ],
  },
];

const sprintmartRightGroups: FlowGroup[] = [
  {
    title: "SYSTEM GOVERNANCE",
    subtitle: "carries the friction",
    steps: [
      {
        id: "05a",
        label: "Syncs cart live; logs every addition in Activity",
        screen: "/SprintMart/SprintMart Shared Cart.dc.html",
        altText: "Real-time activity log",
      },
      {
        id: "08",
        label: "Catches duplicates: 2-button Hick's Law prompt",
        screen: "/SprintMart/SprintMart Shared Cart.dc.html",
        altText: "Duplicate item prompt",
      },
      {
        id: "09",
        label: "Updates per-member visual budget progress bars",
        screen: "/SprintMart/SprintMart Shared Cart.dc.html",
        altText: "Budget progress updates",
      },
      {
        id: "11",
        label: "Triggers 10-minute countdown payment window",
        screen: "/SprintMart/SprintMart Shared Cart.dc.html",
        altText: "10-minute payment countdown",
      },
      {
        id: "14",
        label: "Confirms order & streams live 10-min tracking map",
        screen: "/SprintMart/SprintMart Shared Cart.dc.html",
        altText: "Order confirmed and live tracking",
      },
    ],
  },
];

export default function SprintMartCaseStudy() {
  return (
    <article className="editorial-case-study">
      <div className="editorial-container">
        {/* HERO */}
        <CaseStudyHero
          title={
            <>
              <i>SprintMart</i> Shared Cart.
            </>
          }
          subtitle="Collaborative quick-commerce grocery ordering for Indian households. Real-time cart sync, per-person budget caps, Hick's Law duplicate protection, and integrated multi-payer UPI split settlement."
        >
          <MetricsBar
            metrics={[
              { label: "Role", value: "UX Designer (Research & Systems)" },
              { label: "Team & Context", value: "Team of 6 · IIT Madras Mini-Project" },
              { label: "Timeline", value: "June 2026 (1 Sprint)" },
              { label: "Deliverable", value: "37-Screen System · 5-Hue Design Tokens" },
            ]}
          />
        </CaseStudyHero>

        {/* 01 CONTEXT */}
        <EditorialSection number="01" title="Context">
          <InsightQuote>
            In urban Indian households, grocery shopping is a group activity forced into a single-shopper app model.
          </InsightQuote>
          <Prose>
            Every quick-commerce app (Blinkit, Zepto, Swiggy Instamart) treats a 4-person flat as one user. One &quot;default orderer&quot; spends their morning compiling requests from WhatsApp messages, places the order alone on their phone, pays ₹1,800 upfront on their card, and spends the next 4 days chasing flatmates for ₹450 reimbursements.
          </Prose>

          <InsightCallout title="Team Project Architecture">
            SprintMart was created by a 6-person design team across 4 specialized tracks: <strong>Household Ordering (Shared Cart)</strong>, <strong>Store Operations</strong>, <strong>Delivery Trust</strong>, and <strong>Base App Build</strong>. My focus centered on the Household Research Track, Design System Token Architecture, and the Core Shared Cart UX Flows.
          </InsightCallout>

          <TwoByTwoCards
            cards={[
              "The 'House Bank' Burden: One person pays 100% upfront and carries financial strain.",
              "Scatterbrained WhatsApp Requests: Items buried across chats lead to forgotten groceries.",
              "Weekly Duplicate Purchases: 2 in 5 households accidentally buy duplicate milk or bread.",
              "Reimbursement Awkwardness: Chasing friends for ₹150 creates ongoing social friction.",
            ]}
          />
        </EditorialSection>

        {/* 02 RESEARCH & INSIGHTS */}
        <EditorialSection number="02" title="Research">
          <InsightQuote>
            &ldquo;I don&apos;t mind ordering. I hate being the house bank.&rdquo;
          </InsightQuote>
          <Prose>
            Our team conducted 12 in-depth qualitative interviews, collected 60 survey responses from urban flatmates in Bengaluru and NCR, and analyzed 5 real group order WhatsApp chat logs line-by-line.
          </Prose>

          <MetricGrid
            metrics={[
              { value: "61", unit: "%", label: "Group orders paid entirely by 1 person" },
              { value: "80", unit: "%", label: "Default orderers compile list from memory" },
              { value: "2", unit: "in 5", label: "Households get weekly duplicate buys" },
              { value: "₹600", unit: "×3", label: "Average amount chased per household order" },
            ]}
          />

          <InsightCallout title="Key UX Insights">
            <p><strong>01. Group Decisions, Single Payer:</strong> Financial liability must be decentralized before checkout through a 10-minute multi-payer UPI split window.</p>
            <p style={{ marginTop: "8px" }}><strong>02. Zero-Signup Guest Access:</strong> Everyone must add their own items directly into one cart without forcing new account signups.</p>
            <p style={{ marginTop: "8px" }}><strong>03. Guard the Adding Moment:</strong> Duplicate items must be caught at the moment of addition using a 2-button Hick&apos;s Law prompt rather than cleaning up later.</p>
            <p style={{ marginTop: "8px" }}><strong>04. Social Ergonomics:</strong> Pre-agreed budget caps and quiet approvals prevent financial surveillance anxiety.</p>
          </InsightCallout>
        </EditorialSection>

        {/* 03 PERSONAS */}
        <EditorialSection number="03" title="Personas">
          <InsightQuote>
            Designing for two distinct household roles: The Organiser and The Contributor.
          </InsightQuote>
          <Prose>
            To balance financial control with individual autonomy, we modeled two core archetypes based on our research participants:
          </Prose>

          <LessonsGrid
            lessons={[
              {
                title: "Primary Persona: Ananya (The Organiser)",
                desc: "26, Senior Marketing Associate in HSR Layout. Default household orderer. Goal: Keep the house stocked without fronting money or chasing flatmates over WhatsApp. Needs: Pre-agreed budget caps & automated UPI split checkout.",
              },
              {
                title: "Secondary Persona: Rohan (The Contributor)",
                desc: "24, Software Engineer. Passive household member. Goal: Quickly add personal snacks & daily staples without downloading new apps or signing up. Needs: 30-second join link, clear Shared vs Personal tags & instant UPI payment.",
              },
            ]}
          />
        </EditorialSection>

        {/* 04 MULTI-USER FLOW */}
        <EditorialSection number="04" title="Flow Architecture">
          <InsightQuote>
            Two people, one system — synchronization without surveillance.
          </InsightQuote>
          <Prose>
            Hover or tap any step in the interactive swimlane flow below to explore how the Organiser, Contributor, and System interact in real-time.
          </Prose>

          <FlowPreview
            heading="SprintMart Shared Cart Flow"
            hintText="Hover any step to preview flow mechanics"
            defaultScreen={sprintmartDefaultScreen}
            leftGroups={sprintmartLeftGroups}
            rightGroups={sprintmartRightGroups}
            accentColor="#D4921A"
            footerNote="Designed strictly for native iOS 393×852px viewport. Built with 37 system states."
          />
        </EditorialSection>

        {/* 05 UX DECISIONS */}
        <EditorialSection number="05" title="UX Decisions">
          <InsightQuote>
            Four core product decisions that eliminated friction.
          </InsightQuote>

          <LessonsGrid
            lessons={[
              {
                title: "Decision 01 · Hick's Law 2-Button Duplicate Guard",
                desc: "When a user adds an item already in the shared cart, display an inline 2-button prompt: [Skip] or [Add anyway]. No dropdowns or deep menus. Decision time is minimized, preventing duplicate purchases in 1 tap.",
              },
              {
                title: "Decision 02 · Public Budget Caps & Quiet Approvals",
                desc: "The Organiser establishes a public per-person budget cap (e.g. ₹500). If a Contributor exceeds their cap, the extra item is flagged privately as 'Awaiting Approval' to the Organiser without public shaming.",
              },
              {
                title: "Decision 03 · 3-Tier Item Ownership",
                desc: "Cart items are categorized into Shared (split equally), Your Items (100% paid by you), and Others' Items (greyed out read-only controls). Provides visibility without surveillance.",
              },
              {
                title: "Decision 04 · 10-Minute Multi-Payer Split Window",
                desc: "After cart locking, a 10-minute payment countdown opens for each member to pay their share via UPI. If a flatmate misses the deadline, the Organiser's fallback payment covers it in neutral Slate gray.",
              },
            ]}
          />
        </EditorialSection>

        {/* 06 DESIGN SYSTEM */}
        <EditorialSection number="06" title="Design System">
          <InsightQuote>
            The 5-Hue Constraint — Visual discipline across 37 screens.
          </InsightQuote>
          <Prose>
            The SprintMart Shared Cart UI is built strictly on a 5-hue custom property system. No additional colors, radiuses, or spacing values are used outside this token set.
          </Prose>

          <TwoByTwoCards
            cards={[
              "Deep Plum (#1E1B30): Structure, navbars, body text, primary CTA fill.",
              "Slate (#6B7888): Neutral labels, borders, meta text, disabled states, covered by admin.",
              "Amber (#D4921A): Action, reversible actions, live indicators, on-track budget fill.",
              "Orange (#C05510) & Burgundy (#6E1822): Emphasis, soft warnings, over-cap urgency alerts.",
            ]}
          />

          <InsightCallout title="Design Tokens & Typography">
            <p><strong>Type Scale:</strong> Inter (UI text) + JetBrains Mono (Codes & timers). 4 core styles: Screen Title (22px / 600), Section Header (17px / 600), Body (14px / 400), Caption (12px / 400).</p>
            <p style={{ marginTop: "8px" }}><strong>Base-8 Grid:</strong> 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px. Radius: 4px (tags), 8px (buttons), 13px (cards), 24px (modals), full (pills).</p>
          </InsightCallout>
        </EditorialSection>

        {/* 07 ALL 37 SCREENS SYSTEM GALLERY */}
        <EditorialSection number="07" title="37-Screen System">
          <InsightQuote>
            The Complete 37-Screen iOS System Architecture.
          </InsightQuote>
          <Prose>
            Explore all 37 static high-fidelity screens across 7 flow sections, featuring photorealistic grocery product imagery (Amul Milk, Britannia Bread, Maggi, Nescafe Coffee, Surf Excel, Hair Oil), 5-hue design system tokens, and native 393×852px iOS frames.
          </Prose>

          {/* Embedded Screens Interactive Viewer */}
          <div
            style={{
              width: "100%",
              height: "750px",
              borderRadius: "16px",
              overflow: "hidden",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              background: "#1E1B30",
              boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
              marginTop: "24px",
              position: "relative",
            }}
          >
            <iframe
              src="/SprintMart/sprintmart-shared-cart-screens-2.html"
              title="SprintMart Shared Cart 37 Screens System"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                background: "#1E1B30",
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "12px",
              marginTop: "16px",
            }}
          >
            <span style={{ fontSize: "12px", color: "var(--muted)", fontFamily: "var(--font-sans)" }}>
              Scroll horizontally & vertically inside the board to inspect all 37 screens with high-res product imagery.
            </span>
            <a
              href="/SprintMart/sprintmart-shared-cart-screens-2.html"
              target="_blank"
              rel="noreferrer"
              style={{
                fontSize: "13px",
                fontFamily: "var(--font-sans)",
                color: "#D4921A",
                textDecoration: "underline",
                textUnderlineOffset: "4px",
                fontWeight: 600,
              }}
            >
              Open 37-Screen Board Fullscreen ↗
            </a>
          </div>
        </EditorialSection>

        {/* 08 TEAM & CONTRIBUTION */}
        <EditorialSection number="08" title="Team & Credit">
          <InsightQuote>
            Collaborative team project created as part of the IIT Madras UX Program.
          </InsightQuote>
          <Prose>
            SprintMart was designed collaboratively by a 6-person team. While the project reflects our collective strategy, my specific contributions centered on leading the onboarding & friction research track, architecting the CSS custom property design system tokens, and designing the core Shared Cart multi-user interaction flows.
          </Prose>

          <LessonsGrid
            lessons={[
              {
                title: "My Specific Contributions",
                desc: "Onboarding & quick-commerce friction benchmarking (Blinkit vs Zepto vs Instamart), Shared Cart UX flow architecture, Hick's Law duplicate prompt design, CSS custom property tokens implementation.",
              },
              {
                title: "Teammates' Contributions",
                desc: "Five teammates led the store operations dashboard, warehouse picking UI, delivery driver trust tracking, and base app catalog build.",
              },
            ]}
          />
        </EditorialSection>

        {/* NEXT PROJECT */}
        <NextProject
          href="/case-studies/zomato-group-ordering"
          title="Zomato Group Ordering"
        />
      </div>
    </article>
  );
}
