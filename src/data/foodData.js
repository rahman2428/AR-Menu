// Food data with 3D model URLs
// Replace these URLs with your own .glb or .gltf files
// You can find free 3D food models at:
// - Sketchfab (https://sketchfab.com)
// - Poly Haven (https://polyhaven.com)
// - TurboSquid (https://www.turbosquid.com)
// - CGTrader (https://www.cgtrader.com)


// modelViewer.setAttribute('ar', '')
// modelViewer.setAttribute('ar-modes', 'webxr')
// modelViewer.setAttribute('ar-placement', 'floor')
// modelViewer.setAttribute('ar-scale', 'fixed')
// modelViewer.setAttribute('camera-controls', '')
// modelViewer.setAttribute('touch-action', 'none')
// modelViewer.removeAttribute('auto-rotate')
// modelViewer.setAttribute('experimental-features', 'anchors hit-test')


export const foodData = [
  // Veg Items
  {
    id: 1,
    name: 'Margherita Pizza',
    category: 'veg',
    price: 20,
    calories: 285,
    ingredients: ['Mozzarella', 'Tomato Sauce', 'Basil', 'Olive Oil', 'Dough'],
    // Example: Replace with your pizza.glb or pizza.gltf URL
    modelUrl: 'src/models/realistic_pizza.glb' // Placeholder - replace with actual pizza model
  },
  {
    id: 2,
    name: 'Caesar Salad',
    category: 'veg',
    price: 50,
    calories: 150,
    ingredients: ['Romaine Lettuce', 'Caesar Dressing', 'Parmesan', 'Croutons', 'Lemon'],
    modelUrl: 'src/models/Caesar_Salad.glb' // Placeholder - replace with actual salad model
  },
  {
    id: 3,
    name: 'Veggie Burger',
    category: 'veg',
    price: 110,
    calories: 320,
    ingredients: ['Plant Patty', 'Lettuce', 'Tomato', 'Onion', 'Pickles', 'Bun'],
    modelUrl: 'src/models/tasty_burger_with_fries.glb' // Placeholder - replace with actual burger model
  },
  {
    id: 4,
    name: 'Pasta Primavera',
    category: 'veg',
    price: 130,
    calories: 380,
    ingredients: ['Penne Pasta', 'Bell Peppers', 'Zucchini', 'Cherry Tomatoes', 'Parmesan', 'Olive Oil'],
    modelUrl: 'src/models/spaghetti_dish_3d_scanned.glb' // Placeholder - replace with actual pasta model
  },
  
  // Non-Veg Items
  {
    id: 5,
    name: 'Grilled Chicken',
    category: 'non-veg',
    price: 150,
    calories: 250,
    ingredients: ['Chicken Breast', 'Herbs', 'Garlic', 'Lemon', 'Olive Oil'],
    modelUrl: 'src/models/chicken_duck.glb' // Placeholder - replace with actual chicken model
  },
  {
    id: 6,
    name: 'Chicken Burger',
    category: 'non-veg',
    price: 140,
    calories: 450,
    ingredients: ['chicken Patty', 'Lettuce', 'Tomato', 'Onion', 'Pickles', 'Cheese', 'Bun'],
    modelUrl: 'src/models/Chicken Burger.glb' // Placeholder - replace with actual burger model
  },
  {
    id: 7,
    name: 'Salmon Teriyaki',
    category: 'non-veg',
    price: 180,
    calories: 320,
    ingredients: ['Salmon Fillet', 'Teriyaki Sauce', 'Sesame Seeds', 'Rice', 'Broccoli'],
    modelUrl: 'https://modelviewer.dev/shared-assets/models/Astronaut.glb' // Placeholder - replace with actual salmon model
  },
  {
    id: 8,
    name: 'BBQ Ribs',
    category: 'non-veg',
    price: 60,
    calories: 520,
    ingredients: ['Pork Ribs', 'BBQ Sauce', 'Spices', 'Honey', 'Garlic'],
    modelUrl: 'https://modelviewer.dev/shared-assets/models/Astronaut.glb' // Placeholder - replace with actual ribs model
  },
  
  // Desserts
  {
    id: 9,
    name: 'Chocolate Cake',
    category: 'dessert',
    price: 70.50,
    calories: 380,
    ingredients: ['Chocolate', 'Flour', 'Sugar', 'Eggs', 'Butter', 'Vanilla'],
    modelUrl: 'https://modelviewer.dev/shared-assets/models/Astronaut.glb' // Placeholder - replace with actual cake model
  },
  {
    id: 10,
    name: 'Ice Cream Sundae',
    category: 'dessert',
    price: 30.50,
    calories: 280,
    ingredients: ['Vanilla Ice Cream', 'Chocolate Sauce', 'Whipped Cream', 'Cherry', 'Nuts'],
    modelUrl: 'https://modelviewer.dev/shared-assets/models/Astronaut.glb' // Placeholder - replace with actual ice cream model
  },
  {
    id: 11,
    name: 'Cheesecake',
    category: 'dessert',
    price: 85.00,
    calories: 350,
    ingredients: ['Cream Cheese', 'Graham Cracker', 'Sugar', 'Vanilla', 'Berries'],
    modelUrl: 'https://modelviewer.dev/shared-assets/models/Astronaut.glb' // Placeholder - replace with actual cheesecake model
  },
  {
    id: 12,
    name: 'Tiramisu',
    category: 'dessert',
    price: 90.00,
    calories: 320,
    ingredients: ['Ladyfingers', 'Mascarpone', 'Coffee', 'Cocoa', 'Sugar', 'Eggs'],
    modelUrl: 'https://modelviewer.dev/shared-assets/models/Astronaut.glb' // Placeholder - replace with actual tiramisu model
  }
]

