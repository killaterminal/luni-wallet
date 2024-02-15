import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const word = '  Кошелёк Telegram нового<br> поколения. Безопасно, <br>быстро и через блокчейн<br>LUNI.';

  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex < word.length) {
        setText(prevText => prevText + word[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);


  return (
    <div className="bg">
      <div className="image-container">
        <img src='https://static.herewallet.app/intro.35bf1b5e.png' alt="Luni Wallet" className='main-photo' />
      </div>
      <div className='main-text-container'>
        <h1 className='title-text'>Luni Wallet</h1>
        <h2 dangerouslySetInnerHTML={{ __html: text }} className='text' />
        <button className="button">Зарегистрироваться</button>
      </div>
    </div>
  );
}

export default App;
