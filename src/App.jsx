import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import ProjectsGrid from './components/ProjectsGrid'
import Skills from './components/Skills'
import Contact from './components/Contact'
import { projects } from './data/projects'

export default function App() {
  return (
    <div className="relative min-h-screen bg-paper text-ink selection:bg-cyan-500/30 selection:text-cyan-200 bg-grid-pattern overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <ProjectsGrid projects={projects} />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}
