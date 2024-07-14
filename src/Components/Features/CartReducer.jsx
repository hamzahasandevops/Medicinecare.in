

 const CartReducer = (state,action) =>{
    switch(action.type){
        case "ADD" :
         return [...state , action.product]

        case "Remove":

        case "Increase":
            default :state
    }
}

export default CartReducer