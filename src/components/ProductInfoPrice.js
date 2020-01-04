import React from "react";

const ProductInfoPrice = props => {
  let inStock = false;
  if (parseInt(props.productInfoPriceProp.onHand) > 0) {
    inStock = true;
  }

  return (
    <div>
      <div className="product-info-price-match-guarantee">
        <span className="product-info-price-logo">
          <i className="fas fa-dollar-sign"></i>
        </span>
        <span className="product-info-price-match-guarantee-span">
          Price Match Guarantee
        </span>
      </div>
      <div className="product-info-price">
        <span className="product-info-price-span">
          ${props.productInfoPriceProp.price}
        </span>
      </div>

      <div className="product-info-open-box-option">
        {inStock ? (
          <div>
            <span className="product-info-open-box-label">Open-Box:</span>
            <span className="product-info-open-box-price">
              from $
              {(
                parseInt(props.productInfoPriceProp.price) -
                parseInt(props.productInfoPriceProp.price) * 0.25
              ).toFixed(0)}
              .99
            </span>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ProductInfoPrice;
