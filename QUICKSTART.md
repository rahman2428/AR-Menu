# Quick Start Guide

## 🚀 Getting Started in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open in Browser
- Navigate to `http://localhost:3000`
- Allow camera permissions when prompted
- Open `/marker.html` in another tab or print it
- Point your camera at the marker to see AR food!

## 📱 Testing on Mobile

1. Find your computer's local IP address (e.g., `192.168.1.100`)
2. On your mobile device, navigate to `http://YOUR_IP:3000`
3. Make sure both devices are on the same network
4. Grant camera permissions and enjoy AR!

## 🎯 Features to Test

- ✅ Camera permission handling
- Category filtering (Veg, Non-Veg, Dessert, All)
- Swipe left/right to navigate food items
- Pinch to zoom (mobile) or scroll wheel (desktop)
- Toggle food information display
- Smooth animations and transitions

## 🐛 Troubleshooting

**Camera not working?**
- Make sure you granted camera permissions
- Check browser console for errors
- Try a different browser (Chrome recommended)

**AR not detecting marker?**
- Ensure good lighting
- Keep marker flat and visible
- Try moving closer/farther from marker
- Make sure marker is the Hiro pattern

**3D models not loading?**
- Check internet connection (models load from CDN)
- Fallback 3D shapes will appear if models fail to load
- Check browser console for loading errors

## 📝 Notes

- Best experience on mobile devices
- Chrome/Edge browsers recommended
- Requires HTTPS for production (or localhost for development)
- Marker detection works best with good lighting

