import { BotMessageSquare, ClipboardList, ScanFace } from 'lucide-react';

/**
 * Projects, in display order.
 *
 * Required:
 *   slug        – unique id
 *   title, description
 *   tags        – tech used, shown as chips
 *   accent      – card color: 'pink' · 'ultra' · 'mint' (see components/cards/ProjectCard.jsx)
 *   icon        – a lucide-react icon shown on the card's cover (https://lucide.dev/icons)
 * Optional:
 *   highlights  – short points (features, decisions, results). Homepage shows the first 3; /projects shows all.
 *   overview    – a short paragraph, shown on /projects only
 *   liveUrl     – live demo link
 *   repoUrl     – source code link
 *   featured    – false hides the project from the homepage (it stays on /projects)
 * Without liveUrl/repoUrl, cards show "Links coming soon".
 */
export const projects = [
  {
    slug: 'infinity-ai',
    title: 'Infinity-AI',
    description: 'An AI-powered chatbot using LangGraph for multi-step workflow orchestration.',
    tags: ['LangGraph', 'RAG', 'LLM-Groq', 'Streamlit', 'SQLite', 'FastAPI'],
    accent: 'pink',
    icon: BotMessageSquare,
    highlights: [
      'Implemented long-term conversational memory for context-aware responses across sessions.',
      'Built a RAG pipeline with BM25-based retrieval to improve information relevance.',
      'Integrated SQLite for persistent data and memory storage.',
      'Developed an interactive Streamlit interface with multi-session chat support.',
      'Designed a modular architecture for extensible retrieval and LLM integration.',
    ],
  },
  {
    slug: 'beneficiary-registration-agent',
    title: 'AI-Powered Beneficiary Registration Agent',
    description:
      'An AI-assisted beneficiary registration system that collects structured information through conversational interaction.',
    tags: ['Python', 'Streamlit', 'LangGraph', 'LangChain', 'Groq', 'PostgreSQL'],
    accent: 'ultra',
    icon: ClipboardList,
    highlights: [
      'Built an agentic workflow using LangGraph to dynamically determine missing information and control conversation flow.',
      'Implemented structured data extraction from natural-language responses.',
      'Designed dynamic questioning based on beneficiary requirements such as education, medical, and financial needs.',
      'Designed multilingual interaction capabilities including English, Hindi, and Roman Hindi/Urdu-style input.',
      'Explored image capture/upload workflows for associating beneficiary documentation with database records.',
    ],
  },
  {
    slug: 'face-mask-detection',
    title: 'Face Mask Detection',
    description: 'A Convolutional Neural Network (CNN) that classifies facial images into Mask and No Mask.',
    tags: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'CNN', 'NumPy', 'Matplotlib'],
    accent: 'mint',
    icon: ScanFace,
    highlights: [
      'Preprocessed and normalized image data, including resizing and dataset preparation for model training.',
      'Designed and trained a CNN using convolution, pooling, dropout, and fully connected layers.',
      'Evaluated model performance using accuracy, loss, confusion matrix, and classification metrics.',
      'Integrated OpenCV for real-time face detection and mask classification through a webcam.',
    ],
  },
];
