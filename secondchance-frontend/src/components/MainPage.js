import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles.css";

function MainPage() {
  const [items, setItems] = useState([
    { _id: "1", name: "Laptop", category: "Electronics", price: 1000 },
    { _id: "2", name: "Book", category: "Books", price: 20 },
  ]);

  return (
    <div className="page-container">
      <h1>Available Items</h1>
      <div className="item-list">
        {items.map((item) => (
          <Link to={`/items/${item._id}`} key={item._id} className="item">
            <h3>{item.name}</h3>
            <p>Category: {item.category}</p>
            <p>Price: ${item.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MainPage;
