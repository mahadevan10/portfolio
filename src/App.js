import logo from './logo.svg';
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
    image: '/images/portfolio-bg.jpg',
    title: 'Sign Language Recognizer',
    description: 'LSTM-based model that translates sign gestures to text',
    skills: ['Python', 'LSTM', 'OpenCV'],
    github: 'https://github.com/mahadevan10/sign-language',
    year: 2024
  },
  {
    id: 'proj-2',
    image: '/images/portfolio-bg.jpg',
    title: 'Reliance Stock Price Predictor',
    description: 'Regression and LSTM models to predict next-day stock price of Reliance',
    skills: ['Python', 'Pandas', 'LSTM', 'Scikit-learn'],
    github: 'https://github.com/mahadevan10/reliance-stock-predictor',
    year: 2024
  },
  {
    id: 'proj-3',
    image: '/images/portfolio-bg.jpg',
    title: 'Kerala Law Scraper',
    description: 'Scraper for extracting and structuring Kerala-specific acts from India Code',
    skills: ['Python', 'BeautifulSoup', 'SQLite', 'PDFPlumber'],
    github: 'https://github.com/mahadevan10/kerala-law-scraper',
    year: 2025
  },
  {
    id: 'proj-4',
    image: '/images/todolist.png',
    title: 'Todo List App',
    description: 'A simple full-stack todo list application with CRUD features',
    skills: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/mahadevan10/TODO-list-react',
    year: 2025
  },
  {
    id: 'proj-5',
    image: '/images/tweet.png',
    title: 'Tweet Sentiment Analyzer',
    description: 'Analyzes sentiment of tweets using NLP techniques and classifies results',
    skills: ['Hugginface spaces', 'roBERTa', 'NLP'],
    github: 'https://huggingface.co/spaces/mahadevan10/tweet-emotion-classifier',
    year: 2025
  }
]




function App() {
  return (
    <>
    <Navbar />
    <Hero bgImage="/images/portfolio-bg-dark.png" />
    <AboutSection />
    <ProjectsGrid projects={projects} />
    <Skills />
    <Contact />
    </>
  );
}

export default App;



