import { Link } from 'react-router-dom'
import { Sparkles, Upload, Download } from 'lucide-react'

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto text-center py-20">
      <h1 className="text-5xl font-bold text-gray-900 mb-4">
        Welcome to EquiCanvas 🐴
      </h1>
      
      <p className="text-xl text-gray-600 mb-12">
        Discover and share AI-generated horse artwork. Download your favorites or upload your own equine masterpieces.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Link
          to="/gallery"
          className="bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-lg p-8 hover:shadow-lg transition"
        >
          <Download className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Browse AI Horses</h2>
          <p>Explore stunning AI-generated horse images</p>
        </Link>
        
        <Link
          to="/upload"
          className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg p-8 hover:shadow-lg transition"
        >
          <Upload className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Upload Your Images</h2>
          <p>Share your horse photos and artwork</p>
        </Link>
      </div>
      
      <div className="bg-gray-100 rounded-lg p-8">
        <Sparkles className="w-12 h-12 mx-auto mb-4 text-amber-600" />
        <h3 className="text-2xl font-bold mb-2">Feature Coming Soon</h3>
        <p className="text-gray-600">
          Generate your own AI horses from text descriptions
        </p>
      </div>
    </div>
  )
}
