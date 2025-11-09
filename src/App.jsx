import AboutMe from "./components/AboutMe"
import Header from "./components/Header"
import Projects from "./components/project/Projects"
import Skills from "./components/Skills"
import Education from "./components/Education"
import Hobbies from "./components/Hobbies"
import Extracurricular from "./components/Extracurricular"
import Contact from "./components/Contact"

function App() {

  return (
      <div className="bg-gray-100 px-3 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl">
          <Header></Header>
          <AboutMe></AboutMe>
          <Projects></Projects>
          <Skills></Skills>
          <Education></Education>
          <Hobbies></Hobbies>
          <Extracurricular></Extracurricular>
          <Contact></Contact>
        </div>
      </div>
  )
}

export default App
