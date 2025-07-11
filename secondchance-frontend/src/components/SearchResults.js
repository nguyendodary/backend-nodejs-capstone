import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles.css";
function SearchResults() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get("https://<your-backend-render-url>/api/secondchance/search?category=Electronics")
      .then((res) => setItems(res.data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="page-container">
      <h1>Search Results (Electronics)</h1>
      <div className="item-list">
        {items.map((item) => (
          <div key={item._id} className="item">
            <p>
              <strong>{item.name}</strong>
            </p>
            <p>Category: {item.category}</p>
            <p>Price: ${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default SearchResults;
