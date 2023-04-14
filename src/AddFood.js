import React, { useState } from "react";
import TextField from "@mui/material/TextField";
const AddFood = () => {
  const [foodName, setFoodName] = useState("");
  const [foodType, setFoodType] = useState("");
  const [deliveryTime, setDeliveryTime] = useState(0);

  const handleFoodNameChange = (e) => {
    setFoodName(e.target.value);
  };

  const handleFoodTypeChange = (e) => {
    setFoodType(e.target.value);
  };

  const handleDeliveryTimeChange = (e) => {
    setDeliveryTime(parseInt(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new food object
    const newFood = {
      foodName,
      foodType,
      deliveryTime
    };

    // Get existing foods from local storage
    const existingFoods = JSON.parse(localStorage.getItem("foods")) || [];

    // Add the new food to existing foods
    const updatedFoods = [...existingFoods, newFood];

    // Store updated foods in local storage
    localStorage.setItem("foods", JSON.stringify(updatedFoods));

    // Reset form fields
    setFoodName("");
    setFoodType("");
    setDeliveryTime(0);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "2px solid black"
      }}
    >
      <h1 style={{ textAlign: "center" }}>Add Food</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <label>
          Food Name:
          <input type="text" value={foodName} onChange={handleFoodNameChange} />
        </label>
        <br />
        <label>
          Food Type:
          <select value={foodType} onChange={handleFoodTypeChange}>
            <option value="">-- Select Food Type --</option>
            <option value="Delicious Food">Delicious Food</option>
            <option value="Nutritious Food">Nutritious Food</option>
            <option value="Fast Food">Fast Food</option>
            <option value="Beverages">Beverages</option>
            <option value="Desserts">Desserts</option>
          </select>
        </label>
        <br />
        <label>
          Max Delivery Time (minutes):
          <input
            type="number"
            value={deliveryTime}
            onChange={handleDeliveryTimeChange}
          />
        </label>
        <br />
        <button
          type="submit"
          style={{
            background: "blue",
            color: "white",
            padding: "5px 10px",
            margin: "0px 40px"
          }}
        >
          Add Food
        </button>
      </form>
      <br />
    </div>
  );
};

export default AddFood;
