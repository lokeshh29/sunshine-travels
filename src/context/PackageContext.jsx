import { createContext, useContext, useState, useEffect } from 'react'

const PackageContext = createContext()

export function usePackages() {
  return useContext(PackageContext)
}

export function PackageProvider({ children }) {
  const [packages, setPackages] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  // Load from local API on mount
  useEffect(() => {
    fetch('/api/packages')
      .then(res => res.json())
      .then(data => {
        setPackages(data)
        setIsLoading(false)
      })
      .catch(err => {
        console.error('Failed to load packages:', err)
        setIsLoading(false)
      })
  }, [])

  // Save to local API whenever packages change
  const savePackages = async (newPackages) => {
    try {
      await fetch('/api/packages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPackages),
      })
    } catch (err) {
      console.error('Failed to save packages:', err)
    }
  }

  const addPackage = (newPkg) => {
    const pkg = { ...newPkg, id: crypto.randomUUID(), createdAt: Date.now() }
    const updated = [...packages, pkg]
    setPackages(updated)
    savePackages(updated)
  }

  const updatePackage = (id, updatedPkg) => {
    const updated = packages.map(p => p.id === id ? { ...p, ...updatedPkg } : p)
    setPackages(updated)
    savePackages(updated)
  }

  const deletePackage = (id) => {
    const updated = packages.filter(p => p.id !== id)
    setPackages(updated)
    savePackages(updated)
  }

  const getPackagesByType = (type) => {
    return packages.filter(p => p.type === type)
  }

  const getPackagesByCategory = (type, category) => {
    return packages.filter(p => p.type === type && (category === 'All' || p.category === category))
  }

  const value = {
    packages,
    isLoading,
    addPackage,
    updatePackage,
    deletePackage,
    getPackagesByType,
    getPackagesByCategory,
  }

  return (
    <PackageContext.Provider value={value}>
      {children}
    </PackageContext.Provider>
  )
}
