
import "./App.css";
import Header from "./components/Header";
import Technologies from "./components/Technologies";
import Project from "./components/Project";
import Footer from "./components/Footer"
// la extension .jsx es opcional

function App() {

  return (
    <div>
      
      <Header />
      {/* comentario en JSX */}

      <Technologies />

      <Project />

      <Footer />

    </div>
  )
}

export default App
