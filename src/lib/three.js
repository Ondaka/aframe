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

// Ondaka: Use newer versions
// require('../../vendor/DeviceOrientationControls'); // THREE.DeviceOrientationControls
// require('super-three/examples/js/loaders/DRACOLoader');  // THREE.DRACOLoader
// require('super-three/examples/js/loaders/GLTFLoader');  // THREE.GLTFLoader
// require('super-three/examples/js/loaders/OBJLoader');  // THREE.OBJLoader
// require('super-three/examples/js/loaders/MTLLoader');  // THREE.MTLLoader
THREE.Loader.prototype.crossOrigin = 'anonymous';

THREE.DRACOLoader = require('./DracoLoader')(THREE);
THREE.GLTFLoader = require('./GLTFLoader')(THREE);
THREE.KTX2Loader = require('./KTX2Loader')(THREE);

// Ondaka: ADD KTX2 Loader

// THREE.DRACOLoader.prototype.crossOrigin = 'anonymous';
// THREE.GLTFLoader.prototype.crossOrigin = 'anonymous';
// THREE.MTLLoader.prototype.crossOrigin = 'anonymous';
// THREE.OBJLoader.prototype.crossOrigin = 'anonymous';

module.exports = THREE;
