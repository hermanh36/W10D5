import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tabs from './tabs'


document.addEventListener('DOMContentLoaded', ()=> {
  const arr = [{ title: 1, content: "I am the first"}, 
      { title: 2, content: "I am the second"}, 
      { title: 3, content: "I am the third"}];
  const Root = props => {
    return (
      <div>
        <Clock />
        <Tabs arr={arr}/>
      </div>
    );
  };

  const main = document.getElementById("main");
  ReactDOM.render(<Root/> , main);
});

