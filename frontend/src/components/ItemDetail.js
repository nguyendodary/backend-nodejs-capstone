import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function ItemDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchItem();
  }, [id]);

  const fetchItem = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/items/${id}`);
      setItem(response.data);
      setLoading(false);
    } catch (err) {
      setError("Item not found");
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        await axios.delete(`${process.env.REACT_APP_API_URL}/api/items/${id}`);
        alert("Item deleted successfully");
        navigate("/items");
      } catch (err) {
        alert("Failed to delete item");
      }
    }
  };

  if (loading) return <div className="container"><div className="loading">Loading...</div></div>;
  if (error) return <div className="container"><div className="alert alert-error">{error}</div></div>;
  if (!item) return <div className="container"><div className="alert alert-error">Item not found</div></div>;

  return (
    <div className="container">
      <div className="detail-container">
        <div className="detail-image">
          {item.image ? <img src={`${process.env.REACT_APP_API_URL}${item.image}`} alt={item.name} /> : "📷"}
        </div>

        <div className="detail-card">
          <div className="detail-header">
            <h1 className="detail-title">{item.name}</h1>
            <div className="detail-price">${item.price}</div>
          </div>

          <div className="detail-meta">
            <div className="detail-meta-item">
              <div className="detail-meta-label">Category</div>
              <div className="detail-meta-value">{item.category}</div>
            </div>
            <div className="detail-meta-item">
              <div className="detail-meta-label">Listed</div>
              <div className="detail-meta-value">{new Date(item.createdAt).toLocaleDateString()}</div>
            </div>
          </div>

          <div className="detail-description">
            <h3 style={{ marginBottom: "0.5rem", color: "var(--primary)" }}>Description</h3>
            {item.description}
          </div>

          <div className="detail-actions">
            <button className="btn btn-primary" onClick={() => alert("Contact feature coming soon!")}>
              Contact Seller
            </button>
            <button className="btn btn-danger" onClick={handleDelete}>
              Delete Item
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
