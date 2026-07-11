import { useState, useEffect } from 'react'
import { X, Plus, Trash2 } from 'lucide-react'

export default function PackageFormModal({ isOpen, onClose, onSubmit, initialData }) {
  const [formData, setFormData] = useState({
    name: '',
    type: 'domestic',
    category: 'Karnataka',
    duration: '',
    price: '',
    image: '',
    featured: false,
    highlights: ['']
  })



  useEffect(() => {
    if (initialData) {
      setFormData(initialData)
    } else {
      setFormData({
        name: '',
        type: 'domestic',
        category: 'Karnataka',
        duration: '',
        price: '',
        image: '',
        featured: false,
        highlights: ['']
      })
    }
  }, [initialData, isOpen])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    
    if (name === 'type') {
      setFormData({
        ...formData,
        [name]: value
      })
      return
    }

    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  const handleHighlightChange = (index, value) => {
    const newHighlights = [...formData.highlights]
    newHighlights[index] = value
    setFormData({ ...formData, highlights: newHighlights })
  }

  const addHighlight = () => {
    setFormData({ ...formData, highlights: [...formData.highlights, ''] })
  }

  const removeHighlight = (index) => {
    if (formData.highlights.length > 1) {
      const newHighlights = formData.highlights.filter((_, i) => i !== index)
      setFormData({ ...formData, highlights: newHighlights })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Clean up empty highlights and convert price to number
    const cleanData = {
      ...formData,
      price: Number(formData.price),
      highlights: formData.highlights.filter(h => h.trim() !== '')
    }
    onSubmit(cleanData)
  }

  if (!isOpen) return null

  const inputClass = "w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all"
  const labelClass = "block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5"

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#0B1E36]/80 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50/50">
          <h2 className="text-xl font-extrabold text-[#0B1E36]">
            {initialData ? 'Edit Package' : 'Add New Package'}
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-slate-200 rounded-full transition-colors">
            <X size={20} className="text-slate-500" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 overflow-y-auto flex-grow">
          <form id="packageForm" onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>Package Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required className={inputClass} placeholder="e.g. Coorg Coffee Trail" />
              </div>
              
              <div>
                <label className={labelClass}>Price (₹)</label>
                <input type="number" name="price" value={formData.price} onChange={handleChange} required min="0" className={inputClass} placeholder="8999" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>Type</label>
                <select name="type" value={formData.type} onChange={handleChange} className={inputClass}>
                  <option value="domestic">Domestic</option>
                  <option value="international">International</option>
                </select>
              </div>

              <div>
                <label className={labelClass}>Category</label>
                <input type="text" name="category" value={formData.category} onChange={handleChange} required className={inputClass} placeholder={formData.type === 'domestic' ? 'e.g. Karnataka' : 'e.g. Bali'} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>Duration</label>
                <input type="text" name="duration" value={formData.duration} onChange={handleChange} required className={inputClass} placeholder="e.g. 3 Days / 2 Nights" />
              </div>
              
              <div>
                <label className={labelClass}>Image URL</label>
                <input type="url" name="image" value={formData.image} onChange={handleChange} required className={inputClass} placeholder="https://images.unsplash.com/..." />
              </div>
            </div>

            <div>
              <label className={labelClass}>Places Covered</label>
              <div className="space-y-3">
                {formData.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <input 
                      type="text" 
                      value={highlight} 
                      onChange={(e) => handleHighlightChange(idx, e.target.value)} 
                      className={inputClass}
                      placeholder={`Place ${idx + 1}`}
                      required={idx === 0}
                    />
                    <button type="button" onClick={() => removeHighlight(idx)} className="p-2.5 text-red-500 hover:bg-red-50 rounded-xl transition-colors disabled:opacity-50" disabled={formData.highlights.length === 1}>
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))}
              </div>
              <button type="button" onClick={addHighlight} className="mt-3 flex items-center gap-1 text-sm font-bold text-orange-500 hover:text-orange-600">
                <Plus size={16} /> Add Another Place
              </button>
            </div>

            <div className="flex items-center gap-3 p-4 bg-amber-50 rounded-xl border border-amber-100">
              <input type="checkbox" id="featured" name="featured" checked={formData.featured} onChange={handleChange} className="w-5 h-5 rounded text-orange-500 focus:ring-orange-500" />
              <label htmlFor="featured" className="text-sm font-bold text-[#0B1E36] cursor-pointer">
                Mark as Featured Package (Shows on Homepage)
              </label>
            </div>

          </form>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-slate-100 bg-slate-50/50 flex justify-end gap-3">
          <button type="button" onClick={onClose} className="px-6 py-2.5 rounded-xl font-bold text-slate-600 hover:bg-slate-200 transition-colors">
            Cancel
          </button>
          <button type="submit" form="packageForm" className="px-8 py-2.5 rounded-xl font-bold text-white bg-gradient-to-r from-orange-500 to-amber-400 hover:shadow-lg hover:shadow-orange-200/50 transition-all">
            {initialData ? 'Save Changes' : 'Create Package'}
          </button>
        </div>

      </div>
    </div>
  )
}
