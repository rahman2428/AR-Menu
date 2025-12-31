# AR Restaurant Menu

An advanced Augmented Reality restaurant menu website that displays 3D food models on your table using AR technology.

## Features

- 🎥 **Camera Permission Handling** - Automatically requests camera access on load
- 🍽️ **3D Food Models** - Realistic 3D food items displayed in AR
- 📱 **Swipe Navigation** - Swipe left/right to browse food items
- 🔍 **Zoom Controls** - Pinch or scroll to zoom in/out on food
- 🏷️ **Category Filtering** - Filter by Veg, Non-Veg, Dessert, or All
- ℹ️ **Food Information** - Display calories, ingredients, and price
- 👁️ **Toggle Info** - Hide/show food information with a button
- 🎨 **Modern UI/UX** - Beautiful, smooth animations and professional design

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- A device with a camera (mobile recommended for best AR experience)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Usage

1. **Grant Camera Permission**: When the website loads, you'll be prompted to allow camera access. Click "Allow Camera Access" to proceed.

2. **Get the AR Marker**: 
   - Open `/marker.html` in a new tab or print it
   - Place the marker on a flat surface (like a table)
   - The Hiro marker pattern is required for AR detection

3. **Point at the Marker**: Point your camera at the Hiro marker pattern. The 3D food model will appear on top of it.

4. **Browse Categories**: Use the navigation bar at the top to filter food items by category (All, Veg, Non-Veg, Dessert).

5. **Navigate Items**: 
   - Swipe left/right on the screen to see different food items
   - Use the arrow buttons at the bottom to navigate
   - Only one food item is visible at a time

6. **Zoom**: 
   - **Mobile**: Use pinch gestures (two fingers) to zoom in/out
   - **Desktop**: Use mouse wheel to zoom
   - Smooth zoom controls with limits (0.2x to 2.0x)

7. **View Information**: Food details (calories, ingredients, price) are displayed at the bottom. Click the eye icon button (bottom right) to hide/show this information.

## Technology Stack

- **React** - UI framework
- **Vite** - Build tool and dev server
- **Model Viewer** - Google's web component for displaying 3D models
- **WebXR** - AR/VR support via model-viewer
- **GLTF/GLB** - 3D model formats

## Browser Compatibility

- Chrome/Edge (recommended)
- Firefox
- Safari (iOS 11+)
- Mobile browsers with WebRTC support

## Notes

- For best AR experience, use on a mobile device (iOS/Android)
- AR requires HTTPS in production (localhost works for development)
- 3D models must be in `.glb` or `.gltf` format
- Models are loaded from URLs - ensure internet connection or host locally
- See `MODELS.md` for information on finding and adding 3D food models

## Customization

### Adding Food Items

Edit `src/data/foodData.js` to add new food items:

```javascript
{
  id: 13,
  name: 'Your Food Name',
  category: 'veg', // or 'non-veg', 'dessert'
  price: 10.99,
  calories: 300,
  ingredients: ['Ingredient 1', 'Ingredient 2'],
  modelUrl: 'https://your-model-url.gltf'
}
```

### Changing 3D Models

Replace the `modelUrl` in food data with your own GLTF/GLB model URLs. See `MODELS.md` for detailed instructions.

**Quick steps:**
1. Get `.glb` or `.gltf` files (see MODELS.md for resources)
2. Host them locally in `public/models/` or on a CDN
3. Update `modelUrl` in `src/data/foodData.js`
4. Test in browser

**Example:**
```javascript
modelUrl: '/models/pizza.glb'  // Local file
// or
modelUrl: 'https://your-cdn.com/pizza.glb'  // External URL
```

## License

MIT

