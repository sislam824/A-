import axios from "axios";
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
import toast from "react-hot-toast";

export const getProductRequest = () => ({
  type: GET_PRODUCTS_REQUEST,
});

export const getProductSuccess = (products) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload: products,
});

export const getProductFailure = (error) => ({
  type: GET_PRODUCTS_FAILURE,
  payload: error,
});

export const createProductRequest = () => ({
  type: CREATE_PRODUCT_REQUEST,
});

export const createProductSuccess = (products) => ({
  type: CREATE_PRODUCT_SUCCESS,
  payload: products,
});

export const createProductFailure = (error) => ({
  type: CREATE_PRODUCT_FAILURE,
  payload: error,
});

export const updateProductRequest = () => ({
  type: UPDATE_PRODUCT_REQUEST,
});

export const updateProductSuccess = (products) => ({
  type: UPDATE_PRODUCT_SUCCESS,
  payload: products,
});

export const updateProductFailure = (error) => ({
  type: UPDATE_PRODUCT_FAILURE,
  payload: error,
});

export const deleteProductRequest = () => ({
  type: DELETE_PRODUCT_REQUEST,
});

export const deleteProductSuccess = (productsId) => ({
  type: DELETE_PRODUCT_SUCCESS,
  payload: productsId,
});

export const deleteProductFailure = (error) => ({
  type: DELETE_PRODUCT_FAILURE,
  payload: error,
});

export const getProduct = (sortOption) => {
  return (dispatch) => {
    dispatch(getProductRequest());

    const queryParams = sortOption ? `?sort=${sortOption}` : "";

    return axios
      .get(`https://artgallary-6jtz.onrender.com/api/products/getProduct`)
      .then((res) => {
        dispatch(getProductSuccess(res.data));
        console.log(res.data);
      })
      .catch(() => dispatch(getProductFailure()));
  };
};

export const addProduct = (product) => {
  return async (dispatch) => {
    dispatch(createProductRequest());

    try {
      const response = await axios.post(
        "https://artgallary-6jtz.onrender.com/api/products/addProduct",
        product
      );
      const createdproduct = response.data;

      dispatch(createProductSuccess(createdproduct));
      toast.success("Product Created Successfully", {
        style: {
          borderRadius: "50px",
          background: "#000428",
          color: "#ffffff",
          padding: "1rem 1.5rem",
          fontWeight: "600",
        },
      });
    } catch (error) {
      dispatch(createProductFailure(error.message));
    }
  };
};
export const updateProduct = (id, formData) => {
  return (dispatch) => {
    dispatch(updateProductRequest());

    return axios
      .put(
        `https://artgallary-6jtz.onrender.com/api/products/updateProduct/${id}`,
        formData,
        {}
      )
      .then((res) => {
        dispatch(updateProductSuccess(res.data.movie));
        toast.success("product updated Suceessfully", {
          style: {
            borderRadius: "50px",
            background: "#000428",
            color: "#ffffff",
            padding: "1rem 1.5rem",
            fontWeight: "600",
          },
        });
      })
      .catch(() => dispatch(updateProductFailure()));
  };
};

export const deleteProduct = (id) => {
  return async (dispatch) => {
    dispatch(deleteProductRequest());

    try {
      await axios.delete(
        `https://artgallary-6jtz.onrender.com/api/products/deleteProduct/${id}`,
        {}
      );
      dispatch(deleteProductSuccess(id));
      toast.success("product Deleted Suceessfully", {
        style: {
          borderRadius: "50px",
          background: "#000428",
          color: "#ffffff",
          padding: "1rem 1.5rem",
          fontWeight: "600",
        },
      });
    } catch (error) {
      dispatch(deleteProductFailure(error.message));
      console.log(error);
    }
  };
};
