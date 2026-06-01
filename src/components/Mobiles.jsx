import React from 'react'

const Mobiles = () => {
  const mobiles = [
    "iPhone 17",
    "Samsung Galaxy S26",
    "Google Pixel 11",
    "OnePlus 15",
  ];

  return (
    <div style={{ padding: "40px" }}>
      <h1>Mobile Collection</h1>
      <p>Browse our latest smartphones.</p>

      <ul>
        {mobiles.map((mobile, index) => (
          <li key={index}>{mobile}</li>
        ))}
      </ul>
    </div>
  );
};

export default Mobiles;