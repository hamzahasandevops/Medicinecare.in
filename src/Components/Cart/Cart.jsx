import React from "react";
import { useContext } from "react";
import { CartContext } from "../Features/ContextProvider";
import { totalItem } from "../Features/CartReducer";
import { totalPrice } from "../Features/CartReducer";

export default function Cart() {
  const { cart, dispatch } = useContext(CartContext);

  const increase = (id) => {
    const Index = cart.findIndex((p) => p.id === id);
    if (cart[Index].quantity < 10) {
      dispatch({ type: "Increase", id });
    }
  };

  const decrease = (id) => {
    const Index = cart.findIndex((p) => p.id === id);
    if (cart[Index].quantity > 1) {
      dispatch({ type: "Decrease", id });
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {cart &&
            cart.length > 0 &&
            cart.map((c) => {
              return (
                <>
                  <div class="card">
                    <img src={c.images} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title"> {c.title}</h5>
                      <p class="card-text">{c.desclaimer}</p>
                      <p class="card-text">${c.price}</p>
                    </div>
                    <div>
                      <button
                        className="rounded circle px-2 btn btn-success"
                        onClick={() => decrease(c.id)}
                      >
                        <b>-</b>
                      </button>
                      <button className="btn btn-primary mx-2">
                        {c.quantity}
                      </button>
                      <button
                        className="rounded circle px-2 btn btn-success"
                        onClick={() => increase(c.id)}
                      >
                        <b>+</b>
                      </button>
                      <button
                        className="rounded circle px-2 btn btn-primary mx-2"
                        onClick={() => dispatch({ type: "Remove", id: c.id })}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
        <div className="col-4">
          <p>Total Items:{totalItem(cart)}</p>
          <p>Total price:${totalPrice(cart)}</p>
          <button>checkout</button>
        </div>
      </div>
    </div>
  );
}
