import React from 'react'

const Home = () => {
  return (
    <div><div
      style={{
        padding: "40px",
        textAlign: "center",
      }}
    >
      <h1>Welcome to Tech Store</h1>
      <p>
        Discover the latest mobiles and laptops at the best prices.
      </p>

      <img
        src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
        alt="Technology"
        style={{
          width: "100%",
          maxWidth: "600px",
          borderRadius: "10px",
          marginTop: "20px",
        }}
      />
    </div></div>
  )
}

export default Home