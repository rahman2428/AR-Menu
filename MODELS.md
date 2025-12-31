# 3D Models Guide

This AR restaurant menu uses `<model-viewer>` to display 3D food models. You need `.glb` or `.gltf` files for each food item.

## Where to Get 3D Food Models

### Free Resources:
1. **Sketchfab** (https://sketchfab.com)
   - Search for "food" and filter by "Downloadable" and "Free"
   - Many models available in GLTF/GLB format

2. **Poly Haven** (https://polyhaven.com/models)
   - Free, CC0 licensed models
   - High quality food models

3. **CGTrader** (https://www.cgtrader.com)
   - Mix of free and paid models
   - Good selection of food items

4. **TurboSquid** (https://www.turbosquid.com)
   - Professional models (some free, mostly paid)
   - High quality food 3D models

5. **Free3D** (https://free3d.com)
   - Free 3D models
   - Search for food items

### Creating Your Own Models:
- Use **Blender** (free, open-source) to create 3D models
- Export as `.glb` or `.gltf` format
- Optimize for web (reduce polygon count, compress textures)

## Adding Models to Your Project

### Option 1: Host Models Locally
1. Create a `public/models/` folder
2. Place your `.glb` or `.gltf` files there
3. Update `src/data/foodData.js`:
   ```javascript
   modelUrl: '/models/pizza.glb'
   ```

### Option 2: Use CDN/External URLs
1. Upload models to a CDN (e.g., Cloudinary, AWS S3, GitHub)
2. Update `src/data/foodData.js`:
   ```javascript
   modelUrl: 'https://your-cdn.com/models/pizza.glb'
   ```

## Model Requirements

- **Format**: `.glb` (recommended) or `.gltf`
- **Size**: Keep under 5MB for best performance
- **Textures**: Include textures for realistic appearance
- **Optimization**: Use compressed textures and optimized geometry

## Example Model URLs

You can test with these sample models (replace with your food models):

```javascript
// Example from model-viewer.dev
modelUrl: 'https://modelviewer.dev/shared-assets/models/Astronaut.glb'

// Or use a food-specific model from Sketchfab
modelUrl: 'https://your-sketchfab-model-url.glb'
```

## Updating Food Data

Edit `src/data/foodData.js` and replace the `modelUrl` for each food item:

```javascript
{
  id: 1,
  name: 'Margherita Pizza',
  category: 'veg',
  price: 12.99,
  calories: 285,
  ingredients: ['Mozzarella', 'Tomato Sauce', 'Basil', 'Olive Oil', 'Dough'],
  modelUrl: '/models/pizza.glb' // Your model URL here
}
```

## Tips

1. **Test models** in browser before adding to production
2. **Optimize file sizes** - use tools like gltf-pipeline
3. **Use .glb format** - it's a single file (easier than .gltf with separate files)
4. **Check CORS** - if hosting externally, ensure CORS headers are set
5. **Mobile optimization** - test on mobile devices for AR functionality

## Troubleshooting

**Model not loading?**
- Check browser console for errors
- Verify CORS settings if using external URLs
- Ensure file format is `.glb` or `.gltf`
- Check file size (too large = slow loading)

**AR not working?**
- Ensure HTTPS (required for AR)
- Test on mobile device (better AR support)
- Check browser compatibility (Chrome/Edge recommended)

