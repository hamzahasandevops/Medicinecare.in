import React from "react";
import { useContext } from "react";
import { CartContext } from "../Features/ContextProvider";
import CartProducts from "./CartProducts";



export default function Cart() {
  const { cart } = useContext(CartContext)



  return (


    <div className="container">

      <div className="row">

        <div className="row row-cols-1 row-cols-md-3 g-4">
          {cart &&
            cart.length > 0 &&
            cart.map(c => {
              return <div class="card" >
                <img src={c.images} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title"> {c.title}</h5>
                  <p class="card-text">{c.desclaimer}</p>
                  <a href="#" >Remove from cart</a>
                
                </div>
                <div>



                </div>
              </div>
            })
          }
        </div>
        <div className="col-4">

        </div>
      </div>

    </div>



  );
}
