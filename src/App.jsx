import React, { useState, useEffect, useRef } from 'react'
import ARScene from './components/ARScene'
import NavigationBar from './components/NavigationBar'
import FoodInfo from './components/FoodInfo'
import CameraPermission from './components/CameraPermission'
import { foodData } from './data/foodData'
import './App.css'

function App() {
  const [cameraPermission, setCameraPermission] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [currentFoodIndex, setCurrentFoodIndex] = useState(0)
  const [showInfo, setShowInfo] = useState(true)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)
  const minSwipeDistance = 50

  // Request camera permission on mount
  useEffect(() => {
    requestCameraPermission()
  }, [])

  const requestCameraPermission = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true })
      setCameraPermission(true)
      // Stop the stream immediately, we just needed permission
      stream.getTracks().forEach(track => track.stop())
    } catch (error) {
      setCameraPermission(false)
      console.error('Camera permission denied:', error)
    }
  }

  // Filter food items based on category
  const filteredFood = foodData.filter(item => {
    if (selectedCategory === 'all') return true
    if (selectedCategory === 'veg') return item.category === 'veg'
    if (selectedCategory === 'non-veg') return item.category === 'non-veg'
    if (selectedCategory === 'dessert') return item.category === 'dessert'
    return true
  })

  const currentFood = filteredFood[currentFoodIndex] || filteredFood[0]

  // Reset index when category changes
  useEffect(() => {
    setCurrentFoodIndex(0)
  }, [selectedCategory])

  // Swipe handlers
  const onTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe && currentFoodIndex < filteredFood.length - 1) {
      setCurrentFoodIndex(prev => prev + 1)
    }
    if (isRightSwipe && currentFoodIndex > 0) {
      setCurrentFoodIndex(prev => prev - 1)
    }

    // Reset touch values
    setTouchStart(null)
    setTouchEnd(null)
  }

  if (cameraPermission === null) {
    return <CameraPermission onPermissionGranted={requestCameraPermission} />
  }

  if (cameraPermission === false) {
    return (
      <div className="permission-denied">
        <h1>Camera Permission Required</h1>
        <p>Please enable camera access to use AR features</p>
        <button onClick={requestCameraPermission}>Retry</button>
      </div>
    )
  }

  return (
    <div className="app">
      <ARScene
        foodItem={currentFood}
        showInfo={showInfo}
      />
      {showInfo && (
        <NavigationBar
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      )}
      <FoodInfo
        food={currentFood}
        showInfo={showInfo}
        onToggleInfo={() => setShowInfo(!showInfo)}
        currentIndex={currentFoodIndex}
        totalItems={filteredFood.length}
        onPrev={() => currentFoodIndex > 0 && setCurrentFoodIndex(prev => prev - 1)}
        onNext={() => currentFoodIndex < filteredFood.length - 1 && setCurrentFoodIndex(prev => prev + 1)}
      />
      <div
        className="swipe-area"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        style={{
          pointerEvents: 'auto',
          touchAction: 'pan-y pinch-zoom'
        }}
      />
    </div>
  )
}

export default App

