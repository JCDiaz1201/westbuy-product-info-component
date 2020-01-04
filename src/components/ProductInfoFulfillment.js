import React from "react";
import ProductInfo from "./ProductInfo";

const ProductInfoFulfillment = props => {
  return (
    <div className="product-info-fulfillment">
      <div className="product-info-fulfillment-option-one">
        FREE Shipping: Get it by {props.selectedProductTime}
      </div>
      <div className="product-info-fulfillment-option-two">
        <strong>Want it tomorrow? </strong>Choose Next-Day Delivery in checkout
        to 78701.
      </div>
      <div className="product-info-fulfillment-option-three">
        {" "}
        <strong>Store Pickup:</strong>Order now and South Austin will have it
        ready for pickup by {props.selectedProductTime}. Available today at a
        store {Math.floor(Math.random() * Math.floor(16) + 1)} miles away.
      </div>
    </div>
  );
};

export default ProductInfoFulfillment;
