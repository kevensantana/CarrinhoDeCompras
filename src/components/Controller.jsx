import { useState } from "react";
import './css/controller.css';


  function Controller({num}){
    const [numero, setNumero] = useState(0)

    function add(){
      setNumero(numero + 1)
    }


    function remove(){
      if(numero > 0){
        setNumero(numero - 1)
      }
   
    }

    return(
      <div className="containerController">
       <p>{numero}</p>
        <button onClick={add}>+</button>
        <button onClick={remove}>-</button>
      </div>
    )
  }



  export default Controller;