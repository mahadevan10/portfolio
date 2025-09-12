import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ProjectsGrid from './components/ProjectsGrid';
import Skills from './components/Skills';
import Contact from './components/Contact';



const projects = [
  {
    id: 'proj-1',
    image: process.env.PUBLIC_URL + '/images/signLanguage.png',
    title: 'Sign Language Recognizer',
    description: 'LSTM-based model that translates sign gestures to text',
    skills: ['Python', 'LSTM', 'OpenCV'],
    github: 'https://github.com/mahadevan10/sign-language',
    year: 2024
  },
  {
    id: 'proj-2',
    image: process.env.PUBLIC_URL + '/images/prediction_plot.png',
    title: 'Reliance Stock Price Predictor',
    description: 'Regression and LSTM models to predict next-day stock price of Reliance',
    skills: ['Python', 'Pandas', 'LSTM', 'Scikit-learn'],
    github: 'https://github.com/mahadevan10/reliance-stock-predictor',
    year: 2024
  },
  {
    id: 'proj-3',
    image: process.env.PUBLIC_URL + '/images/RAG.png',
    title: 'Kerala Laws Scraper + RAG chatbot',
    description: 'Scraper for extracting and structuring Kerala-specific acts from India Code and then using and RAG to answer questions on them',
    skills: ['Python', 'Playwright', 'SQLite', 'PDFPlumber'],
    github: 'https://github.com/mahadevan10/kerala-law-scraper',
    year: 2025,
    underWork: true
  },
  {
    id: 'proj-4',
    image: process.env.PUBLIC_URL + '/images/todolist.png',
    title: 'Todo List App',
    description: 'A simple full-stack todo list application with CRUD features',
    skills: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/mahadevan10/TODO-list-react',
    year: 2025
  },
  {
    id: 'proj-5',
    image: process.env.PUBLIC_URL + '/images/tweet.png',
    title: 'Tweet Sentiment Analyzer',
    description: 'Analyzes sentiment of tweets using NLP techniques and classifies results',
    skills: ['Huggingface Spaces', 'RoBERTa', 'NLP'],
    github: 'https://huggingface.co/spaces/mahadevan10/tweet-emotion-classifier',
    year: 2025
  }
];





function App() {
  return (
    <>
    <Navbar dp={process.env.PUBLIC_URL + '/images/dp.jpeg'}/>
    <Hero bgImage={process.env.PUBLIC_URL + '/images/green-bg.jpg'} dp={process.env.PUBLIC_URL + '/images/dp.jpeg'} />
    <AboutSection />
    <ProjectsGrid projects={projects} />
    <Skills />
    <Contact bgImage={process.env.PUBLIC_URL + '/images/green-bg.jpg'}/>
    </>
  );
}

export default App;



