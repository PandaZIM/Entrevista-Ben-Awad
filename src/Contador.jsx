import React, { useState } from 'react';

function Contador() {

  const [contador, setContador] = useState(0);

  function incrementaContador() {
    setContador(contador + 1)
  }
  return (
      <div>
        {contador}
        <button onClick={incrementaContador}>+</button>
      </div>
  );
}

export default Contador;