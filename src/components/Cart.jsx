import './css/cart.css';
import db from '../db.json'
import Controller from './Controller'

function Cart() {

  return(
    <div className="containerCart">
      <h1>Meu carrinho</h1>
    
      {db.items.map(item => {
        return(
          <div className="compras">
            <div className="image">
              <img src={item.imageUrl} alt="" />
      
            </div>

            <div className="info">
                <h3>{item.name}</h3>
                <span>{item.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
                <p>{item.sellingPrice.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
            </div>

            <div className='controller'>
              <Controller />
            </div>
          </div>
        )
      })}

      <div className="resultado">
        <h1>Total</h1>
        <span></span>
      </div>
      {/* <Message /> */}
      <button onClick="Finalizou" className='btn-end'>Finalizar compra</button>
    </div>
  )
}


export default Cart;
