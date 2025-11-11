
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
/* import Navbar from "./components/Navbar.jsx" */
import Home from "../src/views/Home/Home.jsx"

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
    </Router>
  )
}

export default App
