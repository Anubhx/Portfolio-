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
  accentColor?: string;
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
  accentColor = "#ef4444",
  onEnter,
  onLeave,
  onClick,
}: {
  step: FlowStep;
  isDashed?: boolean;
  isActive: boolean;
  accentColor?: string;
  onEnter: (step: FlowStep) => void;
  onLeave: () => void;
  onClick: (step: FlowStep) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onClick(step)}
      onMouseEnter={() => onEnter(step)}
      onMouseLeave={onLeave}
      onFocus={() => onEnter(step)}
      onBlur={onLeave}
      aria-current={isActive ? "step" : undefined}
      style={{
        display: 'grid',
        gridTemplateColumns: '32px 1fr',
        gap: '10px',
        alignItems: 'center',
        padding: '12px 14px',
        minHeight: '44px', // WCAG 44px touch target
        borderRadius: '8px',
        fontSize: '13px',
        lineHeight: '1.5',
        marginBottom: '0',
        borderColor: isActive ? accentColor : undefined,
      }}
      className={[
        "group relative w-full text-left border transition-all duration-200 cursor-pointer min-w-0 touch-manipulation select-none",
        "focus:outline-none focus-visible:ring-2",
        isDashed ? "border-dashed border-[#3A3A33]" : "border-solid",
        isActive
          ? "bg-[#141413] text-[#F0EDE5] translate-x-1 sm:translate-x-1"
          : "border-[#2E2E29] bg-[#1A1A18] text-[#CFCCC2] hover:bg-[#141413] hover:text-[#F0EDE5] active:scale-[0.99]",
      ].join(" ")}
    >
      {/* Node Dot on timeline */}
      <span
        className={[
          "absolute top-1/2 -translate-y-1/2 w-[7px] h-[7px] rounded-full border-2 border-[#0C0C0B] transition-all duration-200 pointer-events-none",
          isActive ? "" : "bg-[#56564E]",
        ].join(" ")}
        style={{ left: '-19.5px', backgroundColor: isActive ? accentColor : undefined }}
      />

      {/* Step Number */}
      <span
        className="font-mono tabular-nums transition-colors"
        style={{ fontSize: '10px', letterSpacing: '0.06em', color: isActive ? accentColor : '#8A8A80' }}
      >
        {step.id}
      </span>

      {/* Step Label */}
      <span className="leading-[1.5]">
        {step.label}
      </span>
    </button>
  );
}

function GroupHeader({
  title,
  subtitle,
  accentColor = "#ef4444",
}: {
  title: string;
  subtitle?: string;
  accentColor?: string;
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
      <span className="font-semibold" style={{ color: accentColor }}>{title}</span>
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
  hintText = "HOVER OR TAP ANY STEP TO PREVIEW ITS SCREEN",
  defaultScreen = DEFAULT_DEFAULT_SCREEN,
  leftGroups = DEFAULT_LEFT_GROUPS,
  rightGroups = DEFAULT_RIGHT_GROUPS,
  footerNote = "Done here. The Organiser carries it to checkout",
  breakout = false,
  className = "",
  accentColor = "#ef4444",
}: FlowPreviewProps) {
  const [activeStep, setActiveStep] = useState<{
    step: FlowStep;
    groupTitle: string;
  } | null>(null);

  const activeImageSrc = activeStep ? activeStep.step.screen : defaultScreen.screen;
  const activeImageAlt = activeStep ? activeStep.step.altText : defaultScreen.altText;

  // Flatten all steps for mobile quick-scrubber
  const allSteps = [
    ...leftGroups.flatMap((g) => g.steps.map((s) => ({ ...s, groupTitle: g.title }))),
    ...rightGroups.flatMap((g) => g.steps.map((s) => ({ ...s, groupTitle: g.title }))),
  ];

  const handleStepToggle = (step: FlowStep, groupTitle: string) => {
    if (activeStep?.step.id === step.id) {
      setActiveStep(null);
    } else {
      setActiveStep({ step, groupTitle });
    }
  };

  return (
    <section
      className={[
        "w-full my-8 sm:my-12 text-white font-sans",
        className,
      ].join(" ")}
      style={{ maxWidth: '1152px', marginLeft: 'auto', marginRight: 'auto' }}
      aria-label="Multi-role interactive flow preview"
    >
      {/* FLOW HINT BADGE */}
      {hintText && (
        <div className="flex items-center gap-2 font-mono text-[11px] sm:text-xs tracking-widest uppercase mb-3 sm:mb-4 font-medium" style={{ color: accentColor }}>
          <span className="text-sm">■</span>
          <span>{hintText}</span>
        </div>
      )}

      {/* FLOW PANEL OUTER CARD WITH GRID OVERLAY */}
      <div
        className="relative w-full overflow-hidden shadow-2xl rounded-xl border border-[#2E2E29]"
        style={{
          background: '#141413',
          padding: 'clamp(16px, 3.5vw, 56px)',
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

        {/* 3-COLUMN FLOW BOARD GRID (SYMMETRICAL ON DESKTOP, STICKY STAGE ON MOBILE) */}
        <div
          className="relative z-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1.12fr)_auto_minmax(0,1fr)] items-start"
          style={{ gap: '32px clamp(32px, 4vw, 64px)' }}
        >

          {/* CENTER: STAGE PHONE MOCKUP (STICKY AT TOP ON MOBILE SO PREVIEW NEVER LEAVES SCREEN) */}
          <div className="order-1 lg:order-2 flex flex-col items-center min-w-0 sticky top-14 lg:relative lg:top-0 z-30 py-3 lg:py-0 bg-[#141413]/95 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none rounded-2xl lg:rounded-none border lg:border-none border-white/5 shadow-xl lg:shadow-none transition-all">
            
            {/* iPhone 12 Pro Max Device Chassis */}
            <div className="relative w-[230px] xs:w-[260px] sm:w-[290px] md:w-[320px] max-w-[340px] aspect-[433/888] select-none transition-all duration-300">
              
              {/* Side Antenna Bands */}
              <div className="absolute inset-x-0 top-[10%] h-[2px] bg-gradient-to-r from-neutral-600 via-transparent to-neutral-600 z-10 pointer-events-none" />
              <div className="absolute inset-x-0 bottom-[10%] h-[2px] bg-gradient-to-r from-neutral-600 via-transparent to-neutral-600 z-10 pointer-events-none" />

              {/* Hardware Buttons */}
              <div className="absolute -left-[3px] top-[14%] w-[3px] h-[28px] sm:h-[34px] rounded-l-sm bg-gradient-to-b from-[#232323] via-[#a4a6a8] to-[#232323] z-0" />
              <div className="absolute -left-[3px] top-[23%] w-[3px] h-[54px] sm:h-[68px] rounded-l-sm bg-gradient-to-b from-[#232323] via-[#a4a6a8] to-[#232323] z-0" />
              <div className="absolute -left-[3px] top-[34%] w-[3px] h-[54px] sm:h-[68px] rounded-l-sm bg-gradient-to-b from-[#232323] via-[#a4a6a8] to-[#232323] z-0" />
              <div className="absolute -right-[3px] top-[25%] w-[3px] h-[80px] sm:h-[107px] rounded-r-sm bg-gradient-to-b from-[#232323] via-[#a4a6a8] to-[#232323] z-0" />

              {/* Metallic Outer Chassis Edge */}
              <div
                className={[
                  "relative w-full h-full rounded-[3.2rem] sm:rounded-[3.8rem] p-[4px] sm:p-[5px] transition-all duration-300 z-10",
                  activeStep ? "-translate-y-0.5" : "",
                ].join(" ")}
                style={{
                  background: activeStep
                    ? `linear-gradient(180deg, ${accentColor} 0%, #626366 50%, ${accentColor} 100%)`
                    : "linear-gradient(180deg, #626366 0%, #949699 50%, #626366 100%)",
                  boxShadow: activeStep
                    ? `0 0 40px ${accentColor}55, 0 25px 60px -15px rgba(0,0,0,0.9)`
                    : "0 25px 60px -15px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,255,255,0.1)",
                }}
              >
                {/* Inner Black Bezel Frame */}
                <div className="relative w-full h-full rounded-[2.9rem] sm:rounded-[3.5rem] p-[8px] sm:p-[12px] bg-[#1f1f1f] shadow-inner">
                  
                  {/* Screen Viewport */}
                  <div className="relative w-full h-full rounded-[2.2rem] sm:rounded-[2.6rem] overflow-hidden bg-black ring-1 ring-white/10">

                    {/* iPhone 12 Notch Assembly */}
                    <div className="absolute left-1/2 top-0 z-30 h-[22px] sm:h-[28px] w-[50%] -translate-x-1/2 rounded-b-[16px] sm:rounded-b-[18px] bg-[#1f1f1f] flex items-center justify-center pointer-events-none">
                      {/* Speaker Grill */}
                      <div className="absolute top-[5px] h-[3px] sm:h-[4px] w-[36px] sm:w-[42px] rounded-full bg-[#030303] border border-neutral-800" />
                      {/* Camera Lens */}
                      <div className="absolute top-[11px] sm:top-[13px] right-[22%] h-[7px] sm:h-[8px] w-[7px] sm:w-[8px] rounded-full bg-[#08081a] border border-[#12122b] shadow-inner flex items-center justify-center">
                        <div className="w-[2.5px] h-[2.5px] rounded-full bg-[#1b2b48]" />
                      </div>
                    </div>

                    {/* Inner Screen Image */}
                    <div className="relative w-full h-full overflow-y-auto overflow-x-hidden no-scrollbar bg-[#080808] scroll-smooth">
                      <AnimatePresence mode="popLayout">
                        <motion.div
                          key={activeImageSrc}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2, ease: "easeInOut" }}
                          className="relative w-full min-h-full"
                        >
                          <Image
                            src={activeImageSrc}
                            alt={activeImageAlt}
                            width={390}
                            height={844}
                            priority
                            className="w-full h-auto min-h-full object-cover object-top"
                            sizes="(max-width: 768px) 320px, 390px"
                          />
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    {/* Home Indicator Bar */}
                    <div className="absolute bottom-[6px] sm:bottom-[8px] left-1/2 -translate-x-1/2 z-30 h-[3.5px] sm:h-[4px] w-[35%] rounded-full bg-white/40 pointer-events-none" />

                  </div>
                </div>
              </div>
            </div>

            {/* Stage Label & Caption underneath Phone */}
            <div
              className="mt-2.5 sm:mt-4 text-center font-mono text-[11px] sm:text-xs uppercase text-white/40 max-w-[280px] leading-relaxed px-2"
              aria-live="polite"
              aria-atomic="true"
            >
              {activeStep ? (
                <>
                  <p className="font-semibold tracking-wider" style={{ color: accentColor }}>
                    {activeStep.groupTitle} · {activeStep.step.id}
                  </p>
                  <p className="mt-0.5 text-white/70 tracking-wider truncate">
                    {activeStep.step.label}
                  </p>
                </>
              ) : (
                <>
                  <p className="font-semibold tracking-wider" style={{ color: accentColor }}>THE LIVE CART</p>
                  <p className="mt-0.5 text-white/40 tracking-wider">TAP OR HOVER ANY STEP</p>
                </>
              )}
            </div>

            {/* MOBILE SCRUBBER PILLS BAR (VISIBLE ON MOBILE ONLY < 1024PX) */}
            <div className="flex lg:hidden items-center gap-1.5 overflow-x-auto max-w-full w-full px-1 py-1 mt-2 no-scrollbar border-t border-white/5 pt-2">
              <span className="text-[9px] font-mono text-white/30 uppercase tracking-widest mr-1 shrink-0">
                Steps:
              </span>
              {allSteps.map((s) => {
                const isSelected = activeStep?.step.id === s.id && activeStep?.groupTitle === s.groupTitle;
                return (
                  <button
                    key={`${s.groupTitle}-${s.id}`}
                    type="button"
                    onClick={() => handleStepToggle(s, s.groupTitle)}
                    style={{
                      backgroundColor: isSelected ? accentColor : 'rgba(255,255,255,0.06)',
                      color: isSelected ? '#ffffff' : '#a1a1aa',
                    }}
                    className="shrink-0 font-mono text-[11px] px-2.5 py-1 rounded-full transition-all active:scale-95 touch-manipulation"
                    aria-label={`Select step ${s.id}`}
                  >
                    {s.id}
                  </button>
                );
              })}
            </div>
          </div>

          {/* LEFT COLUMN: ORGANISER / PRIMARY LANES */}
          <div className="order-2 lg:order-1 flex flex-col min-w-0" style={{ gap: '30px' }}>
            {leftGroups.map((group) => (
              <div key={group.title} className="relative" style={{ paddingLeft: '16px' }}>
                {/* Vertical Timeline Line */}
                <div className="absolute z-0" style={{ left: '4px', top: '44px', bottom: '22px', width: '1px', background: '#2E2E29' }} />

                <GroupHeader
                  title={group.title}
                  subtitle={group.subtitle}
                  accentColor={accentColor}
                />

                {/* Steps List */}
                <div className="relative z-10 flex flex-col" style={{ gap: '10px' }}>
                  {group.steps.map((step) => {
                    const isActive = activeStep?.step.id === step.id && activeStep?.groupTitle === group.title;
                    const isDashed = group.dashedIds?.includes(step.id);
                    return (
                      <StepRow
                        key={`${group.title}-${step.id}`}
                        step={step}
                        isDashed={isDashed}
                        isActive={isActive}
                        accentColor={accentColor}
                        onEnter={(s) => setActiveStep({ step: s, groupTitle: group.title })}
                        onLeave={() => {}}
                        onClick={(s) => handleStepToggle(s, group.title)}
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

          {/* RIGHT COLUMN: SYSTEM / SECONDARY LANES */}
          <div className="order-3 lg:order-3 flex flex-col min-w-0" style={{ gap: '30px' }}>
            {rightGroups.map((group) => (
              <div key={group.title} className="relative" style={{ paddingLeft: '16px' }}>
                {/* Vertical Timeline Line */}
                <div className="absolute z-0" style={{ left: '4px', top: '44px', bottom: '22px', width: '1px', background: '#2E2E29' }} />

                <GroupHeader
                  title={group.title}
                  subtitle={group.subtitle}
                  accentColor={accentColor}
                />

                {/* Steps List */}
                <div className="relative z-10 flex flex-col" style={{ gap: '10px' }}>
                  {group.steps.map((step) => {
                    const isActive = activeStep?.step.id === step.id && activeStep?.groupTitle === group.title;
                    const isDashed = group.dashedIds?.includes(step.id);
                    return (
                      <StepRow
                        key={`${group.title}-${step.id}`}
                        step={step}
                        isDashed={isDashed}
                        isActive={isActive}
                        accentColor={accentColor}
                        onEnter={(s) => setActiveStep({ step: s, groupTitle: group.title })}
                        onLeave={() => {}}
                        onClick={(s) => handleStepToggle(s, group.title)}
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
