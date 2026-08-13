# Case Study: SprintMart Shared Cart
> **Collaborative Grocery Ordering & Multi-User Split Checkout for Indian Households**

---

## 01. Hero / Project Overview

### Product Summary
**SprintMart Shared Cart** is a collaborative quick-commerce shopping feature designed to solve the social, financial, and operational friction of household grocery ordering. By introducing a shared real-time cart, transparent budget caps, duplicate-item protection, and integrated per-member UPI split settlement, SprintMart enables flatmates and families to shop together seamlessly without assigning one person to act as the "house bank."

* **Project Type**: Team Project (6 Members) · Academic Mini-Project
* **Academic Program**: IIT Madras — UI/UX with Agentic AI & GenAI Program (June 2026 Sprint)
* **My Role**: Household Research Track, Onboarding & Friction Benchmarking, Shared Cart Core UX Flows, Design System Tokens & CSS Implementation (`[TO BE ADDED / REFINED LATER]`)
* **Team Size**: 6 UX / Product Designers
* **Duration**: 1 Sprint (June 2026)
* **Platforms**: Mobile Web / Progressive Web App (Designed for native iOS 393×852px viewport)
* **Tools Used**: Figma, HTML5 / CSS3 (Custom Design Tokens), React, Claude-based Agentic Build Pipeline

---

### Key Project Rubric
| Dimension | Details |
| :--- | :--- |
| **Core Problem** | Quick-commerce apps treat all households as a single shopper. One "default orderer" compiles requests from WhatsApp, pays the full bill upfront, and spends days chasing flatmates for ₹600 reimbursements while managing duplicate purchases. |
| **Core Solution** | A shared cart experience with ambient live updates, zero-signup guest joining, a 2-button Hick's Law duplicate guard, per-person budget caps, quiet over-cap approval workflows, and a 10-minute multi-user split payment window. |
| **Team Context** | Collaborative project across 4 research & build tracks: Household Ordering (Shared Cart), Store Operations, Delivery Trust, and Base App Build. |

> [!NOTE]
> **Team Project Context**: SprintMart was created collaboratively by a 6-person design team. This case study documents the collective product strategy and research foundation, highlighting my specific contributions in research, design system tokens, and core shared cart interaction flows.

---

## 02. The Problem

### The Indian Household Grocery Bottleneck
In urban Indian households—particularly shared apartments of young working professionals and students—grocery shopping is inherently a group activity. However, existing quick-commerce platforms (Blinkit, Zepto, Swiggy Instamart) force a single-user interaction model.

```
WhatsApp Requests Trickle In  ──►  One Person Orders & Pays  ──►  Financial Burden & Friction
"Get 1L milk", "Need eggs"         Pays ₹1,800 total bill          Chasing flatmates for ₹600 each
```

#### Key Friction Points Identified in Research
1. **The "House Bank" Burden**: One roommate automatically becomes the default orderer. They place the order on their phone, pay 100% of the bill upfront, and carry the financial strain until flatmates reimburse them.
2. **Scatterbrained WhatsApp Coordination**: Grocery requests arrive asynchronously across WhatsApp messages, voice notes, and verbal reminders throughout the day. Items get forgotten, and there is no single source of truth.
3. **Frequent Duplicate Purchases**: Two flatmates independently order milk, bread, or detergent because neither knows what the other added. 2 in 5 households report weekly duplicate purchases, resulting in wasted money and spoiled groceries.
4. **Surprise Checkout Totals**: Carts start at ₹700 but balloon to ₹2,300 as items accumulate. Because members lack visibility into total accumulated costs, checkout triggers friction and budget arguments ("Who added all these?").
5. **Awkward Social Debt**: Chasing friends for ₹150 or ₹600 reimbursement creates ongoing social awkwardness. Conversely, flatmates being reminded feel monitored, creating friction in shared living spaces.

---

## 03. Project Context

### Market & Behavioral Context
Quick-commerce apps in India have revolutionized delivery times to 10 minutes. However, while logistics speeds have hyper-optimized, **the pre-checkout human workflow remains completely unoptimized for group living**.

```
Existing Quick Commerce Paradigm (Single-Shopper)
┌───────────────────────────────────────────────────────────┐
│ User A ──► Browses ──► Adds All ──► Pays 100% ──► Chases │
└───────────────────────────────────────────────────────────┘

SprintMart Collaborative Paradigm (Shared-Cart)
┌───────────────────────────────────────────────────────────┐
│ User A ┐                                                  │
│ User B ├─► Shared Cart ──► Budget Guard ──► Multi-Pay     │
│ User C ┘    (Live Sync)      (Quiet Cap)     (UPI Split)  │
└───────────────────────────────────────────────────────────┘
```

#### Relevant Constraints & Product Mandates
* **No Added Delivery Friction**: The shared cart workflow must not compromise the 10-minute delivery promise of quick commerce.
* **Jakob's Law Compliance**: The base app experience (Home, Catalog, Product Cards) must feel identical to standard quick-commerce apps so users do not have to learn a new shopping UI.
* **Low-Friction Guest Joining**: Joining a flatmate's shared cart must take under 30 seconds without demanding mandatory account creation or full KYC onboarding.
* **Strict Design Token Constraint**: Built strictly on a 5-hue core color system to ensure maximum visual discipline and accessibility.

---

## 04. Research

### Research Scope & Methodology
To understand household grocery dynamics and app onboarding friction, our team executed a multi-track research study combining qualitative interviews, quantitative surveys, and real-world artifact analysis.

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           RESEARCH METHODS                              │
├───────────────────┬───────────────────┬─────────────────────────────────┤
│  12 In-Depth      │  60 Quantitative  │  5 WhatsApp Order Threads       │
│  User Interviews  │  Survey Responses │  Line-by-Line Chat Analysis     │
└───────────────────┴───────────────────┴─────────────────────────────────┘
```

#### Research Participants
* **Sample Size**: 60 survey respondents + 12 interviewees.
* **Demographics**: Urban flatmates (ages 21–29) in metro cities (Bengaluru, Mumbai, NCR) sharing living expenses, alongside young married couples.
* **Order Frequency**: 3–5 quick-commerce orders per week per household.

---

### Key Research Findings

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           KEY RESEARCH STATS                                │
├──────────────────┬──────────────────┬───────────────────┬───────────────────┤
│       61%        │       80%        │      2 in 5       │      ₹600 × 3     │
│ Group decisions  │ Default orderer  │ Households get    │ Average amount    │
│ paid by 1 person │ compiles list    │ duplicates weekly │ chased per order  │
└──────────────────┴──────────────────┴───────────────────┴───────────────────┘
```

1. **61% of Quick-Commerce Orders are Group Decisions Paid by One Person**: While purchasing decisions are shared across the household, financial liability is centralized on a single buyer.
2. **80% of Default Orderers Rely on Memory or Chat Transcripts**: Primary shoppers manually scroll through WhatsApp threads or rely on memory while building carts, causing a 78% rate of forgotten essential items.
3. **Duplicate Items Occur in 40% of Households Weekly**: Lack of real-time cart visibility leads flatmates to independently purchase identical staples (e.g., milk, eggs, bread).
4. **Social Friction Outweighs Financial Friction**: Users report that asking flatmates for small amounts (₹50–₹300) feels embarrassing, while being chased feels like financial surveillance.

---

### Top 8 User Pain Points Documented

| # | Pain Point | User Quote / Evidence | Impact |
| :-: | :--- | :--- | :--- |
| **1** | **One Person Always Pays First** | *"I don't mind placing the order, but I hate being the house bank every single week."* | Financial strain on primary orderer |
| **2** | **Duplicate Purchases** | *"We ended up with 3 packets of milk today because nobody checked."* | Wasted money & food spoilage |
| **3** | **WhatsApp Coordination Chaos** | *"Requests come in 10 different messages across the day."* | Forgotten items, manual list compiling |
| **4** | **Surprise Checkout Total** | *"Cart started at ₹500 and suddenly hit ₹2,200 at final screen."* | Lack of budget control |
| **5** | **Invisible Item Mutations** | *"Someone removed the rice I added and I didn't find out until delivery."* | Zero transparency, interpersonal friction |
| **6** | **Unfair Cost Distribution** | *"Household items like dish soap get paid by whoever orders."* | Unequal expense sharing |
| **7** | **Frustrating Reimbursement** | *"Order placed today, payment comes 4 days later after 3 reminders."* | Social awkwardness & debt tracking |
| **8** | **Onboarding Friction Walls** | *"Apps demand DOB, 6 address fields, and OTP before showing products."* | High drop-off during user acquisition |

---

## 05. Insights

We synthesized raw research data into 4 core UX insights using the **Observation → Insight → Design Implication** framework:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           INSIGHT MATRIX                                    │
├─────────────────────────────────────────────────────────────────────────────┤
│ 01. GROUP DECISIONS, SINGLE PAYER                                           │
│     Observation: 61% of group orders are paid by one individual.            │
│     Insight: Financial liability must be decentralized before checkout.    │
│     Design Implication: Build a 10-minute multi-payer UPI split window.     │
├─────────────────────────────────────────────────────────────────────────────┤
│ 02. THE DEFAULT ORDERER MEMORY TRAP                                        │
│     Observation: 80% compile items manually from memory/chats.              │
│     Insight: Everyone must add their own items directly into one cart.      │
│     Design Implication: Zero-signup guest joining via 4-digit code / link.  │
├─────────────────────────────────────────────────────────────────────────────┤
│ 03. DUPLICATE PURCHASES & FORGOTTEN STAPLES                                 │
│     Observation: 2 in 5 households buy duplicates weekly; 78% forget items. │
│     Insight: Guard the moment of item addition rather than cleanup later.   │
│     Design Implication: 2-button Hick's Law duplicate prompt & suggestions.  │
├─────────────────────────────────────────────────────────────────────────────┤
│ 04. REIMBURSEMENT FRICTION & SURVEILLANCE ANXIETY                           │
│     Observation: Chasing money feels embarrassing; being chased feels watched.│
│     Insight: Budget limits & approvals must be quiet and transparent.        │
│     Design Implication: Pre-agreed budget caps with quiet admin approvals.  │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 06. Personas / User Types

### Primary Persona: The Organiser (Ananya)
```
┌─────────────────────────────────────────────────────────────────────────┐
│ ANANYA KULKARNI (26) — Senior Marketing Associate, Bengaluru            │
├─────────────────────────────────────────────────────────────────────────┤
│ Context: Lives with 3 flatmates in HSR Layout. Default household orderer.│
│ Goals:                                                                  │
│ • Keep household stocked without fronting money for everyone.           │
│ • Stop chasing flatmates for ₹600 reimbursements on WhatsApp.           │
│ • Maintain budget control over total cart spend.                        │
│ Pain Points:                                                            │
│ • Acts as the "house bank"; carries financial burden.                   │
│ • Manages scattered messages and forgotten grocery items.              │
│ • Awkward social friction reminding flatmates to pay.                  │
└─────────────────────────────────────────────────────────────────────────┘
```

### Secondary Persona: The Contributor (Rohan)
```
┌─────────────────────────────────────────────────────────────────────────┐
│ ROHAN MEHTA (24) — Software Engineer, Bengaluru                         │
├─────────────────────────────────────────────────────────────────────────┤
│ Context: Busy flatmate who wants to add personal snacks & daily items.  │
│ Goals:                                                                  │
│ • Add items quickly without downloading new complex apps or signing up.│
│ • Pay his exact share immediately via UPI.                              │
│ • Know what flatmates have already added to avoid duplicates.           │
│ Pain Points:                                                            │
│ • Forgets to tell Ananya what he needs before she orders.               │
│ • Hates duplicate groceries arriving (e.g., 2 bread packets).           │
│ • Wants clarity between "Shared" household items vs "Personal" items.   │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 07. User Journey / Existing Experience

```
Current Journey (Pre-SprintMart): WhatsApp + Single Shopper Model
┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  Disjointed  │ ──► │ Single Cart  │ ──► │  Out-of-     │ ──► │  Social      │
│  Requests    │     │ Building     │     │  Pocket Pay  │     │  Chasing     │
└──────────────┘     └──────────────┘     └──────────────┘     └──────────────┘
  WhatsApp chat        Ananya builds        Ananya pays          Reminds friends
  messages stream      list from memory     ₹1,800 upfront       for 4 days over
  in randomly.         & misses items.      on her card.         ₹450 split.
```

### Friction Point Analysis
* **Step 1: Request Gathering**: High friction. Messages buried in WhatsApp group chats.
* **Step 2: Cart Assembly**: High cognitive load. Ananya manually checks fridge while reading chat log.
* **Step 3: Item Addition**: High error rate. Duplicate items added independently by roommate returning from store.
* **Step 4: Payment**: Critical financial friction. Ananya fronts 100% of cost.
* **Step 5: Post-Order Settlement**: Critical social friction. Manual calculation of shared vs personal items leading to disputes.

---

## 08. Information Architecture

```
SprintMart Shared Cart Architecture
│
├── 0. Home Screen (Base App)
│   ├── Location Banner ("10 min delivery to HSR Layout")
│   ├── Shared Cart Entry Pill ("Flatmates' Cart is live · 3 members · ₹1,384")
│   └── Product Catalog Grid
│
├── 1. Household Setup
│   ├── 1.1 Create Shared Cart (Cart Name, Mode: Each Pays vs Admin Pays, Budget Cap, Deadline)
│   ├── 1.2 Invite Members (4-digit Code, Copy Link, Member Slot Status 4/4)
│   └── 1.3 Join Shared Cart (Invite Preview, Budget Cap Acknowledgment, Zero-Signup Join)
│
├── 2. Live Shared Cart Dashboard
│   ├── 2.1 Dashboard Home (Live Activity Pill, Budget Progress Bars, 3-Tier Item List)
│   └── 2.2 Activity Timeline (Chronological Log of Additions, Removes & Edits)
│
├── 3. Item Management & Intelligence
│   ├── 3.1 Search & Duplicate Nudge (Hick's Law 2-Button Prompt: "Skip" or "Add anyway")
│   └── 3.2 Shared vs Personal Toggle (Default Personal, Smart Household Nudge)
│
├── 4. Budget & Governance
│   ├── 4.1 Budget Cap Approval (Over-Cap Request, Approve / Deny / Increase Cap)
│   └── 4.2 Edit Budget Cap (Per-Person Granular Cap Controls)
│
├── 5. Checkout & Split Settlement
│   ├── 5.1 Checkout Review (Grand Total, Item Classification Summary, Lock Cart Action)
│   ├── 5.2 Cart Locked Transition (10-Minute Countdown Window Triggered)
│   ├── 5.3 Bill Split Payment (Per-Member UPI Split, Real-Time Paid/Pending Badges)
│   └── 5.4 Admin Pays Checkout (Single Payer Fallback Mode)
│
└── 6. Order Fulfillment
    ├── 6.1 Order Confirmed (Clear Breakdown of Who Paid What + Admin Fallback Badge)
    └── 6.2 Live Order Tracking (Shared Real-Time Delivery Map for All Members)
```

---

## 09. User Flows

### Primary Multi-User Shared Cart Flow

```
ORGANISER (Ananya)                SYSTEM                          CONTRIBUTOR (Rohan)
       │                            │                                      │
[01] Creates Cart ─────────────────►│                                      │
[02] Sets Mode & Cap                │                                      │
[03] Shares Code/Link ──────────────┼─────────────────────────────────────►│
       │                            │                             [04] Joins via Link (No Signup)
       │                            │                             [05] Views Live Dashboard
       │                            │◄────────────────────────────[06] Adds Items (Shared/Personal)
       │                     [07] Syncs Cart Live                          │
       │                     [08] Catches Duplicates ─────────────────────►│ (2-Button Prompt)
       │                     [09] Updates Budget Bars                      │
[10] Reviews Joint Cart ────────────┤                                      │
[11] Locks Cart & Checkouts ───────►│                                      │
       │                     [12] Opens 10-Min Split Window ──────────────►│
[13] Pays Own Share (UPI) ──────────┼─────────────────────────────►[13] Pays Own Share (UPI)
       │                            │                                      │
       └───────────────────────────►│◄─────────────────────────────────────┘
                             [14] Order Confirmed & Tracked Live
```

#### Detailed Step-by-Step Breakdown

| Step # | Actor | Action | Interface State | UX Rationale |
| :-: | :--- | :--- | :--- | :--- |
| **01** | Organiser | Taps "Start Shared Cart" | Home Screen Banner | Low-friction entry from main catalog |
| **02** | Organiser | Selects "Each Pays Own" & sets ₹500 cap | Create Cart Screen | Upfront contract prevents checkout surprises |
| **03** | Organiser | Copies 4-digit code `7421` to WhatsApp | Invite Screen | Zero friction link sharing |
| **04** | Contributor| Taps link & joins as "Rohan" | Join Screen | No sign-up wall; immediate access |
| **05** | Contributor| Views Live Cart & Budget Bars | Dashboard Screen | Miller's Law: Glanceable status for all 4 members |
| **06** | Contributor| Searches "Amul Milk 1L" | Search Screen | Instant search with category filters |
| **07** | System | Detects Ananya already added Milk | Duplicate Nudge | Hick's Law: 2 buttons ("Skip" / "Add anyway") |
| **08** | Contributor| Taps "Skip" | Search Screen | Prevents duplicate purchase in 1 tap |
| **09** | Contributor| Adds "Nescafe Coffee" as Personal | Dashboard Screen | Explicit item ownership tagging |
| **10** | Organiser | Taps "Lock Cart & Checkout" | Checkout Review | Freezes cart additions across all users |
| **11** | System | Initiates 10-Minute Payment Window | Cart Locked Modal | Creates urgent settlement window |
| **12** | Both | Pay individual shares via UPI | Bill Split Screen | Decentralized payment; no house bank |
| **13** | System | Confirms order & streams live map | Tracking Screen | Equal visibility for all household members |

---

## 10. Ideation

### Exploration of Design Alternatives

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       IDEATION & TRADE-OFF MATRIX                           │
├───────────────────┬─────────────────────────────┬───────────────────────────┤
│ Concept Explored  │ Trade-Off / Risk            │ Final Decision            │
├───────────────────┼─────────────────────────────┼───────────────────────────┤
│ 1. External       │ Forces users out of shopping│ REJECTED. Built-in UPI    │
│    Splitwise Link │ flow into 3rd party app.    │ split window inside app.  │
├───────────────────┼─────────────────────────────┼───────────────────────────┤
│ 2. Automatic      │ Unfair if User A adds ₹100  │ REJECTED. Itemized        │
│    Equal Split    │ and User B adds ₹800.       │ Personal vs Shared split. │
├───────────────────┼─────────────────────────────┼───────────────────────────┤
│ 3. Hard Budget    │ Dead-end blocks user from   │ REJECTED. Quiet admin     │
│    Item Blocks    │ buying crucial items.       │ approval workflow.        │
├───────────────────┼─────────────────────────────┼───────────────────────────┤
│ 4. Public Over-Cap│ Publicly shames roommates   │ REJECTED. Private admin   │
│    Notifications  │ over budget limits.         │ approval modal.           │
└───────────────────┴─────────────────────────────┴───────────────────────────┘
```

---

## 11. UX Decisions

### Decision 01: Hick's Law 2-Button Duplicate Guard
* **Problem**: 2 in 5 households accidentally buy duplicate items weekly because flatmates add items without realizing someone else already did.
* **Decision**: When a user adds an item already present in the shared cart, display an inline 2-button nudge: `[Skip]` or `[Add anyway]`. Never use a dropdown or deep modal menu.
* **Reasoning**: According to **Hick's Law**, decision time increases with option complexity. A user with 30 seconds of patience will ignore complex menus. Two distinct buttons resolve the duplicate in 1 tap.
* **Result**: Prevents duplicate grocery purchases without blocking the user's flow.

```
Duplicate Nudge UI Component
┌───────────────────────────────────────────────────────────┐
│ 🏠 Ananya already added Amul Taaza Milk 1L.               │
│    Add another or increase quantity?                      │
│                                                           │
│    [ Skip ]                    [ Add anyway ]             │
│    (Ghost Button)              (Secondary Amber Button)   │
└───────────────────────────────────────────────────────────┘
```

---

### Decision 02: Transparent Budget Caps & Quiet Approvals
* **Problem**: Unchecked shared carts cause checkout shock when the total bill jumps from ₹700 to ₹2,300. However, hard-blocking users who exceed budgets creates frustration.
* **Decision**: Allow the Organiser to establish a public per-person budget cap (e.g., ₹500). If a Contributor exceeds their cap, the extra item is flagged as `Awaiting Approval` privately to the Organiser.
* **Reasoning**: Preserves contributor autonomy while giving the organiser financial control. The contributor is not publicly shamed with a broadcasted notification.
* **Result**: Complete spend predictability before reaching checkout.

---

### Decision 03: Item Ownership & 3-Tier Categorization
* **Problem**: Flatmates dispute bills when shared household items (cooking oil, trash bags) are mixed with personal items (specialty coffee, personal snacks).
* **Decision**: Categorize cart items into 3 distinct visual tiers:
  1. **Shared Items**: Split equally among all cart members (e.g., `÷3 each`).
  2. **Your Items**: Personal items added by you (100% paid by you).
  3. **Others' Items**: Personal items added by flatmates (greyed out; read-only controls).
* **Reasoning**: **Visibility without surveillance**. Users must see what flatmates added to understand the total bill, but controls to edit/delete items are restricted strictly to the item owner or Organiser.
* **Result**: Eliminates bill disputes by explicitly separating shared vs personal liabilities.

---

### Decision 04: 10-Minute Multi-Payer Split Window with Fallback
* **Problem**: If one flatmate delays paying their share, the entire quick-commerce order gets stuck, destroying the 10-minute delivery promise.
* **Decision**: Implement a 10-minute countdown window after cart locking. Each member pays their exact calculated share directly via UPI inside the app. If a member misses the 10-minute deadline, the Organiser's registered fallback payment covers the missing share.
* **Reasoning**: Guarantees that the order is never canceled due to a single unresponsive flatmate. The missing payment is flagged as `Covered by admin` in neutral Slate gray rather than hostile red to avoid public shaming.
* **Result**: Decentralized payments with a 100% order completion guarantee.

---

## 12. Wireframes / Early Exploration

### Evolution from Concept to High-Fidelity

```
Early Concept (Wireframe Phase)
┌──────────────────────────────────────┐
│ [ WhatsApp Request Aggregator ]      │  ◄── REJECTED
│ Manual text parsing of group chats. │      Too complex, high error rate.
└──────────────────────────────────────┘

Final Implementation (Interactive System)
┌──────────────────────────────────────┐
│ [ Embedded Real-Time Shared Cart ]   │  ◄── ADOPTED
│ In-app live sync with design system. │      Seamless 37-screen flow.
└──────────────────────────────────────┘
```

#### Key Design Iterations
* **Iteration 1**: Initial designs used a generic green "Success" color for paid items and bright red for unpaid items. *Refactored*: Replaced red with neutral Slate (`#6B7888`) and Deep Plum checkmarks to prevent hostile visual feedback.
* **Iteration 2**: Originally designed 2 screens in isolation. *Refactored*: Expanded to a complete 37-screen state matrix covering empty states, error validation, loading spinners, and expired invite states.

---

## 13. Final UI Design

### Comprehensive Screen Journey

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         FINAL UI SCREEN MATRIX                              │
├──────────────────┬──────────────────┬───────────────────┬───────────────────┤
│ 0. HOME CATALOG  │ 1. HOUSEHOLD SETUP│ 2. LIVE DASHBOARD │ 3. ITEM ADDITION  │
│ Base app catalog │ Create cart,     │ Budget bars,      │ Search, duplicate │
│ + live banner.   │ invite 4/4, join.│ 3-tier item list. │ 2-button nudge.   │
├──────────────────┼──────────────────┼───────────────────┼───────────────────┤
│ 4. GOVERNANCE    │ 5. CHECKOUT LOCK │ 6. SPLIT PAYMENT  │ 7. FULFILLMENT    │
│ Over-cap approval│ Review items,    │ 10-min UPI split, │ Order confirmed,  │
│ & edit budget.   │ lock cart.       │ admin fallback.   │ live map tracking.│
└──────────────────┴──────────────────┴───────────────────┴───────────────────┘
```

#### Detailed Screen Descriptions

##### Screen 0.1 & 0.2 — Home Screen with Live Banner
* **Purpose**: Provide access to the Shared Cart feature without altering standard catalog browsing (Jakob's Law).
* **UI Elements**: Prominent top banner displaying active members (`A`, `R`, `K`), total current spend (`₹1,384 so far`), and a live pulsing status dot.

##### Screen 1.1 — Create Shared Cart
* **Purpose**: Establish cart parameters before inviting flatmates.
* **UI Elements**: Cart name input, segment toggle (`Each Pays Own` vs `Admin Pays`), budget cap switch with numerical input (`₹500`), and optional deadline toggle.

##### Screen 1.2 — Invite Members
* **Purpose**: Enable seamless onboarding of flatmates.
* **UI Elements**: Large 4-digit code display (`7421`), 1-tap `Copy code` and `Copy link` buttons, real-time member slot indicators (`2/4 joined`, `4/4 full`), and expired code alert handling.

##### Screen 2.1 — Shared Cart Dashboard (Core Screen)
* **Purpose**: Serve as the main control center for collaborative shopping.
* **UI Elements**: Live status pill (`Live · Rohan adding now...`), budget progress bars for each member with color-coded warning states, 3-tier item breakdown (Shared, Your, Others'), and bottom checkout action bar.

##### Screen 3.1 & 3.2 — Search & Duplicate Nudge
* **Purpose**: Guard against duplicate purchases during item discovery.
* **UI Elements**: Search input with instant result suggestions, inline 2-button duplicate prompt (`Skip` / `Add anyway`), and smart household item tag nudge (`Mark as shared`).

##### Screen 4.1 — Budget Cap Approval Modal
* **Purpose**: Resolve budget overages constructively.
* **UI Elements**: Flagged item display (`Parachute Hair Oil ₹60`), progress bar showing 106% cap breach, and 3 admin action choices (`Approve`, `Increase Cap to ₹550`, `Deny`).

##### Screen 5.3 — Bill Split Payment Screen
* **Purpose**: Facilitate individual payment settlement.
* **UI Elements**: 10-minute countdown badge (`07:42`), transparent bill breakdown (Personal items + Shared split), UPI/Card selector, real-time status chips (`Paid`, `Pending`, `Covered by admin`).

---

## 14. Shared Cart Experience

### Deep-Dive into Core Interactions

```
Shared Cart Interaction Architecture
┌───────────────────────────────────────────────────────────────────────────┐
│ 1. Real-Time Sync Engine                                                  │
│    Ambient live pill shows who is actively browsing or adding items.       │
├───────────────────────────────────────────────────────────────────────────┤
│ 2. Color-Coded Member Ring System                                        │
│    4 rotating hue rings (Amber ──► Orange ──► Burgundy ──► Slate)        │
│    distinguish up to 4 flatmates visually across all avatars and pills.   │
├───────────────────────────────────────────────────────────────────────────┤
│ 3. Progressive Budget Visualizer                                         │
│    • 0%–79%  : Amber Fill (On Track)                                     │
│    • 80%–99% : Orange Fill (Approaching Cap)                             │
│    • 100%+   : Burgundy Flashing Fill (Over Cap — Awaiting Approval)     │
└───────────────────────────────────────────────────────────────────────────┘
```

---

## 15. Design System

### The 5-Hue System Constraint
The entire SprintMart Shared Cart UI is constructed using **strictly five core hues**. No additional colors, radiuses, or spacing values are used outside this token set.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           CORE COLOR PALETTE                                │
├───────────────┬─────────────┬───────────┬───────────────────────────────────┤
│ Token Name    │ Hex Code    │ Role      │ Usage                             │
├───────────────┼─────────────┼───────────┼───────────────────────────────────┤
│ Deep Plum     │ #1E1B30     │ Structure │ Navbars, body text, primary CTAs │
│ Slate         │ #6B7888     │ Neutral   │ Labels, borders, disabled states  │
│ Amber         │ #D4921A     │ Action    │ Primary actions, on-track budget  │
│ Orange        │ #C05510     │ Emphasis  │ Secondary actions, soft warnings  │
│ Burgundy      │ #6E1822     │ Urgency   │ Over-cap alerts, countdown timer  │
└───────────────┴─────────────┴───────────┴───────────────────────────────────┘
```

#### Derived Opacity & Tint Tokens
All tints are constructed directly from the 5 base hues:
* `--tint-plum-04`: `rgba(30, 27, 48, 0.04)` (Card backgrounds)
* `--tint-plum-10`: `rgba(30, 27, 48, 0.10)` (Subtle dividers & borders)
* `--tint-slate-10`: `rgba(107, 120, 136, 0.10)` (Pills & secondary tags)
* `--tint-amber-10`: `rgba(212, 146, 26, 0.12)` (Warning callouts)
* `--tint-burgundy-10`: `rgba(110, 24, 34, 0.10)` (Error backgrounds)

---

### Typography Scale (Inter + JetBrains Mono)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           TYPOGRAPHY TOKENS                                 │
├───────────────────┬─────────────┬──────────────┬────────────────────────────┤
│ Style Name        │ Font Family │ Size / Weight│ Usage                      │
├───────────────────┼─────────────┼──────────────┼────────────────────────────┤
│ Screen Title      │ Inter       │ 22px / 600   │ Main screen headings       │
│ Section Header    │ Inter       │ 17px / 600   │ Section dividers & cards   │
│ Body              │ Inter       │ 14px / 400   │ Standard UI text           │
│ Caption           │ Inter       │ 12px / 400   │ Meta text & timestamps     │
│ Numerical Display │ Mono        │ 44px / 600   │ Invite codes & timers      │
└───────────────────┴─────────────┴──────────────┴────────────────────────────┘
```

---

### Base-8 Spacing & Radius Tokens

```
Spacing Scale (Base-8 Grid)
├── --sp-1  : 4px   (Tight element gap)
├── --sp-2  : 8px   (Inline icon padding)
├── --sp-3  : 12px  (Card internal gap)
├── --sp-4  : 16px  (Standard screen padding)
├── --sp-5  : 24px  (Section spacing)
├── --sp-6  : 32px  (Header margins)
└── --sp-10 : 64px  (Major section break)

Radius Tokens
├── --r-sm   : 4px   (Tags & small badges)
├── --r-md   : 8px   (Buttons & input fields)
├── --r-lg   : 13px  (Standard content cards)
├── --r-xl   : 24px  (Modals & bottom sheets)
└── --r-full : 999px (Pills & avatars)
```

---

### Component State Matrix

| Component | Default State | Active / Pressed State | Disabled State |
| :--- | :--- | :--- | :--- |
| **Primary Button** | Deep Plum fill (`#1E1B30`), White text | Darkened Plum (`#15131F`), `scale(0.97)` | Slate tint fill, Plum muted text |
| **Secondary Button**| Amber fill (`#D4921A`), White text | Darkened Amber (`#B27C13`), `scale(0.97)` | Amber tint 50% opacity |
| **Ghost Button** | Transparent, Plum border (`rgba(30,27,48,0.10)`) | Plum tint fill, Solid Plum border | Transparent, muted border |
| **Input Field** | Slate border (`rgba(107,120,136,0.30)`) | Solid Plum border + 3px focus ring | Muted Slate background |

---

## 16. Usability / Iterations

### Evolution Through Testing & Review

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        VALIDATED FINDINGS VS ASSUMPTIONS                    │
├──────────────────────────────────────┬──────────────────────────────────────┤
│ Validated Research Evidence          │ Design Assumptions (Pending Test)    │
├──────────────────────────────────────┼──────────────────────────────────────┤
│ ✓ 2-button duplicate prompt prevents │ • 10 minutes is the ideal length for │
│   unintentional double ordering.     │   the split payment window.          │
│ ✓ Defaulting items to "Personal"    │ • Flatmates prefer per-person caps   │
│   avoids unfair cost allocation.     │   over a single household cap.       │
│ ✓ Multi-payer UPI window eliminates  │ • Organisers are willing to act as   │
│   manual post-order chasing.         │   payment fallback if member misses. │
└──────────────────────────────────────┴──────────────────────────────────────┘
```

---

## 17. Final Solution

### Connecting Research to Final Product Strategy

```
RESEARCH FINDING            UX DECISION                  UI SOLUTION                  OUTCOME
┌──────────────────┐        ┌──────────────────┐         ┌──────────────────┐         ┌──────────────────┐
│ 61% Group Orders │ ─────► │ Decentralized    │ ──────► │ 10-Min Multi-    │ ──────► │ Zero manual cost │
│ Paid by 1 Person │        │ Multi-Payer Split│         │ User UPI Window  │         │ chasing post-order│
└──────────────────┘        └──────────────────┘         └──────────────────┘         └──────────────────┘
┌──────────────────┐        ┌──────────────────┐         ┌──────────────────┐         ┌──────────────────┐
│ 2 in 5 Households│ ─────► │ Guard Adding     │ ──────► │ 2-Button Hick's  │ ──────► │ 0 duplicate buys │
│ Buy Duplicates   │        │ Moment Inline    │         │ Duplicate Nudge  │         │ in shared cart   │
└──────────────────┘        └──────────────────┘         └──────────────────┘         └──────────────────┘
┌──────────────────┐        ┌──────────────────┐         ┌──────────────────┐         ┌──────────────────┐
│ Surprise Checkout│ ─────► │ Pre-Agreed Spend │ ──────► │ Visual Budget    │ ──────► │ 100% spend       │
│ Totals (₹2,300)  │        │ Budget Limits    │         │ Progress Bars    │         │ predictability   │
└──────────────────┘        └──────────────────┘         └──────────────────┘         └──────────────────┘
```

---

## 18. Impact / Outcomes

### Measurable Metrics Framework (For Future Production Deployment)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           TARGET IMPACT METRICS                             │
├───────────────────────────────┬─────────────────────────────────────────────┤
│ Metric Name                   │ Target Threshold / Success Criteria         │
├───────────────────────────────┼─────────────────────────────────────────────┤
│ Shared Cart Adoption Rate     │ ≥ 25% of multi-person household orders      │
│ Duplicate Guard Acceptance    │ ≥ 80% tap "Skip" on duplicate nudge         │
│ Split Window Settlement Time  │ 90% of split payments completed in < 6 mins │
│ Repeat Shared Cart Retargeting│ ≥ 40% repeat shared cart creation monthly   │
└───────────────────────────────┴─────────────────────────────────────────────┘
```

`[ADD PROJECT OUTCOME / METRIC HERE — To be updated upon live pilot deployment]`

---

## 19. My Contribution

### Ownership & Individual Responsibilities
As a core designer on this 6-person team project, I took primary ownership of specific research, interaction design, and system architecture deliverables while collaborating on the overall product vision.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           MY CONTRIBUTION MATRIX                            │
├───────────────────┬─────────────────────────────────────────────────────────┤
│ Domain            │ Specific Deliverables & Ownership                       │
├───────────────────┼─────────────────────────────────────────────────────────┤
│ Research          │ • Led Onboarding & Quick-Commerce Friction Benchmark    │
│                   │   (Blinkit 8 taps vs Zepto 7 taps vs Instamart 12 taps).│
│                   │ • Co-conducted Household Ordering Research Track.       │
│ Interaction UX    │ • Designed core Shared Cart Multi-User Flow & States.   │
│                   │ • Architected 2-button Hick's Law Duplicate Guard.      │
│ Design System     │ • Authored CSS custom property tokens (:root tokens).   │
│                   │ • Built design system HTML reference components.        │
│ Technical Build   │ • Contributed to React component wiring & state logic.  │
└───────────────────┴─────────────────────────────────────────────────────────┘
```

* **My Role**: UX / Product Designer (Research & Systems Track) `[TO BE ADDED / REFINED]`
* **Key Decisions I Influenced**: Advocated for 2-button Hick's Law duplicate prompt instead of a drop-down menu; insisted on neutral Slate styling for payment fallback to prevent user shaming. `[TO BE ADDED / REFINED]`

---

## 20. Team

### Collaborative Team Structure (IIT Madras Project)
* **Design Team**: 6 UX / Product Designers
* **Track Allocations**:
  1. **Household Ordering Track** (Anubhav, Komal): Research, Shared Cart flows, split payment UX, design system tokens.
  2. **Store Operations Track**: Warehouse picking UI, inventory sync, store dashboard.
  3. **Delivery Trust Track**: 10-minute delivery tracking, driver app interactions.
  4. **Base App Build Track**: Catalog navigation, search, base checkout components.

---

## 21. Learnings

### Senior Product Design Reflection
1. **Designing for Multi-User State Synchronicity**: Designing for 2–4 people interacting with the same screen simultaneously requires ambient status indicators (e.g., pulsing dots, live pills) rather than intrusively locking the UI.
2. **Social Ergonomics in UX**: Product design in shared living is as much about social psychology as visual hierarchy. Eliminating awkward financial debt requires neutral visual language (`Covered by admin` in Slate gray rather than hostile red).
3. **The Power of System Constraints**: Enforcing a strict 5-hue token limit prevented visual clutter across 37 screens and ensured clean, scalable CSS/Figma implementation.

---

## 22. Next Steps

### Realistic Product Roadmap
* **Smart Recurring Household Lists**: Automatically suggest staples (milk, eggs) based on household consumption velocity.
* **Granular Item-Level Split Controls**: Allow 2 out of 4 flatmates to split an item (e.g., `÷2 split` for specialty items) rather than forcing household-wide division.
* **Settlement History Analytics**: Provide monthly expense summaries for flatmates to track shared living costs over time.

---

## 23. Case Study Asset Checklist

Below is the complete inventory of visual assets required when converting this Markdown document into a website:

- [ ] **Hero Asset**: Fanned 3-phone mockup (`33-invite-joined.webp`, `40-dashboard-top.webp`, `55-payment.webp`)
- [ ] **Problem Diagram**: Existing WhatsApp trickle order flow vs SprintMart Shared Cart flow
- [ ] **Research Graphic**: 4 Key Finding stat callouts (61%, 80%, 2 in 5, ₹600×3)
- [ ] **Persona Cards**: Ananya (Organiser) & Rohan (Contributor) visual profile cards
- [ ] **User Journey Map**: WhatsApp fragmentation vs SprintMart collaborative journey
- [ ] **Information Architecture Tree**: Structural hierarchy diagram
- [ ] **Multi-User Interactive Flow Diagram**: Swimlane diagram (Organiser vs Contributor vs System)
- [ ] **UX Decision Comparison Cards**: 4 decision cards featuring screen wells
- [ ] **Final UI Screen Gallery**: High-res mockups of all 37 screens
- [ ] **Design System Token Specs**: Interactive swatch grid, typography scale & component matrix
- [ ] **Bill Split Demonstration**: Screen recording / animation of the 10-minute payment countdown
- [ ] **Team Credit & Role Grid**: Summary cards for team members

---

# Implementation Plan
> **Strategy for Assembling the SprintMart Case Study Website**

This plan outlines how to convert this Markdown content into a responsive portfolio case study web application.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                     WEBSITE ASSEMBLY ARCHITECTURE                           │
├─────────────────────────────────────────────────────────────────────────────┤
│ 1. SECTION HIERARCHY & NAVIGATION                                           │
│    Sticky left sidebar index (or top progress bar) mapping to Sections 01–23.│
│                                                                             │
│ 2. VISUAL & INTERACTIVE ENHANCEMENTS                                        │
│    • Flow Board (Section 09): Hovering flow steps previews screen image.    │
│    • Design System (Section 15): Interactive color swatches with copy-hex. │
│    • Screen Gallery (Section 13): Filterable grid (Setup, Dashboard, Pay).  │
│                                                                             │
│ 3. CONTENT GAPS TO POPULATE PRIOR TO BUILD                                  │
│    • Populate [TO BE ADDED] placeholders in Section 19 (My Contribution).   │
│    • Attach final high-res WEBP assets for screen mockups.                  │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Recommended Website Sections & Interactivity
1. **Hero Header**: Display title, meta grid (Role, Context, Timeline, Deliverable), and animated fanned phone trio with hover physics.
2. **Interactive Multi-User Flow Board**: Implement a hoverable swimlane board where hovering over any step (`Organiser 01`, `Contributor 04`, `System 08`) dynamically updates the central phone preview.
3. **Design System Token Viewer**: Display live color swatches with 1-tap hex copying alongside token tables.
4. **Interactive Screen Showcase**: Allow users to toggle between desktop frame view and mobile device view across all 37 design system screens.
5. **Scroll-Driven Storytelling**: Use Lenis smooth scroll and subtle opacity reveals to guide recruiters smoothly through the case study narrative.
