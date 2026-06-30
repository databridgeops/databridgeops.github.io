/**
 * DataBridge Ops — Site Content Layer
 * =====================================
 * Edit all website copy here. Changes apply across all pages.
 * Do not edit the HTML files directly for copy changes — edit here only.
 *
 * HOW TO USE:
 * Each page loads this file via <script src="content.js"></script>
 * Elements with a data-content="key" attribute get their text from here.
 * Elements with a data-content-html="key" get innerHTML (for links/bold).
 *
 * SECTIONS:
 * - global        : nav, footer, shared labels
 * - index         : landing page (hero, pain, layers, how, pricing, form)
 * - about         : about page sections
 * - terms         : Terms of Service
 * - dpa           : Data Processing Agreement
 */

const DATABRIDGE_CONTENT = {

  // ─────────────────────────────────────────────
  // GLOBAL — shared across all pages
  // ─────────────────────────────────────────────
  global: {
    brand:              "DataBridge Ops",
    brand_suffix:       "Ops",
    email:              "build@databridgeops.com",
    domain:             "databridgeops.com",
    copyright:          "© 2026 DataBridge Ops",
    tagline:            "Ops Intelligence for Outsourced Teams",

    // Nav links
    nav_problem:        "The Problem",
    nav_layers:         "What You Get",
    nav_pricing:        "Pricing",
    nav_about:          "About",
    nav_cta:            "Get started at $1,500",

    // Footer
    footer_terms:       "Terms",
    footer_dpa:         "DPA",
    footer_about:       "About",
  },

  // ─────────────────────────────────────────────
  // LANDING PAGE — index.html
  // ─────────────────────────────────────────────
  index: {

    // Hero
    hero_eyebrow:       "Ops Intelligence for Outsourced Teams",
    hero_h1_line1:      "Your team's data,",
    hero_h1_line2:      "working for you",           // rendered in teal italic
    hero_sub:           "DataBridge Ops turns your outsourced team's spreadsheet data into automated daily reports, executive summaries, and on-demand operational answers, built and delivered in two weeks. No calls required.",
    hero_cta_primary:   "Get a free ops audit",
    hero_cta_secondary: "See how it works →",
    hero_meta:          "No payment yet · Answer 5 questions · We respond within 24 hours",

    // Ticker
    ticker_label:       "#ops-reporting · live signal feed",

    // Pain section
    pain_eyebrow:       "The problem",
    pain_h2_line1:      "Stop assembling data.",
    pain_h2_line2:      "Start making decisions.",  // teal italic
    pain_body:          "You're accountable upward for a team that isn't in the same room. Every exec presentation, every resource call, every budget conversation needs data you have to request, then wait for someone else to pull.",

    pain_1_title:       "Daily reports built by hand",
    pain_1_body:        "Your ops manager compiles and posts productivity data manually, in Slack, Teams, or wherever your team talks. Every day. Time that should be spent on decisions is spent on assembly.",

    pain_2_title:       "Monthly scramble before exec calls",
    pain_2_body:        "Quarterly reporting means 1–2 weeks of back-and-forth pulling data from multiple sheets. You're assembling the story instead of telling it.",

    pain_3_title:       "Ad-hoc questions take days",
    pain_3_body:        '"What does reallocation look like if load surges on workflow B?" That question shouldn\'t take a week to answer. But right now, it does.',

    // Layers section
    layers_eyebrow:     "What DataBridge Ops delivers",
    layers_h2_line1:    "Three things your team's data",
    layers_h2_line2:    "should already be doing",   // teal italic
    layers_body:        "No new tools for your team to learn. DataBridge Ops reads from your existing Google Sheets or Excel files and turns that data into intelligence you can act on.",

    l1_badge:           "L1",
    l1_title:           "Automated daily & shift reporting",
    l1_body:            "Structured productivity reports generated and pushed to Slack, Microsoft Teams, Google Chat, or email automatically: start of shift, mid-day, and end of day. Volume, headcount, speed, workflow metrics. No manual compilation, ever.",
    l1_tag:             "Eliminates manual daily reporting",

    l2_badge:           "L2",
    l2_title:           "Executive reporting automation",
    l2_body:            "Monthly and quarterly summaries auto-generated from the same data, formatted for your exec audience, delivered as slides or PDF on a scheduled trigger. The report builds itself.",
    l2_tag:             "Eliminates quarterly scramble",

    l3_badge:           "L3",
    l3_title:           "On-demand operational intelligence",
    l3_body:            "Ask operational questions in plain language, get data-backed answers in seconds. Reallocation scenarios, tool credit tracking, throughput benchmarks. No manual investigation required.",
    l3_tag:             "The high-value layer",

    // How it works
    how_eyebrow:        "How it works",
    how_h2_line1:       "From intake to live system",
    how_h2_line2:       "in two weeks",              // teal italic

    step1_num:          "01",
    step1_title:        "Tell us about your team",
    step1_body:         "Answer 5 questions about your workflows, data, and reporting pain. No calls. Takes about 3 minutes.",

    step2_num:          "02",
    step2_title:        "We review and respond",
    step2_body:         "Within 24 hours we confirm your setup is a fit, or offer a free ops audit if you need more detail first.",

    step3_num:          "03",
    step3_title:        "System is configured",
    step3_body:         "Automation layer, reporting outputs, and intelligence interface built to your spec. No check-in calls required.",

    step4_num:          "04",
    step4_title:        "Live in your stack",
    step4_body:         "Loom walkthrough + full Notion documentation. One round of async revisions included. Maintenance retainer offered at handoff.",

    // Deliverables
    del_eyebrow:        "What's included",
    del_h2_line1:       "Everything you need.",
    del_h2_line2:       "Nothing you don't.",        // teal italic

    del_1: "Configured automation layer reading from your data source",
    del_2: "Slack, Microsoft Teams, or Google Chat integration (or email) for daily/shift reports",
    del_3: "Executive reporting template, auto-populated on schedule",
    del_4: "AI-powered query interface for on-demand operational questions",
    del_5: "Notion client portal with full system documentation",
    del_6: "Loom walkthrough video covering the complete system",
    del_7: "One round of async revisions included",
    del_8: "Works with Google Sheets or Microsoft Excel, your choice",

    // Pricing
    pricing_eyebrow:    "Pricing",
    pricing_h2_line1:   "One price. One scope.",
    pricing_h2_line2:   "No surprises.",             // teal italic
    pricing_amount:     "$1,500",
    pricing_label:      "USD · one-time build fee · delivered in 2 weeks",
    pricing_cta:        "Get started",
    pricing_disclaimer: "No hidden fees. Build fee includes your first month of infrastructure hosting. After month 1, choose: our maintenance retainer ($350/month, hosting + support included), or transfer to your own infrastructure (~$5–10/month). All costs disclosed before you pay.",

    pricing_inc_1: "All three intelligence layers (L1, L2, L3)",
    pricing_inc_2: "Configured for your team's workflows and metrics",
    pricing_inc_3: "Full documentation and Loom walkthrough",
    pricing_inc_4: "One round of async revisions",
    pricing_inc_5: "Works with Google Sheets or Excel",
    pricing_inc_6: "No calls required at any stage",

    // CTA / Form section
    cta_eyebrow:        "Get started",
    cta_h2:             "Tell us about your team",
    cta_body:           "Answer a few questions about your setup. No payment yet. We confirm your situation is a fit before anything else. If you want more detail first, request a free ops audit instead.",

    cta_audit_label:    "Not sure if DataBridge Ops fits?",
    cta_audit_link:     "Request a free ops audit →",
    cta_audit_sub:      "2–3 day async report, no cost, no call.",

    form_label_company:   "Company name",
    form_label_email:     "Work email address",
    form_label_teamsize:  "Outsourced team size",
    form_label_source:    "Where does your team's data live?",
    form_label_pain:      "What's your biggest reporting or visibility pain right now?",
    form_submit:          "Submit. We'll be in touch within 24 hours",
    form_note:            "No payment yet. We confirm your setup is a fit before sending a payment link. No spam, no calls.",

    form_opt_size_1:  "1–10 people",
    form_opt_size_2:  "11–25 people",
    form_opt_size_3:  "26–50 people",
    form_opt_size_4:  "50+ people",

    form_opt_data_1:  "Google Sheets",
    form_opt_data_2:  "Microsoft Excel",
    form_opt_data_3:  "Both",
    form_opt_data_4:  "Other",
  },

  // ─────────────────────────────────────────────
  // ABOUT PAGE — about.html
  // ─────────────────────────────────────────────
  about: {

    page_title:         "About: DataBridge Ops",

    hero_question:      "// who builds a tool like this?",
    hero_h1_line1:      "People who've done",
    hero_h1_line2:      "this work themselves.", // teal italic
    hero_sub:           "DataBridge Ops wasn't designed from a whiteboard. It was designed from inside a data operations team, managing offshore workflows, assembling manual reports, and commissioning data investigations for decisions that needed answers yesterday.",

    cred_1_title:       "Operators, not consultants.",
    cred_1_body:        "We've run the kind of teams our clients outsource. Accountable for output, not just observing it.",

    cred_2_title:       "Regulated industry experience.",
    cred_2_body:        "We've integrated AI tools into live production workflows where accuracy directly affected client-facing products.",

    cred_3_title:       "Privacy-first by default.",
    cred_3_body:        "We've worked in environments where data handling is a regulated obligation. That shapes how we build everything.",

    // Track record
    log_eyebrow:        "Track record",
    log_h2:             "What we've actually done",
    log_sub:            "Not a list of credentials. An operational ledger: contexts anonymised, outcomes real.",

    // Stack
    stack_eyebrow:      "How we build",
    stack_h2_line1:     "A lean, deliberate stack.",
    stack_h2_line2:     "No black boxes.",           // teal italic
    stack_body:         "Every DataBridge Ops system is built on the same four components, chosen because they're open, auditable, and don't require your data to pass through systems you didn't choose.",

    stack_1_name:       "n8n",
    stack_1_role:       "Automation layer",
    stack_1_desc:       "Self-hosted, open-source. Runs on your infrastructure or ours. Your choice at handoff. No third-party SaaS handling your operational data. No execution limits.",

    stack_2_name:       "Claude API",
    stack_2_role:       "Intelligence layer (L3)",
    stack_2_desc:       "Powers the plain-language query interface. We've integrated Claude into production ops workflows for regulated industry clients. We know how it behaves under real conditions.",

    stack_3_name:       "Google Sheets / Excel",
    stack_3_role:       "Data source",
    stack_3_desc:       "Your data, where it already lives. No migration. No new tools for your team to learn. Read-only access by default. We take only what the build requires.",

    stack_4_name:       "Slack / Teams / Chat",
    stack_4_role:       "Delivery layer",
    stack_4_desc:       "Reports go where your team already works, whether that's Slack, Microsoft Teams, or Google Chat. No new dashboard to log into. No training required. The system fits around your workflow, not the other way around.",

    // Privacy
    privacy_eyebrow:    "Data privacy",
    privacy_h2_line1:   "Your data stays yours.",
    privacy_h2_line2:   "No exceptions.",            // teal italic
    privacy_body:       "We've worked in environments where data handling is a regulated obligation, not a checkbox. That shapes how we build DataBridge Ops systems.",

    p1_label:           "Principle 01",
    p1_title:           "We read. We don't store.",
    p1_body:            "DataBridge Ops reads your operational data on trigger to generate reports and answers. We don't copy it to any DataBridge Ops-owned database. It passes through the automation layer and goes to its destination. That's it.",

    p2_label:           "Principle 02",
    p2_title:           "Read-only by default.",
    p2_body:            "We request the minimum access needed to build your system. Read-only access to your specified data sources. No admin permissions. No access beyond what the build requires.",

    p3_label:           "Principle 03",
    p3_title:           "You can revoke access at any time.",
    p3_body:            "Your Notion portal includes step-by-step instructions for disconnecting DataBridge Ops' access to your data sources. You don't need to ask us. You're in control.",

    p4_label:           "Principle 04",
    p4_title:           "No AI training on your data.",
    p4_body:            "Your operational data is not used to improve DataBridge Ops products, train AI models, or inform any other client's system. What's yours stays yours.",

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
    how_3_body:         "Every system comes with full documentation and the option to move it to your own infrastructure. You're not locked in. We prefer clients who stay because the system works, not because leaving is hard.",

    // CTA
    cta_eyebrow:        "Ready to see it in action?",
    cta_h2_line1:       "Start with a free ops audit.",
    cta_h2_line2:       "No commitment required.",   // teal italic
    cta_body:           "Submit the survey, describe your team's situation, and we'll deliver a structured async report: what we see, what it means, and what DataBridge Ops would build for you. Yours to keep regardless of next steps.",
    cta_primary:        "Request a free audit",
    cta_secondary:      "See the product →",
  },

};

// ─────────────────────────────────────────────
// RENDERER — applies content to the DOM
// Call this at the bottom of each page's script
// ─────────────────────────────────────────────
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
