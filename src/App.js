import React, { useState } from 'react';
import './App.css';

function App() {
  const [item, setItem] = useState('');
  
  const [itemList, setItemList] = useState([]);

  const addItem = () => {
    setItemList([item].concat(itemList))
    setItem('')
  }

  return (
		<div className="App">
			<h1>Lista de Compras</h1>

      <div className="container-form">
        <label>Adicione um item</label>
        <input
          type="text"
          placeholder="Item"
          value={item}
          name="item"
          onChange={(e) => setItem(e.target.value)}
        />
			  <button onClick={addItem}>Adicionar Item</button>
      </div>

      <div className="container-list">
        <ul>
          {itemList.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
      
      <footer>
        <p>
          By <a href="https://github.com/CauaRodrigues" target="_blank" rel="noreferrer">Cauã Rodrigues</a> | <a href="https://github.com/DOGE-SENAI" target="_blank" rel="noreferrer">DOGE</a> © 2021  
        </p>
      </footer>
		</div>
	);
}

export default App;