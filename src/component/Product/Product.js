import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faStar } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const { img, name, seller, price, star, stock } = props.product;
  // const { handleAddProduct } = props;

  // console.log(props);

  return (
    <div className="product-card">
      <div className="product-img">
        <img src={img} alt={name} />
      </div>

      <div className="product-info">
        <h4 className="product-name">{name}</h4>

        <p className="product-seller">
          by <span>{seller}</span>
        </p>

        <div className="product-rating">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <span> ({star})</span>
        </div>

        <p className="product-price">${price}</p>

        <p className="product-stock">Only {stock} left in stock - order soon</p>

        <button
          className="add-cart-btn"
          onClick={() => props.handleAddProduct(props.product)}
        >
          <FontAwesomeIcon icon={faCartShopping} /> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
