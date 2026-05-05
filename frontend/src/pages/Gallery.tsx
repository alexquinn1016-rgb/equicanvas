import { useState, useEffect } from 'react'
import { Download, Heart } from 'lucide-react'

interface HorseImage {
  id: string
  title: string
  imageUrl: string
  artist: string
  downloads: number
  likes: number
}

export default function Gallery() {
  const [images, setImages] = useState<HorseImage[]>([])
  const [loading, setLoading] = useState(true)
  const [favorites, setFavorites] = useState<Set<string>>(new Set())

  useEffect(() => {
    // TODO: Fetch images from API
    // const fetchImages = async () => {
    //   try {
    //     const response = await fetch('/api/images/ai-generated')
    //     const data = await response.json()
    //     setImages(data)
    //   } catch (error) {
    //     console.error('Failed to fetch images:', error)
    //   } finally {
    //     setLoading(false)
    //   }
    // }
    // fetchImages()
    
    setLoading(false)
  }, [])

  const toggleFavorite = (id: string) => {
    setFavorites(prev => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  if (loading) {
    return <div className="text-center py-12">Loading gallery...</div>
  }

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">AI Horse Gallery</h1>
      
      {images.length === 0 ? (
        <div className="text-center py-16 bg-gray-100 rounded-lg">
          <p className="text-gray-600 text-lg">No images yet. Check back soon!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map(image => (
            <div key={image.id} className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition">
              <img 
                src={image.imageUrl} 
                alt={image.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                <p className="text-gray-600 text-sm mb-4">by {image.artist}</p>
                
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => toggleFavorite(image.id)}
                    className="flex items-center gap-1 text-red-500 hover:text-red-600"
                  >
                    <Heart 
                      className="w-5 h-5"
                      fill={favorites.has(image.id) ? 'currentColor' : 'none'}
                    />
                    {image.likes}
                  </button>
                  
                  <button className="flex items-center gap-1 bg-amber-500 text-white px-3 py-1 rounded hover:bg-amber-600 transition">
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
