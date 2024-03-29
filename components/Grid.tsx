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

  // Définir les positions des joueurs
  const playersOnePositions = {
    goalkeeper: { row: 6, col: 1, text: "G" },
    defenderLeft: { row: 4, col: 3, text: "D" },
    defenderRight: { row: 8, col: 3, text: "D" },
    midfielderLeft: { row: 2, col: 7, text: "M" },
    midfielderCenterLeft: { row: 4, col: 7, text: "M" },
    midfielderCenter: { row: 6, col: 7, text: "M" },
    midfielderCenterRight: { row: 8, col: 7, text: "M" },
    midfielderRight: { row: 10, col: 7, text: "M" },
    attackerLeft: { row: 3, col: 11, text: "A" },
    attackerCenter: { row: 6, col: 11, text: "A" },
    attackerRight: { row: 9, col: 11, text: "A" },
  };

  const playersTwoPositions = {
    goalkeeper: { row: 6, col: 15, text: "G" },
    defenderLeft: { row: 8, col: 13, text: "D" },
    defenderRight: { row: 4, col: 13, text: "D" },
    midfielderLeft: { row: 10, col: 9, text: "M" },
    midfielderCenterLeft: { row: 8, col: 9, text: "M" },
    midfielderCenter: { row: 6, col: 9, text: "M" },
    midfielderCenterRight: { row: 4, col: 9, text: "M" },
    midfielderRight: { row: 2, col: 9, text: "M" },
    attackerLeft: { row: 9, col: 5, text: "A" },
    attackerCenter: { row: 6, col: 5, text: "A" },
    attackerRight: { row: 3, col: 5, text: "A" },
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="grid grid-cols-17 w-[680px] m-auto">
        {gridArray.map((row, rowIndex) => (
          row.map((_, colIndex) => {
            // Vérifier si la position actuelle est une position de joueur pour les deux équipes
            const playerOne = Object.entries(playersOnePositions).find(([_, position]) => position.row === rowIndex && position.col === colIndex);
            const playerTwo = Object.entries(playersTwoPositions).find(([_, position]) => position.row === rowIndex && position.col === colIndex);
            const isPlayerOnePosition = Object.values(playersOnePositions).some(
              position => position.row === rowIndex && position.col === colIndex
            );
            const isPlayerTwoPosition = Object.values(playersTwoPositions).some(
              position => position.row === rowIndex && position.col === colIndex
            );

            // Définir le contenu à afficher dans la cellule
            let bgClass = '';
            let cellContent = '';
            if (playerOne) {
              cellContent = playerOne[1].text;
            } else if (playerTwo) {
              cellContent = playerTwo[1].text;
            }

            if (isPlayerOnePosition) {
              bgClass = 'bg-red-500'; // Couleur pour représenter les joueurs de l'équipe 1
            } else if (isPlayerTwoPosition) {
              bgClass = 'bg-blue-500'; // Couleur pour représenter les joueurs de l'équipe 2
            } else {
              if (rowIndex >= 4 && rowIndex <= 8) {
                bgClass = colIndex === 0 || colIndex === row.length - 1 ? 'bg-white' : 'bg-green-500';
              } else if (rowIndex === 0 || rowIndex === 12) {
                bgClass = 'bg-black';
              } else {
                bgClass = colIndex === 0 || colIndex === row.length - 1 ? 'bg-black' : 'bg-green-500';
              }
            }

            return (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={`border border-black w-10 h-10 flex items-center justify-center ${bgClass}`}
              >
                {cellContent}
              </div>
            );
          })
        ))}
      </div>
    </div>
  );
};

export default GridComponent;
