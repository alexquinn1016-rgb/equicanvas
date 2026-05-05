import { Link } from 'react-router-dom'
import { Gallop } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <Gallop className="w-8 h-8 text-amber-600" />
          <span>EquiCanvas</span>
        </Link>
        
        <div className="flex gap-6">
          <Link 
            to="/gallery" 
            className="text-gray-700 hover:text-amber-600 transition"
          >
            Gallery
          </Link>
          <Link 
            to="/upload" 
            className="text-gray-700 hover:text-amber-600 transition"
          >
            Upload
          </Link>
          <Link 
            to="/my-images" 
            className="text-gray-700 hover:text-amber-600 transition"
          >
            My Images
          </Link>
        </div>
      </div>
    </nav>
  )
}
