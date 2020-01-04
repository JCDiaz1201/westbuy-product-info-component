import React from "react";

const ProductInfoVariation = props => {
  let productInfoVariationOne;
  let productInfoVariationTwo;

  if (props.productInfoVariationProp.options === "[null]") {
    productInfoVariationOne = null;
  } else {
    productInfoVariationOne = (
      <div className="product-info-variations">
        <div className="product-info-variations-header">Available Options:</div>
        <label className="product-info-variations-label">
          <select className="product-info-variations-drop-down">
            <option>{props.selectedProductOptions[0]}</option>
            {props.selectedProductOptions.map((option, key) => (
              <option value={option} key={key}>
                {option}
              </option>
            ))}
            <option>None</option>
          </select>
        </label>
      </div>
    );
  }

  if (props.productInfoVariationProp.onHand < 1) {
    productInfoVariationTwo = (
      <div className="product-info-variations">
        <div className="product-info-variations-header-two-b">
          Out of Stock!
        </div>
      </div>
    );
  } else {
    productInfoVariationTwo = (
      <div className="product-info-variations">
        <div className="product-info-variations-header-two-c">In Stock!</div>
      </div>
    );
  }

  return (
    <div>
      {productInfoVariationOne}
      {productInfoVariationTwo}
    </div>
  );
};

export default ProductInfoVariation;
