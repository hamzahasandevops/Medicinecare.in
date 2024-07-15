const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.product];

    case "Remove":

    case "Increase":
      const IndexI = state.findIndex((p) => p.id === action.id);
      state[IndexI].length += 1;
      return [...state];

    case "Decrease":
      const IndexD = state.findIndex((p) => p.id === action.id);
      state[IndexD].length -= 1;
      return [...state];

    default:
      state;
  }
};

export default CartReducer;
