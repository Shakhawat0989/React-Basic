import React, { useState } from 'react';

const Fruit = props => {
  const [fruitState, setFruitState] = useState({
    fruits: [
      { name: 'Sabbir', weight: '40gm' },
      { name: 'Nishan', weight: '10gm' },
      { name: 'Murad', weight: '30gm' },
      { name: 'Ridoy', weight: '20gm' },
    ],
  });

  const clickHandler = () => {
    
    setFruitState({
      fruits: [
        { name: 'Mango', weight: '20gm' },
        { name: 'Banana', weight: '30gm' },
        { name: 'Orange', weight: '10gm' },
        { name: 'Apple', weight: '40gm' },
      ],
    });
  };

  return (
    <div>
      <button onClick={clickHandler}>Change Here</button>
      <h2>Fruit Name is {fruitState.fruits[0].name}</h2>
      <h2>Fruit Name is {fruitState.fruits[1].name}</h2>
      <h2>Fruit Name is {fruitState.fruits[2].name}</h2>
      <h2>Fruit Name is {fruitState.fruits[3].name}</h2>
    </div>
  );
};

export default Fruit;
