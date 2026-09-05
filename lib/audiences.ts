// The four audience pages. Same shape, different argument: a solo agent, a team lead, a
// broker-owner, and a property manager each hire this for a different reason, so each
// page leads with the problem that audience actually has.

export type Audience = {
  slug: string;
  label: string;
  eyebrow: string;
  title: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  problem: { heading: string; body: string[] };
  benefits: { title: string; body: string }[];
  closing: { heading: string; body: string };
};

export const AUDIENCE_PAGES: Audience[] = [
  {
    slug: "for-agents",
    label: "For Solo Agents",
    eyebrow: "For Solo Agents",
    title: "You Are the Whole Business. That Is the Problem.",
    intro:
      "Prospecting, showings, paperwork, follow-up, and marketing all land on one person. The Real Estate Agent takes the half that does not need you.",
    metaTitle: "AI Assistant for Solo Real Estate Agents",
    metaDescription:
      "A private AI agent for solo real estate agents. Handles lead follow-up, transaction deadlines, CRM upkeep, and past client outreach so one person can run a full pipeline.",
    keywords: [
      "AI assistant for real estate agents",
      "real estate AI agent",
      "solo real estate agent tools",
      "AI lead follow up real estate",
      "real estate transaction coordinator AI",
    ],
    problem: {
      heading: "The Follow-Up Gap Is Where Solo Agents Lose Money",
      body: [
        "You do not lose deals because you are a bad salesperson. You lose them because a lead came in while you were at a closing, and by the time you got back to your desk there were nine other things ahead of it.",
        "One person can only hold so many threads. The leads that go cold, the past clients who drift, the contingency date nobody flagged: none of that is a skill problem. It is a capacity problem, and capacity is the one thing you cannot sell your way out of.",
      ],
    },
    benefits: [
      {
        title: "Every Lead Gets a Real Follow-Up",
        body: "New inquiries get a response in minutes, not the next morning. Old prospects get re-engaged on a cadence you would never keep manually.",
      },
      {
        title: "Nothing Expires Without Warning",
        body: "Inspection periods, financing contingencies, and closing dates get flagged before they become emergencies. You stop finding out late.",
      },
      {
        title: "Your Database Stays Clean",
        body: "Contact records get updated and conversations logged automatically, so your CRM is worth opening instead of being a graveyard.",
      },
      {
        title: "Past Clients Stay Warm",
        body: "Anniversary notes, market updates, and check-ins go out on schedule. Referrals come from people who still remember your name.",
      },
      {
        title: "You Start the Day Informed",
        body: "A pipeline brief lands before 8am with what closed, what is pending, and what needs you before your first showing.",
      },
      {
        title: "It Sounds Like You",
        body: "The agent is trained on how you actually write. You approve the templates before anything goes out under your name.",
      },
    ],
    closing: {
      heading: "Run a Full Pipeline Without Hiring",
      body: "Build your agent online in about fifteen minutes, or book a consultation and we will configure it around your CRM and your market.",
    },
  },
  {
    slug: "for-teams",
    label: "For Teams",
    eyebrow: "For Teams",
    title: "Your Agents Should Not Need You for Everything.",
    intro:
      "Team leads spend their day answering questions the team could answer themselves. The Real Estate Agent gives every agent the same standard of follow-up without routing it all through you.",
    metaTitle: "AI for Real Estate Teams and Team Leaders",
    metaDescription:
      "Give every agent on your team the leverage of a full-time assistant. Lead routing, per-agent follow-up, transaction tracking, and leader visibility across the whole pipeline.",
    keywords: [
      "AI for real estate teams",
      "real estate team lead tools",
      "lead routing real estate AI",
      "real estate team productivity",
      "AI assistant real estate team",
    ],
    problem: {
      heading: "The Team Lead Becomes the Bottleneck",
      body: [
        "You built a team so the business would scale past you. Then every agent started calling you about the same six questions, and now your day is triage instead of production.",
        "The uncomfortable part is that follow-up quality varies by agent. Your best producer works a lead like a professional; your newest one lets it sit for two days. The team's reputation is set by whoever is slowest.",
      ],
    },
    benefits: [
      {
        title: "One Standard Across the Team",
        body: "Every lead gets worked the same way regardless of which agent owns it. Your newest hire follows up like your best producer.",
      },
      {
        title: "Leads Route Themselves",
        body: "New inquiries go to the right agent by territory, price band, or rotation, and the follow-up starts immediately.",
      },
      {
        title: "Per-Agent Pipelines, One View",
        body: "Each agent gets their own follow-up and their own brief. You get visibility across all of it without asking for updates.",
      },
      {
        title: "Fewer Questions Land on You",
        body: "Deadlines, next steps, and status are surfaced to the agent who needs them, so they stop being surfaced to you.",
      },
      {
        title: "Onboarding Gets Shorter",
        body: "A new agent inherits the team's follow-up standard on day one instead of learning it over six months.",
      },
      {
        title: "Nothing Falls Between Agents",
        body: "Handoffs, co-listings, and covered showings keep their history, so the client never has to repeat themselves.",
      },
    ],
    closing: {
      heading: "Give the Whole Team the Same Leverage",
      body: "Book a consultation and we will scope the routing rules, per-agent configuration, and leader visibility around how your team already works.",
    },
  },
  {
    slug: "for-brokerages",
    label: "For Brokerages",
    eyebrow: "For Brokerages",
    title: "Recruit on It. Retain on It.",
    intro:
      "Agents join brokerages for leverage and leave when they stop feeling it. The Real Estate Agent is leverage you can put in every agent's hands on their first day.",
    metaTitle: "AI for Real Estate Brokerages and Broker-Owners",
    metaDescription:
      "Deploy a private AI agent across your brokerage. Give every agent full-time assistant leverage, raise follow-up standards office-wide, and make recruiting easier.",
    keywords: [
      "AI for real estate brokerages",
      "broker owner technology",
      "real estate brokerage recruiting tools",
      "brokerage agent productivity",
      "AI agent real estate office",
    ],
    problem: {
      heading: "Your Agents Are Your Product, and They Are Under-Equipped",
      body: [
        "Every brokerage promises support. Most deliver a CRM license, a training calendar, and a hope that agents use both. The agents who need help the most are the least likely to ask for it.",
        "Meanwhile recruiting is a knife fight over splits. Splits are the one lever every competitor can match instantly. Leverage is not.",
      ],
    },
    benefits: [
      {
        title: "A Recruiting Argument That Is Not Split",
        body: "Offer something a competing brokerage cannot match by moving a number: a private agent configured for each producer.",
      },
      {
        title: "Follow-Up Standards, Office-Wide",
        body: "Raise the floor across the whole roster instead of coaching the same follow-up basics one agent at a time.",
      },
      {
        title: "Fewer Deals Lost to Process",
        body: "Missed contingencies and stalled transactions become rare, which is a compliance and reputation win as much as a revenue one.",
      },
      {
        title: "Faster Ramp for New Agents",
        body: "A new licensee produces sooner when the follow-up discipline is built in rather than learned the hard way.",
      },
      {
        title: "Visibility Without Micromanaging",
        body: "See where pipeline actually stands across offices without asking managers to assemble reports.",
      },
      {
        title: "Deployed and Managed for You",
        body: "We handle configuration and integration per agent. Your staff does not become an internal help desk.",
      },
    ],
    closing: {
      heading: "Equip the Whole Roster",
      body: "Brokerage deployments are scoped on a call: how many agents, which CRM, and how you want configuration handled per office.",
    },
  },
  {
    slug: "for-property-managers",
    label: "For Property Managers",
    eyebrow: "For Property Managers",
    title: "The Work Never Stops Coming In.",
    intro:
      "Tenants, owners, vendors, renewals, and maintenance all arrive at once and none of them wait. The Real Estate Agent keeps the queue moving.",
    metaTitle: "AI for Property Managers and Property Management Companies",
    metaDescription:
      "An AI agent for property management: tenant and owner communication, renewal tracking, maintenance follow-through, and owner reporting across a full portfolio.",
    keywords: [
      "AI for property managers",
      "property management automation",
      "tenant communication AI",
      "property management owner reporting",
      "AI assistant property management",
    ],
    problem: {
      heading: "Volume, Not Difficulty, Is What Breaks Property Management",
      body: [
        "No single task in property management is hard. There are just hundreds of them a week, they arrive from five directions, and every one of them is somebody's emergency.",
        "The failure mode is not a dropped ball on a big thing. It is a renewal nobody started sixty days out, a work order nobody closed the loop on, and an owner who had to ask twice for a report.",
      ],
    },
    benefits: [
      {
        title: "Renewals Start on Time",
        body: "Lease expirations get worked on a schedule instead of surfacing the month they lapse.",
      },
      {
        title: "Maintenance Loops Get Closed",
        body: "Work orders get followed through to completion, with tenants and owners updated at each step.",
      },
      {
        title: "Owner Reporting Without the Scramble",
        body: "Monthly statements and portfolio updates get drafted and sent on cadence, so owners stop chasing you.",
      },
      {
        title: "Tenant Communication That Keeps Up",
        body: "Routine questions get answered quickly and consistently, and the ones that need a person get escalated with context.",
      },
      {
        title: "Vendor Coordination",
        body: "Scheduling, confirmations, and follow-ups with vendors stop living in one person's text messages.",
      },
      {
        title: "One View Across the Portfolio",
        body: "Whatever the door count, the open items across every property are visible in one place every morning.",
      },
    ],
    closing: {
      heading: "Keep the Whole Portfolio Moving",
      body: "Book a consultation and we will scope it around your door count, your software, and how your owners expect to be kept informed.",
    },
  },
];

export function getAudience(slug: string) {
  return AUDIENCE_PAGES.find((a) => a.slug === slug);
}
