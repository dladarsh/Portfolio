import { ExperienceItem, ProjectItem, SkillItem } from './types';
import { Database, BarChart2, Code, Terminal, Cpu, Layers } from 'lucide-react';

export const RESUME_DATA = {
  name: "Loka Adarsh Dronamraju",
  title: "Data Analyst | Product Manager | Data Science",
  location: "Chicago, IL",
  contact: {
    phone: "312-792-7160",
    email: "dladarsh73@gmail.com",
    linkedin: "https://www.linkedin.com/in/loka-adarsh-dronamraju-126558183/",
    github: "https://github.com/dladarsh"
  },
  education: [
    {
      school: "Illinois Institute of Technology",
      degree: "MAS in Information Technology & Management | Data Analytics",
      gpa: "3.9",
      period: "Aug 2023 – May 2025",
      honors: "Upsilon Pi Epsilon Inductee"
    },
    {
      school: "Sreenidhi Institute of Science and Technology",
      degree: "Bachelor of Technology, Information Technology",
      period: "Aug 2018 – May 2022"
    }
  ]
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Product Manager",
    company: "Saayam For All",
    location: "Remote, United States",
    period: "Sep 2025 – Present",
    details: [
      "Developed structured product documentation (PRDs, workflows, acceptance criteria) to support cross-functional collaboration and ensure clarity in digital feature developments",
      "Collaborated with stakeholders to refine user-facing features and clarify digital workflows, resulting in improved user experience and streamlined development processes.",
      "Integrated user feedback and usage data to enhance product experience and feature usability."
    ]
  },
  {
    id: "exp-2",
    role: "Data Analyst",
    company: "Jio",
    location: "India",
    period: "June 2022 – Dec 2022",
    details: [
      "Analyzed 70K+ telecom customer records using SQL and Python to identify key behavioral and contract-based churn drivers through cohort and tenure segmentation",
      "Identified high-risk segments, including new customers (53% churn) and month-to-month contracts (43% churn), while uncovering strong retention effects among multi-service users (5% churn vs. 46%)",
      "Developed interactive Power BI dashboards visualizing the 27% overall churn rate, translating analytical findings into actionable retention and cross-sell strategy recommendations"
    ]
  },
  {
    id: "exp-3",
    role: "Data Science Intern",
    company: "DevStack Solutions",
    location: "India",
    period: "Nov 2021 – Dec 2021",
    details: [
      "Developed data pipelines in Python (Pandas, NumPy) to clean and transform 9.8K+ records.",
      "Built time series forecasting (ARIMA, Holt-Winters) and clustering models (K-Means, PCA) improving forecast accuracy by ~15%.",
      "Validated and visualized model performance using Logistic Regression and Matplotlib."
    ]
  },
  {
    id: "exp-4",
    role: "Data Analyst Intern",
    company: "GoalStreet",
    location: "India",
    period: "May 2020 – Jul 2020",
    details: [
      "Extracted and transformed large visa datasets using SQL and Python to enable predictive analytics.",
      "Developed and optimized classification models (Decision Tree, Random Forest) achieving 83% accuracy.",
      "Performed exploratory and statistical analysis to identify key drivers of approval rates."
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "proj-3",
    name: "Twitch Stream Analytics",
    tech: "R, EDA, Statistical Analysis, Predictive Modeling",
    period: "Aug 2023 – Dec 2023",
    description: [
      "Conducted exploratory and hypothesis testing (t-tests) to assess the impact of language on audience engagement and growth trends.",
      "Built regression models (R² = 0.57) to forecast viewer outcomes and validate predictors using statistical calibration techniques.",
      "Designed clear reporting outputs to communicate insights in a clear storytelling format."
    ],
    link: "https://github.com/dladarsh/Unveiling-Twitch-Trends",
    image: `${import.meta.env.BASE_URL}Images/Image2.png`
  },
  {
    id: "proj-4",
    name: "Car Popularity Prediction",
    tech: "Machine Learning, Regression, Classification",
    period: "Research Publication",
    description: [
      "Published peer-reviewed research on predicting vehicle manufacturer popularity using supervised machine learning techniques.",
      "Analyzed 1,000+ automotive records and evaluated Logistic Regression, KNN, Random Forest, and SVM, with SVM delivering the best accuracy.",
      "Performed data preprocessing, EDA, and model evaluation using Python (Pandas, NumPy, Matplotlib) to support data-driven product insights."
    ],
    link: "https://drive.google.com/file/d/11Dl4pZs69mRDAeTmHpEIP6pQ9bSzErP0/view",
    image: `${import.meta.env.BASE_URL}Images/Image5.png`
  }
];

export const SKILLS: SkillItem[] = [
  // Languages
  { id: "s1", name: "Python", category: "Languages", level: 95, perkDetail: "Advanced scripting & automation efficiency." },
  { id: "s9", name: "R", category: "Languages", level: 85, perkDetail: "Statistical computing & graphics optimization." },

  // Databases
  { id: "s2", name: "SQL", category: "Databases", level: 90, perkDetail: "Optimized query execution & schema design." },
  { id: "s10", name: "MySQL", category: "Databases", level: 90, perkDetail: "Relational database structure management." },
  { id: "s11", name: "NoSQL", category: "Databases", level: 80, perkDetail: "High-velocity unstructured data handling." },
  { id: "s12", name: "Microsoft Access", category: "Databases", level: 75, perkDetail: "Desktop information management systems." },
  { id: "s13", name: "Oracle", category: "Databases", level: 85, perkDetail: "Enterprise-scale data grid computing." },
  { id: "s14", name: "SQLite", category: "Databases", level: 85, perkDetail: "Embedded serverless SQL engine." },

  // Tools
  { id: "s3", name: "Power BI", category: "Tools", level: 88, perkDetail: "High-impact visual intelligence rendering." },
  { id: "s7", name: "Excel/ETL", category: "Tools", level: 90, perkDetail: "Legacy data integration & transformation." },
  { id: "s15", name: "EDA", category: "Tools", level: 92, perkDetail: "Exploratory Data Analysis & pattern discovery." },
  { id: "s16", name: "Data Cleaning", category: "Tools", level: 95, perkDetail: "Preprocessing & dataset sanitation." },
  { id: "s17", name: "ETL Pipelines", category: "Tools", level: 88, perkDetail: "Automated extraction & loading workflows." },

  // Analytics
  { id: "s4", name: "Machine Learning", category: "Analytics", level: 85, perkDetail: "Predictive modeling & pattern recognition." },
  { id: "s18", name: "Statistical Analysis", category: "Analytics", level: 90, perkDetail: "Quantitative interpretation & modeling." },
  { id: "s19", name: "Predictive Analytics", category: "Analytics", level: 88, perkDetail: "Forecasting future trends & behaviors." },
  { id: "s20", name: "Hypothesis Testing", category: "Analytics", level: 85, perkDetail: "Rigorous statistical validation methods." },

  // Libraries
  { id: "s5", name: "Pandas/NumPy", category: "Libraries", level: 92, perkDetail: "Rapid data manipulation & vectorization." },
  { id: "s6", name: "Scikit-Learn", category: "Libraries", level: 85, perkDetail: "Classification & regression model deployment." },
  { id: "s8", name: "TensorFlow", category: "Libraries", level: 75, perkDetail: "Neural network architecture prototyping." },
  { id: "s21", name: "Matplotlib", category: "Libraries", level: 88, perkDetail: "Static & interactive data plotting." },
  { id: "s22", name: "Seaborn", category: "Libraries", level: 85, perkDetail: "High-level statistical data visualization." }
];

export const STATS = {
  intellect: 92,
  adaptability: 90,
  precision: 95
};