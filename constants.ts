import { ExperienceItem, ProjectItem, SkillItem } from './types';
import { Database, BarChart2, Code, Terminal, Cpu, Layers } from 'lucide-react';

export const RESUME_DATA = {
  name: "Loka Adarsh Dronamraju",
  title: "Data Analyst | Product Manager",
  location: "Chicago, IL",
  contact: {
    phone: "312-792-7160",
    email: "dladarsh73@gmail.com",
    linkedin: "LinkedIn",
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
    role: "Online Data Analyst",
    company: "TELUS Digital",
    location: "Remote, United States",
    period: "2025 – Present",
    details: [
      "Analyzed large-scale datasets using structured analytical frameworks to assess data quality, consistency, and relevance.",
      "Applied data quality validation techniques and pattern analysis to identify inconsistencies across outputs and improve downstream analytical reliability.",
      "Worked on projects aimed at enhancing the content and quality of queries by utilizing specific guidelines for accuracy and validity."
    ]
  },
  {
    id: "exp-2",
    role: "Product Manager",
    company: "Sayaam For All",
    location: "Remote, United States",
    period: "2025 – Present",
    details: [
      "Collaborated with cross-functional stakeholders to translate user needs into actionable product requirements.",
      "Maintained product documentation on the product wiki and incorporated user feedback to support feature prioritization.",
      "Owned requirements definition by creating concise PRDs, user flows, and acceptance criteria."
    ]
  },
  {
    id: "exp-3",
    role: "Data Science Intern",
    company: "DevStack Solutions",
    location: "",
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
    location: "",
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
    id: "proj-5",
    name: "Telcom Churn Analysis",
    tech: "Python, Power BI, EDA, Feature Engineering",
    period: "Jan 2025 – Feb 2025",
    description: [
      "Analyzed telecom churn data to identify high-risk customer segments based on contract type, tenure, payment method, and service usage.",
      "Built an interactive Power BI dashboard with key KPIs and churn visuals to help stakeholders quickly prioritize retention efforts.",
      "Cleaned and explored customer data to uncover key churn drivers and translate insights into practical business recommendations."
    ],
    link: "https://github.com/dladarsh/Telcom-Churn-Analysis",
    image: `${import.meta.env.BASE_URL}Images/Image3.png`
  },
  {
    id: "proj-1",
    name: "Healthcare Insights",
    tech: "Python, Data Mining, EDA, ML, Clustering",
    period: "Jan 2024 – May 2024",
    description: [
      "Processed 991K+ patient health records to ensure data quality and completeness.",
      "Developed predictive models (Logistic Regression, RF, Gradient Boosting, NN) achieving 73% accuracy.",
      "Applied clustering techniques to uncover high-risk subgroups."
    ],
    link: "https://github.com/dladarsh/Healthcare-Insights",
    image: `${import.meta.env.BASE_URL}Images/Image1.png`
  },
  {
    id: "proj-2",
    name: "Maven Toy’s Store",
    tech: "Power BI, ETL, Power Query, DAX",
    period: "Nov 2024 – Dec 2024",
    description: [
      "Designed an interactive sales dashboard consolidating inventory, transactions, and customer data.",
      "Created custom DAX measures (YTD Sales, Profit Variance, % Change) for real-time insights."
    ],
    link: "https://github.com/dladarsh/Maven-Toy-s-Store",
    image: `${import.meta.env.BASE_URL}Images/Image4.png`
  },
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
    image: `${import.meta.env.BASE_URL}public/Images/Image2.png`
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