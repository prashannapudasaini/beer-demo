const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? 
      walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

function migrate(filePath) {
  if (!filePath.endsWith('.jsx')) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Backgrounds
  content = content.replace(/\bbg-white\/[0-9]+\b/g, 'bg-surface/30');
  content = content.replace(/\bbg-white\b/g, 'bg-surface/30 backdrop-blur-md border border-glass-border');
  content = content.replace(/\bbg-\[\#f7fbfd\]\b/g, 'bg-surface/40 backdrop-blur-xl border border-glass-border shadow-[0_4px_30px_rgba(0,0,0,0.1)]');
  content = content.replace(/\bbg-\[\#f8fcfd\]\b/g, 'bg-surface/40 backdrop-blur-xl border border-glass-border shadow-[0_4px_30px_rgba(0,0,0,0.1)]');
  
  // Section Backgrounds
  content = content.replace(/\bbg-primary\b/g, 'bg-transparent');
  content = content.replace(/\bbg-accent\b/g, 'bg-transparent');

  // Text Colors
  content = content.replace(/\btext-accent\b/g, 'text-text-primary');
  content = content.replace(/\btext-supporting\b/g, 'text-text-primary/70');
  content = content.replace(/\btext-secondary\b/g, 'text-gold drop-shadow-sm');
  content = content.replace(/\btext-black\b/g, 'text-text-primary');

  // Borders
  content = content.replace(/\bborder-white\/[0-9]+\b/g, 'border-glass-border');
  content = content.replace(/\bborder-black\/[0-9]+\b/g, 'border-glass-border');
  content = content.replace(/\bborder-secondary\b/g, 'border-gold');
  content = content.replace(/\bborder-accent\b/g, 'border-gold');
  
  // Shadows
  content = content.replace(/\bshadow-primary\/[0-9]+\b/g, 'shadow-gold/20');
  
  // Buttons
  content = content.replace(/\bbg-secondary text-white\b/g, 'bg-gradient-to-r from-gold-dark to-gold text-[#021A0F] shadow-lg shadow-gold/20 border border-gold-highlight/50 hover:brightness-110 hover:shadow-gold/40');
  content = content.replace(/\bbg-transparent border-2 border-accent text-accent\b/g, 'bg-surface/50 backdrop-blur-md border border-gold text-gold shadow-lg hover:bg-gold/10 hover:shadow-gold/20');

  // Misc hover effects to add glass feel
  content = content.replace(/hover:shadow-2xl/g, 'hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Migrated:', filePath);
  }
}

console.log('Starting migration...');
walkDir(path.join(__dirname, 'src', 'components'), migrate);
walkDir(path.join(__dirname, 'src', 'pages'), migrate);
console.log('Migration complete.');
