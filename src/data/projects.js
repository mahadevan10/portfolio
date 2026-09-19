import { asset } from './profile'

export const projects = [
  {
    id: 'proj-1',
    image: asset('images/plusone.png'),
    title: 'PlusOne',
    description:
      'Designed, architected, and engineered from the ground up by Codecraft. PlusOne empowers members to discover local nightlife, spontaneous social events, and connect with verified companions in real time. Engineered with high-speed intent routing, instant messaging streams, and seamless mobile-first PWA responsiveness.',
    skills: ['Next.js', 'Real-Time WebSockets', 'Docker', 'FastAPI', 'TypeScript', 'Git'],
    website: 'https://www.plusone.today/',
    year: 2026,
  },
  {
    id: 'proj-2',
    image: asset('images/aavara.png'),
    title: 'Aavara app',
    description:
      'A platform with mobile first design to help users discover and book travel experiences in India.',
    skills: ['React', 'Node.js', 'Express', 'Firebase', 'Vercel', 'Render', 'Git'],
    website: 'https://aavara.vercel.app',
    year: 2025,
  },
  {
    id: 'proj-3',
    image: asset('images/prediction_plot.png'),
    title: 'Reliance Stock Price Predictor',
    description: 'Regression and LSTM models to predict next-day stock price of Reliance.',
    skills: ['Python', 'Pandas', 'LSTM', 'Scikit-learn'],
    github: 'https://github.com/mahadevan10/reliance-stock-movement-classifier',
    year: 2024,
  },
  {
    id: 'proj-4',
    image: asset('images/RAG.jpg'),
    title: 'Kerala Laws Scraper + RAG chatbot',
    description:
      'Scraper for extracting and structuring Kerala-specific acts from India Code, then a RAG pipeline to answer questions on them.',
    skills: ['Python', 'Playwright', 'SQLite', 'PDFPlumber'],
    github: 'https://github.com/mahadevan10/keralaLawyer-RAG-bot',
    year: 2025,
    underWork: true,
  },
  {
    id: 'proj-5',
    image: asset('images/todolist.png'),
    title: 'Todo List App',
    description: 'A simple fullstack todo list application with CRUD features.',
    skills: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/mahadevan10/TODO-list-react',
    year: 2025,
  },
  {
    id: 'proj-6',
    image: asset('images/tweet.png'),
    title: 'Tweet Sentiment Analyzer',
    description: 'Analyzes sentiment of tweets using NLP techniques and classifies results.',
    skills: ['Huggingface Spaces', 'RoBERTa', 'NLP'],
    github: 'https://huggingface.co/spaces/mahadevan10/tweet-emotion-classifier',
    year: 2025,
  },
  {
    id: 'proj-7',
    image: asset('images/signLanguage.jpg'),
    title: 'Sign Language Recognizer',
    description: 'LSTM based model that translates sign gestures to text.',
    skills: ['Python', 'LSTM', 'OpenCV'],
    github: 'https://github.com/mahadevan10/SIgn-language-recognition-LSTM-openCV',
    year: 2024,
  },
  {
    id: 'proj-8',
    image: asset('images/maddyBot.jpg'),
    title: 'Personal Voice Bot',
    description:
      'The bot answers like me, not a generic assistant, with responses kept ideally between 30-90 seconds. It also has barge-in capability.',
    skills: ['Python', 'Flask', 'Docker', 'Google Cloud Platform', 'openAI', 'Git'],
    website: 'https://voice-bot-web-28339467651.us-central1.run.app',
    year: 2025,
  },  
]
