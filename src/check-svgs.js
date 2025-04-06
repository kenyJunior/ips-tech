const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

// Fonction pour parcourir récursivement tous les fichiers d'un répertoire
const getAllFiles = (dirPath) => {
  let files = [];
  const items = fs.readdirSync(dirPath);

  items.forEach((item) => {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // Si c'est un dossier, on parcourt ce dossier récursivement
      files = files.concat(getAllFiles(fullPath));
    } else if (fullPath.endsWith('.svg')) {
      // Si c'est un fichier SVG, on l'ajoute à la liste
      files.push(fullPath);
    }
  });

  return files;
};

// Chemin de base du projet (remplace-le par le chemin de ton dossier racine ou src)
const baseDir = path.join(__dirname, '../'); // Ici, on part du répertoire racine du projet

// Obtenir tous les fichiers SVG
const svgFiles = getAllFiles(baseDir);

// Traiter chaque fichier SVG trouvé
svgFiles.forEach((filePath) => {
  exec(`svgo ${filePath}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Erreur lors du traitement du fichier : ${filePath}`);
      console.error(stderr);
    } else {
      console.log(`Fichier ${filePath} optimisé avec succès.`);
    }
  });
});
