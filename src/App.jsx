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
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <ProjectsGrid projects={projects} />
        <Skills />
        <Contact />
      </main>
    </>
  )
}
