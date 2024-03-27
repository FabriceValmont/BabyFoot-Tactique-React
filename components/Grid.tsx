import React from 'react';

const GridComponent = () => {
  // Créer un tableau vide
  const gridArray = [];

  // Boucle pour remplir le tableau avec des tableaux pour chaque ligne
  for (let i = 0; i < 13; i++) {
    const rowArray = [];
    // Boucle pour remplir chaque ligne avec des cellules
    for (let j = 0; j < 17; j++) {
      rowArray.push(j);
    }
    gridArray.push(rowArray);
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="grid grid-cols-17 w-[680px] m-auto">
        {gridArray.map((row, rowIndex) => (
          row.map((_, colIndex) => {
            // Définir la classe de fond en fonction de la position
            let bgClass = '';
            if (rowIndex >= 4 && rowIndex <= 8) {
              bgClass = colIndex === 0 || colIndex === row.length - 1 ? 'bg-white' : 'bg-green-500'
            } else if (rowIndex == 0 || rowIndex == 12) {
              bgClass = 'bg-black'
            }else {
              bgClass = colIndex === 0 || colIndex === row.length - 1 ? 'bg-black' : 'bg-green-500';
            }
            return (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={`border border-black w-10 h-10 flex items-center justify-center ${bgClass}`}
              >
                {/* Contenu de la cellule */}
              </div>
            );
          })
        ))}
      </div>
    </div>
  );
};

export default GridComponent;
