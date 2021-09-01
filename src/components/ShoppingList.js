import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [filterProduct, setFilterProduct] = useState("All")

 

  const displayShoppingList = items.filter(eachItem =>{
    if (filterProduct === "All"){
      return true
    }else {
      return eachItem.category === filterProduct
    }
  })

 
  function handlerFilter(e){
    setFilterProduct(e.target.value)
  }
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handlerFilter} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {displayShoppingList.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
