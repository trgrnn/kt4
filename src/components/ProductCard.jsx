import React from 'react';
import { Link } from 'react-router-dom';
import RatingStars from './RatingStars';
import '../App.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <h3>
        <Link to={`/product/${product.id}`}>{product.title}</Link>
      </h3>
      <RatingStars rating={product.rating.rate} />
    </div>
  );
};

export default ProductCard;
