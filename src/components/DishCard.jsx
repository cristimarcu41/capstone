import React from 'react';
import PropTypes from 'prop-types';

export default function DishCard({ image, title, price, description, cta }) {
  return (
    <article className="dish-card rounded-16">
      <img src={image} alt={title} className="dish-card-img rounded-16" />
      <div className="dish-card-body">
        <div className="dish-card-header">
          <h5 className="dish-card-title">{title}</h5>
          <span className="dish-card-price accent-yellow">{price}</span>
        </div>
        <p className="dish-card-desc">{description}</p>
        <div className="dish-card-cta">
          <span className="dish-card-cta-text">{cta}</span>
          <span className="dish-card-cta-icon" role="img" aria-label="delivery">🚚</span>
        </div>
      </div>
    </article>
  );
}

DishCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  cta: PropTypes.string.isRequired,
}; 