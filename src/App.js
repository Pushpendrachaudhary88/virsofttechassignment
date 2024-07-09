import React, { useState } from 'react';
import './App.css'


function App() {
  const [cart, setCart] = useState([]);

  const coins = [
    { name: 'BTC', price: 25000 },
    { name: 'DOGE', price: 0.75 },
    { name: 'RIPPLE', price: 1.5 }
  ];

  const addToCart = (coin, quantity) => {
    const updatedCart = [...cart, { ...coin, quantity }];
    setCart(updatedCart);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      {coins.map((coin) => (
        <div key={coin.name}>
          <h2>{coin.name}</h2>
          <p>${coin.price}</p>
          <input type="number" defaultValue="1" />
          <button onClick={() => addToCart(coin, 1)}>Add</button>
        </div>
      ))}

      <h2>My Cart</h2>
      <table>
        <thead>
          <tr>
            <th>Coin</th>
            <th>Qty.</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>${item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Total: ${calculateTotal()}</p>
    </div>
  );
}

export default App;

