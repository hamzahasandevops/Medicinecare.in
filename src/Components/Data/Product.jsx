import React from "react";
import { useContext } from "react";
import { CartContext } from "../Features/ContextProvider";



export default function Product({ product }) {
const {dispatch} = useContext(CartContext)

    return (
        <>

            <div> <div className="col">
                <div className="card">
                    <img src={product.images} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.description}</p>
                        <button className="btn btn-primary" onClick={() => dispatch({type:"ADD", product:product})}> ADD TO CART</button>
                    </div>

                </div>
            </div></div>

        </>
    )
}
