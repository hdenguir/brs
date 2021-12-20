import {
  CART_ADD,
  CART_ClEAR_ALL,
  CART_REMOVE_ITEM,
  CART_UPDATE_QUANTITY
} from "./constants";

export const addToCart = ({ product }) => {
  return dispatch => {
    dispatch({ type: CART_ADD, payload: product });
  };
};

export const clearCart = () => {
  return dispatch => {
    dispatch({ type: CART_ClEAR_ALL });
  };
};

export const removeItem = ({ id }) => {
  return dispatch => {
    dispatch({ type: CART_REMOVE_ITEM, payload: id });
  };
};

export const updateQantity = ({ id, quantity }) => {
  return dispatch => {
    dispatch({ type: CART_UPDATE_QUANTITY, payload: { id, quantity } });
  };
};
