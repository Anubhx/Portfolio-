"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export interface FlowStep {
  id: string;
  label: string;
  screen: string;
  altText: string;
  dashed?: boolean;
}

export interface FlowGroup {
  title: string;
  subtitle?: string;
  dashedIds?: string[];
  steps: FlowStep[];
}

export interface FlowPreviewProps {
  heading?: React.ReactNode;
  hintText?: string;
  defaultScreen?: {
    screen: string;
    label: string;
    altText: string;
  };
  leftGroups?: FlowGroup[];
  rightGroups?: FlowGroup[];
  footerNote?: string;
  breakout?: boolean;
  className?: string;
}

const DEFAULT_DEFAULT_SCREEN = {
  screen: "/Zomato_images/GroupOrder_Entry.png",
  label: "THE LIVE CART · HOVER ANY STEP",
  altText: "Zomato Group Order entry screen",
};

const DEFAULT_LEFT_GROUPS: FlowGroup[] = [
  {
    title: "ORGANISER",
    subtitle: "control without chasing",
    steps: [
      {
        id: "01",
        label: "Creates the cart",
        screen: "/Zomato_images/GroupOrder_Create_Step1.png",
        altText: "Screen showing step 01: Host creating shared cart",
      },
      {
        id: "02",
        label: "Picks the payment model: Admin Pays or Each Pays",
        screen: "/Zomato_images/GroupOrder_Create_Step2.png",
        altText: "Screen showing step 02: Selecting payment model",
      },
      {
        id: "03",
        label: "Shares the invite code",
        screen: "/Zomato_images/GroupOrder_Create_Step3.png",
        altText: "Screen showing step 03: Sharing invite code",
      },
      {
        id: "06",
        label: "Reviews the joint cart as items arrive",
        screen: "/Zomato_images/GroupOrder_Same_Resturant.png",
        altText: "Screen showing step 06: Reviewing joint cart in real time",
      },
      {
        id: "10",
        label: "Locks the cart & starts checkout",
        screen: "/Zomato_images/GroupOrder_ReviewLaunch.png",
        altText: "Screen showing step 10: Locking cart and starting checkout",
      },
      {
        id: "13",
        label: "Pays the total, or per-member splits go out",
        screen: "/Zomato_images/GroupOrder_Diff resturants Admin pay.png",
        altText: "Screen showing step 13: Payment total and splits distribution",
      },
    ],
  },
  {
    title: "CONTRIBUTOR",
    subtitle: "autonomy without surveillance",
    steps: [
      {
        id: "04",
        label: "Joins with the code, no sign-up",
        screen: "/Zomato_images/InviteLink_Landing.png",
        altText: "Screen showing step 04: Contributor joining with code",
      },
      {
        id: "05",
        label: "Sees the live cart, members and budget",
        screen: "/Zomato_images/GroupOrder_MemberJoin.png",
        altText: "Screen showing step 05: Contributor seeing live cart & budget",
      },
      {
        id: "07",
        label: "Adds items, marked common or personal",
        screen: "/Zomato_images/GroupOrder_Diff_EveryPays.png",
        altText: "Screen showing step 07: Contributor adding common or personal items",
      },
      {
        id: "12",
        label: "Pays their own share via UPI",
        screen: "/Zomato_images/MemberPaymentPending.png",
        altText: "Screen showing step 12: Contributor paying share via UPI",
      },
    ],
  },
];

const DEFAULT_RIGHT_GROUPS: FlowGroup[] = [
  {
    title: "SYSTEM",
    subtitle: "carries the friction",
    dashedIds: ["08"],
    steps: [
      {
        id: "05a",
        label: "Syncs the cart live; logs every change",
        screen: "/Zomato_images/Diff resturants every pay.png",
        altText: "Screen showing step 05a: System syncing cart live",
      },
      {
        id: "08",
        label: "Catches duplicates: skip, or add anyway",
        screen: "/Zomato_images/BudgetNudge_MemberView.png",
        altText: "Screen showing step 08: System catching duplicate items",
      },
      {
        id: "09",
        label: "Updates the household budget bar",
        screen: "/Zomato_images/AdminBudgetEdit.png",
        altText: "Screen showing step 09: System updating budget bar",
      },
      {
        id: "11",
        label: "Opens a 10-minute payment window",
        screen: "/Zomato_images/PartialConfirm.png",
        altText: "Screen showing step 11: System opening payment window",
      },
      {
        id: "13",
        label: "Confirms one order, tracked by everyone",
        screen: "/Zomato_images/GroupTracking_Hub_Group_Map.png",
        altText: "Screen showing step 13: System tracking group order",
      },
    ],
  },
];

function StepRow({
  step,
  isDashed,
  isActive,
  onEnter,
  onLeave,
}: {
  step: FlowStep;
  isDashed?: boolean;
  isActive: boolean;
  onEnter: (step: FlowStep) => void;
  onLeave: () => void;
}) {
  return (
    <button
      type="button"
      onMouseEnter={() => onEnter(step)}
      onMouseLeave={onLeave}
      onFocus={() => onEnter(step)}
      onBlur={onLeave}
      aria-current={isActive ? "step" : undefined}
      style={{
        display: 'grid',
        gridTemplateColumns: '32px 1fr',
        gap: '10px',
        alignItems: 'baseline',
        padding: '11px 12px',
        borderRadius: '6px',
        fontSize: '13px',
        lineHeight: '1.55',
        marginBottom: '0',
      }}
      className={[
        "group relative w-full text-left border transition-all duration-200 cursor-pointer min-w-0",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ef4444]",
        isDashed ? "border-dashed border-[#3A3A33]" : "border-solid",
        isActive
          ? "border-[#ef4444] bg-[#141413] text-[#F0EDE5] translate-x-1"
          : "border-[#2E2E29] bg-[#1A1A18] text-[#CFCCC2] hover:border-[#ef4444] hover:bg-[#141413] hover:text-[#F0EDE5]",
      ].join(" ")}
    >
      {/* Node Dot on timeline */}
      <span
        className={[
          "absolute top-1/2 -translate-y-1/2 w-[7px] h-[7px] rounded-full border-2 border-[#0C0C0B] transition-all duration-200 pointer-events-none",
          isActive
            ? "bg-[#ef4444]"
            : "bg-[#56564E] group-hover:bg-[#ef4444]",
        ].join(" ")}
        style={{ left: '-19.5px' }}
      />

      {/* Step Number */}
      <span
        className={[
          "font-mono tabular-nums transition-colors",
          isActive ? "text-[#ef4444]" : "text-[#8A8A80]",
        ].join(" ")}
        style={{ fontSize: '10px', letterSpacing: '0.06em' }}
      >
        {step.id}
      </span>

      {/* Step Label */}
      <span className="leading-[1.55]">
        {step.label}
      </span>
    </button>
  );
}

function GroupHeader({
  title,
  subtitle,
  titleColor = "text-[#ef4444]",
}: {
  title: string;
  subtitle?: string;
  titleColor?: string;
}) {
  return (
    <div
      className="font-mono uppercase"
      style={{
        fontSize: '10px',
        letterSpacing: '0.1em',
        paddingBottom: '12px',
        marginBottom: '14px',
        borderBottom: '1px solid #2E2E29',
      }}
    >
      <span className={`font-semibold ${titleColor}`}>{title}</span>
      {subtitle && (
        <span style={{ color: '#8A8A80', textTransform: 'none', letterSpacing: '0.04em', fontWeight: 400 }}>
          {' '}· {subtitle}
        </span>
      )}
    </div>
  );
}

export default function FlowPreview({
  heading = (
    <>
      The flow we designed: <br className="hidden sm:inline" />
      two people, one <em className="font-display italic text-[#ef4444] font-normal">system</em>.
    </>
  ),
  hintText = "HOVER ANY STEP AND THE FRAME SHOWS ITS ACTUAL SCREEN",
  defaultScreen = DEFAULT_DEFAULT_SCREEN,
  leftGroups = DEFAULT_LEFT_GROUPS,
  rightGroups = DEFAULT_RIGHT_GROUPS,
  footerNote = "Done here. The Organiser carries it to checkout",
  breakout = false,
  className = "",
}: FlowPreviewProps) {
  const [activeStep, setActiveStep] = useState<{
    step: FlowStep;
    groupTitle: string;
  } | null>(null);

  const activeImageSrc = activeStep ? activeStep.step.screen : defaultScreen.screen;
  const activeImageAlt = activeStep ? activeStep.step.altText : defaultScreen.altText;

  return (
    <section
      className={[
        "w-full my-12 text-white font-sans",
        className,
      ].join(" ")}
      style={{ maxWidth: '1152px', marginLeft: 'auto', marginRight: 'auto' }}
      aria-label="Multi-role interactive flow preview"
    >
      {/* FLOW HINT BADGE */}
      {hintText && (
        <div className="flex items-center gap-2 font-mono text-xs tracking-widest text-[#ef4444] uppercase mb-4 font-medium">
          <span className="text-sm">■</span>
          <span>{hintText}</span>
        </div>
      )}

      {/* FLOW PANEL OUTER CARD WITH GRID OVERLAY */}
      <div
        className="relative w-full overflow-hidden shadow-2xl"
        style={{
          background: '#141413',
          border: '1px solid #2E2E29',
          borderRadius: '6px',
          padding: 'clamp(28px, 3.5vw, 56px)',
        }}
      >
        {/* Blueprint Grid Overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(#2E2E29 1px, transparent 1px),
              linear-gradient(90deg, #2E2E29 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
            opacity: 0.35,
          }}
        />

        {/* 3-COLUMN FLOW BOARD GRID (SYMMETRICAL 1FR - 280PX - 1FR) */}
        <div
          className="relative z-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1.12fr)_auto_minmax(0,1fr)] items-center"
          style={{ gap: '44px clamp(32px, 4vw, 64px)' }}
        >

          {/* LEFT COLUMN: ORGANISER & CONTRIBUTOR LANES */}
          <div className="order-2 lg:order-1 flex flex-col min-w-0" style={{ gap: '30px' }}>
            {leftGroups.map((group) => (
              <div key={group.title} className="relative" style={{ paddingLeft: '20px' }}>
                {/* Vertical Timeline Line */}
                <div className="absolute z-0" style={{ left: '4px', top: '44px', bottom: '22px', width: '1px', background: '#2E2E29' }} />

                <GroupHeader
                  title={group.title}
                  subtitle={group.subtitle}
                  titleColor={group.title === "ORGANISER" ? "text-white/80" : "text-white/80"}
                />

                {/* Steps List */}
                <div className="relative z-10 flex flex-col" style={{ gap: '10px' }}>
                  {group.steps.map((step) => {
                    const isActive = activeStep?.step.id === step.id;
                    const isDashed = group.dashedIds?.includes(step.id);
                    return (
                      <StepRow
                        key={step.id}
                        step={step}
                        isDashed={isDashed}
                        isActive={isActive}
                        onEnter={(s) => setActiveStep({ step: s, groupTitle: group.title })}
                        onLeave={() => setActiveStep(null)}
                      />
                    );
                  })}
                </div>
              </div>
            ))}

            {footerNote && (
              <p className="font-mono italic" style={{ fontSize: '10px', letterSpacing: '0.05em', color: '#56564E', paddingLeft: '12px', marginTop: '2px' }}>
                {footerNote}
              </p>
            )}
          </div>

          {/* CENTER: STAGE PHONE MOCKUP */}
          <div className="order-1 lg:order-2 flex flex-col items-center min-w-0" style={{ gap: '14px' }}>
            <div
              className={[
                "relative w-[260px] sm:w-[280px] aspect-[9/19.5] overflow-hidden rounded-[2.3rem] border-[6px] transition-all duration-300 bg-black shadow-2xl ring-1 ring-white/10",
                activeStep
                  ? "border-[#ef4444] shadow-[0_0_35px_rgba(239,68,68,0.25)] -translate-y-1"
                  : "border-neutral-800",
              ].join(" ")}
            >
              {/* Phone Notch */}
              <div className="absolute left-1/2 top-2 z-20 h-4 w-24 -translate-x-1/2 rounded-full bg-black flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-[#161616] mr-2" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#0d0d0d]" />
              </div>

              {/* Inner Screen Shell */}
              <div className="relative w-full h-full overflow-hidden bg-[#080808]">
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={activeImageSrc}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={activeImageSrc}
                      alt={activeImageAlt}
                      fill
                      priority
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 260px, 280px"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Stage Label & Caption underneath Phone */}
            <div
              className="mt-4 text-center font-mono text-xs uppercase text-white/40 max-w-[280px] leading-relaxed"
              aria-live="polite"
              aria-atomic="true"
            >
              {activeStep ? (
                <>
                  <p className="font-semibold text-[#ef4444] tracking-wider">
                    {activeStep.groupTitle} · {activeStep.step.id}
                  </p>
                  <p className="mt-0.5 text-white/60 tracking-wider">
                    {activeStep.step.label}
                  </p>
                </>
              ) : (
                <>
                  <p className="font-semibold text-[#ef4444] tracking-wider">THE LIVE CART</p>
                  <p className="mt-0.5 text-white/40 tracking-wider">HOVER ANY STEP</p>
                </>
              )}
            </div>
          </div>

          {/* RIGHT COLUMN: SYSTEM LANE */}
          <div className="order-3 lg:order-3 flex flex-col min-w-0" style={{ gap: '30px' }}>
            {rightGroups.map((group) => (
              <div key={group.title} className="relative" style={{ paddingLeft: '20px' }}>
                {/* Vertical Timeline Line */}
                <div className="absolute z-0" style={{ left: '4px', top: '44px', bottom: '22px', width: '1px', background: '#2E2E29' }} />

                <GroupHeader
                  title={group.title}
                  subtitle={group.subtitle}
                  titleColor="text-[#ef4444]"
                />

                {/* Steps List */}
                <div className="relative z-10 flex flex-col" style={{ gap: '10px' }}>
                  {group.steps.map((step) => {
                    const isActive = activeStep?.step.id === step.id;
                    const isDashed = group.dashedIds?.includes(step.id);
                    return (
                      <StepRow
                        key={step.id}
                        step={step}
                        isDashed={isDashed}
                        isActive={isActive}
                        onEnter={(s) => setActiveStep({ step: s, groupTitle: group.title })}
                        onLeave={() => setActiveStep(null)}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
