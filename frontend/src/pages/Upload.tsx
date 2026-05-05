import { useState } from 'react'
import { Upload as UploadIcon, AlertCircle } from 'lucide-react'

export default function Upload() {
  const [file, setFile] = useState<File | null>(null)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      // Validate file type
      if (!selectedFile.type.startsWith('image/')) {
        setError('Please select an image file')
        return
      }
      
      // Validate file size (max 10MB)
      if (selectedFile.size > 10 * 1024 * 1024) {
        setError('File size must be less than 10MB')
        return
      }
      
      setError('')
      setFile(selectedFile)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!file || !title) {
      setError('Please select a file and enter a title')
      return
    }

    setUploading(true)
    setError('')

    try {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('title', title)
      formData.append('description', description)

      // TODO: Upload to API
      // const response = await fetch('/api/images/upload', {
      //   method: 'POST',
      //   body: formData
      // })
      
      // if (!response.ok) {
      //   throw new Error('Upload failed')
      // }

      setSuccess(true)
      setFile(null)
      setTitle('')
      setDescription('')
      
      setTimeout(() => setSuccess(false), 3000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Upload failed')
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Upload Your Horse Image</h1>

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-8">
        {/* File Upload */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Image File
          </label>
          
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-amber-500 transition">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
              id="file-input"
            />
            <label htmlFor="file-input" className="cursor-pointer">
              <UploadIcon className="w-12 h-12 mx-auto mb-2 text-gray-400" />
              <p className="text-gray-600">
                {file ? file.name : 'Click to upload or drag and drop'}
              </p>
              <p className="text-sm text-gray-500">
                PNG, JPG, WebP up to 10MB
              </p>
            </label>
          </div>
        </div>

        {/* Title */}
        <div className="mb-6">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Give your horse a name or title"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          />
        </div>

        {/* Description */}
        <div className="mb-6">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
            Description (optional)
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Tell us about your horse..."
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          />
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Success Message */}
        {success && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
            ✓ Image uploaded successfully!
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={uploading}
          className="w-full bg-amber-500 text-white font-bold py-3 rounded-lg hover:bg-amber-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {uploading ? 'Uploading...' : 'Upload Image'}
        </button>
      </form>
    </div>
  )
}
