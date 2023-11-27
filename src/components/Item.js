import React from "react";

function Item({ name, category }) {

  function handleClick(e){
    e.target.parentNode.className="in-cart"  
  }
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
