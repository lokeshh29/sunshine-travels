import { useState } from 'react'
import { usePackages } from '../context/PackageContext'
import PackageFormModal from '../components/PackageFormModal'
import { Plus, Edit2, Trash2, MapPin, Search, Lock } from 'lucide-react'
import Toast from '../components/Toast'

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [authError, setAuthError] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    // Simple hardcoded password for development purposes
    if (password === '9876543210') {
      setIsAuthenticated(true)
      setAuthError('')
    } else {
      setAuthError('Incorrect password')
    }
  }
  const { packages, isLoading, addPackage, updatePackage, deletePackage } = usePackages()
  
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingPackage, setEditingPackage] = useState(null)
  const [filterType, setFilterType] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [toastMsg, setToastMsg] = useState('')

  const handleOpenModal = (pkg = null) => {
    setEditingPackage(pkg)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setEditingPackage(null)
  }

  const handleSubmit = (data) => {
    if (editingPackage) {
      updatePackage(editingPackage.id, data)
      showToast('Package updated successfully!')
    } else {
      addPackage(data)
      showToast('Package created successfully!')
    }
    handleCloseModal()
  }

  const handleDelete = (id, name) => {
    if (window.confirm(`Are you sure you want to delete "${name}"?`)) {
      deletePackage(id)
      showToast('Package deleted!')
    }
  }

  const showToast = (msg) => {
    setToastMsg(msg)
    setTimeout(() => setToastMsg(''), 3000)
  }

  const filteredPackages = packages.filter(p => {
    const matchesType = filterType === 'all' || p.type === filterType
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.category.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesType && matchesSearch
  })

  if (!isAuthenticated) {
    return (
      <div className="bg-slate-50 min-h-screen flex items-center justify-center p-4">
        <form onSubmit={handleLogin} className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 max-w-sm w-full text-center">
          <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-orange-500">
            <Lock size={28} />
          </div>
          <h2 className="text-2xl font-extrabold text-[#0B1E36] mb-2">Admin Access</h2>
          <p className="text-slate-500 text-sm mb-6">Please enter the password to continue.</p>
          
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password..."
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 mb-4"
          />
          
          {authError && <p className="text-red-500 text-xs font-bold mb-4">{authError}</p>}
          
          <button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-amber-400 text-white font-bold py-3 rounded-xl shadow-md hover:shadow-lg transition-all">
            Unlock Admin
          </button>
        </form>
      </div>
    )
  }

  return (
    <div className="bg-slate-50 min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10">
          <div>
            <h1 className="text-3xl font-extrabold text-[#0B1E36]">Manage Packages</h1>
            <p className="text-slate-500 mt-2">Add, edit, or remove tour packages.</p>
          </div>
          <button 
            onClick={() => handleOpenModal()}
            className="flex items-center gap-2 bg-[#0B1E36] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#153259] transition-all shadow-lg"
          >
            <Plus size={18} />
            Add New Package
          </button>
        </div>

        {/* Filters */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 mb-6 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="flex gap-2 p-1 bg-slate-100 rounded-xl">
            {['all', 'domestic', 'international'].map(type => (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className={`px-6 py-2 rounded-lg text-sm font-bold capitalize transition-all ${
                  filterType === type ? 'bg-white text-orange-500 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search packages..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
          {isLoading ? (
            <div className="p-10 text-center text-slate-500">Loading packages...</div>
          ) : filteredPackages.length === 0 ? (
            <div className="p-20 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                <MapPin size={24} className="text-slate-400" />
              </div>
              <h3 className="text-lg font-bold text-[#0B1E36] mb-1">No Packages Found</h3>
              <p className="text-slate-500 text-sm">Add some packages to get started.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-xs uppercase tracking-wider text-slate-500">
                    <th className="px-6 py-4 font-bold">Package Name</th>
                    <th className="px-6 py-4 font-bold">Category</th>
                    <th className="px-6 py-4 font-bold">Price</th>
                    <th className="px-6 py-4 font-bold">Status</th>
                    <th className="px-6 py-4 font-bold text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredPackages.map(pkg => (
                    <tr key={pkg.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <img src={pkg.image} alt={pkg.name} className="w-12 h-12 rounded-lg object-cover" />
                          <div>
                            <p className="font-bold text-[#0B1E36] text-sm">{pkg.name}</p>
                            <p className="text-xs text-slate-500">{pkg.duration}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex px-2.5 py-1 rounded-md text-xs font-bold ${
                          pkg.type === 'domestic' ? 'bg-orange-50 text-orange-600' : 'bg-blue-50 text-blue-600'
                        }`}>
                          {pkg.category}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="font-bold text-slate-700">₹{pkg.price.toLocaleString()}</span>
                      </td>
                      <td className="px-6 py-4">
                        {pkg.featured && (
                          <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-500 bg-amber-50 px-2 py-1 rounded">
                            ★ Featured
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <button 
                            onClick={() => handleOpenModal(pkg)}
                            className="p-2 text-slate-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"
                            title="Edit"
                          >
                            <Edit2 size={16} />
                          </button>
                          <button 
                            onClick={() => handleDelete(pkg.id, pkg.name)}
                            className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                            title="Delete"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>

      <PackageFormModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        onSubmit={handleSubmit}
        initialData={editingPackage}
      />

      {toastMsg && <Toast message={toastMsg} />}
    </div>
  )
}
