import {
  CREATE_PRODUCT_FAILURE,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  UPDATE_PRODUCT_FAILURE,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
} from "../ActionType";

const initialState = {
  product: [],
  isLoading: false,
  error: null,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_REQUEST:
    case CREATE_PRODUCT_REQUEST:
    case UPDATE_PRODUCT_REQUEST:
    case DELETE_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        product: action.payload,
        isLoading: false,
        error: null,
      };
    case CREATE_PRODUCT_SUCCESS:
      return {
        ...state,
        product: [...state.product, action.payload],
        isLoading: false,
        error: null,
      };
    case UPDATE_PRODUCT_SUCCESS:
      const updatedproduct = action.payload.updatedproduct;

      const updatedproducts = state.product.map((product) =>
        product._id === updatedproduct._id ? updatedproduct : product
      );
      return {
        ...state,
        product: updatedproducts,
      };
    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        product: state.product.filter(
          (product) => product._id !== action.payload
        ),
        isLoading: false,
        error: null,
      };
    case GET_PRODUCTS_FAILURE:
    case CREATE_PRODUCT_FAILURE:
    case UPDATE_PRODUCT_FAILURE:
    case DELETE_PRODUCT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: "An error occurred.",
      };
    default:
      return state;
  }
};
