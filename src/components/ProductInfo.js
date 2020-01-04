import React from "react";

const ProductInfo = props => {
  console.log(props);
  return (
    <div className="product-info-column-one">
      <h1 className="product-title">{props.productInfoProp.productname}</h1>
      <div className="product-info">
        <div className="product-model">
          <span className="product-info-label">Model: </span>
          <span>{props.productInfoProp.model} </span>
        </div>

        <div className="product-sku">
          <span className="product-info-label">SKU: </span>
          <span>{props.productInfoProp.sku}</span>
        </div>
      </div>

      <div className="product-feedback">
        <div className="product-feedback-bar">
          <div id="product-info-stars"></div>

          <div className="product-info-questions-bar">
            <a href="#" className="product-info-questions-bar-link">
              85 Answered Questions
            </a>
          </div>
        </div>
      </div>
      <div className="product-info-only-at-row">
        <div className="product-info-only-at-div">
          <button className="product-info-only-at-button">
            <p className="product-info-only-at-text-one">
              <span>Only</span>
              <span className="product-info-only-at-text-two"> @ West Buy</span>
            </p>
          </button>
        </div>
      </div>

      <div className="image-modal-component"></div>
    </div>
  );
};

export default ProductInfo;
