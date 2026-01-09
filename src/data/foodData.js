// Food data with 3D model URLs
// Replace these URLs with your own .glb or .gltf files
// You can find free 3D food models at:
// - Sketchfab (https://sketchfab.com)
// - Poly Haven (https://polyhaven.com)
// - TurboSquid (https://www.turbosquid.com)
// - CGTrader (https://www.cgtrader.com)

export const foodData = [
  // Veg Items
  {
    id: 1,
    name: 'Margherita Pizza',
    category: 'veg',
    price: 40,
    calories: 285,
    ingredients: ['Mozzarella', 'Tomato Sauce', 'Basil', 'Olive Oil', 'Dough'],
    // Example: Replace with your pizza.glb or pizza.gltf URL
    modelUrl: './models/chicken_duck.glb' // Placeholder - replace with actual pizza model
  },
  {
    id: 2,
    name: 'Caesar Salad',
    category: 'veg',
    price: 20.50,
    calories: 150,
    ingredients: ['Romaine Lettuce', 'Caesar Dressing', 'Parmesan', 'Croutons', 'Lemon'],
    modelUrl: 'https://modelviewer.dev/shared-assets/models/Astronaut.glb' // Placeholder - replace with actual salad model
  },
  {
    id: 3,
    name: 'Veggie Burger',
    category: 'veg',
    price: 45,
    calories: 320,
    ingredients: ['Plant Patty', 'Lettuce', 'Tomato', 'Onion', 'Pickles', 'Bun'],
    modelUrl: 'https://modelviewer.dev/shared-assets/models/Astronaut.glb' // Placeholder - replace with actual burger model
  },
  {
    id: 4,
    name: 'Pasta Primavera',
    category: 'veg',
    price: 30,
    calories: 380,
    ingredients: ['Penne Pasta', 'Bell Peppers', 'Zucchini', 'Cherry Tomatoes', 'Parmesan', 'Olive Oil'],
    modelUrl: 'https://modelviewer.dev/shared-assets/models/Astronaut.glb' // Placeholder - replace with actual pasta model
  },
  
  // Non-Veg Items
  {
    id: 5,
    name: 'Grilled Chicken',
    category: 'non-veg',
    price: 60,
    calories: 250,
    ingredients: ['Chicken Breast', 'Herbs', 'Garlic', 'Lemon', 'Olive Oil'],
    modelUrl: 'https://modelviewer.dev/shared-assets/models/Astronaut.glb' // Placeholder - replace with actual chicken model
  },
  {
    id: 6,
    name: 'Chicken Burger',
    category: 'non-veg',
    price: 45,
    calories: 450,
    ingredients: ['Chicken Patty', 'Lettuce', 'Tomato', 'Onion', 'Pickles', 'Cheese', 'Bun'],
    modelUrl: 'https://modelviewer.dev/shared-assets/models/Astronaut.glb' // Placeholder - replace with actual burger model
  },
  {
    id: 7,
    name: 'Salmon Teriyaki',
    category: 'non-veg',
    price: 75,
    calories: 320,
    ingredients: ['Salmon Fillet', 'Teriyaki Sauce', 'Sesame Seeds', 'Rice', 'Broccoli'],
    modelUrl: 'https://modelviewer.dev/shared-assets/models/Astronaut.glb' // Placeholder - replace with actual salmon model
  },
  {
    id: 8,
    name: 'BBQ Ribs',
    category: 'non-veg',
    price: 85,
    calories: 520,
    ingredients: ['Pork Ribs', 'BBQ Sauce', 'Spices', 'Honey', 'Garlic'],
    modelUrl: 'https://modelviewer.dev/shared-assets/models/Astronaut.glb' // Placeholder - replace with actual ribs model
  },
  
  // Desserts
  {
    id: 9,
    name: 'Chocolate Cake',
    category: 'dessert',
    price: 25,
    calories: 380,
    ingredients: ['Chocolate', 'Flour', 'Sugar', 'Eggs', 'Butter', 'Vanilla'],
    modelUrl: 'https://modelviewer.dev/shared-assets/models/Astronaut.glb' // Placeholder - replace with actual cake model
  },
  {
    id: 10,
    name: 'Ice Cream Sundae',
    category: 'dessert',
    price: 15,
    calories: 280,
    ingredients: ['Vanilla Ice Cream', 'Chocolate Sauce', 'Whipped Cream', 'Cherry', 'Nuts'],
    modelUrl: 'https://modelviewer.dev/shared-assets/models/Astronaut.glb' // Placeholder - replace with actual ice cream model
  },
  {
    id: 11,
    name: 'Cheesecake',
    category: 'dessert',
    price: 30,
    calories: 350,
    ingredients: ['Cream Cheese', 'Graham Cracker', 'Sugar', 'Vanilla', 'Berries'],
    modelUrl: 'https://modelviewer.dev/shared-assets/models/Astronaut.glb' // Placeholder - replace with actual cheesecake model
  },
  {
    id: 12,
    name: 'Tiramisu',
    category: 'dessert',
    price: 28,
    calories: 320,
    ingredients: ['Ladyfingers', 'Mascarpone', 'Coffee', 'Cocoa', 'Sugar', 'Eggs'],
    modelUrl: 'https://modelviewer.dev/shared-assets/models/Astronaut.glb' // Placeholder - replace with actual tiramisu model
  }
]

