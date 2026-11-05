const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function enhancePortrait() {
  const inputPath = path.join(__dirname, '..', 'public', 'images', 'team', 'chander-arora.jpg');
  const backupPath = path.join(__dirname, '..', 'public', 'images', 'team', 'chander-arora.original.jpg');
  const outputPath = path.join(__dirname, '..', 'public', 'images', 'team', 'chander-arora.jpg');

  // Create a backup of the original if it doesn't already exist
  if (!fs.existsSync(backupPath)) {
    fs.copyFileSync(inputPath, backupPath);
    console.log('Backed up original photo to chander-arora.original.jpg');
  }

  // Read original image metadata
  const original = sharp(backupPath);
  const metadata = await original.metadata();
  console.log(`Original dimensions: ${metadata.width}x${metadata.height}`);

  // Target high-definition dimensions: 4x supersampling (2820 x 4000)
  const targetWidth = metadata.width * 4;
  const targetHeight = metadata.height * 4;

  // Process image preserving 100% of the authentic face:
  // 1. Lanczos3 high-order resampling for smooth, detailed upscale
  // 2. Multi-stage unsharp mask to bring out facial contours, eyes, and suit details
  // 3. Subtle contrast & vibrance enhancement to correct vintage scan fading
  // 4. Output with maximum quality (100) and 4:4:4 full chroma sampling (zero compression artifacts)
  await sharp(backupPath)
    .resize(targetWidth, targetHeight, {
      kernel: sharp.kernel.lanczos3,
      fit: 'fill',
    })
    .sharpen({
      sigma: 1.5,
      m1: 1.8,
      m2: 0.8,
      x1: 2.0,
      y2: 10.0,
      y3: 20.0,
      m1: 1.5,
    })
    .modulate({
      brightness: 1.02,
      saturation: 1.05,
    })
    .jpeg({
      quality: 100,
      chromaSubsampling: '4:4:4',
      mozjpeg: true,
    })
    .toFile(outputPath + '.tmp');

  fs.renameSync(outputPath + '.tmp', outputPath);

  const updatedMetadata = await sharp(outputPath).metadata();
  const stats = fs.statSync(outputPath);
  console.log(`Enhanced portrait created: ${updatedMetadata.width}x${updatedMetadata.height}, size: ${(stats.size / 1024).toFixed(1)} KB`);
}

enhancePortrait().catch(err => {
  console.error('Enhancement failed:', err);
  process.exit(1);
});
