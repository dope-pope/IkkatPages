//Dependencies
import React from 'react';
import { Icon } from 'react-materialize';
import { Link } from 'react-router-dom';
//Internals
import PRODUCTS from '../../Data';

const MenItems = () => (
  <div className="items">
    {PRODUCTS.map((product) => {
      if (product.gender === "men") {
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

export default MenItems;
