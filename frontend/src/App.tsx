import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Gallery from './pages/Gallery'
import Upload from './pages/Upload'
import MyImages from './pages/MyImages'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/my-images" element={<MyImages />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
