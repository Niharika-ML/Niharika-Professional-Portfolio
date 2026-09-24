export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  category: ('AI / ML' | 'Data Science' | 'AI Agents' | 'Computer Vision' | 'Web Applications')[];
  problem: string;
  solution: string;
  technologies: string[];
  features: string[];
  results: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  tag?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    highlight?: boolean;
  }[];
}

export interface TimelineItem {
  period: string;
  title: string;
  category: string;
  description: string;
  details: string[];
  icon: 'education' | 'project' | 'hackathon' | 'workshop' | 'community';
}

export interface CertificationItem {
  id: string;
  title: string;
  organization: string;
  year: string;
  credentialId?: string;
  description: string;
  category: string;
  verified: boolean;
}

export const PORTFOLIO_CONFIG = {
  name: 'Niharika Ravulapalli',
  role: 'Data Science Student | AI/ML Enthusiast | Developer | Problem Solver',
  badge: 'DATA SCIENCE • AI/ML • DEVELOPMENT',
  email: 'niharikaravulapalli24@gmail.com',
  phone: '+91 7416967226',
  linkedin: 'https://www.linkedin.com/in/niharikaravulapalli',
  github: 'https://github.com/Niharika-ML',
  resume: '/resume/Niharika_Ravulapalli_Resume.pdf',
  profileImage: '', // Customizable: user can upload or keep default high-tech visual
  
  headlinePrefix: "Hi, I'm Niharika.",
  animatedPhrases: [
    'Data Science Solutions',
    'Machine Learning Models',
    'Intelligent AI Agents',
    'Practical Web Applications',
    'Meaningful Digital Tools',
  ],
  
  heroIntro:
    "I'm a Data Science student passionate about turning real-world problems into practical solutions using data, machine learning, artificial intelligence, and modern web technologies.",

  aboutParagraphs: [
    "I'm a Data Science student with a strong interest in Artificial Intelligence, Machine Learning, and software development. I enjoy transforming ideas into working projects that solve practical problems.",
    "My learning journey revolves around experimenting with machine learning models, building AI-powered applications, exploring modern development tools, and participating in innovation-focused projects and hackathons.",
    "I believe the best way to learn technology is to build with it — so I continuously turn concepts into practical solutions.",
  ],

  aboutHighlights: [
    { label: 'Data Science Student', icon: '🎓', desc: 'Active undergraduate coursework & real-world data pipelines' },
    { label: 'AI & Machine Learning', icon: '🤖', desc: 'Predictive modeling, classification & generative workflows' },
    { label: 'Project Builder', icon: '💻', desc: 'Turning academic concepts into usable software tools' },
    { label: 'Innovation & Hackathons', icon: '🚀', desc: 'Collaborative problem solving & rapid prototyping' },
  ],

  whatIBuild: [
    {
      title: 'AI & Machine Learning',
      description:
        'Machine learning models and intelligent systems designed to solve real-world prediction, classification, and decision-making problems.',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'XGBoost'],
      icon: 'Brain',
      gradient: 'from-sky-500/20 to-blue-600/10',
      borderGlow: 'hover:border-sky-500/50',
    },
    {
      title: 'AI-Powered Applications',
      description:
        'Interactive applications and AI agents that transform machine learning models into practical user-facing solutions.',
      technologies: ['Python', 'Streamlit', 'AI Agents', 'APIs', 'Data Processing'],
      icon: 'Cpu',
      gradient: 'from-indigo-500/20 to-purple-600/10',
      borderGlow: 'hover:border-indigo-500/50',
    },
    {
      title: 'Web & Digital Solutions',
      description:
        'Clean, responsive web applications designed to make technology accessible, useful, and easy to interact with.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Streamlit', 'Modern Web Tools'],
      icon: 'Globe',
      gradient: 'from-purple-500/20 to-pink-600/10',
      borderGlow: 'hover:border-purple-500/50',
    },
  ],

  skills: [
    {
      title: 'Programming',
      description: 'Core languages for algorithmic logic and application development',
      skills: [
        { name: 'Python', highlight: true },
        { name: 'HTML' },
        { name: 'CSS' },
        { name: 'JavaScript' },
        { name: 'SQL', highlight: true },
      ],
    },
    {
      title: 'Data Science',
      description: 'Data wrangling, analytical computation, and statistical visualization',
      skills: [
        { name: 'Pandas', highlight: true },
        { name: 'NumPy', highlight: true },
        { name: 'Matplotlib' },
        { name: 'Data Analysis', highlight: true },
        { name: 'Data Visualization' },
      ],
    },
    {
      title: 'Machine Learning',
      description: 'Supervised and ensemble predictive models for real data tasks',
      skills: [
        { name: 'Scikit-learn', highlight: true },
        { name: 'Random Forest', highlight: true },
        { name: 'XGBoost', highlight: true },
        { name: 'SVM' },
        { name: 'KNN' },
        { name: 'MLP' },
      ],
    },
    {
      title: 'Development',
      description: 'Tools and environments for building, versioning, and deploying',
      skills: [
        { name: 'Streamlit', highlight: true },
        { name: 'Git', highlight: true },
        { name: 'GitHub' },
        { name: 'VS Code' },
        { name: 'Google Colab' },
      ],
    },
    {
      title: 'AI & Innovation',
      description: 'Emerging architectures, agent workflows, and computer vision concepts',
      skills: [
        { name: 'AI Agents', highlight: true },
        { name: 'Generative AI', highlight: true },
        { name: 'Prompt Engineering' },
        { name: 'Computer Vision' },
        { name: 'AI-powered Applications', highlight: true },
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: 'speech-gender-recognition',
      title: 'Speech-Based Gender Recognition Agent',
      shortDescription:
        'An AI-powered application that analyzes speech features and predicts gender using machine learning models.',
      category: ['AI / ML', 'AI Agents'],
      problem:
        'Acoustic voice characteristics vary subtly across frequency bands, timbre, and pitch harmonics, requiring robust signal preprocessing before classification.',
      solution:
        'Processed raw audio inputs to extract key spectral and acoustic characteristics using Librosa, fed the normalized feature vectors into trained classification models, and wrapped the pipeline in an intuitive Streamlit interface for live interactive predictions.',
      technologies: ['Python', 'Machine Learning', 'Scikit-learn', 'Streamlit', 'Librosa'],
      features: [
        'Audio file input and acoustic waveform processing',
        'Feature extraction of pitch, spectral harmonics, and MFCC coefficients',
        'Machine learning classification pipeline with Scikit-learn',
        'Interactive, fast Streamlit web interface with immediate feedback',
      ],
      results:
        'Successfully deployed functional web application with high predictive reliability on voice acoustic datasets.',
      githubUrl: 'https://github.com/Niharika-ML/Speech-Based-Gender-Recognition-Agent',
      liveUrl: 'https://speech-based-gender-recognition-agent-lo6sqxpepsfsh7xsf7sedd.streamlit.app/',
      featured: true,
      tag: 'Live Deployed Agent',
    },
    {
      id: 'grid-resilience-rescue-flow',
      title: 'AI-Driven Grid Resilience & Public Communication',
      shortDescription:
        'An intelligent power-grid resilience concept designed to help detect infrastructure faults during disasters and support faster communication between power organizations and affected communities.',
      category: ['AI / ML', 'Web Applications', 'AI Agents'],
      problem:
        'Natural disasters severely disrupt electricity transmission, slowing down utility diagnosis while leaving impacted citizens in the dark without actionable recovery updates.',
      solution:
        'Formulated a disaster-aware grid monitoring architecture featuring AI decision support for fault detection, utility triage management, and a public communication feed with resilient solar energy pathway integration (Presented as an intelligent conceptual system; not a real-world utility deployment).',
      technologies: ['AI Decision Support', 'Fault Detection Logic', 'Web Platform', 'Grid Analytics', 'Solar Resilience Concept'],
      features: [
        'Fault detection and grid anomaly diagnostics',
        'Disaster-aware infrastructure status tracking',
        'AI-driven decision support for utility response coordinators',
        'Dedicated organizational triage & dispatch portal',
        'Public communication notification hub for impacted residents',
        'Solar and resilient clean energy integration concept',
      ],
      results:
        'Working web prototype demonstrating rapid fault communication and disaster response coordination.',
      liveUrl: 'https://esoteric-grid-rescue-flow.base44.app',
      githubUrl: 'https://github.com/Niharika-ML',
      featured: true,
      tag: 'Interactive Web Prototype',
    },
    {
      id: 'student-mental-health-agent',
      title: 'Student Mental Health Assessment Agent',
      shortDescription:
        'A machine learning-based assessment system designed to analyze input factors and provide an automated prediction/assessment using trained classification models.',
      category: ['AI / ML', 'Data Science', 'AI Agents'],
      problem:
        'Students encounter fluctuating stress levels from academic loads, sleep irregularities, and lifestyle pressures, yet structured early evaluations are seldom readily accessible.',
      solution:
        'Designed a multi-factor classification framework assessing lifestyle variables, sleep duration, and study pressures, evaluating model performance across six supervised machine learning algorithms.',
      technologies: ['Python', 'Machine Learning', 'Scikit-learn', 'Random Forest', 'Logistic Regression', 'SVM', 'KNN', 'XGBoost'],
      features: [
        'Multi-factor input assessment for student lifestyle and study metrics',
        'Comparative evaluation across 6 classification algorithms',
        'Model hyperparameter tuning and performance metric benchmarking',
        'Automated scoring indicators and wellness assessment guidance',
      ],
      results:
        'Demonstrated strong predictive convergence with ensemble classifiers (Random Forest & XGBoost) leading benchmark scores.',
      githubUrl: 'https://github.com/Niharika-ML',
      featured: true,
      tag: 'Comparative ML Pipeline',
    },
    {
      id: 'crop-yield-prediction',
      title: 'Crop Yield Prediction Agent',
      shortDescription:
        'A machine learning application that predicts crop yield using agricultural and environmental factors such as area, rainfall, pesticides, temperature, crop type, and year.',
      category: ['AI / ML', 'Data Science', 'AI Agents'],
      problem:
        'Unpredictable weather variations, pesticide applications, and soil variability make seasonal crop yield estimates challenging for agricultural planning.',
      solution:
        'Built an end-to-end data pipeline to clean and normalize historical agronomic datasets, engineer climate indicators (annual rainfall, temperature variances), and train regression models to forecast yield per hectare.',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'Machine Learning', 'Data Analysis'],
      features: [
        'Multi-variable agronomic modeling (rainfall, temperature, pesticides, acreage)',
        'Crop-specific and seasonal historical data preprocessing with Pandas',
        'Regression algorithms predicting expected harvest tonnage',
        'Feature importance analysis identifying dominant yield determinants',
      ],
      results:
        'Identified key climatic correlations and generated dependable seasonal yield forecasts.',
      githubUrl: 'https://github.com/Niharika-ML',
      featured: false,
      tag: 'Agritech Data Science',
    },
    {
      id: 'diabetes-prediction-agent',
      title: 'Diabetes Prediction Agent',
      shortDescription:
        'A machine learning prediction application that analyzes health-related input features and generates a diabetes-risk prediction using a trained classification model.',
      category: ['AI / ML', 'Data Science'],
      problem:
        'Understanding how metabolic markers correlate with health risk factors through an educational machine learning lens.',
      solution:
        'Engineered an educational classification application using Scikit-learn and Streamlit that standardizes biometric inputs and calculates diagnostic probabilities (Strictly an educational student project; not intended for medical diagnoses).',
      technologies: ['Python', 'Machine Learning', 'Scikit-learn', 'Streamlit'],
      features: [
        'Input of biometric indicators (glucose, insulin, BMI, blood pressure, age)',
        'Feature scaling and preprocessing pipeline',
        'Binary classification modeling with probability metrics',
        'Interactive Streamlit interface with clear educational disclaimers',
      ],
      results:
        'Functional student project providing an intuitive demonstration of binary classification on clinical datasets.',
      githubUrl: 'https://github.com/Niharika-ML',
      featured: false,
      tag: 'Educational ML Model',
    },
    {
      id: 'traffic-violation-detection',
      title: 'Traffic Violation Detection',
      shortDescription:
        'A web-based traffic violation detection concept designed to explore how computer vision and AI can assist in identifying traffic-rule violations.',
      category: ['Computer Vision', 'AI / ML'],
      problem:
        'Manual traffic surveillance at busy intersections is labor-intensive and prone to human oversight during peak transit hours.',
      solution:
        'Conceived and developed after an immersive Generative AI workshop to explore computer vision pipelines, image preprocessing techniques, and bounding box logic for identifying lane and traffic anomalies.',
      technologies: ['Python', 'Computer Vision', 'OpenCV Concept', 'AI Image Processing', 'Streamlit / Web'],
      features: [
        'Exploration of computer vision object detection methods',
        'Lane departure and traffic marker anomaly detection concept',
        'Developed following hands-on Generative AI workshop insights',
        'Interactive web-based conceptual inspection dashboard',
      ],
      results:
        'Exploratory prototype establishing computer vision fundamentals and pipeline architectures.',
      githubUrl: 'https://github.com/Niharika-ML',
      featured: false,
      tag: 'GenAI Workshop Project',
    },
    {
      id: 'retailvision-ai',
      title: 'RetailVision AI',
      shortDescription:
        'An AI-powered retail computer-vision concept designed to identify and analyze products in retail environments.',
      category: ['Computer Vision', 'AI / ML'],
      problem:
        'Retail inventory checks, shelf audits, and misplaced product tracking in large supermarkets require continuous manual effort.',
      solution:
        'Researched and conceptualized a YOLOv8-based computer vision architecture designed to recognize across 1,200+ product categories, providing instant bounding-box localization for automated store shelf analysis.',
      technologies: ['YOLOv8', 'Computer Vision', 'Python', 'Deep Learning Concept', '1200+ Product Classes'],
      features: [
        'YOLOv8 deep learning object detection architecture',
        'Exploration of 1,200+ retail item classification concepts',
        'Multi-object detection and spatial bounding box estimation',
        'Automated inventory monitoring and shelf audit workflow concept',
      ],
      results:
        'Conceptual retail computer-vision architecture and model design specification.',
      githubUrl: 'https://github.com/Niharika-ML',
      featured: false,
      tag: 'Computer Vision Concept',
    },
  ] as Project[],

  journeyTimeline: [
    {
      period: 'Ongoing Education',
      title: 'Data Science Education',
      category: 'Education & Academics',
      description:
        'Currently pursuing undergraduate Data Science studies, building strong mathematical and algorithmic foundations in probability, linear algebra, Python programming, and statistical modeling.',
      details: [
        'Data structures, algorithms, and relational database systems (SQL)',
        'Statistical data analysis and exploratory data visualization with Pandas & NumPy',
        'Core machine learning algorithms and predictive analytics',
      ],
      icon: 'education',
    },
    {
      period: 'Practical Implementation',
      title: 'Project Development',
      category: 'Hands-on Building',
      description:
        'Actively transforming conceptual learning into deployed applications and open-source GitHub repositories across ML, speech processing, and web platforms.',
      details: [
        'Speech-Based Gender Recognition Agent deployed on Streamlit Cloud',
        'Multi-model student mental health classification suite',
        'Predictive crop yield and healthcare-oriented machine learning experiments',
      ],
      icon: 'project',
    },
    {
      period: 'Innovation & Collaboration',
      title: 'Hackathons & Innovation',
      category: 'Competitions & Sprints',
      description:
        'Participating in innovation challenges, hackathons, and technology sprints to solve practical problems under rapid prototyping conditions.',
      details: [
        'AI-Driven Grid Resilience & Public Communication system concept',
        'Collaborative prototyping with cross-functional peers',
        'Focus on real-world disaster management, agriculture, and civic infrastructure',
      ],
      icon: 'hackathon',
    },
    {
      period: 'Modern AI Exploration',
      title: 'GenAI Workshops & Modern Tooling',
      category: 'Continuous Learning',
      description:
        'Attended specialized Generative AI workshops and technical training sessions to explore prompt engineering, computer vision, and emerging AI agent architectures.',
      details: [
        'Hands-on immersion in modern Generative AI workflows',
        'Exploration of Computer Vision and YOLO object detection pipelines',
        'Translating workshop concepts into working code prototypes (Traffic Violation Detection)',
      ],
      icon: 'workshop',
    },
    {
      period: 'Campus Engagement',
      title: 'Community & Campus Activities',
      category: 'Leadership & Sharing',
      description:
        'Actively engaged in student technical communities, peer study circles, and campus technology forums.',
      details: [
        'Peer mentoring and collaborative coding sessions',
        'Sharing data science project takeaways and learning resources',
        'Continuous participation in departmental tech events and seminars',
      ],
      icon: 'community',
    },
  ] as TimelineItem[],

  certifications: [
    {
      id: 'msme-cert',
      title: 'MSME Certification',
      organization: 'Ministry of Micro, Small & Medium Enterprises (MSME)',
      year: 'Academic Certification',
      credentialId: 'MSME-VERIFIED',
      description:
        'Professional technology and technical skills training certification endorsed by the Ministry of MSME.',
      category: 'Technical Certification',
      verified: true,
    },
    {
      id: 'infosys-cert',
      title: 'Infosys Certification',
      organization: 'Infosys Springboard',
      year: 'Professional Learning',
      credentialId: 'INFOSYS-VERIFIED',
      description:
        'Industry-aligned foundational coursework in software development principles and practical technologies.',
      category: 'Industry Training',
      verified: true,
    },
    {
      id: 'futureskills-cloud',
      title: 'Applications of Cloud Computing',
      organization: 'FutureSkills Prime (NASSCOM / MeitY)',
      year: 'Cloud & Infrastructure',
      credentialId: 'FSP-CLOUD-VERIFIED',
      description:
        'Comprehensive curriculum covering cloud architecture, distributed systems, deployment models, and scalable computing infrastructure.',
      category: 'Cloud Computing',
      verified: true,
    },
    {
      id: 'hackathon-cert',
      title: 'Hackathon Participation & Innovation',
      organization: 'Technology Hackathons & Sprints',
      year: 'Innovation Awards',
      credentialId: 'HACKATHON-ACTIVE',
      description:
        'Recognition of collaborative prototype building, rapid ideation, and real-world problem-solving under competitive time constraints.',
      category: 'Hackathons',
      verified: true,
    },
    {
      id: 'genai-cert',
      title: 'GenAI Workshop & Project Certification',
      organization: 'AI Technical Workshops',
      year: 'Specialized Workshop',
      credentialId: 'GENAI-WORKSHOP-COMPLETED',
      description:
        'Intensive hands-on workshop focused on Generative AI architectures, prompt patterns, and computer-vision-assisted workflows.',
      category: 'Artificial Intelligence',
      verified: true,
    },
    {
      id: 'future-cert',
      title: 'Upcoming Certifications & Specializations',
      organization: 'Continuous Learning Path',
      year: 'In Progress',
      credentialId: 'EXPANDING',
      description:
        'Currently preparing for additional specialized credentials in advanced machine learning, deep learning, and MLOps.',
      category: 'Continuous Learning',
      verified: false,
    },
  ] as CertificationItem[],

  beyondTheCode: {
    lead: "I don't build projects just to experiment with technology. I enjoy exploring how technology can be applied to real-world challenges — from disaster-resilient power systems to agriculture, healthcare-oriented ML applications, computer vision, and intelligent digital tools.",
    cards: [
      {
        title: 'REAL-WORLD PROBLEMS',
        tagline: 'Identifying practical problems worth solving.',
        description:
          'Focusing on authentic friction points: electrical grid fragility during storms, agricultural yield predictability for farmers, and early lifestyle wellbeing assessments.',
        icon: 'Target',
      },
      {
        title: 'BUILD & EXPERIMENT',
        tagline: 'Turning concepts into functional prototypes.',
        description:
          'Transforming abstract mathematics and notebook algorithms into interactive web interfaces, Streamlit agents, and testable applications.',
        icon: 'Hammer',
      },
      {
        title: 'LEARN & ITERATE',
        tagline: 'Improving through experimentation, feedback, and continuous learning.',
        description:
          'Embracing peer feedback, workshop takeaways, and code reviews to refine models, streamline codebases, and master emerging AI tools.',
        icon: 'RefreshCw',
      },
    ],
  },

  resumeCTA: {
    heading: "Let's build something meaningful.",
    text: "I'm currently interested in learning opportunities, internships, collaborations, and projects where I can apply and grow my skills in Data Science, AI/ML, and software development.",
  },

  contact: {
    heading: "Let's Connect",
    subheading: "Have an idea, project, or opportunity? Let's talk.",
    cards: [
      {
        type: 'EMAIL',
        label: 'Email',
        value: 'niharikaravulapalli24@gmail.com',
        href: 'mailto:niharikaravulapalli24@gmail.com',
        actionText: 'Email Me',
        icon: 'Mail',
      },
      {
        type: 'PHONE',
        label: 'Phone',
        value: '+91 7416967226',
        href: 'tel:+917416967226',
        actionText: 'Call Me',
        icon: 'Phone',
      },
      {
        type: 'LINKEDIN',
        label: 'LinkedIn',
        value: 'niharikaravulapalli',
        href: 'https://www.linkedin.com/in/niharikaravulapalli',
        actionText: 'View LinkedIn',
        icon: 'Linkedin',
      },
      {
        type: 'GITHUB',
        label: 'GitHub',
        value: 'Niharika-ML',
        href: 'https://github.com/Niharika-ML',
        actionText: 'View GitHub',
        icon: 'Github',
      },
    ],
  },
};
