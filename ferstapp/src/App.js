import React from "react";
import Content from "./Content";

function App() {
  const name = 'Привет конст';
  let name_let = 'Привет обычная переменная';
  return (
    <div className="App">
    
    <img src={"https://www.sunhome.ru/i/wallpapers/163/alberta-banf-kanada.1920x1200.jpg"}></img>;
    <Content text={name}></Content>
    <Content textlet={name_let}></Content>
    </div>
  );
}

export default App;
