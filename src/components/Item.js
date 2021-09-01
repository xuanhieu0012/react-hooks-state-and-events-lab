import React, {useState} from "react";

function Item({ name, category }) {
const [cart, setCard ] = useState(false)

const checkCart = cart ? "in-cart" :""
function handleAdd(){
  setCard(checkCart => !checkCart)
}
  return (
    <li className={checkCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick ={handleAdd} className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
