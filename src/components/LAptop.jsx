const LAptop = () => {
  const laptops = [
    "MacBook Pro",
    "Dell XPS 15",
    "Lenovo ThinkPad X1",
    "ASUS ROG Zephyrus",
  ];

  return (
    <div style={{ padding: "40px" }}>
      <h1>Laptop Collection</h1>
      <p>Explore powerful laptops for work and gaming.</p>

      <ul>
        {laptops.map((laptop, index) => (
          <li key={index}>{laptop}</li>
        ))}
      </ul>
    </div>
  );
};

export default LAptop;