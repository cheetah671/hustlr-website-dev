/**
 * Comprehensive skills organized by domain/category for both clients and students
 * Shared across job posting (clients) and vetting form (students)
 */

/**
 * CLIENT SKILLS - Used for job posting on behalf of clients
 * Categories: Web Development, Mobile Development, AI/ML
 */
export const CLIENT_SKILLS_BY_CATEGORY: Record<string, string[]> = {
  "Web Development": [
    "React",
    "Next.js",
    "Vue.js",
    "Nuxt.js",
    "Angular",
    "Svelte",
    "SvelteKit",
    "Node.js",
    "Express.js",
    "NestJS",
    "Django",
    "Flask",
    "FastAPI",
    "Ruby on Rails",
    "Spring Boot",
    "ASP.NET",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "Python",
    "Java",
    "PHP",
    "C#",
    "Ruby",
    "Go",
    "Tailwind CSS",
    "Bootstrap",
    "Material UI",
    "Styled Components",
    "Sass / SCSS",
    "CSS Modules",
    "Redux",
    "Zustand",
    "Recoil",
    "MobX",
    "Context API",
    "REST APIs",
    "API Development",
    "API Integration",
    "GraphQL",
    "WebSockets",
    "Authentication",
    "Authorization",
    "JWT",
    "OAuth",
    "PostgreSQL",
    "MySQL",
    "SQLite",
    "MongoDB",
    "Firebase Firestore",
    "Redis",
    "Deployment",
    "CI/CD",
    "Docker",
    "Kubernetes",
    "AWS",
    "Azure",
    "Google Cloud",
    "Vercel",
    "Netlify",
    "Heroku",
    "Nginx",
    "WordPress",
    "Strapi",
    "Contentful",
    "Sanity",
    "Shopify",
    "Webflow",
    "Socket.io",
    "Realtime Applications",
    "Push Notifications",
  ],
  "Mobile Development": [
    "Android Development",
    "iOS Development",
    "Mobile Development",
    "Flutter",
    "React Native",
    "Ionic",
    "Kotlin",
    "Swift",
    "Xamarin",
    "Unity",
    "Expo",
    "Flutter Widgets",
    "React Navigation",
    "Redux",
    "Zustand",
    "Dart",
    "Objective-C",
    "JavaScript",
    "TypeScript",
    "Java",
    "C#",
    "Rust",
    "Android Studio",
    "Jetpack Compose",
    "XML Layouts",
    "Room Database",
    "LiveData",
    "ViewModel",
    "Xcode",
    "UIKit",
    "SwiftUI",
    "Core Data",
    "Auto Layout",
    "Firebase",
    "Supabase",
    "Backend Development",
    "REST APIs",
    "API Integration",
    "GraphQL",
    "Authentication",
    "Authorization",
    "JWT",
    "OAuth",
    "Firebase Firestore",
    "Realtime Database",
    "SQLite",
    "Room Database",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "App Deployment",
    "CI/CD",
    "Fastlane",
    "Google Play Store",
    "App Store",
    "TestFlight",
    "Firebase App Distribution",
    "Mobile Security",
    "Data Encryption",
    "Secure Storage",
    "Biometric Authentication",
    "Socket.io",
    "Realtime Applications",
    "Chat Systems",
    "Live Updates",
    "Push Notifications",
    "In App Purchases",
    "Payment Integration",
    "Offline Storage",
    "Realtime Sync",
    "Geolocation",
    "Maps Integration",
    "Camera Integration",
    "File Upload",
    "Media Handling",
  ],
  "AI/ML": [
    "Python",
    "R",
    "Julia",
    "MATLAB",
    "Machine Learning",
    "Deep Learning",
    "Data Science",
    "Data Analysis",
    "Artificial Intelligence",
    "Natural Language Processing",
    "Computer Vision",
    "Time Series Analysis",
    "Recommender Systems",
    "Speech Recognition",
    "Generative AI",
    "Neural Networks",
    "CNNs",
    "RNNs",
    "Transformers",
    "Attention Mechanisms",
    "Backpropagation",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "Plotly",
    "Regression",
    "Logistic Regression",
    "Decision Trees",
    "Random Forest",
    "XGBoost",
    "Clustering",
    "K-Means",
    "Dimensionality Reduction",
    "PCA",
    "Model Evaluation",
    "Cross Validation",
    "Accuracy",
    "Precision",
    "Recall",
    "F1 Score",
    "ROC-AUC",
    "Model Deployment",
    "MLOps",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "API Deployment",
    "FastAPI",
    "Flask for ML APIs",
    "LLMs",
    "Prompt Engineering",
    "LangChain",
    "RAG",
    "Fine-tuning Models",
    "Embeddings",
    "Vector Databases",
    "SQL",
    "NoSQL",
    "MongoDB",
    "PostgreSQL",
    "Scikit-learn",
    "TensorFlow",
    "PyTorch",
    "Keras",
    "LightGBM",
    "Hugging Face Transformers",
    "OpenCV",
    "NLTK",
    "spaCy",
  ],
};

/**
 * STUDENT SKILLS - Used for vetting form on behalf of students
 * Categories: web developer, mobile app developer, ai/ml developer
 * (Note: Category names use lowercase with spaces for consistency with form data)
 */
export const STUDENT_SKILLS_BY_CATEGORY: Record<string, string[]> = {
  "web developer": [
    // Frontend Frameworks
    "React",
    "Next.js",
    "Vue.js",
    "Nuxt.js",
    "Angular",
    "Svelte",
    "SvelteKit",
    "Astro",
    // Backend Frameworks
    "Node.js",
    "Express.js",
    "NestJS",
    "Django",
    "Flask",
    "FastAPI",
    "Ruby on Rails",
    "Spring Boot",
    "ASP.NET",
    "Laravel",
    // Languages
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "Python",
    "Java",
    "C#",
    "PHP",
    "Ruby",
    "Go",
    "Rust",
    // Styling & Preprocessors
    "Tailwind CSS",
    "Bootstrap",
    "Material UI",
    "Styled Components",
    "Sass / SCSS",
    "CSS Modules",
    "PostCSS",
    // State Management
    "Redux",
    "Redux Thunk",
    "Redux Saga",
    "Zustand",
    "Recoil",
    "MobX",
    "Context API",
    "Jotai",
    // APIs & Data
    "REST APIs",
    "API Development",
    "API Integration",
    "GraphQL",
    "WebSockets",
    "HTTP/2",
    "gRPC",
    // Authentication & Authorization
    "Authentication",
    "Authorization",
    "JWT",
    "OAuth2",
    "Session Management",
    "2FA",
    // Databases
    "PostgreSQL",
    "MySQL",
    "SQLite",
    "MongoDB",
    "Firebase Firestore",
    "Redis",
    "Elasticsearch",
    "DynamoDB",
    "Supabase",
    // DevOps & Deployment
    "Deployment",
    "CI/CD",
    "Docker",
    "Kubernetes",
    "AWS",
    "Azure",
    "Google Cloud",
    "Vercel",
    "Netlify",
    "Heroku",
    "Nginx",
    "Apache",
    "GitHub Actions",
    "GitLab CI",
    // CMS & Headless
    "WordPress",
    "Strapi",
    "Contentful",
    "Sanity",
    "Shopify",
    "Webflow",
    // Real-time Technologies
    "Socket.io",
    "Realtime Applications",
    "Push Notifications",
    "Web Push API",
    // Build Tools
    "Webpack",
    "Vite",
    "Parcel",
    "Rollup",
    // Testing
    "Jest",
    "Vitest",
    "React Testing Library",
    "Cypress",
    "Playwright",
    "Selenium",
    // Web Performance
    "Performance Optimization",
    "SEO",
    "Accessibility (A11y)",
    "PWA",
    // Other
    "Figma",
    "UI/UX Design",
    "Design Systems",
  ],

  "mobile app developer": [
    // Mobile Frameworks & Platforms
    "Flutter",
    "React Native",
    "Expo",
    "Ionic",
    "Xamarin",
    "NativeScript",
    "Electron",
    // Mobile Languages
    "Dart",
    "Kotlin",
    "Swift",
    "Objective-C",
    "Java",
    "C#",
    "JavaScript",
    "TypeScript",
    "Rust",
    // Android Specific
    "Android Development",
    "Android Studio",
    "Jetpack Compose",
    "XML Layouts",
    "Room Database",
    "LiveData",
    "ViewModel",
    "Android Widgets",
    "Fragment",
    "Material Design",
    "Android Service",
    "BroadcastReceiver",
    // iOS Specific
    "iOS Development",
    "Xcode",
    "UIKit",
    "SwiftUI",
    "Core Data",
    "Auto Layout",
    "Storyboards",
    "CocoaPods",
    "SPM",
    "Combine",
    // Cross Platform
    "Cross Platform Development",
    // Navigation
    "React Navigation",
    "Native Navigation",
    // State Management
    "Redux",
    "Zustand",
    "Recoil",
    "MobX",
    "RxJava",
    "GetX",
    "Provider",
    // Backend Integration
    "Firebase",
    "Supabase",
    "Backend Development",
    "REST APIs",
    "API Integration",
    "GraphQL",
    "Authentication",
    "Authorization",
    "JWT",
    "OAuth",
    // Databases
    "Firebase Firestore",
    "Realtime Database",
    "SQLite",
    "Room Database",
    "Realm",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    // Deployment & Distribution
    "App Deployment",
    "CI/CD",
    "Fastlane",
    "Google Play Store",
    "App Store",
    "TestFlight",
    "Firebase App Distribution",
    "EAS Build",
    // Security
    "Mobile Security",
    "Data Encryption",
    "Secure Storage",
    "Biometric Authentication",
    "Keychain / Keystore",
    // Real-time & Communication
    "Socket.io",
    "Realtime Applications",
    "Chat Systems",
    "Live Updates",
    "Push Notifications",
    "In-App Purchases",
    // Payments & Commerce
    "Payment Integration",
    "Stripe",
    "PayPal",
    // Storage & Sync
    "Offline Storage",
    "Realtime Sync",
    "Synchronization",
    // Device Features
    "Geolocation",
    "Maps Integration",
    "Google Maps",
    "Camera Integration",
    "File Upload",
    "Media Handling",
    "Contacts Access",
    "Calendar Integration",
    // Testing
    "Unit Testing",
    "Integration Testing",
    "E2E Testing",
    "Detox",
    "Espresso",
    "XCTest",
    // Performance
    "Performance Optimization",
    "Memory Profiling",
    "Battery Optimization",
    // DevOps for Mobile
    "Beta Distribution",
    "App Performance Monitoring",
  ],

  "ai/ml developer": [
    // Core Languages
    "Python",
    "R",
    "Julia",
    "MATLAB",
    "Scala",
    "Java",
    // ML Fundamentals
    "Machine Learning",
    "Deep Learning",
    "Data Science",
    "Data Analysis",
    "Artificial Intelligence",
    "Statistics",
    // Specialized Domains
    "Natural Language Processing",
    "Computer Vision",
    "Speech Recognition",
    "Time Series Analysis",
    "Recommender Systems",
    "Generative AI",
    "Large Language Models",
    // Architecture Concepts
    "Neural Networks",
    "CNNs",
    "RNNs",
    "LSTMs",
    "GRUs",
    "Transformers",
    "Attention Mechanisms",
    "Autoencoders",
    "GANs",
    "Diffusion Models",
    "Backpropagation",
    "Gradient Descent",
    // Data Processing & Exploration
    "Pandas",
    "NumPy",
    "Data Preprocessing",
    "Feature Engineering",
    "Data Visualization",
    "Matplotlib",
    "Seaborn",
    "Plotly",
    "Jupyter Notebook",
    // ML Algorithms
    "Linear Regression",
    "Logistic Regression",
    "Decision Trees",
    "Random Forest",
    "Gradient Boosting",
    "XGBoost",
    "LightGBM",
    "CatBoost",
    "Clustering",
    "K-Means",
    "DBSCAN",
    "Hierarchical Clustering",
    "Dimensionality Reduction",
    "PCA",
    "t-SNE",
    "UMAP",
    // Model Evaluation & Validation
    "Model Evaluation",
    "Cross Validation",
    "Hyperparameter Tuning",
    "Grid Search",
    "Random Search",
    "Bayesian Optimization",
    "Accuracy",
    "Precision",
    "Recall",
    "F1 Score",
    "ROC-AUC",
    "Confusion Matrix",
    // Deep Learning Frameworks
    "TensorFlow",
    "PyTorch",
    "Keras",
    "JAX",
    "MXNet",
    // ML Libraries
    "Scikit-learn",
    "Hugging Face Transformers",
    "OpenCV",
    "NLTK",
    "spaCy",
    "TextBlob",
    "Gensim",
    "LightGBM",
    // NLP Specific
    "Text Classification",
    "Sentiment Analysis",
    "Named Entity Recognition",
    "Machine Translation",
    "Question Answering",
    "Text Generation",
    "Tokenization",
    "Word Embeddings",
    "Word2Vec",
    "GloVe",
    "FastText",
    // Computer Vision Specific
    "Image Classification",
    "Object Detection",
    "YOLO",
    "Faster R-CNN",
    "Image Segmentation",
    "Semantic Segmentation",
    "Instance Segmentation",
    "Pose Estimation",
    "Face Detection",
    "Face Recognition",
    "Optical Character Recognition",
    "Image Super Resolution",
    // LLM & Generative AI
    "LLMs",
    "Prompt Engineering",
    "Few-shot Learning",
    "Chain of Thought",
    "Fine-tuning Models",
    "Transfer Learning",
    "Embeddings",
    "Vector Databases",
    "RAG",
    "LangChain",
    "OpenAI API",
    "Anthropic Claude API",
    // Advanced Topics
    "Reinforcement Learning",
    "Q-Learning",
    "Policy Gradient",
    "Actor-Critic",
    "Optimization",
    "Ensemble Methods",
    "Meta Learning",
    // Model Deployment & Production
    "Model Deployment",
    "MLOps",
    "Model Serving",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "FastAPI",
    "Flask for ML APIs",
    "TensorFlow Serving",
    "Model Monitoring",
    "Model Versioning",
    // Databases & Data Engineering
    "SQL",
    "NoSQL",
    "MongoDB",
    "PostgreSQL",
    "Apache Spark",
    "Data Pipelines",
    "ETL",
    // Cloud Platforms
    "Google Colab",
    "AWS SageMaker",
    "Azure ML",
    "GCP ML Engine",
    // Developer Tools & Workflows
    "Git",
    "DVC",
    "MLflow",
    "Weights & Biases",
    "Experiment Tracking",
    "Data Versioning",
  ],
};

// Deduplicate skills in both categories
for (const category of Object.keys(CLIENT_SKILLS_BY_CATEGORY)) {
  CLIENT_SKILLS_BY_CATEGORY[category] = [...new Set(CLIENT_SKILLS_BY_CATEGORY[category])];
}

for (const category of Object.keys(STUDENT_SKILLS_BY_CATEGORY)) {
  STUDENT_SKILLS_BY_CATEGORY[category] = [...new Set(STUDENT_SKILLS_BY_CATEGORY[category])];
}

/**
 * CLIENT HELPER FUNCTIONS
 */

export function normalizeSkillText(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]/g, "");
}

export function buildStartsWithFuzzyRegex(query: string): RegExp | null {
  const normalized = normalizeSkillText(query);
  if (!normalized) return null;
  const pattern = normalized.split("").join(".*");
  return new RegExp(`^${pattern}`, "i");
}

export function doesSkillMatchQuery(skill: string, query: string): boolean {
  const normalizedSkill = normalizeSkillText(skill);
  const normalizedQuery = normalizeSkillText(query);

  if (!normalizedQuery) return true;
  if (normalizedSkill.includes(normalizedQuery)) return true;

  const startsWithFuzzyRegex = buildStartsWithFuzzyRegex(query);
  return startsWithFuzzyRegex ? startsWithFuzzyRegex.test(normalizedSkill) : false;
}

/**
 * STUDENT HELPER FUNCTIONS
 */

/**
 * Get skills for a specific student category
 * @param category - The student's selected category (e.g., "web developer")
 * @returns Array of relevant skills for that category
 */
export function getSkillsForCategory(category: string | undefined): string[] {
  if (!category) return [];

  // Normalize category key (handle lowercase, extra spaces)
  const normalizedKey = category.toLowerCase().trim();

  // Look for exact match first
  for (const [key, skills] of Object.entries(STUDENT_SKILLS_BY_CATEGORY)) {
    if (key.toLowerCase() === normalizedKey) {
      return skills;
    }
  }

  // Return empty array if category not found
  return [];
}

/**
 * Get all student categories
 */
export function getStudentCategories(): string[] {
  return Object.keys(STUDENT_SKILLS_BY_CATEGORY);
}

/**
 * Get all client categories
 */
export function getClientCategories(): string[] {
  return Object.keys(CLIENT_SKILLS_BY_CATEGORY);
}
