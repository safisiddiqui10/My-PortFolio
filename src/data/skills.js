/**
 * Skills.
 *
 * skillCategories – every category, in the order shown on the /skills page.
 *   id     – short unique id, used by the homepage bands below
 *   title  – the heading shown on the page
 *   color  – the category's accent: 'blue' · 'mint' · 'saffron' · 'pink'
 *            (matches the homepage band it belongs to)
 *   skills – the skills, in display order
 *
 * skillBands – the 4 colored bands on the homepage. Each shows the categories listed in `categories`.
 *   band   – the band's name/id; use any name you like
 *   title  – the heading shown on the page
 *   color  – the background: 'blue' · 'mint' · 'saffron' · 'pink' (see .band[data-color=...] in styles/global.css)
 */
export const skillCategories = [
  {
    id: 'languages',
    title: 'Languages',
    color: 'blue',
    skills: ['Python', 'JavaScript', 'TypeScript'],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    color: 'blue',
    skills: ['HTML5', 'CSS3', 'React.js', 'Next.js', 'Responsive Design', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    id: 'backend',
    title: 'Backend',
    color: 'blue',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'FastAPI', 'JWT', 'Pydantic'],
  },
  {
    id: 'databases',
    title: 'Databases & Vector Database',
    color: 'blue',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'SQLite', 'ChromaDB', 'FAISS'],
  },
  {
    id: 'ml-dl',
    title: 'Machine Learning & Deep Learning',
    color: 'saffron',
    skills: [
      'Supervised Learning',
      'Unsupervised Learning',
      'Feature Engineering',
      'Model Training',
      'Model Evaluation',
      'Neural Networks',
      'CNNs',
      'RNNs',
      'LSTMs',
      'Transformers',
      'Scikit-learn',
      'PyTorch',
      'TensorFlow',
    ],
  },
  {
    id: 'data-science',
    title: 'Data Science & Data Analysis',
    color: 'mint',
    skills: [
      'NumPy',
      'Pandas',
      'Matplotlib',
      'Seaborn',
      'Plotly',
      'Data Cleaning',
      'Data Visualization',
      'Exploratory Data Analysis (EDA)',
      'Data Preprocessing',
      'Statistical Analysis',
    ],
  },
  {
    id: 'generative-ai',
    title: 'Generative AI & LLMs',
    color: 'pink',
    skills: [
      'Prompt Engineering',
      'Retrieval-Augmented Generation (RAG)',
      'LangChain',
      'Vector Databases',
      'Embeddings',
      'Semantic Search',
      'Ollama',
      'Large Language Models (LLMs)',
      'Hugging Face Transformers',
      'Model Fine-Tuning',
      'Hybrid Search',
      'BM25',
      'Reranking',
    ],
  },
  {
    id: 'agentic-ai',
    title: 'Agentic AI & Automation',
    color: 'pink',
    skills: [
      'AI Agents',
      'Multi-Agent Systems',
      'Agentic Workflows',
      'Tool Calling',
      'MCP (Model Context Protocol)',
      'N8N',
      'LangGraph',
    ],
  },
  {
    id: 'nlp-cv',
    title: 'Natural Language Processing (NLP) & Computer Vision',
    color: 'saffron',
    skills: [
      'OpenCV',
      'Image Processing',
      'Object Detection',
      'Image Classification',
      'Text Preprocessing',
      'Tokenization',
      'Text Classification',
      'Sentiment Analysis',
      'YOLO',
    ],
  },
  {
    id: 'tools',
    title: 'Developer Tools/Deployment',
    color: 'blue',
    skills: [
      'Git',
      'GitHub',
      'Postman',
      'Thunder Client',
      'Vercel',
      'Netlify',
      'Docker',
      'Claude Code',
      'Render',
      'Streamlit',
      'LangSmith',
    ],
  },
];

export const skillBands = [
  { band: 'Web-Dev', color: 'blue', title: 'Web Development', categories: ['frontend', 'backend'] },
  { band: 'Data Science', color: 'mint', title: 'Data Science', categories: ['data-science'] },
  { band: 'ML-DL', color: 'saffron', title: 'Machine Learning & Deep Learning', categories: ['ml-dl', 'nlp-cv'] },
  {
    band: 'Artificial-Intelligence',
    color: 'pink',
    title: 'Artificial Intelligence',
    categories: ['generative-ai', 'agentic-ai'],
  },
];

/** The category objects a homepage band shows. */
export const categoriesForBand = (band) =>
  band.categories.map((id) => {
    const category = skillCategories.find((candidate) => candidate.id === id);
    if (!category) throw new Error(`Skill band "${band.title}" lists unknown category "${id}" (src/data/skills.js)`);
    return category;
  });
