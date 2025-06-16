import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./styles.css";

function ItemDetails() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  useEffect(() => {
    axios
      .get(`https://<your-backend-render-url>/api/secondchance/items/${id}`)
      .then((res) => setItem(res.data))
      .catch((err) => console.error(err));
  }, [id]);
  if (!item) return <div className="page-container">Loading...</div>;
  return (
    <div className="page-container">
      <h1>{item.name}</h1>
      <p>Description: {item.description}</p>
      <p>Category: {item.category}</p>
      <p>Price: ${item.price}</p>
      {item.file && <img src={item.file} alt={item.name} className="item-image" />}
    </div>
  );
}
export default ItemDetails;
