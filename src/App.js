/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from 'react';
import './App.css';
import pizzaData from './data';
import './index.css';
function App() {
  console.log(pizzaData)
  return (
   <div className='container'>
 
   <Header/>
   <Menu/>
    <Footer/>
   </div> 
    
  );
} 

let Header=()=> {
  return <div className='header'>
 <h1>FAST REACT PIZZA CO.</h1>;
  </div>
 
}

function Menu() {
  return(
    <main className='menu'>
      <h2>Our Menu</h2>

      <ul className='pizzas'>
        {pizzaData.map((pizza)=>(
        <Pizza pizzaObj={pizza} key={pizza.name}/>
        ))}
      </ul>
      {/* {
        pizzaData.map((singleData)=>{
return <div className="pizza"key={singleData.name}>
<lable>{singleData.name}</lable>
<img src={singleData.photoName} ></img>
</div>
})
      } */}
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 9;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  let [timer,setTimer]=useState(new Date().toLocaleTimeString());
  
 let timeout= setTimeout(()=>{
setTimer(new Date().toLocaleTimeString());
  },1000)
  return(
  <footer className='footer'>
    {timer}{isOpen ? (
      <div className="order">
        <p>
          We're open untill {closeHour}:00. Come visit us or order online.
        </p>
        <button className='btn'>Order</button>
      </div>
    ): ( <p>
      We're happy to welcome you between {openHour}:00 and {closeHour}:00.  
    </p>

    )}
  </footer>
  );
}


function Pizza(props) {
  return(
    <li className='pizza'>
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name}/>
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price}</span>
      </div>
    </li>
  );
}
 
export default App;
     