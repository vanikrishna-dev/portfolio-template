import Header from "./components/Header"
import Section from "./components/Section"

function App() {

  return (
      <div className="bg-gray-200 p-6 align-middle">
        <div className="mx-4 my-2 bg-white rounded-lg shadow-xl">
          <Header></Header>
          <Section></Section>
        </div>
      </div>
  )
}

export default App
