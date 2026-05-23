import { useEffect, useState } from 'react'
import { useScrollAnimation } from '../utils/useScrollAnimation'

export default function AnimatedCounter({ end, label, suffix = '' }) {
  const [count, setCount] = useState(0)
  const [ref, isVisible] = useScrollAnimation()

  useEffect(() => {
    if (!isVisible) return

    let startTimestamp = null
    const duration = 2000 // 2 seconds
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      
      setCount(Math.floor(progress * end))

      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }

    requestAnimationFrame(step)
  }, [isVisible, end])

  return (
    <div 
      ref={ref}
      className="p-6 bg-gradient-to-br from-white to-light rounded-lg text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105"
    >
      <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 animate-pulse">
        {count}{suffix}
      </div>
      <p className="text-gray-700 font-medium">{label}</p>
    </div>
  )
}
