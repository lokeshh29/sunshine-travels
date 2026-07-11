import { createContext, useContext, useState, useEffect } from 'react'
import defaultPackages from '../data/packages.json'

const PackageContext = createContext()

export function usePackages() {
  return useContext(PackageContext)
}

export function PackageProvider({ children }) {
  // Use localStorage in production, or fallback to default packages
  const getInitialPackages = () => {
    if (!import.meta.env.DEV) {
      const saved = localStorage.getItem('sunshine_packages')
      if (saved) return JSON.parse(saved)
    }
    return defaultPackages || []
  }

  const [packages, setPackages] = useState(getInitialPackages())
  const [isLoading, setIsLoading] = useState(false)

  // Load from local API ONLY on mount during development (to support the Vite server script)
  useEffect(() => {
    if (import.meta.env.DEV) {
      setIsLoading(true)
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
    }
  }, [])

  // Save to local API in development, or localStorage in production
  const savePackages = async (newPackages) => {
    if (import.meta.env.DEV) {
      try {
        await fetch('/api/packages', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newPackages),
        })
      } catch (err) {
        console.error('Failed to save packages:', err)
      }
    } else {
      // In production (Vercel), we can't write to local files, so we save to localStorage
      localStorage.setItem('sunshine_packages', JSON.stringify(newPackages))
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
