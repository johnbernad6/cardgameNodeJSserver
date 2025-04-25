const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'dist/assets');
const files = fs.readdirSync(dir);

const js = files.find(f => f.endsWith('.js') && f.startsWith('index-'));
const css = files.find(f => f.endsWith('.css') && f.startsWith('index-'));

const manifest = { js, css };
fs.writeFileSync(path.join(dir, 'manifest.json'), JSON.stringify(manifest, null, 2));
console.log('✅ Manifest generated:', manifest);
