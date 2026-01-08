import React from 'react'
import './FoodInfo.css'

function FoodInfo({ food, showInfo, onToggleInfo, currentIndex, totalItems, onPrev, onNext }) {
  if (!food) return null

  return (
    <div className="food-info-container">
      <div className="food-info-content" style={{ opacity: showInfo ? 1 : 0, pointerEvents: showInfo ? 'auto' : 'none' }}>
        <div className="food-header">
          <h2 className="food-name">{food.name}</h2>
          <div className="food-indicator">
            {currentIndex + 1} / {totalItems}
          </div>
        </div>
        
        <div className="food-details">
          <div className="detail-item">
            <span className="detail-label">💰 Price</span>
            <span className="detail-value">₹{food.price}</span>
          </div>
          
          <div className="detail-item">
            <span className="detail-label">🔥 Calories</span>
            <span className="detail-value">{food.calories} kcal</span>
          </div>
          
          <div className="detail-item ingredients">
            <span className="detail-label">🥘 Ingredients</span>
            <div className="ingredients-list">
              {food.ingredients.map((ingredient, idx) => (
                <span key={idx} className="ingredient-tag">{ingredient}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="navigation-controls">
          <button 
            className="nav-button prev" 
            onClick={onPrev}
            disabled={currentIndex === 0}
          >
            ←
          </button>
          <button 
            className="nav-button next" 
            onClick={onNext}
            disabled={currentIndex === totalItems - 1}
          >
            →
          </button>
        </div>
      </div>

      <button 
        className={`toggle-info-button ${!showInfo ? 'hidden' : ''}`}
        onClick={onToggleInfo}
        aria-label={showInfo ? 'Hide info' : 'Show info'}
        title={showInfo ? 'Hide Information' : 'Show Information'}
      >
        {showInfo ? (
          <>
            <span className="toggle-icon">👁️</span>
            <span className="toggle-text">Hide Info</span>
          </>
        ) : (
          <>
            <span className="toggle-icon">👁️‍🗨️</span>
            <span className="toggle-text">Show Info</span>
          </>
        )}
      </button>
    </div>
  )
}

export default FoodInfo

