
export interface Project {
  id: number;
  slug: string;
  title: string;
  year: number;
  description: string;
  longDescription?: string;
  technologies: string[];
  githubLink: string;
  externalLink?: string;
  presentationLink?: string;
  image: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "data-visualization-dashboard",
    title: "Data Visualization Dashboard",
    year: 2024,
    description: "An interactive dashboard built to visualize complex datasets. Features include real-time filtering, custom chart configurations, and exportable reports for business intelligence applications.",
    longDescription: "This comprehensive data visualization platform was developed to transform complex datasets into actionable insights. The dashboard incorporates advanced filtering capabilities, allowing users to segment data in real-time across multiple dimensions. The architecture follows a modular design pattern, with a React frontend consuming data from a Python Flask API backend. SQL queries were optimized to handle large datasets efficiently while maintaining responsive performance. The custom chart configurations allow business users to create personalized views without requiring technical knowledge, effectively democratizing data access across the organization.",
    technologies: ["React", "D3.js", "Python", "Flask", "SQL", "Redux", "TypeScript"],
    githubLink: "https://github.com",
    externalLink: "https://example.com",
    presentationLink: "https://example.com/presentation.pdf",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800",
    featured: true
  },
  {
    id: 2,
    slug: "predictive-analytics-platform",
    title: "Predictive Analytics Platform",
    year: 2023,
    description: "A machine learning platform that analyzes historical data to predict future trends. Implemented multiple ML algorithms to provide accurate forecasts for business decision-making.",
    longDescription: "This predictive analytics platform was built to help businesses make data-driven decisions by forecasting future trends based on historical data patterns. The system incorporates various machine learning models including regression, time-series forecasting, and classification algorithms. A significant challenge was preprocessing messy historical data, which required implementing robust data cleaning pipelines and feature engineering techniques. The platform was containerized using Docker to ensure consistent performance across development and production environments, while the frontend dashboard provides intuitive visualizations of prediction confidence intervals and model performance metrics.",
    technologies: ["Python", "TensorFlow", "Pandas", "Scikit-learn", "Docker", "AWS", "Jupyter"],
    githubLink: "https://github.com",
    externalLink: "https://example.com",
    presentationLink: "https://example.com/presentation.pdf",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800",
    featured: true
  },
  {
    id: 3,
    slug: "smart-telemetry-system",
    title: "Smart Telemetry System",
    year: 2023,
    description: "Developed during my time in Sweden, this system collects and processes IoT sensor data in real-time. Features include anomaly detection and automated alerting for critical events.",
    longDescription: "During my time working in Sweden, I developed this IoT telemetry system to address the challenge of monitoring distributed sensor networks across remote locations. The system uses MQTT protocol for efficient message queuing from hundreds of IoT sensors, with a Node.js backend for data processing and storage in MongoDB. A key innovation was implementing real-time anomaly detection algorithms that could identify potential equipment failures before they occurred, resulting in an estimated 40% reduction in maintenance costs. The React frontend provides administrators with a comprehensive dashboard that visualizes sensor health, historical trends, and triggered alerts.",
    technologies: ["Node.js", "MongoDB", "MQTT", "AWS", "React"],
    githubLink: "https://github.com",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800",
    featured: true
  },
  {
    id: 4,
    slug: "neural-network-optimization",
    title: "Neural Network Optimization Framework",
    year: 2022,
    description: "A framework for optimizing deep learning model architectures using evolutionary algorithms and grid search methods.",
    longDescription: "This research project explored novel approaches to neural network architecture optimization by combining evolutionary algorithms with traditional grid search methods. The framework automatically tests thousands of model configurations to identify optimal hyperparameters and layer structures for specific machine learning tasks. The optimization engine was written in Python, leveraging PyTorch for model training and evaluation. Results demonstrated a 35% improvement in model performance while reducing training time by 22% compared to manually configured architectures. The project culminated in a research paper presented at an international machine learning conference.",
    technologies: ["Python", "PyTorch", "Numpy", "Pandas", "Ray", "MLflow"],
    githubLink: "https://github.com",
    presentationLink: "https://example.com/neural-nets-presentation.pdf",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800"
  },
  {
    id: 5,
    slug: "sentiment-analysis-tool",
    title: "Sentiment Analysis Tool",
    year: 2022,
    description: "A natural language processing application that analyzes customer reviews and social media content to extract sentiment and key topics.",
    longDescription: "This sentiment analysis tool was developed to help businesses understand customer perceptions by automatically processing large volumes of text data from reviews, support tickets, and social media. The system employs advanced NLP techniques including BERT-based transformers for context-aware sentiment scoring and entity extraction. A custom visualization dashboard allows business users to track sentiment trends over time, identify emerging issues, and compare sentiment across different product categories or market segments. The tool achieved 87% accuracy in sentiment classification when tested against human-labeled datasets.",
    technologies: ["Python", "NLTK", "TensorFlow", "BERT", "Flask", "React", "D3.js"],
    githubLink: "https://github.com",
    externalLink: "https://example.com",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800"
  },
  {
    id: 6,
    slug: "automated-trading-system",
    title: "Automated Trading System",
    year: 2021,
    description: "A quantitative trading platform that implements various algorithmic strategies with backtesting capabilities and risk management features.",
    longDescription: "This automated trading system was built to execute quantitative trading strategies based on statistical arbitrage, momentum indicators, and machine learning predictions. The platform includes comprehensive backtesting functionality that allows traders to simulate strategies against historical data with realistic transaction costs and slippage. Risk management features include automatic position sizing, stop-loss mechanisms, and portfolio correlation analysis to prevent overexposure to specific market sectors. The system connects to brokerage APIs for both paper trading and live execution, with a secure authentication layer and detailed logging of all transactions.",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Redis", "PostgreSQL", "Docker"],
    githubLink: "https://github.com",
    presentationLink: "https://example.com/trading-platform.pdf",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800"
  },
  {
    id: 7,
    slug: "genomic-data-analysis-pipeline",
    title: "Genomic Data Analysis Pipeline",
    year: 2021,
    description: "A bioinformatics pipeline for processing and analyzing large-scale genomic sequencing data in distributed computing environments.",
    longDescription: "This genomic data analysis pipeline was developed to process massive amounts of next-generation sequencing data for research applications in personalized medicine. The system was built to run in distributed computing environments, enabling parallel processing of multiple samples across a compute cluster. Key components include quality control modules, alignment to reference genomes, variant calling, and annotation of genetic variants with clinical significance. The pipeline integrates multiple bioinformatics tools into a cohesive workflow that reduces processing time from days to hours while maintaining rigorous standards for data quality and reproducibility.",
    technologies: ["Python", "R", "Nextflow", "Docker", "AWS", "Bioconductor", "Snakemake"],
    githubLink: "https://github.com",
    image: "https://images.unsplash.com/photo-1583468522588-6521e3c9f655?auto=format&fit=crop&w=800"
  }
];

/**
 * Helper function to get a project by its slug
 */
export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

/**
 * Helper function to get featured projects
 */
export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};

