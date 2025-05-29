const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

function checkFiles(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (item.includes(':')) {
      console.log(`❌ Invalid file/folder name: ${fullPath}`);
    }

    if (stat.isDirectory()) {
      checkFiles(fullPath); // Recurse into subdirectories
    }
  }
}

checkFiles(publicDir);
