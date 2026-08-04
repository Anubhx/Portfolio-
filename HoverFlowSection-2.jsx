import { useState } from "react";

/**
 * HoverFlowSection
 * ------------------------------------------------------------
 * A two-column "who does what" flow with a phone mockup in the
 * middle. Hovering a step swaps the phone's screenshot.
 *
 * HOW TO WIRE UP YOUR OWN SCREENS:
 * 1. Export your screens into your project's assets/images folder.
 * 2. Bring each one in at the top of your real file the normal way
 *    your bundler handles local images (a static import, or just a
 *    path under /public if you're on Next.js).
 * 3. Reference the resulting value in each step's `screen` field
 *    below, instead of the placeholder URLs used here for preview.
 * 4. The default/idle screen shown before any hover is DEFAULT_SCREEN.
 * ------------------------------------------------------------
 */

// Placeholder "screens" so this preview renders with zero network
// calls — each one is a generated SVG data URI. Replace `ph(...)`
// calls below with your own imported screenshots (see notes above).
const PALETTE = [
  "#f5c451", "#e8734a", "#8b2e3f", "#7a8ca8",
  "#5a7d6e", "#c1543f", "#4a6a8c", "#9c6b3f",
];
function ph(seed, label) {
  const hash = [...String(seed)].reduce((a, c) => a + c.charCodeAt(0), 0);
  const color = PALETTE[hash % PALETTE.length];
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="380" height="820">
      <rect width="380" height="820" fill="#f4f1ea"/>
      <rect width="380" height="140" fill="${color}"/>
      <text x="24" y="80" font-family="monospace" font-size="22" fill="#0a0a0a">SprintMart</text>
      <text x="24" y="108" font-family="monospace" font-size="13" fill="#0a0a0a" opacity="0.7">${label ?? seed}</text>
      <rect x="24" y="180" width="332" height="52" rx="10" fill="#ffffff" stroke="#e5e0d5"/>
      <text x="40" y="212" font-family="monospace" font-size="13" fill="#8a8578">Search milk, snacks, breakfast...</text>
      <rect x="24" y="252" width="332" height="120" rx="14" fill="#ffffff" stroke="#e5e0d5"/>
      <rect x="24" y="392" width="160" height="180" rx="10" fill="#eae6db"/>
      <rect x="196" y="392" width="160" height="180" rx="10" fill="#eae6db"/>
      <text x="190" y="800" font-family="monospace" font-size="11" fill="#0a0a0a" opacity="0.4" text-anchor="middle">step ${seed}</text>
    </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

const DEFAULT_SCREEN = ph("home", "Flatmates' Cart");

const LEFT_GROUPS = [
  {
    title: "ORGANISER",
    subtitle: "control without chasing",
    steps: [
      { id: "01", label: "Creates the cart", screen: ph("01") },
      { id: "02", label: "Picks the payment model: Admin Pays or Each Pays", screen: ph("02") },
      { id: "03", label: "Shares the invite code", screen: ph("03") },
      { id: "06", label: "Reviews the joint cart as items arrive", screen: ph("06") },
      { id: "10", label: "Locks the cart & starts checkout", screen: ph("10") },
      { id: "13", label: "Pays the total, or per-member splits go out", screen: ph("13") },
    ],
  },
  {
    title: "CONTRIBUTOR",
    subtitle: "autonomy without surveillance",
    steps: [
      { id: "04", label: "Joins with the code, no sign-up", screen: ph("04") },
      { id: "05", label: "Sees the live cart, members and budget", screen: ph("05") },
      { id: "07", label: "Adds items, marked common or personal", screen: ph("07") },
      { id: "12", label: "Pays their own share via UPI", screen: ph("12") },
    ],
  },
];

const RIGHT_GROUPS = [
  {
    title: "SYSTEM",
    subtitle: "carries the friction",
    dashed: ["08"], // ids that render with a dashed border, like the reference
    steps: [
      { id: "05a", label: "Syncs the cart live; logs every change", screen: ph("05a") },
      { id: "08", label: "Catches duplicates: skip, or add anyway", screen: ph("08") },
      { id: "09", label: "Updates the household budget bar", screen: ph("09") },
      { id: "11", label: "Opens a 10-minute payment window", screen: ph("11") },
      { id: "13b", label: "Confirms one order, tracked by everyone", screen: ph("13b") },
    ],
  },
];

function StepRow({ step, dashed, isActive, onEnter, onLeave }) {
  return (
    <button
      type="button"
      onMouseEnter={() => onEnter(step)}
      onMouseLeave={onLeave}
      onFocus={() => onEnter(step)}
      onBlur={onLeave}
      className={[
        "w-full text-left rounded-lg border px-4 py-3 transition-all duration-200",
        "flex items-start gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/60",
        dashed ? "border-dashed" : "border-solid",
        isActive
          ? "border-orange-500/70 bg-orange-500/[0.06] text-white"
          : "border-white/10 bg-white/[0.02] text-white/70 hover:border-white/25 hover:bg-white/[0.04]",
      ].join(" ")}
    >
      <span
        className={[
          "font-mono text-xs mt-0.5 tabular-nums shrink-0 transition-colors",
          isActive ? "text-orange-400" : "text-white/35",
        ].join(" ")}
      >
        {step.id}
      </span>
      <span className="text-[15px] leading-snug">{step.label}</span>
    </button>
  );
}

function GroupHeader({ title, subtitle }) {
  return (
    <div className="mb-3 flex items-baseline gap-2 border-b border-white/10 pb-2">
      <span className="font-mono text-xs tracking-wider text-white/80">{title}</span>
      <span className="text-xs text-white/35">· {subtitle}</span>
    </div>
  );
}

export default function HoverFlowSection() {
  const [active, setActive] = useState(null); // the hovered step object, or null

  const activeScreen = active?.screen ?? DEFAULT_SCREEN;

  return (
    <section className="min-h-screen w-full bg-[#0a0a0a] text-white px-6 py-16 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-center gap-2 font-mono text-xs tracking-wider text-orange-500">
          <span className="inline-block h-2 w-2 rounded-sm bg-orange-500" />
          HOVER ANY STEP AND THE FRAME SHOWS ITS ACTUAL SCREEN
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_auto_1fr] lg:gap-8">
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-8">
            {LEFT_GROUPS.map((group) => (
              <div key={group.title}>
                <GroupHeader title={group.title} subtitle={group.subtitle} />
                <div className="flex flex-col gap-2">
                  {group.steps.map((step) => (
                    <StepRow
                      key={step.id}
                      step={step}
                      isActive={active?.id === step.id}
                      onEnter={setActive}
                      onLeave={() => setActive(null)}
                    />
                  ))}
                </div>
              </div>
            ))}
            <p className="font-mono text-xs italic text-white/30">
              Done here. The Organiser carries it to checkout.
            </p>
          </div>

          {/* CENTER: PHONE MOCKUP */}
          <div className="flex flex-col items-center justify-start lg:sticky lg:top-16 lg:self-start">
            <div className="relative h-[560px] w-[280px] overflow-hidden rounded-[2.2rem] border-[6px] border-neutral-800 bg-neutral-900 shadow-2xl shadow-black/60">
              {/* notch */}
              <div className="absolute left-1/2 top-2 z-10 h-4 w-24 -translate-x-1/2 rounded-full bg-black" />

              {/* crossfading screen stack */}
              <div className="absolute inset-0">
                <img
                  key={activeScreen}
                  src={activeScreen}
                  alt={active ? active.label : "App home screen"}
                  className="h-full w-full object-cover opacity-0 animate-[fadein_.25s_ease_forwards]"
                />
              </div>
            </div>

            <div className="mt-5 text-center">
              <p className="font-mono text-xs tracking-wider text-orange-500">
                {active ? `STEP ${active.id}` : "THE LIVE CART"}
              </p>
              <p className="mt-1 text-xs text-white/40">
                {active ? active.label : "HOVER ANY STEP"}
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-8">
            {RIGHT_GROUPS.map((group) => (
              <div key={group.title}>
                <GroupHeader title={group.title} subtitle={group.subtitle} />
                <div className="flex flex-col gap-2">
                  {group.steps.map((step) => (
                    <StepRow
                      key={step.id}
                      step={step}
                      dashed={group.dashed?.includes(step.id)}
                      isActive={active?.id === step.id}
                      onEnter={setActive}
                      onLeave={() => setActive(null)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadein {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
