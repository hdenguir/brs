import { saveState } from "../../utils";
import {
  CART_ADD,
  CART_ClEAR_ALL,
  CART_REMOVE_ITEM,
  CART_UPDATE_QUANTITY
} from "../actions/constants";

function reducer(state = {}, action) {
  switch (action.type) {
    case CART_ADD: {
      const newState = {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }]
      };
      saveState(newState.cart);
      return newState;
    }
    case CART_ClEAR_ALL:
      return { ...state, cart: [] };
    case CART_REMOVE_ITEM: {
      const newState = {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      };
      saveState(newState.cart);
      return newState;
    }

    case CART_UPDATE_QUANTITY: {
      const { cart: newtCart } = state;
      const itemIndex = newtCart.findIndex(
        item => item.id === action.payload.id
      );

      newtCart[itemIndex].quantity = +action.payload.quantity;

      const newState = { ...state, cart: newtCart };
      saveState(newState.cart);
      return newState;
    }

    default:
      return state;
  }
}

export default reducer;
