import React, { useEffect, useRef, useState } from 'react'
import './ARScene.css'

function ARScene({ foodItem, showInfo }) {
  const modelViewerRef = useRef(null)
  const containerRef = useRef(null)
  const videoRef = useRef(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [cameraActive, setCameraActive] = useState(false)
  const [scale, setScale] = useState(1)
  const [arMode, setArMode] = useState(false)

  // Start camera feed
  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: 'environment', // Use back camera on mobile
            width: { ideal: 1280 },
            height: { ideal: 720 }
          }
        })

        if (videoRef.current) {
          videoRef.current.srcObject = stream
          videoRef.current.play()
          setCameraActive(true)
        }
      } catch (error) {
        console.error('Camera access error:', error)
        setCameraActive(false)
      }
    }

    startCamera()

    // Cleanup
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = videoRef.current.srcObject.getTracks()
        tracks.forEach(track => track.stop())
      }
    }
  }, [])

  // Create model viewer
  useEffect(() => {
    if (!containerRef.current || !foodItem) return

    // Clear previous model
    const modelContainer = containerRef.current.querySelector('.model-container')
    if (modelContainer) {
      modelContainer.innerHTML = ''
    }

    setIsLoaded(false)

    // Wait for model-viewer to be available
    const checkModelViewer = setInterval(() => {
      if (customElements.get('model-viewer')) {
        clearInterval(checkModelViewer)
        createModelViewer()
      }
    }, 100)

    const createModelViewer = () => {
      const modelContainer = containerRef.current.querySelector('.model-container')
      if (!modelContainer) return

      const modelViewer = document.createElement('model-viewer')
      modelViewer.setAttribute('src', foodItem.modelUrl || '')
      modelViewer.setAttribute('alt', foodItem.name)
      modelViewer.setAttribute('ar', '')
      modelViewer.setAttribute('ar-modes', 'webxr scene-viewer quick-look')
      modelViewer.setAttribute('ar-scale', 'auto')
      modelViewer.setAttribute('ar-placement', 'floor')
      modelViewer.setAttribute('camera-controls', '')
      modelViewer.setAttribute('touch-action', 'pan-y')
      modelViewer.setAttribute('auto-rotate', '')
      modelViewer.setAttribute('rotation-per-second', '30deg')
      modelViewer.setAttribute('interaction-policy', 'allow-when-focused')
      modelViewer.setAttribute('shadow-intensity', '1')
      modelViewer.setAttribute('exposure', '1')
      modelViewer.setAttribute('environment-image', 'neutral')
      modelViewer.setAttribute('id', 'food-model-viewer')
      modelViewer.setAttribute('class', 'ar-model-viewer')

      // Make AR button more prominent
      modelViewer.setAttribute('ar-button', '')

      // Handle model load
      modelViewer.addEventListener('load', () => {
        setIsLoaded(true)
      })

      // Handle AR activation
      modelViewer.addEventListener('ar-status', (e) => {
        setArMode(e.detail.status === 'session-started')
      })

      // Handle errors
      modelViewer.addEventListener('error', (e) => {
        console.error('Model loading error:', e)
        setIsLoaded(true)
        showFallbackMessage()
      })

      modelContainer.appendChild(modelViewer)
      modelViewerRef.current = modelViewer
    }

    const showFallbackMessage = () => {
      const modelContainer = containerRef.current.querySelector('.model-container')
      if (!modelContainer) return

      const fallback = document.createElement('div')
      fallback.className = 'model-fallback'
      fallback.innerHTML = `
        <div class="fallback-content">
          <div class="fallback-icon">🍽️</div>
          <h3>${foodItem.name}</h3>
          <p>3D model loading...</p>
          <p class="fallback-hint">Add a .glb or .gltf file URL to see the 3D model</p>
        </div>
      `
      modelContainer.appendChild(fallback)
    }

    // Cleanup
    return () => {
      clearInterval(checkModelViewer)
    }
  }, [foodItem])

  // Handle zoom with pinch gestures and wheel
  useEffect(() => {
    if (!modelViewerRef.current) return

    let initialDistance = 0
    let lastScale = scale
    let isZooming = false
    let baseRadius = 2

    const handleWheel = (e) => {
      e.preventDefault()
      const delta = e.deltaY > 0 ? -0.1 : 0.1
      const newScale = Math.max(0.5, Math.min(3.0, lastScale + delta))
      lastScale = newScale
      setScale(newScale)

      const viewer = modelViewerRef.current
      if (viewer && !arMode) {
        try {
          const orbit = viewer.getCameraOrbit()
          const theta = orbit.theta || 0
          const phi = orbit.phi || 75
          const newRadius = baseRadius / newScale
          viewer.cameraOrbit = `${theta}deg ${phi}deg ${Math.max(0.5, Math.min(5, newRadius))}m`
        } catch (err) {
          console.log('Camera orbit update:', err)
        }
      }
    }

    const handleTouchStart = (e) => {
      if (e.touches.length === 2) {
        e.preventDefault()
        isZooming = true
        const touch1 = e.touches[0]
        const touch2 = e.touches[1]
        initialDistance = Math.hypot(
          touch2.clientX - touch1.clientX,
          touch2.clientY - touch1.clientY
        )
      } else {
        isZooming = false
      }
    }

    const handleTouchMove = (e) => {
      if (e.touches.length === 2 && isZooming && !arMode) {
        e.preventDefault()
        const touch1 = e.touches[0]
        const touch2 = e.touches[1]
        const currentDistance = Math.hypot(
          touch2.clientX - touch1.clientX,
          touch2.clientY - touch1.clientY
        )

        if (initialDistance > 0) {
          const scaleChange = (currentDistance - initialDistance) / 300
          const newScale = Math.max(0.5, Math.min(3.0, lastScale + scaleChange))
          lastScale = newScale
          setScale(newScale)

          const viewer = modelViewerRef.current
          if (viewer) {
            try {
              const orbit = viewer.getCameraOrbit()
              const theta = orbit.theta || 0
              const phi = orbit.phi || 75
              const newRadius = baseRadius / newScale
              viewer.cameraOrbit = `${theta}deg ${phi}deg ${Math.max(0.5, Math.min(5, newRadius))}m`
            } catch (err) {
              console.log('Camera orbit update:', err)
            }
          }
        }
        initialDistance = currentDistance
      }
    }

    const handleTouchEnd = () => {
      if (isZooming) {
        lastScale = scale
      }
      isZooming = false
      initialDistance = 0
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false })
      container.addEventListener('touchstart', handleTouchStart, { passive: false })
      container.addEventListener('touchmove', handleTouchMove, { passive: false })
      container.addEventListener('touchend', handleTouchEnd)
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel)
        container.removeEventListener('touchstart', handleTouchStart)
        container.removeEventListener('touchmove', handleTouchMove)
        container.removeEventListener('touchend', handleTouchEnd)
      }
    }
  }, [scale, arMode])

  return (
    <div className="ar-scene-container">
      {/* Camera video feed background */}
      <video
        ref={videoRef}
        className="camera-feed"
        autoPlay
        playsInline
        muted
      />

      {/* Model viewer overlay */}
      <div ref={containerRef} className="model-viewer-wrapper">
        <div className="model-container" />
      </div>

      {!isLoaded && (
        <div className="loading-overlay">
          <div className="spinner"></div>
          <p>Loading 3D Model...</p>
          {!cameraActive && (
            <p className="loading-hint">Granting camera access...</p>
          )}
        </div>
      )}


    </div>
  )
}

export default ARScene
