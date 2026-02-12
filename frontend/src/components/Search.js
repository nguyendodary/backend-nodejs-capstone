import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Search() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("Electronics");

  useEffect(() => {
    fetchItems();
  }, [category]);

  const fetchItems = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/search?category=${category}`);
      setItems(response.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  if (loading) return <div className="container"><div className="loading">Loading...</div></div>;

  return (
    <div className="container">
      <div className="page-header">
        <h1>🔍 Search Items</h1>
        <p>Find items by category</p>
      </div>

      <div className="search-filter">
        <label style={{ fontWeight: 600, color: "var(--primary)" }}>Category:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Books">Books</option>
          <option value="Furniture">Furniture</option>
        </select>
      </div>

      {items.length === 0 ? (
        <div className="empty-state">
          <div className="empty-state-icon">🔍</div>
          <p>No items found in {category} category</p>
        </div>
      ) : (
        <div className="items-grid">
          {items.map((item) => (
            <Link to={`/item/${item._id}`} key={item._id} className="item-card">
              <div className="item-image">
                {item.image ? <img src={`${process.env.REACT_APP_API_URL}${item.image}`} alt={item.name} /> : "📷"}
              </div>
              <div className="item-content">
                <h3 className="item-name">{item.name}</h3>
                <span className="item-category">{item.category}</span>
                <p className="item-description">{item.description}</p>
                <div className="item-price">${item.price}</div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
