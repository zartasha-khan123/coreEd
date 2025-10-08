export const agents = [
  {
    id: "code-assistant",
    name: "Code Assistant Pro",
    description:
      "Advanced AI-powered coding assistant that helps you write, debug, and optimize code across multiple programming languages.",
    fullDescription:
      "Code Assistant Pro is your all-in-one development partner. It not only completes your code with context-aware suggestions but also detects logical flaws, runs test simulations, and optimizes performance automatically. Whether you’re working in JavaScript, TypeScript, Python, or Go — this assistant analyzes patterns, provides detailed explanations, and even generates patches for broken tests. It’s built for speed, reliability, and team productivity, helping developers ship cleaner code faster.",
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
Solution: Agent static analysis + test runner se root-cause trace karta hai, fix diff banata hai, aur PR raise karta hai.`
      },
      {
        thumbnail: "/img6.jpg",
        url: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
        title: "Refactor & Optimize",
        subtitle: "Dead code removal + perf hints",
        duration: "58s",
        tags: ["Refactor", "Performance"],
        description:
          `Agent hotspots detect karta hai, functions ko split & inline karta hai, aur perf report nikalta hai.`
      },
      {
        thumbnail: "/visualization-demo-thumbnail.jpg",
        url: "https://www.w3schools.com/html/movie.mp4",
        title: "Feature Scaffolding",
        subtitle: "CRUD + tests + basic UI in minutes",
        duration: "1m 40s",
        tags: ["Scaffold", "Boilerplate", "Tests"],
        description:
          `Agent models, routes, basic UI, aur test suite generate karta hai — team standards ke mutabiq.`
      },
    ],
    developer: {
      id: "1",
      name: "Sarah Chen",
      image: "/professional-woman-developer-smiling-with-glasses.jpg",
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
    fullDescription:
      "Content Creator AI helps marketers, bloggers, and businesses produce original, SEO-friendly content in minutes. From a simple keyword or prompt, it generates full-length articles, catchy captions, and marketing copy tailored for each platform. Its adaptive tone system learns your brand voice and ensures every piece of content feels consistent and professional. Whether you're building blog posts, social updates, or ad campaigns — this AI keeps your content pipeline fast, optimized, and plagiarism-free.",
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
        description: "AI generates full SEO-optimized article drafts from a single keyword or topic brief."
      },
      {
        thumbnail: "/img6.jpg",
        url: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
        title: "Multi-Platform Social",
        subtitle: "1 brief → 5 network posts",
        duration: "47s",
        tags: ["Instagram", "LinkedIn", "X/Twitter"],
        description: "Turn one idea into ready-to-post content for multiple social media platforms."
      },
      {
        thumbnail: "/visualization-demo-thumbnail.jpg",
        url: "https://www.w3schools.com/html/movie.mp4",
        title: "Brand Voice Tuning",
        subtitle: "Samples se consistent tone",
        duration: "1m 22s",
        tags: ["Style Guide", "LLM Tuning"],
        description: "Learns tone and language style from your samples to create consistent content."
      },
    ],
    developer: {
      id: "2",
      name: "James Wilson",
      image: "/professional-man-designer-in-suit-creative.jpg",
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
    fullDescription:
      "Data Analyst Bot transforms messy datasets into clear, actionable insights. It automatically performs exploratory data analysis, detects outliers, and visualizes patterns with minimal input. Whether you’re working with sales numbers, user behavior, or financial data, this AI builds dashboards, generates forecasts, and crafts executive-level summaries — all in natural language. Perfect for analysts and business teams that want deep insight without heavy manual crunching.",
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
        description: "Upload a CSV file → agent generates a complete interactive dashboard automatically."
      },
      {
        thumbnail: "/img6.jpg",
        url: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
        title: "Forecasting Pipeline",
        subtitle: "ARIMA/Prophet quick setup",
        duration: "1m 10s",
        tags: ["Time Series", "Forecast"],
        description: "Builds forecasting models using ARIMA and Prophet, complete with confidence bands."
      },
      {
        thumbnail: "/visualization-demo-thumbnail.jpg",
        url: "https://www.w3schools.com/html/movie.mp4",
        title: "SQL Agent",
        subtitle: "Natural language → SQL",
        duration: "1m 03s",
        tags: ["SQL", "NL→SQL"],
        description: "Converts plain English queries into optimized SQL with visualization support."
      },
    ],
    developer: {
      id: "3",
      name: "Emma Johnson",
      image: "/professional-woman-engineer-backend-developer.jpg",
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
    fullDescription:
      "Support Agent AI brings automation to customer care. It understands tone and context, classifies tickets, drafts empathetic responses, and routes conversations to the right team — all while learning from previous interactions. It integrates seamlessly with Zendesk, Intercom, and Slack, helping you reduce resolution times, maintain brand consistency, and keep customers happy around the clock.",
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
        description: "Auto-classify and prioritize tickets, generate empathetic replies instantly."
      },
      {
        thumbnail: "/img6.jpg",
        url: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
        title: "Sentiment Alerts",
        subtitle: "Churn risk ping to Slack",
        duration: "36s",
        tags: ["Alerts", "Slack"],
        description: "Detects negative sentiment and instantly alerts your support team via Slack."
      },
      {
        thumbnail: "/visualization-demo-thumbnail.jpg",
        url: "https://www.w3schools.com/html/movie.mp4",
        title: "Knowledge Base Bot",
        subtitle: "Docs se instant answers",
        duration: "1m 01s",
        tags: ["RAG", "Docs"],
        description: "Answers customer queries from uploaded documentation or FAQs with accuracy."
      },
    ],
    developer: {
      id: "4",
      name: "Michael Chen",
      image: "/professional-asian-man-devops-engineer-working.jpg",
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
    fullDescription:
      "Design Studio AI empowers designers and marketers to generate complete design systems in minutes. Upload your logo or color scheme and watch as it creates palettes, typography scales, component kits, and even landing page layouts. It checks accessibility, spacing, and overall design harmony, helping teams prototype faster while staying visually consistent.",
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
        description: "Generate complete design kits including palettes, typography, and reusable components."
      },
      {
        thumbnail: "/img6.jpg",
        url: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
        title: "Landing Page Draft",
        subtitle: "Copy + layout + assets",
        duration: "1m 18s",
        tags: ["Hero", "Sections"],
        description: "AI builds responsive landing page blocks complete with copy and placeholder assets."
      },
      {
        thumbnail: "/visualization-demo-thumbnail.jpg",
        url: "https://www.w3schools.com/html/movie.mp4",
        title: "Design Review Bot",
        subtitle: "Heuristics + accessibility notes",
        duration: "45s",
        tags: ["A11y", "Heuristics"],
        description: "Scans your design for contrast, spacing, and accessibility improvements."
      },
    ],
    developer: {
      id: "5",
      name: "Sarah Martinez",
      image:"/professional-woman-product-manager-confident-busin.jpg",
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
    fullDescription:
      "Sales Optimizer Pro uses predictive analytics to improve your conversion rate and sales efficiency. It scores leads, identifies pipeline bottlenecks, and recommends actions that drive faster closures. The system integrates with your CRM and learns from your historical data to refine its accuracy, making it an indispensable tool for sales teams aiming to scale intelligently.",
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
        description: "Analyzes CRM + behavioral signals to recommend next outreach actions."
      },
      {
        thumbnail: "/img6.jpg",
        url: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
        title: "Pipeline Health",
        subtitle: "Stalls detection + nudges",
        duration: "39s",
        tags: ["Stage", "Win Rate"],
        description: "Detects deal stalls, alerts owners, and drafts follow-ups in their tone."
      },
      {
        thumbnail: "/visualization-demo-thumbnail.jpg",
        url: "https://www.w3schools.com/html/movie.mp4",
        title: "Forecast Assistant",
        subtitle: "Category-wise projection",
        duration: "1m 07s",
        tags: ["Forecast", "Scenario"],
        description: "Builds sales forecasts with multiple scenarios and generates executive summaries."
      },
    ],
    developer: {
      id: "6",
      name: "David Kim",
      image:"/professional-man-mobile-developer-coding-at-desk.jpg",
      bio:"AI engineer specializing in automation and chatbot interaction. Passionate about building scalable AI solutions and experimenting with LLMs to solve real-world problems.",
      whatsapp: "https://wa.me/1234567895",
      github: "https://github.com/jessicamartinez",
      linkedin: "https://linkedin.com/in/jessicamartinez",
    },
    features: ["Lead scoring", "Pipeline visualization", "Forecasting", "CRM integration"],
  },
];

