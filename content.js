/**
 * DataBridge Ops - Site Content Layer
 * =====================================
 * Edit all website copy here. Changes apply across all pages.
 * Do not edit the HTML files directly for copy changes. Edit here only.
 *
 * HOW TO USE:
 * Each page loads this file via <script src="content.js"></script>
 * Elements with a data-content="key" attribute get their text from here.
 * Elements with a data-content-html="key" get innerHTML (for links/bold).
 * Call applyContent('pagekey') at the bottom of each page's script.
 *
 * SECTIONS:
 * - global        : nav, footer, shared labels
 * - index         : landing page (hero, pain, layers, how, pricing, form)
 * - about         : about page sections (now covers both products)
 * - product02     : OT and leave filing landing page (product02.html)
 * - terms         : Terms of Service - NOT YET WIRED, see note below
 * - dpa           : Data Processing Agreement - NOT YET WIRED, see note below
 *
 * STATUS NOTE (added during Product 02 build):
 * terms.html and dpa.html are still fully hardcoded HTML, not yet migrated
 * into this content layer, and their current copy only covers Product 01
 * (n8n, Claude API, Google Sheets, Slack/Teams). Product 02 uses different
 * sub-processors (Supabase, Cloudflare, Lemon Squeezy/Paddle, Wise) and a
 * different data category (individual employee OT/leave records, not just
 * aggregate ops metrics). Both documents need a dedicated update pass
 * before Product 02 sends real client data through them.
 */

const DATABRIDGE_CONTENT = {

  // -----------------------------------------------
  // GLOBAL - shared across all pages
  // -----------------------------------------------
  global: {
    brand:              "DataBridge Ops",
    brand_suffix:       "Ops",
    email:              "build@databridgeops.com",
    domain:             "databridgeops.com",
    copyright:          "© 2026 DataBridge Ops",
    tagline:            "Ops Intelligence for Outsourced Teams",

    // Nav links (shared across all pages)
    nav_problem:        "The Problem",
    nav_layers:         "What You Get",
    nav_pricing:        "Pricing",
    nav_about:          "About",
    nav_product02:      "OT & Leave Filing",
    nav_index:          "Ops Intelligence",
    nav_cta:            "Get started, $1,500",

    // Footer
    footer_terms:       "Terms",
    footer_dpa:         "DPA",
    footer_about:       "About",
  },

  // -----------------------------------------------
  // LANDING PAGE - index.html
  // -----------------------------------------------
  index: {

    // Hero
    hero_eyebrow:       "Ops Intelligence for Outsourced Teams",
    hero_h1_line1:      "Your team's data,",
    hero_h1_line2:      "working for you",           // rendered in teal italic
    hero_sub:           "DataBridge Ops turns your outsourced team's spreadsheet data into automated daily reports, executive summaries, and on-demand operational answers, built and delivered in two weeks. No calls required.",
    hero_cta_primary:   "Get a free ops audit",
    hero_cta_secondary: "See how it works →",
    hero_meta:          "No payment yet. Answer 5 questions. We respond within 24 hours.",
  },

  // -----------------------------------------------
  // ABOUT PAGE - about.html
  // Now covers both products. Product 02 is the current
  // focus and leads; Product 01 stays visible for larger,
  // higher-ticket buyers who discover the site via Product 02.
  // -----------------------------------------------
  about: {

    page_title:         "About: DataBridge Ops",

    hero_question:      "// who builds a tool like this?",
    hero_h1_line1:      "People who've done",
    hero_h1_line2:      "this work themselves, twice over.", // teal italic
    hero_sub:            "DataBridge Ops wasn't designed from a whiteboard. It was designed from inside a data operations team, managing offshore workflows, assembling manual reports, and commissioning data investigations for decisions that needed answers yesterday. The overtime filing problem was solved the same way: by living inside a 100 plus person shift based org and building the fix before ever offering to build it for anyone else.",

    cred_1_title:       "Operators, not consultants.",
    cred_1_body:        "We've run the kind of teams our clients outsource. Accountable for output, not just observing it. Regulatory intelligence, quality compliance, and shift based operations teams, not slide decks about them.",

    cred_2_title:       "Regulated industry experience.",
    cred_2_body:        "We've integrated AI tools into live production workflows where accuracy directly affected client facing products, where a wrong number has real consequences.",

    cred_3_title:       "We built the OT filing system for our own team first.",
    cred_3_body:        "Before DataBridge Ops sold anything, the overtime and leave filing problem was solved internally for a 100 plus person shift based organization, replacing a manual spreadsheet process our own IT team was drowning in.",

    // Dual product section
    dual_eyebrow:       "Two builds, one operator",
    dual_h2:            "What DataBridge Ops actually builds.",
    dual_body:          "Both products come from the same place: operational problems solved firsthand before they were ever offered as a build. Right now, OT and leave filing is the focus. It's proven, it's shipping, and it's the fastest way to see the model working. Ops intelligence is the deeper, longer term system for teams who need more than filing.",

    dual_1_tag:         "Current focus",
    dual_1_name:        "OT & Leave Filing",
    dual_1_desc:        "Overtime and leave filing built for shift based teams. Computes Philippine overtime, night differential, and holiday pay correctly, the math the cheap PTO tools skip.",
    dual_1_price:       "$699",
    dual_1_price_note:  "one-time, Standard",
    dual_1_cta:         "See the product →",

    dual_2_tag:         "Also available",
    dual_2_name:        "Ops Intelligence",
    dual_2_desc:        "An automated reporting and on-demand query system for teams running outsourced back-office or data ops functions. Daily reports, exec summaries, plain language answers.",
    dual_2_price:       "$1,500",
    dual_2_price_note:  "one-time, flagship",
    dual_2_cta:         "See the product →",

    // Track record
    log_eyebrow:        "Track record",
    log_h2:             "What we've actually done",
    log_sub:            "Not a list of credentials. An operational ledger: contexts anonymised, outcomes real.",

    log_1_period:       "2024-2026",
    log_1_context:      "Life sciences data intelligence, offshore team of 22, 10+ active workflows",
    log_1_outcome:      "Output scaled 3x on quality compliance documents. Error rate reduced from 3.44% to 1.45%, a 58% reduction, through process discipline, not headcount.",

    log_2_period:       "2024-2026",
    log_2_context:      "Shift based operations, 100+ person organization, manual OT/leave tracking in Google Sheets",
    log_2_outcome:      "Replaced a buggy internal tool and a fully manual spreadsheet process with a working overtime and leave filing system, built in a single day, still in use. Became the basis for DataBridge Ops' second product.",

    log_3_period:       "2024-2025",
    log_3_context:      "Regulatory intelligence, AI translation tool procurement and integration",
    log_3_outcome:      "Led end to end vendor evaluation, onboarding, and workflow integration. Result: 25% reduction in per-page processing time, 1.8x throughput on translated pages year over year.",

    log_4_period:       "2024-2025",
    log_4_context:      "FOIA/ATI request operations, multi-jurisdiction compliance tracking",
    log_4_outcome:      "Request volume doubled (2x) year over year. Managed entirely through manual coordination, the exact problem DataBridge Ops' reporting layer was designed to solve.",

    log_5_period:       "2025",
    log_5_context:      "Invoice and billing audit, regulated industry client",
    log_5_outcome:      "Manual review process identified billing inconsistencies. Approximately $11,000 recovered in a single year through careful document review, not automation.",

    log_6_period:       "Ongoing",
    log_6_context:      "Multi-industry ops delivery, no playbooks, variable contexts",
    log_6_outcome:      "10+ years executing across BPO, life sciences, regulatory compliance, and shift based operations. Built frameworks from scratch repeatedly. DataBridge Ops is what we wished existed.",

    // Stack
    stack_eyebrow:      "How we build",
    stack_h2_line1:     "Lean, deliberate stacks.",
    stack_h2_line2:     "No black boxes.",           // teal italic
    stack_body:         "Different products, different infrastructure, chosen for what each one actually needs, not the same stack applied everywhere out of habit.",

    stack_group_1:      "OT & Leave Filing",
    stack_1_name:       "Next.js",
    stack_1_role:       "Application layer",
    stack_1_desc:       "The employee filing interface, manager approvals, and OT computation engine. Config driven jurisdiction rules, not hardcoded per country.",

    stack_2_name:       "Supabase",
    stack_2_role:       "Database, auth, isolation",
    stack_2_desc:       "Postgres with Row Level Security. Standard tier clients share infrastructure, isolated by database level policy, not just application code. Dedicated tier clients get their own project outright.",

    stack_3_name:       "Cloudflare Pages",
    stack_3_role:       "Hosting",
    stack_3_desc:       "Free tier, commercial use allowed, no per client hosting cost bleed as the client base grows.",

    stack_4_name:       "Lemon Squeezy / Paddle",
    stack_4_role:       "Payments",
    stack_4_desc:       "Merchant of record, handles tax compliance globally. Client statements show the payment processor, not a personal name.",

    stack_group_2:      "Ops Intelligence",
    stack_5_name:       "n8n",
    stack_5_role:       "Automation layer",
    stack_5_desc:       "Self-hosted, open-source. Runs on your infrastructure or ours. Your choice at handoff. No third-party SaaS handling your operational data. No execution limits.",

    stack_6_name:       "Claude API",
    stack_6_role:       "Intelligence layer",
    stack_6_desc:       "Powers the plain-language query interface. Integrated into production ops workflows for regulated industry clients. We know how it behaves under real conditions.",

    stack_7_name:       "Google Sheets / Excel",
    stack_7_role:       "Data source",
    stack_7_desc:       "Your data, where it already lives. No migration. Read-only access by default. We take only what the build requires.",

    stack_8_name:       "Slack / Teams / Chat",
    stack_8_role:       "Delivery layer",
    stack_8_desc:       "Reports go where your team already works. No new dashboard to log into. The system fits your workflow, not the other way around.",

    // How we work
    how_eyebrow:        "How we work",
    how_h2_line1:       "Async. Lean.",
    how_h2_line2:       "No calls.",                 // teal italic
    how_body:           "There's no account manager between you and the person building your system. No handoff from sales to delivery to support. Everything runs through documented, async processes. By design, not by accident.",

    how_1_num:          "01",
    how_1_title:        "Intake, not discovery",
    how_1_body:         "One form collects everything needed to build. No kickoff call. No scoping session. The intake is the brief.",

    how_2_num:          "02",
    how_2_title:        "Build, not manage",
    how_2_body:         "Two weeks from payment to delivery. No status meetings. No check-ins. Progress shared via async update only if something material changes.",

    how_3_num:          "03",
    how_3_title:        "Handoff, not dependency",
    how_3_body:         "Every system comes with full documentation and clear hosting options. You're not locked in. We prefer clients who stay because the system works, not because leaving is hard.",

    // CTA
    cta_eyebrow:        "Ready",
    cta_h2:             "Start with the build that fits right now.",
    cta_primary:        "Start your OT & Leave build, $699",
    cta_secondary:      "Explore Ops Intelligence",
    cta_meta:           "No calls, either way.",
  },

  // -----------------------------------------------
  // PRODUCT 02 LANDING PAGE - product02.html
  // OT and leave filing for shift based teams, PH first
  // -----------------------------------------------
  product02: {

    page_title:         "DataBridge Ops: OT & Leave Filing for Shift-Based Teams",

    // Hero
    hero_eyebrow:       "OT & Leave Filing - Philippines",
    hero_h1:             "Overtime and leave filing, built for shift-based teams.",
    hero_sub:            "The cheap PTO trackers do not compute Philippine overtime. The big HRIS platforms cost too much for one team. DataBridge Ops builds you a simple filing system that handles the OT math correctly, and you own it outright.",
    hero_cta_primary:   "Start your build",
    hero_cta_secondary: "See how it works",
    hero_meta:          "One fixed price. No calls. Delivered in two weeks.",

    tl_title:           "Sample 8-hour shift, computed",
    tl_day:             "2:00 PM to 12:00 AM",
    tl_legend_1:        "Ordinary hours",
    tl_legend_1_rate:   "1.00x",
    tl_legend_2:        "Overtime, past 8 hrs",
    tl_legend_2_rate:   "1.25x",
    tl_legend_3:        "Night differential, 10PM-6AM",
    tl_legend_3_rate:   "+10%",

    // Problem
    problem_eyebrow:    "The problem",
    problem_h2:         "Your team is still tracking overtime in a spreadsheet.",
    problem_body_1:      "If you run a shift-based or 24/7 team, you already know the problem. Someone in IT or admin updates a Google Sheet by hand every cutoff. They compute regular OT, rest day premiums, holiday pay, and night differential, and they hope they got the stacking right. It is slow, it breaks, and a single wrong formula is a compliance risk when DOLE comes to inspect.",
    problem_body_2:     "The off-the-shelf tools do not fix this. They were built for a 9-to-5 office in another country. They track vacation days. They do not know what a night shift differential is.",

    // What you get
    get_eyebrow:        "What you get",
    get_h2:             "A filing system that actually does the math.",
    get_sub:            "Payroll stays your system of record. This handles the filing, the tracking, and the computation that feeds it.",
    get_1:              "Employees file overtime and leave requests in a clean interface.",
    get_2:              "Managers approve or decline in one place, no email chains.",
    get_3:              "The system computes OT premiums, night differential, and holiday and rest day pay automatically, using the correct Philippine rules.",
    get_4:              "Clean reports export straight to whoever runs your payroll.",

    // Why not a PTO app
    why_eyebrow:        "Why not just use a PTO app",
    why_h2:             "Because they cannot compute your overtime.",
    why_body:            "The popular leave trackers start around one to four dollars per user each month. That looks cheap until you count it. DataBridge Ops is a one-time build. You pay once, you own your instance, and it does the exact labor math those tools skip. We are not trying to be an HRIS. That is the point.",

    compare_1_name:     "Generic PTO tool, 100 people",
    compare_1_figure:   "$2,400+ / yr",
    compare_1_note:     "Forever, and it still can't compute a single hour of night differential.",

    compare_2_name:     "Enterprise HRIS",
    compare_2_figure:   "Overkill",
    compare_2_note:     "Handles OT, but heavy and priced for a whole company, not one team.",

    compare_3_name:     "DataBridge Ops",
    compare_3_figure:   "$699 once",
    compare_3_note:     "Correct PH overtime math, yours outright. No per-seat bleed.",

    // Pricing
    pricing_eyebrow:    "Pricing",
    pricing_h2:         "One price. Everything included.",

    price_tag:          "Standard - lead offer",
    price_figure:       "$699",
    price_period:       "one-time",
    price_cta:          "Start your build",
    price_1:            "Your configured OT and leave filing system, hosted by us",
    price_2:            "Employee filing and manager approval workflows",
    price_3:            "Automated OT, night differential, and holiday pay computation",
    price_4:            "Payroll-ready exports, full documentation, walkthrough video",
    price_5:            "One round of revisions",
    price_note:          "Ongoing support, optional, offered after delivery: a $150 per month plan covers support and keeps your OT rules current if labor law changes. Entirely optional, stated here, not sprung on you at handoff.",

    price_sec_label:    "Need your own instance?",
    price_sec_figure:   "Dedicated - $999 one-time",
    price_sec_body:      "Same system, your own private instance. Ongoing hosting and support runs $350 per month if you'd like us to keep managing it.",
    price_sec_cta:      "Ask about Dedicated",

    cross_eyebrow:      "Running more than filing",
    cross_h4:           "Need daily reporting and on-demand ops intelligence too?",
    cross_body:         "DataBridge Ops also builds a full ops intelligence system for teams managing outsourced back-office functions: daily reporting, exec summaries, and plain-language data queries.",
    cross_cta:          "See the flagship system →",

    // How it works
    how_eyebrow:        "How it works",
    how_h2:             "No calls. No meetings. Just the build.",

    how_1_title:        "Tell us about your team",
    how_1_body:         "One intake form: your shift structure, overtime rules, who approves what, and where you file overtime, so we build the right jurisdiction rules.",

    how_2_title:        "We build it",
    how_2_body:         "Configured for your team, delivered in two weeks.",

    how_3_title:        "You review",
    how_3_body:         "Walkthrough video plus documentation, on your own time. One round of revisions included.",

    how_4_title:        "You own it",
    how_4_body:         "Full handoff, with your hosting options stated up front.",

    // FAQ
    faq_eyebrow:        "FAQ",
    faq_1_q:            "Does this replace our payroll system?",
    faq_1_a:            "No. Payroll stays your system of record. This handles filing, tracking, and computation, then hands clean numbers to payroll.",

    faq_2_q:            "What if our overtime rules are unusual?",
    faq_2_a:            "The intake form captures your exact structure. If anything about your setup is non-standard, you describe it there, in writing. Still no call needed.",

    faq_3_q:            "We are not in the Philippines. Can you still build it?",
    faq_3_a:            "Yes. Philippine rules are what we build first, but the system is designed to take other jurisdictions. Tell us where you file overtime on the intake form and we will confirm before you pay.",

    faq_4_q:            "How long does it take?",
    faq_4_a:            "Two weeks from the day you submit intake and payment.",

    faq_5_q:            "Is our data safe?",
    faq_5_a:            "On the standard plan, your data is isolated by strict access controls inside our hosted system. If you need a fully separate, private environment, that's what the Dedicated plan is for.",

    // Final CTA
    final_eyebrow:      "Ready",
    final_h2:           "Stop maintaining the spreadsheet.",
    final_cta:          "Start your build",
    final_meta:         "$699 one-time. Two weeks. No calls.",
  },

};

// -----------------------------------------------
// RENDERER - applies content to the DOM
// Call this at the bottom of each page's script
// -----------------------------------------------
function applyContent(pageKey) {
  const page = DATABRIDGE_CONTENT[pageKey] || {};
  const global = DATABRIDGE_CONTENT.global;
  const merged = { ...global, ...page };

  // Text content
  document.querySelectorAll('[data-content]').forEach(el => {
    const key = el.getAttribute('data-content');
    if (merged[key] !== undefined) el.textContent = merged[key];
  });

  // HTML content (for elements needing links or formatting)
  document.querySelectorAll('[data-content-html]').forEach(el => {
    const key = el.getAttribute('data-content-html');
    if (merged[key] !== undefined) el.innerHTML = merged[key];
  });
}
