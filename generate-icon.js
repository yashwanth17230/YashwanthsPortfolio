const sharp = require('sharp');
const fs = require('fs');

async function generate() {
  const input = 'public/assets/imgc3.jpeg';
  const output = 'src/app/icon.png';
  
  const size = 512;
  const radius = size / 2;

  // Create a circle mask
  const circleSvg = `<svg width="${size}" height="${size}">
    <circle cx="${radius}" cy="${radius}" r="${radius}" fill="#fff" />
  </svg>`;

  await sharp(input)
    .resize(size, size, {
      fit: 'cover',
      position: sharp.strategy.attention // Automatically focuses on the face/subject
    })
    .composite([{
      input: Buffer.from(circleSvg),
      blend: 'dest-in'
    }])
    .png()
    .toFile(output);
    
  console.log('Icon generated successfully!');
}

generate().catch(console.error);
