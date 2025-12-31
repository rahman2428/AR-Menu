import React from 'react'
import './NavigationBar.css'

const categories = [
  { id: 'all', label: 'All', icon: '🍽️' },
  { id: 'veg', label: 'Veg', icon: '🥗' },
  { id: 'non-veg', label: 'Non-Veg', icon: '🍗' },
  { id: 'dessert', label: 'Dessert', icon: '🍰' }
]

function NavigationBar({ selectedCategory, onCategoryChange }) {
  return (
    <nav className="navigation-bar" style={{ transition: 'opacity 0.4s ease, transform 0.4s ease' }}>
      <div className="nav-container">
        {categories.map(category => (
          <button
            key={category.id}
            className={`nav-item ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => onCategoryChange(category.id)}
          >
            <span className="nav-icon">{category.icon}</span>
            <span className="nav-label">{category.label}</span>
          </button>
        ))}
      </div>
    </nav>
  )
}

export default NavigationBar

