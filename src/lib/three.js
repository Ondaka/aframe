var THREE = global.THREE = require('super-three');

// Allow cross-origin images to be loaded.

// This should not be on `THREE.Loader` nor `THREE.ImageUtils`.
// Must be on `THREE.TextureLoader`.
if (THREE.TextureLoader) {
  THREE.TextureLoader.prototype.crossOrigin = 'anonymous';
}

// This is for images loaded from the model loaders.
if (THREE.ImageLoader) {
  THREE.ImageLoader.prototype.crossOrigin = 'anonymous';
}

//  ONDAKA: Disable cache
// // In-memory caching for XHRs (for images, audio files, textures, etc.).
// if (THREE.Cache) {
//   THREE.Cache.enabled = true;
// }

// Ondaka: Vendor These and import directly from web app.
// This is because examples/js is deprecated and examples/jsm
// are meant to be imported individually by the application.
// It would also be good to use newer versions than super-three provides
// Not all the JSM modules cannot be imported with require(), so it is
// best to include them individually from the web app

// require('../../vendor/DeviceOrientationControls'); // THREE.DeviceOrientationControls
// require('super-three/examples/js/loaders/DRACOLoader');  // THREE.DRACOLoader
// require('super-three/examples/js/loaders/GLTFLoader');  // THREE.GLTFLoader
// require('super-three/examples/js/loaders/OBJLoader');  // THREE.OBJLoader
// require('super-three/examples/js/loaders/MTLLoader');  // THREE.MTLLoader

// THREE.DRACOLoader.prototype.crossOrigin = 'anonymous';
// THREE.GLTFLoader.prototype.crossOrigin = 'anonymous';
// THREE.MTLLoader.prototype.crossOrigin = 'anonymous';
// THREE.OBJLoader.prototype.crossOrigin = 'anonymous';

module.exports = THREE;
