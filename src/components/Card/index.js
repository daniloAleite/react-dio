import { useState } from 'react';
import Button from '../Button';

const Card = () => {
  const [valor, setValor] = useState(0);

  function Adicionar() {
    setValor(valor + 1);
  }

  function Remover() {
    setValor(valor - 1);
  }

  return (

    <div className="card">
      <div class="card-header">
        Meu pirmeiro Card
      </div>
      <div clasName="card-body">

        <Button
          className="btn btn-success"
          onClick={Adicionar}
        >
          Adicionar
        </Button>
        
        <Button
          className="btn btn-danger"
          onClick={Remover}
        >
          Remover
        </Button>
        <p>{valor}</p>
      </div>
    </div>
  );
}

export default Card;