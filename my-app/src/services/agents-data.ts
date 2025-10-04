
//my-app\src\services\agents-data.ts
export const agents = [
  {
    id: "code-assistant",
    name: "Code Assistant Pro",
    description:
      "Advanced AI-powered coding assistant that helps you write, debug, and optimize code across multiple programming languages.",
    category: "Development",
    icon: "💻",
    image: "/img5.jpg",
    videos: [
      {
        thumbnail: "/img5.jpg",
        url: "https://www.w3schools.com/html/mov_bbb.mp4",
        title: "Auto-Debug Workflow",
        subtitle: "Bug trace → fix suggestion → patch apply",
        duration: "1m 12s",
        tags: ["JS/TS", "Unit Tests", "CI"],
        description:
          `Problem: Legacy repo mei flaky tests aur silent errors.
Solution: Agent static analysis + test runner se root-cause trace karta hai, fix diff banata hai, aur PR raise karta hai.

What you get:
• Inputs: Git repo link, failing test logs
• Output: Clean patch + PR description + changelog
• Turnaround: ~13 min per bug
• Best for: JS/TS/Node projects, monorepos, quick hotfixes`
      },
      {
        thumbnail: "/img6.jpg",
        url: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
        title: "Refactor & Optimize",
        subtitle: "Dead code removal + perf hints",
        duration: "58s",
        tags: ["Refactor", "Performance"],
        description:
          `Problem: Codebase heavy & slow builds.
Solution: Agent hotspots detect karta hai, functions ko split & inline karta hai, aur perf report nikalta hai.

Details:
• Inputs: Repo + build stats
• Output: Refactor patch + before/after metrics
• Stack: TS/JS, Python, Go
• Bonus: Tree-shaking suggestions`
      },
      {
        thumbnail: "/visualization-demo-thumbnail.jpg",
        url: "https://www.w3schools.com/html/movie.mp4",
        title: "Feature Scaffolding",
        subtitle: "CRUD + tests + basic UI in minutes",
        duration: "1m 40s",
        tags: ["Scaffold", "Boilerplate", "Tests"],
        description:
          `Use case: Jaldi MVP banana.
Agent models, routes, basic UI, aur test suite generate karta hai—team standards ke mutabiq.

Package:
• Inputs: Entity spec (fields, rules)
• Output: CRUD endpoints, UI screens, unit tests
• Options: Prisma/Drizzle, Next.js/Express`
      },
    ],
    developer: {
        id: "1",
      name: "Sarah Chen",
      image: "/dev1.jpg",
      bio: "Software developer and prompt engineer focused on AI productivity tools. Enjoys transforming manual workflows into smart, automated experiences.",
      whatsapp: "https://wa.me/1234567890",
      github: "https://github.com/alexjohnson",
      linkedin: "https://linkedin.com/in/alexjohnson",
    },
    features: ["Multi-language support", "Real-time debugging", "Code optimization", "Smart autocomplete"],
  },

  {
    id: "content-creator",
    name: "Content Creator AI",
    description:
      "Generate high-quality content for blogs, social media, and marketing campaigns with AI-powered creativity.",
    category: "Marketing",
    icon: "✍️",
    image: "/img6.jpg",
    videos: [
      {
        thumbnail: "/img5.jpg",
        url: "https://www.w3schools.com/html/mov_bbb.mp4",
        title: "Keyword→Article Workflow",
        subtitle: "SEO brief se publish-ready draft",
        duration: "1m 05s",
        tags: ["SEO", "Long-form", "Outline"],
        description:
          `Process:
1) Keyword intent detect
2) H2/H3 outline + FAQs
3) Draft + meta tags + internal links

Deliverables:
• Google-friendly structure
• Plagiarism-safe draft
• Tone & region presets`
      },
      {
        thumbnail: "/img6.jpg",
        url: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
        title: "Multi-Platform Social",
        subtitle: "1 brief → 5 network posts",
        duration: "47s",
        tags: ["Instagram", "LinkedIn", "X/Twitter"],
        description:
          `Ek hi brief se platform-specific copies, hooks, CTAs, aur hashtags. 
Outputs: 5x posts + thumbnail text suggestions + alt text.`
      },
      {
        thumbnail: "/visualization-demo-thumbnail.jpg",
        url: "https://www.w3schools.com/html/movie.mp4",
        title: "Brand Voice Tuning",
        subtitle: "Samples se consistent tone",
        duration: "1m 22s",
        tags: ["Style Guide", "LLM Tuning"],
        description:
          `Upload 3–5 sample posts, agent tone learn karta hai.
Result: Consistent brand voice across blogs & social.`
      },
    ],
    developer: {
         id: "2",
      name: "James Wilson",
      image: "/dev2.png",
      bio: "AI engineer specializing in automation and chatbot interaction. Passionate about building scalable AI solutions and experimenting with LLMs to solve real-world problems.",
      whatsapp: "https://wa.me/1234567891",
      github: "https://github.com/sarahchen",
      linkedin: "https://linkedin.com/in/sarahchen",
    },
    features: ["SEO optimization", "Multi-platform support", "Tone customization", "Plagiarism check"],
  },

  {
    id: "data-analyst",
    name: "Data Analyst Bot",
    description:
      "Analyze complex datasets, generate insights, and create visualizations with powerful AI-driven analytics.",
    category: "Analytics",
    icon: "📊",
    image: "/img7.jpg",
    videos: [
      {
        thumbnail: "/img5.jpg",
        url: "https://www.w3schools.com/html/mov_bbb.mp4",
        title: "CSV→Dashboard",
        subtitle: "Auto EDA + charts",
        duration: "54s",
        tags: ["EDA", "Charts", "Export"],
        description:
          `Drop CSV → agent summary stats, anomalies, aur interactive charts banata hai.
Output: Shareable dashboard + PNG exports.`
      },
      {
        thumbnail: "/img6.jpg",
        url: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
        title: "Forecasting Pipeline",
        subtitle: "ARIMA/Prophet quick setup",
        duration: "1m 10s",
        tags: ["Time Series", "Forecast"],
        description:
          `Inputs: Date, metric
Output: Forecast horizon + confidence bands + feature notes.
Great for sales & inventory planning.`
      },
      {
        thumbnail: "/visualization-demo-thumbnail.jpg",
        url: "https://www.w3schools.com/html/movie.mp4",
        title: "SQL Agent",
        subtitle: "Natural language → SQL",
        duration: "1m 03s",
        tags: ["SQL", "NL→SQL"],
        description:
          `Ask in plain English, get safe SQL + explanation + visualization.
Supports Postgres, MySQL, BigQuery.`
      },
        {
        thumbnail: "/visualization-demo-thumbnail.jpg",
        url: "https://www.w3schools.com/html/movie.mp4",
        title: "SQL Agent",
        subtitle: "Natural language → SQL",
        duration: "1m 03s",
        tags: ["SQL", "NL→SQL"],
        description:
          `Ask in plain English, get safe SQL + explanation + visualization.
Supports Postgres, MySQL, BigQuery.`
      },
    ],
    developer: {
         id: "3",
      name: "Emma Johnson",
      image: "/dev3.jpg",
      bio: "Generative AI specialist who builds intelligent agents for startups. Dedicated to innovation and pushing the boundaries of human-AI collaboration.",
      whatsapp: "https://wa.me/1234567892",
      github: "https://github.com/michaelrodriguez",
      linkedin: "https://linkedin.com/in/michaelrodriguez",
    },
    features: ["Predictive analytics", "Custom visualizations", "Real-time processing", "Export reports"],
  },

  {
    id: "customer-support",
    name: "Support Agent AI",
    description:
      "Provide 24/7 customer support with intelligent responses, ticket management, and sentiment analysis.",
    category: "Customer Service",
    icon: "🎧",
    image: "/img8.jpg",
    videos: [
      {
        thumbnail: "/img5.jpg",
        url: "https://www.w3schools.com/html/mov_bbb.mp4",
        title: "Zendesk Auto-Reply",
        subtitle: "Priority triage + reply drafts",
        duration: "41s",
        tags: ["Zendesk", "Macros"],
        description:
          `Auto-classify, SLA-wise prioritize, aur reply drafts banaye.
Hand-off ready for agents with context blocks.`
      },
      {
        thumbnail: "/img6.jpg",
        url: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
        title: "Sentiment Alerts",
        subtitle: "Churn risk ping to Slack",
        duration: "36s",
        tags: ["Alerts", "Slack"],
        description:
          `Negative sentiment detect → Slack alert + ticket link + suggested response.`
      },
      {
        thumbnail: "/visualization-demo-thumbnail.jpg",
        url: "https://www.w3schools.com/html/movie.mp4",
        title: "Knowledge Base Bot",
        subtitle: "Docs se instant answers",
        duration: "1m 01s",
        tags: ["RAG", "Docs"],
        description:
          `Upload docs/FAQs → agent customers ko precise answers deta.
Analytics: top queries, gaps, deflection rate.`
      },
    ],
    developer: {
         id: "4",
      name: "Michael Chen",
      image: "/dev2.png",
      bio: "Software developer and prompt engineer focused on AI productivity tools. Enjoys transforming manual workflows into smart, automated experiences.",
      whatsapp: "https://wa.me/1234567893",
      github: "https://github.com/emilywatson",
      linkedin: "https://linkedin.com/in/emilywatson",
    },
    features: ["Multi-language support", "Sentiment analysis", "Auto-routing", "Knowledge base integration"],
  },

  {
    id: "design-assistant",
    name: "Design Studio AI",
    description: "Create stunning designs, mockups, and prototypes with AI-powered design tools and suggestions.",
    category: "Design",
    icon: "🎨",
    image: "/img5.jpg",
    videos: [
      {
        thumbnail: "/img5.jpg",
        url: "https://www.w3schools.com/html/mov_bbb.mp4",
        title: "Brand Kit Generator",
        subtitle: "Logo → palette → components",
        duration: "52s",
        tags: ["Branding", "UI Kit"],
        description:
          `Give logo/colors → agent palette, type scale, buttons, inputs generate karta hai.
Export: Figma & CSS tokens.`
      },
      {
        thumbnail: "/img6.jpg",
        url: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
        title: "Landing Page Draft",
        subtitle: "Copy + layout + assets",
        duration: "1m 18s",
        tags: ["Hero", "Sections"],
        description:
          `Brief se responsive landing section blocks. Includes headings, subcopy, CTAs, and placeholder images.`
      },
      {
        thumbnail: "/visualization-demo-thumbnail.jpg",
        url: "https://www.w3schools.com/html/movie.mp4",
        title: "Design Review Bot",
        subtitle: "Heuristics + accessibility notes",
        duration: "45s",
        tags: ["A11y", "Heuristics"],
        description:
          `Checks contrast, tap targets, spacing, and gives quick fix notes.
Great for rapid UX polish.`
      },
    ],
    developer: {
         id: "5",
      name: "Sarah Martinez",
      image:"/dev2.png",
      bio:"Full-stack developer with a focus on AI integrations and cloud deployment. Loves crafting seamless user experiences powered by intelligent systems.",
      whatsapp: "https://wa.me/1234567894",
      github: "https://github.com/davidkim",
      linkedin: "https://linkedin.com/in/davidkim",
    },
    features: ["Template library", "Brand consistency", "Collaboration tools", "Export to multiple formats"],
  },

  {
    id: "sales-optimizer",
    name: "Sales Optimizer Pro",
    description: "Boost your sales with AI-driven lead scoring, pipeline management, and predictive forecasting.",
    category: "Sales",
    icon: "💼",
    image: "/img3.jpg",
    videos: [
      {
        thumbnail: "/img5.jpg",
        url: "https://www.w3schools.com/html/mov_bbb.mp4",
        title: "Lead Scoring Flow",
        subtitle: "Signals → score → next action",
        duration: "49s",
        tags: ["CRM", "ICP"],
        description:
          `Pulls CRM + website events → score, heat, and recommended outreach step (email/call/sequences).`
      },
      {
        thumbnail: "/img6.jpg",
        url: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
        title: "Pipeline Health",
        subtitle: "Stalls detection + nudges",
        duration: "39s",
        tags: ["Stage", "Win Rate"],
        description:
          `Detects stale deals, nudges owners, and drafts follow-up in their voice.`
      },
      {
        thumbnail: "/visualization-demo-thumbnail.jpg",
        url: "https://www.w3schools.com/html/movie.mp4",
        title: "Forecast Assistant",
        subtitle: "Category-wise projection",
        duration: "1m 07s",
        tags: ["Forecast", "Scenario"],
        description:
          `Bottom-up forecast with scenarios (base/optimistic/conservative) + PDF export for leadership.`
      },
        {
        thumbnail: "/img5.jpg",
        url: "https://www.w3schools.com/html/mov_bbb.mp4",
        title: "Lead Scoring Flow",
        subtitle: "Signals → score → next action",
        duration: "49s",
        tags: ["CRM", "ICP"],
        description:
          `Pulls CRM + website events → score, heat, and recommended outreach step (email/call/sequences).`
      },
      {
        thumbnail: "/visualization-demo-thumbnail.jpg",
        url: "https://www.w3schools.com/html/movie.mp4",
        title: "Forecast Assistant",
        subtitle: "Category-wise projection",
        duration: "1m 07s",
        tags: ["Forecast", "Scenario"],
        description:
          `Bottom-up forecast with scenarios (base/optimistic/conservative) + PDF export for leadership.`
      },
    ],
    developer: {
         id: "6",
      name: "David Kim",
      image:"/dev2.png",
      bio:"AI engineer specializing in automation and chatbot interaction. Passionate about building scalable AI solutions and experimenting with LLMs to solve real-world problems.",
      whatsapp: "https://wa.me/1234567895",
      github: "https://github.com/jessicamartinez",
      linkedin: "https://linkedin.com/in/jessicamartinez",
    },
    features: ["Lead scoring", "Pipeline visualization", "Forecasting", "CRM integration"],
  },
]




// export const agents = [
//   {
//     id: "code-assistant",
//     name: "Code Assistant Pro",
//     description:
//       "Advanced AI-powered coding assistant that helps you write, debug, and optimize code across multiple programming languages.",
//     category: "Development",
//     icon: "💻",
//     image: "https://images.unsplash.com/photo-1581090700227-4c4f50c5254e?auto=format&fit=crop&w=1200&q=80",
//     videos: [
//       {
//         thumbnail: "https://images.unsplash.com/photo-1581091215367-59ab86a0e1e9?auto=format&fit=crop&w=800&q=80",
//         url: "https://player.vimeo.com/external/370855368.sd.mp4?s=168c42b6c8f1888cdb14d89dbd40d248e92d9270&profile_id=164&oauth2_token_id=57447761",
//         title: "Auto-Debug Workflow",
//         subtitle: "Bug trace → fix suggestion → patch apply",
//         duration: "1m 12s",
//         tags: ["JS/TS", "Debug", "CI"],
//         description: "AI-powered debugging that scans your repo, detects issues, and generates fixes automatically."
//       },
//        {
//         thumbnail:
//           "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
//         url:
//           "https://player.vimeo.com/external/319469214.sd.mp4?s=2c0a63ec95e3e1f7b0a2d48c7467ac2d06c7c1e1&profile_id=164&oauth2_token_id=57447761",
//         title: "Test Generation",
//         subtitle: "Source → unit tests",
//         duration: "58s",
//         tags: ["Testing", "Coverage"],
//         description: "Generate unit tests with high coverage from source files.",
//       }, {
//         thumbnail:
//           "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
//         url:
//           "https://player.vimeo.com/external/319469214.sd.mp4?s=2c0a63ec95e3e1f7b0a2d48c7467ac2d06c7c1e1&profile_id=164&oauth2_token_id=57447761",
//         title: "Test Generation",
//         subtitle: "Source → unit tests",
//         duration: "58s",
//         tags: ["Testing", "Coverage"],
//         description: "Generate unit tests with high coverage from source files.",
//       },
//     ],
//     developer: {
//       id: "1",
//       name: "Sarah Chen",
//       image: "https://randomuser.me/api/portraits/women/44.jpg",
//       bio: "Software developer and prompt engineer focused on AI productivity tools.",
//       github: "https://github.com/alexjohnson",
//       linkedin: "https://linkedin.com/in/alexjohnson",
//     },
//     features: ["Multi-language support", "Real-time debugging", "Code optimization", "Smart autocomplete"],
//   },

//   {
//     id: "content-creator",
//     name: "Content Creator AI",
//     description:
//       "Generate high-quality content for blogs, social media, and marketing campaigns with AI-powered creativity.",
//     category: "Marketing",
//     icon: "✍️",
//     image: "https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=1200&q=80",
//     videos: [
//       {
//         thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
//         url: "https://player.vimeo.com/external/389578002.sd.mp4?s=46b5a459fda9387e4783f3a3b6d7b2d9b4f5a2a5&profile_id=164&oauth2_token_id=57447761",
//         title: "Keyword→Article Workflow",
//         subtitle: "SEO brief → publish-ready draft",
//         duration: "1m 05s",
//         tags: ["SEO", "Content", "Blog"],
//         description: "Turn a single keyword into a structured blog article with headings, FAQs, and meta tags."
//       },
//        {
//         thumbnail:
//           "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
//         url:
//           "https://player.vimeo.com/external/319469214.sd.mp4?s=2c0a63ec95e3e1f7b0a2d48c7467ac2d06c7c1e1&profile_id=164&oauth2_token_id=57447761",
//         title: "Test Generation",
//         subtitle: "Source → unit tests",
//         duration: "58s",
//         tags: ["Testing", "Coverage"],
//         description: "Generate unit tests with high coverage from source files.",
//       },
//        {
//         thumbnail:
//           "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
//         url:
//           "https://player.vimeo.com/external/319469214.sd.mp4?s=2c0a63ec95e3e1f7b0a2d48c7467ac2d06c7c1e1&profile_id=164&oauth2_token_id=57447761",
//         title: "Test Generation",
//         subtitle: "Source → unit tests",
//         duration: "58s",
//         tags: ["Testing", "Coverage"],
//         description: "Generate unit tests with high coverage from source files.",
//       },
//     ],
//     developer: {
//       id: "2",
//       name: "James Wilson",
//       image: "https://randomuser.me/api/portraits/men/46.jpg",
//       bio: "AI engineer specializing in automation and chatbot interaction.",
//       github: "https://github.com/sarahchen",
//       linkedin: "https://linkedin.com/in/sarahchen",
//     },
//     features: ["SEO optimization", "Multi-platform support", "Tone customization", "Plagiarism check"],
//   },

//   {
//     id: "data-analyst",
//     name: "Data Analyst Bot",
//     description:
//       "Analyze complex datasets, generate insights, and create visualizations with powerful AI-driven analytics.",
//     category: "Analytics",
//     icon: "📊",
//     image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
//     videos: [
//       {
//         thumbnail: "https://images.unsplash.com/photo-1504691342899-9c46b2f7f1aa?auto=format&fit=crop&w=800&q=80",
//         url: "https://player.vimeo.com/external/310226176.sd.mp4?s=85d9b8bb93b25e744201ac4c7a5e1f5fdbeb6e1c&profile_id=164&oauth2_token_id=57447761",
//         title: "CSV→Dashboard",
//         subtitle: "Upload CSV → auto charts",
//         duration: "54s",
//         tags: ["EDA", "Charts", "Dashboard"],
//         description: "Upload a CSV file and instantly generate dashboards, charts, and statistical summaries."
//       },
//        {
//         thumbnail:
//           "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
//         url:
//           "https://player.vimeo.com/external/319469214.sd.mp4?s=2c0a63ec95e3e1f7b0a2d48c7467ac2d06c7c1e1&profile_id=164&oauth2_token_id=57447761",
//         title: "Test Generation",
//         subtitle: "Source → unit tests",
//         duration: "58s",
//         tags: ["Testing", "Coverage"],
//         description: "Generate unit tests with high coverage from source files.",
//       },
//        {
//         thumbnail:
//           "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
//         url:
//           "https://player.vimeo.com/external/319469214.sd.mp4?s=2c0a63ec95e3e1f7b0a2d48c7467ac2d06c7c1e1&profile_id=164&oauth2_token_id=57447761",
//         title: "Test Generation",
//         subtitle: "Source → unit tests",
//         duration: "58s",
//         tags: ["Testing", "Coverage"],
//         description: "Generate unit tests with high coverage from source files.",
//       },
//     ],
//     developer: {
//       id: "3",
//       name: "Emma Johnson",
//       image: "https://randomuser.me/api/portraits/women/50.jpg",
//       bio: "Generative AI specialist who builds intelligent agents for startups.",
//       github: "https://github.com/michaelrodriguez",
//       linkedin: "https://linkedin.com/in/michaelrodriguez",
//     },
//     features: ["Predictive analytics", "Custom visualizations", "Real-time processing", "Export reports"],
//   },

//   {
//     id: "customer-support",
//     name: "Support Agent AI",
//     description:
//       "Provide 24/7 customer support with intelligent responses, ticket management, and sentiment analysis.",
//     category: "Customer Service",
//     icon: "🎧",
//     image: "https://images.unsplash.com/photo-1580894908361-967195033c68?auto=format&fit=crop&w=1200&q=80",
//     videos: [
//       {
//         thumbnail: "https://images.unsplash.com/photo-1598257006514-52d54e07b2fc?auto=format&fit=crop&w=800&q=80",
//         url: "https://player.vimeo.com/external/381703350.sd.mp4?s=51b6eb1a7d9c7db0c9d84c9f49561f9aa95c0a6b&profile_id=164&oauth2_token_id=57447761",
//         title: "Zendesk Auto-Reply",
//         subtitle: "Tickets triage → draft reply",
//         duration: "41s",
//         tags: ["Zendesk", "Automation"],
//         description: "Automatically triage tickets, prioritize by SLA, and generate context-aware reply drafts."
//       },
//        {
//         thumbnail:
//           "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
//         url:
//           "https://player.vimeo.com/external/319469214.sd.mp4?s=2c0a63ec95e3e1f7b0a2d48c7467ac2d06c7c1e1&profile_id=164&oauth2_token_id=57447761",
//         title: "Test Generation",
//         subtitle: "Source → unit tests",
//         duration: "58s",
//         tags: ["Testing", "Coverage"],
//         description: "Generate unit tests with high coverage from source files.",
//       },
//        {
//         thumbnail:
//           "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
//         url:
//           "https://player.vimeo.com/external/319469214.sd.mp4?s=2c0a63ec95e3e1f7b0a2d48c7467ac2d06c7c1e1&profile_id=164&oauth2_token_id=57447761",
//         title: "Test Generation",
//         subtitle: "Source → unit tests",
//         duration: "58s",
//         tags: ["Testing", "Coverage"],
//         description: "Generate unit tests with high coverage from source files.",
//       },
//     ],
//     developer: {
//       id: "4",
//       name: "Michael Chen",
//       image: "https://randomuser.me/api/portraits/men/55.jpg",
//       bio: "Customer AI solutions builder focusing on automation.",
//       github: "https://github.com/emilywatson",
//       linkedin: "https://linkedin.com/in/emilywatson",
//     },
//     features: ["Multi-language support", "Sentiment analysis", "Auto-routing", "Knowledge base integration"],
//   },

//   {
//     id: "design-assistant",
//     name: "Design Studio AI",
//     description:
//       "Create stunning designs, mockups, and prototypes with AI-powered design tools and suggestions.",
//     category: "Design",
//     icon: "🎨",
//     image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
//     videos: [
//       {
//         thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
//         url: "https://player.vimeo.com/external/319469214.sd.mp4?s=2c0a63ec95e3e1f7b0a2d48c7467ac2d06c7c1e1&profile_id=164&oauth2_token_id=57447761",
//         title: "Brand Kit Generator",
//         subtitle: "Logo → color palette",
//         duration: "52s",
//         tags: ["Design", "Branding"],
//         description: "Generate brand kits including logos, palettes, and component libraries directly from your input."
//       },
//        {
//         thumbnail:
//           "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
//         url:
//           "https://player.vimeo.com/external/319469214.sd.mp4?s=2c0a63ec95e3e1f7b0a2d48c7467ac2d06c7c1e1&profile_id=164&oauth2_token_id=57447761",
//         title: "Test Generation",
//         subtitle: "Source → unit tests",
//         duration: "58s",
//         tags: ["Testing", "Coverage"],
//         description: "Generate unit tests with high coverage from source files.",
//       }, {
//         thumbnail:
//           "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
//         url:
//           "https://player.vimeo.com/external/319469214.sd.mp4?s=2c0a63ec95e3e1f7b0a2d48c7467ac2d06c7c1e1&profile_id=164&oauth2_token_id=57447761",
//         title: "Test Generation",
//         subtitle: "Source → unit tests",
//         duration: "58s",
//         tags: ["Testing", "Coverage"],
//         description: "Generate unit tests with high coverage from source files.",
//       },
//     ],
//     developer: {
//       id: "5",
//       name: "Sarah Martinez",
//       image: "https://randomuser.me/api/portraits/women/60.jpg",
//       bio: "Full-stack developer with a focus on AI integrations and cloud deployment.",
//       github: "https://github.com/davidkim",
//       linkedin: "https://linkedin.com/in/davidkim",
//     },
//     features: ["Template library", "Brand consistency", "Collaboration tools", "Export to multiple formats"],
//   },

//   {
//     id: "sales-optimizer",
//     name: "Sales Optimizer Pro",
//     description:
//       "Boost your sales with AI-driven lead scoring, pipeline management, and predictive forecasting.",
//     category: "Sales",
//     icon: "💼",
//     image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
//     videos: [
//       {
//         thumbnail: "https://images.unsplash.com/photo-1605902711622-cfb43c4437e3?auto=format&fit=crop&w=800&q=80",
//         url: "https://player.vimeo.com/external/405135927.sd.mp4?s=3197b1a8ef889ad4c9e1764a3d09f96a4c77e7b0&profile_id=164&oauth2_token_id=57447761",
//         title: "Lead Scoring Flow",
//         subtitle: "CRM signals → lead score",
//         duration: "49s",
//         tags: ["CRM", "Sales"],
//         description: "Analyze CRM signals and web events to score leads and suggest the next best outreach action."
//       },
//        {
//         thumbnail:
//           "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
//         url:
//           "https://player.vimeo.com/external/319469214.sd.mp4?s=2c0a63ec95e3e1f7b0a2d48c7467ac2d06c7c1e1&profile_id=164&oauth2_token_id=57447761",
//         title: "Test Generation",
//         subtitle: "Source → unit tests",
//         duration: "58s",
//         tags: ["Testing", "Coverage"],
//         description: "Generate unit tests with high coverage from source files.",
//       },
//        {
//         thumbnail:
//           "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
//         url:
//           "https://player.vimeo.com/external/319469214.sd.mp4?s=2c0a63ec95e3e1f7b0a2d48c7467ac2d06c7c1e1&profile_id=164&oauth2_token_id=57447761",
//         title: "Test Generation",
//         subtitle: "Source → unit tests",
//         duration: "58s",
//         tags: ["Testing", "Coverage"],
//         description: "Generate unit tests with high coverage from source files.",
//       },
//        {
//         thumbnail:
//           "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
//         url:
//           "https://player.vimeo.com/external/319469214.sd.mp4?s=2c0a63ec95e3e1f7b0a2d48c7467ac2d06c7c1e1&profile_id=164&oauth2_token_id=57447761",
//         title: "Test Generation",
//         subtitle: "Source → unit tests",
//         duration: "58s",
//         tags: ["Testing", "Coverage"],
//         description: "Generate unit tests with high coverage from source files.",
//       },
//     ],
//     developer: {
//       id: "6",
//       name: "David Kim",
//       image: "https://randomuser.me/api/portraits/men/63.jpg",
//       bio: "AI engineer specializing in sales optimization & CRM.",
//       github: "https://github.com/jessicamartinez",
//       linkedin: "https://linkedin.com/in/jessicamartinez",
//     },
//     features: ["Lead scoring", "Pipeline visualization", "Forecasting", "CRM integration"],
//   },
// ];
