import React from "react";
import '../../assets/style.css';

function ProductCard({ product }) {
  const { name, price, description} = product;

  return (
    <div className="card col-2 m-2">
      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpngimg.com%2Fuploads%2Flaptop%2Flaptop_PNG101815.png&f=1&nofb=1&ipt=0e1186409f8ad793867c22af154353d1120bbb9aa248b0f857a0f614759b69bf" className="card-img-top card-image"/>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{name}</h5>
        <div className="mb-2">
          <strong>${price}</strong>
        </div>
        <div className="mb-3">{description}</div>
        <div className="mt-auto d-flex justify-content-between">
          <button className="btn btn-primary">Buy</button>
          <button className="btn btn-secondary">Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
