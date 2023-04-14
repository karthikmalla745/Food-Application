
import React, { useState } from "react";

const FoodList = () => {
  const [foodTypeFilter, setFoodTypeFilter] = useState("");
  const [deliveryTimeFilter, setDeliveryTimeFilter] = useState(0);
  const [foods, setFoods] = useState([]);

  // Fetch foods from local storage when component mounts
  React.useEffect(() => {
    const fetchedFoods = JSON.parse(localStorage.getItem("foods")) || [];
    setFoods(fetchedFoods);
  }, []);

  const handleFoodTypeFilterChange = (e) => {
    setFoodTypeFilter(e.target.value);
  };

  const handleDeliveryTimeFilterChange = (e) => {
    setDeliveryTimeFilter(parseInt(e.target.value));
  };

  const resetFilters = () => {
    setFoodTypeFilter("");
    setDeliveryTimeFilter(0);
  };

  const filteredFoods = foods.filter((food) => {
    return (
      (!foodTypeFilter || food.foodType === foodTypeFilter) &&
      (!deliveryTimeFilter || food.deliveryTime <= deliveryTimeFilter)
    );
  });

  return (
    <div style={{display:'flex',flexDirection:'column',border:'2px solid black',alignItems:'center',justifyContent:'center'}}>
      <h1 style={{textAlign:'center'}}>Food List</h1>
      <label>
        Filter by Food Type:
        <select value={foodTypeFilter} onChange={handleFoodTypeFilterChange}>
          <option value="">-- Select Food Type --</option>
          <option value="Delicious Food">Delicious Food</option>
          <option value="Nutritious Food">Nutritious Food</option>
          <option value="Fast Food">Fast Food</option>
          <option value="Beverages">Beverages</option>
          <option value="Desserts">Desserts</option>
        </select>
      </label><br/>
      <label>
        Filter by Max Delivery Time (minutes):
        <input
          type="number"
          value={deliveryTimeFilter}
          onChange={handleDeliveryTimeFilterChange}
        />
      </label><br/>
      <button onClick={resetFilters} style={{
          background: "blue",
          color: "white",
          padding: "5px 10px",
          margin: "0px 40px"
        }}>Reset Filters</button><br/><br/>
      
        {filteredFoods.map((food, index) => (
           <div
           style={{
             display: "flex",
             flexDirection: "row",
             border: "2px solid black",
             borderRadius: "5px",
             width: "300px",
             margin: "10px",
             padding: "3px",
             width: "300px",
             height: "200px"
           }}
         >
            <div style={{display:'flex',flexDirection:'column'}}>
          {/* <p key={index} style={{ fontSize: "20px", fontWeight: "700" }}>
            <strong>Food Name:</strong> {food.foodName}
            <br />
            <strong>Food Type:</strong> {food.foodType}
            <br />
            <strong>Max Delivery Time (minutes):</strong> {food.deliveryTime}
          </p> */}
          <h2 style={{textAlign:'center'}}>{food.foodName}</h2>
          <p>Food Type : <strong> {food.foodType}</strong></p>
          <p>Max Delivery Time (minutes) : <strong> {food.deliveryTime}</strong></p>
          </div>
          </div>
        ))}
     
    </div>
  );
};

export default FoodList;