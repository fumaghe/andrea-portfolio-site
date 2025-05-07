export interface Project {
  id: number;
  slug: string;
  title: string;
  year: number;
  description: string;
  longDescription?: string;
  technologies: string[];
  githubLink?: string;
  externalLink?: string;
  presentationLink?: string;
  image: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 14,
    slug: "avalon-concept",
    title: "AVALON – Smart Telemetry Platform",
    year: 2025,
    description:
      "Unified observability dashboard for STORViX systems, combining storage telemetry, AI‑driven insights, and interactive control panels.",
    longDescription:
      "AVALON is an advanced telemetry and analytics platform developed for STORViX to centralize, analyze, and act upon storage system data across distributed environments. Built with a modular architecture, it collects real-time telemetry streams from hybrid storage infrastructure (including SQL and NoSQL-based sources) and transforms them into actionable insights through a unified dashboard. The frontend interface, built with React and TypeScript, supports highly interactive components for navigating performance KPIs such as latency, throughput, IOPS, and fault events, while the backend orchestrates data pipelines via Python services and RESTful APIs. AVALON also includes a natural language chatbot interface capable of understanding user queries about storage health, capacity planning, or anomaly detection, leveraging semantic search and contextual retrieval. The system is designed for enterprise operators who need fine-grained observability, predictive insights, and simplified access to complex data layers. Its key value lies in reducing mean time to resolution (MTTR), surfacing hidden patterns in telemetry logs, and providing a consistent control layer over heterogeneous data sources.",
    technologies: ["Python", "SQL", "NoSQL", "Data Visualization", 'Javascript', 'Typescript', 'API', "Chatbot", "Telemetry", '...more'],
    externalLink: "https://avalon.staging.storvix.eu/",
    presentationLink: "slides/AVALON_SLIDES.pdf",
    image: "images/AVALON_PHOTO.png",
    featured: true
  },
  {
    id: 1,
    slug: "tactigon-skin-gesture-control",
    title: "Tactigon Skin – Gesture Control Wearable",
    year: 2024,
    description:
      "AI‑powered wearable for recognizing hand gestures, directions and motion-based inputs using IMU and capacitive sensors.",
    longDescription:
      "This project transforms the Tactigon Skin wearable into an intelligent gesture recognition system for real-time interaction with robotics, IoT, and digital interfaces. Using the onboard 9-DOF IMU (accelerometer, gyroscope, magnetometer) and capacitive touch grid, it captures 6-axis motion data streamed via Bluetooth Low Energy (BLE) to a Python-based signal processing pipeline. The data is processed in near real-time (<100 ms) through a TensorFlow model trained to classify dynamic gestures, direction changes, and even basic symbolic words like 'yes', 'no', or 'stop'. A custom C++ BLE driver handles low-latency communication, while a web dashboard (built with React, WebSockets, and D3.js) visualizes hand pose trajectories, confidence scores, and latency diagnostics. The project aims to bridge natural human movement and machine control through edge AI and intuitive UX, enabling use cases in hands-free interfaces, assistive tech, gaming, and robotics.",
    technologies: [
      "Python",
      "TensorFlow",
      "C++",
      "BLE (Bluetooth Low Energy)",
      "IMU Sensors",
      "Signal Processing",
      "Live Data Streaming",
      "WebSockets",
      "Data Visualization",
      "Gesture Recognition",
      "Edge AI"
    ],
    presentationLink: "slides/TactigonProject_SLIDES.pdf",
    image: "images/TactigonProject_PHOTO.png",
    featured: true
  },  
  {
    id: 2,
    slug: "cookit-smart-kitchen",
    title: "CooKiT – Smart Kitchen Platform",
    year: 2024,
    description:
      "IoT-enabled ecosystem with app and cookware that manages pantry, suggests recipes, and integrates with supermarkets.",
    longDescription:
      "CooKiT is an end-to-end smart kitchen solution that blends physical cookware with digital services to enhance daily food management. The ecosystem includes a Flutter-based mobile app, Bluetooth-enabled smart frying pans and pots ('Padella Tech' and 'Pentola Tech'), and formerly a dedicated tablet barcode scanner. The backend is powered by a Node.js + PostgreSQL stack with tiered subscriptions (Free, Plus, Pro) managed via Stripe. Key features include pantry tracking, automatic recipe recommendations based on available ingredients, menu planning, nutritional insights, receipt scanning, and integration with affiliated supermarkets for home shopping and discounts. All cookware transmits usage telemetry via AWS IoT Core, allowing real-time device monitoring and future AI-powered meal planning. The business model is supported by a detailed financial projection showing over €1.1M revenue and profitability in the third year. Planned roadmap milestones include partnerships with appliance manufacturers, custom fridge software, and the launch of branded food kits and a dedicated restaurant chain.",
    technologies: [
      "Economy",
      "Project Management",
      "Startup",
      "Company Valuation",
      "Subscription Models",
      "Mobile App"
    ],
    presentationLink: "slides/CooKiT_SLIDES.pdf",
    image: "images/CooKit_PHOTO.png",
    featured: true
  },
  {
    id: 3,
    slug: "toxapp-cosmetic-toxicology",
    title: "ToxApp – Cosmetic Toxicology Finder",
    year: 2024,
    description:
      "Streamlit web‑app that retrieves toxicological values (NOAEL, LD50) from official sources for cosmetic ingredients in seconds.",
    longDescription:
      "ToxApp was developed for LMB (Laboratorio Microbiologico Biotecnologie) to automate the retrieval of toxicological values required for cosmetic product approval. The tool queries CIR, ECHA, EFSA, and PubChem to fetch NOAEL (No Observed Adverse Effect Level) and LD50 (Lethal Dose 50%) values for over 91% of cosmetic ingredients. Built as a lightweight Python-based Streamlit app, it combines Selenium-driven web scraping, PDF OCR via pdfminer, and a SQLite caching layer that reduces lookup times to an average of 0.023 seconds. The system handles both structured and unstructured sources, even extracting data from scanned dossiers. Users can manually enter or override missing values, which are then persisted and can be exported as CSV reports. The UI was designed for lab professionals and toxicologists with a focus on clarity, speed, and reliability. ToxApp significantly reduces manual workload and ensures faster regulatory workflows.",
    technologies: [
      "Python",
      "Streamlit",
      "Selenium",
      "OCR",
      "SQLite",
      "Docker",
      "Web Scraping",
      "CSV Export",
      "Data Caching"
    ],
    githubLink: "https://github.com/fumaghe/ToxAppCosmetics",
    externalLink: "https://toxappnew.streamlit.app/",
    presentationLink: "slides/ToxApp_SLIDES.pdf",
    image: "images/ToxApp_PHOTO.png",
    featured: true
  },
  {
    id: 18,
    slug: "football-betting-analytics",
    title: "BetScore – Football Match Prediction Engine",
    year: 2024,
    description:
      "Web platform that analyzes football data and predicts match outcomes using ML and DL models.",
    longDescription:
      "Bet_Website is an advanced web-based application that collects and processes historical football data from multiple leagues and teams to predict match outcomes and betting odds. The backend performs data scraping, normalization and transformation on player stats, team performances, and head-to-head history. The pipeline leverages both machine learning models (Random Forest, Logistic Regression) and deep learning architectures (Neural Networks with Keras/TensorFlow) to estimate probabilities for match results and over/under goals. The UI allows users to filter by league, team, date or betting market, displaying win probabilities, odds gaps, and confidence intervals. The project combines data engineering, model interpretability and user-friendly visualizations to support betting decisions in a transparent and analytical way.",
    technologies: [
      "Python",
      "Pandas",
      "Machine Learning",
      "Deep Learning",
      "BeautifulSoup",
      "Frontend",
      "Backend",
      "Football Analytics",
      "Data Visualization"
    ],
    githubLink: "https://github.com/Fumaghe/Bet_Website",
    externalLink: "https://fumaghe.github.io/Bet_Website/",
    image: "images/Bet_PHOTO.png",
    featured: true
  },
  {
    id: 4,
    slug: "impact-social-media-analytics",
    title: "IMPACT – Social Media Analytics Suite",
    year: 2024,
    description:
      "End-to-end platform that analyzes social media posts, rates performance, and suggests optimization strategies with LLMs.",
    longDescription:
      "IMPACT is a full-stack analytics suite designed to evaluate and optimize the effectiveness of social media campaigns. Built in a 16-week Agile sprint with a budget of $216k, the project integrates web scraping pipelines, a fine-tuned transformer model for sentiment and topic classification, and a proprietary scoring algorithm. These components feed into a dynamic frontend built with React and Next.js, which presents metrics like impressions, engagement rates, and content quality ratings. The system supports multiple content types (posts, shorts, videos) and provides actionable suggestions for improving reach and ROI. Development followed Agile and Kanban methodologies, with detailed Gantt planning, risk analysis, and stakeholder mapping (e.g., social media managers, advertisers, and venture capitalists). The platform achieves 99% LLM accuracy on internal benchmarks, and includes a UI tailored for data clarity and decision-making. Core outcomes include increased visibility, campaign efficiency, and monthly impressions.",
    technologies: [
      "Python",
      "Agile",
      "Kanban",
      "Sentiment Analysis",
      "Project Planning",
      "Team Collaboration",
      "Gantt Chart",
      "UI/UX Design",
      "Business Analytics"
    ],
    presentationLink: "slides/IMPACT_SLIDES.pdf",
    image: "images/IMPACT_PHOTO.png",
  },
  {
    id: 5,
    slug: "london-crime-housing-bnb",
    title: "London Crime & Housing Analysis",
    year: 2024,
    description:
      "Geospatial analysis linking crime rates, house prices, and Airbnb rents across LSOAs in central London.",
    longDescription:
      "This project cross-references crime statistics, real estate prices, and Airbnb rental data to assess the livability and investment potential of each LSOA (Lower Layer Super Output Area) in the City of London. After thorough cleaning and normalization of datasets, geospatial visualizations were created using GeoPandas and Folium. Additional layers include population distribution, crime type prevalence, and socio-economic context (e.g., Tower Hamlets as both a financial hub and cultural hotspot). A dual-index model was developed to rank areas for two target audiences: premium buyers and budget-conscious student renters. The indices weigh normalized variables such as inverted crime rates (for safety), average house sale price, and Airbnb cost per night. The final dashboard integrates interactive maps and scatter plots that encode safety and affordability trade-offs, helping users and investors identify high-risk or high-return zones at a glance.",
    technologies: [
      "Python",
      "Pandas",
      "GeoPandas",
      "Matplotlib",
      "Data Cleaning",
      "Geospatial Analysis",
      "Data Normalization",
      "Target Segmentation",
      "Urban Analytics"
    ],
    presentationLink: "slides/London_SLIDES.pdf",
    image: "images/London_PHOTO.png",
  },
  {
    id: 6,
    slug: "streaming-platforms-insights",
    title: "Streaming Platforms Insights",
    year: 2024,
    description:
      "Exploratory analysis of Netflix, Prime Video and Apple TV+ catalogs by IMDb ratings and global coverage.",
    longDescription:
      "This project performs an exploratory data analysis (EDA) of over 1 million titles from Netflix, Apple TV+, and Prime Video, joined via IMDb ID. It evaluates average IMDb ratings per platform—showing Netflix leads with 6.39—alongside a geographical heatmap of content availability by country. Implemented in Jupyter with Plotly, the analysis includes rating distributions, popularity metrics, and regional content diversity, offering a snapshot of platform strategy and audience engagement across global markets.",
    technologies: [
      "Python",
      "Pandas",
      "Plotly",
      "Jupyter",
      "Data Analysis",
      "Data Visualization"
    ],
    presentationLink: "slides/Streaming_SLIDES.pdf",
    image: "images/Streaming_PHOTO.png"
  },
  {
    id: 7,
    slug: "bakery-brand-sentiment",
    title: "Bakery Brand Sentiment Analysis",
    year: 2023,
    description:
      "NLP-driven analysis of French bakery reviews to score brands on sentiment and business potential.",
    longDescription:
      "This project was built for an investment firm seeking insights into customer perception across competing bakery brands in France. After scraping and preprocessing social reviews, the pipeline used R for corpus creation and sentiment analysis, and scikit-learn in Python for Random Forest and SVM cross-validation. An emotion lexicon (trust, joy, anger, etc.) mapped dominant customer feelings, while a custom dictionary categorized review drivers into price, staff, product, quality and location. The system produced brand rankings by sentiment and score rating, assisting strategic investment decisions.",
    technologies: [
      "R",
      "Python",
      "scikit-learn",
      "SVM",
      "Text Mining",
      "Sentiment Analysis",
      "Cross Validation",
      "Review Classification"
    ],
    presentationLink: "slides/Bakery_SLIDES.pdf",
    image: "images/Bakery_PHOTO.png",
  },
  {
    id: 12,
    slug: "partygame-web-app",
    title: "PartyGame – Group Party Game Web App",
    year: 2024,
    description:
      "Browser-based game for group fun with random challenges, dares, and unpredictable rules.",
    longDescription:
      "PartyGame is a lightweight web application designed to spice up parties, gatherings, and pre-drinks with friends. Built entirely with HTML, CSS, and vanilla JavaScript, it delivers a sequence of interactive challenges ranging from dares and truth questions to fun penalties and commands. The UI is colorful, responsive, and sound-enhanced to maintain high engagement. The game logic runs entirely client-side, making it fast, mobile-friendly, and usable even offline. Designed with simplicity and fun in mind, PartyGame is perfect for breaking the ice and creating memorable group moments.",
    technologies: [
      "JavaScript",
      "HTML",
      "CSS",
      "UX Design",
      "Game Design",
      "Responsive Web App",
      "Offline Ready",
      "Interaction Design"
    ],
    githubLink: "https://github.com/Fumaghe/PartyGame",
    externalLink: "https://fumaghe.github.io/PartyGame/",
    image: "images/PartyGame_PHOTO.png",
    featured: false
  },
  {
    id: 8,
    slug: "italian-football-analysis",
    title: "Italian Football Dataset Analysis",
    year: 2023,
    description:
      "Historical analysis of Italy’s national team performance, scoring patterns, and decisive goal moments.",
    longDescription:
      "This project explores over 80 years of data on Italy’s national football team, analyzing match outcomes, scoring timings, and team dominance in international tournaments. Using Matplotlib and Seaborn, it highlights when Italy scores most frequently, especially between the 75th and 85th minute and compares performance trends to countries like France and Portugal. The analysis includes total wins, goals by minute, and distribution quartiles for decisive goals, revealing Italy’s ability to strike in crucial late-game moments.",
    technologies: [
      "Python",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Data Visualization",
      "Sports Analytics",
      "Temporal Analysis"
    ],
    presentationLink: "slides/FOOTBALL_ANALISYS_SLIDES.pdf",
    image: "images/FOOTBALL_ANALISYS_PHOTO.png"
  },
  {
    id: 9,
    slug: "poker-odds-calculator",
    title: "Texas Hold’em Odds & Probability",
    year: 2023,
    description:
      "Tool that calculates probabilities of hands and outcomes in Texas Hold’em.",
    longDescription:
      "This interactive project explains the mathematical foundations of Texas Hold’em using real-time visualizations and probability models. It calculates classic probabilities (e.g. odds of drawing AK suited, pocket pairs, or quads on the flop) and conditional probabilities (like hitting a straight given 8 ‘outs’). Built with Python and Streamlit, it uses NumPy and combinatorics formulas to simulate hand distributions and outcomes. A markdown cheat sheet provides key formulas, while a live demo allows users to input scenarios and understand probabilities instantly—serving as both an educational tool and a training aid for players.",
    technologies: [
      "Python",
      "React",
      'Typescript',
      "NumPy",
      "Combinatorics",
      "Probability Theory",
      "Interactive UI",
      "Game Theory"
    ],
    presentationLink: "slides/Poker_SLIDES.pdf",
    image: "images/Poker_PHOTO.png",
    featured: false
  },
  {
    id: 10,
    slug: "serafino-luxury-ai",
    title: "Serafino – Luxury Innovation Strategy",
    year: 2023,
    description:
      "Strategic vision blending Italian craftsmanship and AI personalization for premium global markets.",
    longDescription:
      "Serafino is a luxury innovation concept designed to serve high-end clients—entrepreneurs, billionaires, and celebrities—through AI-enhanced personalization and sustainable practices. The business strategy focuses on Europe, North America, and the Middle East, aiming to deliver exclusive products that merge Italian heritage with next-gen technology. The roadmap includes an AI-powered recommender system for bespoke goods, partnerships with artisans, and expansion into sectors like automotive, fashion, watches, and hospitality. Emphasis is placed on sustainability, social impact, and long-term value through craftsmanship, tech, and tailored experiences. The project includes competitive positioning, brand ambassador strategy, and implementation phases across sectors.",
    technologies: [
      "Marketing Strategy",
      "Sustainability",
      "Luxury Branding",
      "Market Analysis",
      "Competitive Benchmarking",
      "Personalized Experience",
      "Social Impact Strategy"
    ],
    presentationLink: "slides/SERAFINO_SLIDES.pdf",
    image: "images/SERAFINO_PHOTO.png",
    featured: false
  },
  {
    id: 13,
    slug: "tubes-concept",
    title: "Tubes – Industrial Production Analytics",
    year: 2023,
    description:
      "Power BI dashboard for a pipe manufacturing firm, focused on production metrics and plant performance.",
    longDescription:
      "Provides a data-driven overview of production volumes, defect rates, material types and line efficiency. Enables strategic decisions through clear visualizations of output trends, downtime causes, and quality metrics across multiple plants.",
    technologies: ["Power BI", "Data Analytics", "Manufacturing", "KPI Monitoring"],
    presentationLink: "/slides/Tubes_SLIDES.pdf",
    image: "/images/Tubes_PHOTO.png"
  }
];

/**
 * Helper to get a project by slug
 */
export function getProjectBySlug(slug: string) {
  return projects.find((p) => p?.slug === slug);
}
/**
 * Helper to get featured projects
 */
export const getFeaturedProjects = (): Project[] =>
  projects.filter(p => p.featured);
