
// ESM version – import three & addons using import map
import * as THREE from 'three';
import { GLTFExporter } from 'https://unpkg.com/three@0.160.0/examples/jsm/exporters/GLTFExporter.js';
import { SimplifyModifier } from 'https://unpkg.com/three@0.160.0/examples/jsm/modifiers/SimplifyModifier.js';

// (the rest of the JS is identical to previous build but with explicit THREE/GLTFExporter/SimplifyModifier imports)
console.log('ESM bootstrap OK', THREE.REVISION);
