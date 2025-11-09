import Header from "./components/Header"
import Section from "./components/Section"

function App() {

  return (
      <div className="bg-gray-200 p-6 flex justify-center">
        <div className="max-w-2xl mx-4 my-2 bg-white rounded-lg shadow-2xl">
          <Header></Header>
          <Section></Section>
        </div>
      </div>
  )
}

export default App
