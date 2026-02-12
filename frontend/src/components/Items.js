import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Items() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/items`);
      setItems(response.data);
      setLoading(false);
    } catch (err) {
      setError("Failed to load items");
      setLoading(false);
    }
  };

  if (loading) return <div className="container"><div className="loading">Loading items...</div></div>;
  if (error) return <div className="container"><div className="alert alert-error">{error}</div></div>;

  return (
    <div className="container">
      <div className="page-header">
        <h1>📦 Browse Items</h1>
        <p>Discover amazing second-hand items</p>
      </div>

      {items.length === 0 ? (
        <div className="empty-state">
          <div className="empty-state-icon">📭</div>
          <p>No items available yet</p>
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
