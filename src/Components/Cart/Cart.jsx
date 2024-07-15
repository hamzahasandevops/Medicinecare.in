import React from "react";
import { useContext } from "react";
import { CartContext } from "../Features/ContextProvider";

export default function Cart() {
  const { cart, dispatch } = useContext(CartContext);

  const increase = (id) => {
    const index = cart.findIndex((p) => p.id === id);
    if (cart[index].length < 10) {
      dispatch({ type: "Increase", id });
    }
  };

  const decrease = (id) => {
    const index = cart.findIndex((p) => p.id === id);
    if (cart[index].length > 1) {
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
                        className="rounded circle px-2"
                        onClick={() => decrease(c.id)}
                      >
                        <b>-</b>
                      </button>

                      <button
                        className="rounded circle px-2"
                        onClick={() => increase(c.id)}
                      >
                        <b>+</b>
                      </button>
                      <button className="rounded circle px-2">Remove</button>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
}
