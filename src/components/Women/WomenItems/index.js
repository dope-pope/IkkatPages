//Dependencies
import React from 'react';
import { Icon } from 'react-materialize';
import { Link } from 'react-router-dom';
//Internals
import PRODUCTS from '../../Data';

const WomenItems = () => (
  <div className="items">
    {PRODUCTS.map((product) => {
      if (product.gender === "women") {
        return(
          <div className="item">
            <Link to={`/products/${product.id}`}>
            <div className="product-img">
              <img alt={product.name} src={product.img} />
            </div>
            <div className="product-details">
              <h1 id="product-name">{product.name}</h1>
            </div>
            </Link>
          </div>
        )
      }
    })}
  </div>
)

export default WomenItems;
