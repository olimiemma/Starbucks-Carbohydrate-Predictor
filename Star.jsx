import React, { useState } from 'react';

const StarbucksCarbs = () => {
  const [calories, setCalories] = useState('2323'); // Default value for demo
  const [result, setResult] = useState({
    calories: 2323,
    carbs: 242.3,
    category: { text: 'High-Carb', color: 'bg-red-500' }
  }); // Initialize with result for demo
  const [error, setError] = useState('');

  // Linear regression model parameters (estimated from the scatterplot)
  const slope = 0.1;
  const intercept = 10;

  const predictCarbs = (calories) => {
    // Calculate predicted carbohydrate content
    return parseFloat((slope * calories + intercept).toFixed(1));
  };

  const getCarbCategory = (carbs) => {
    if (carbs < 15) return { text: 'Low-Carb', color: 'bg-green-500' };
    if (carbs < 30) return { text: 'Moderate-Carb', color: 'bg-yellow-500' };
    return { text: 'High-Carb', color: 'bg-red-500' };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate input
    if (!calories) {
      setError('Please enter a calorie value');
      return;
    }
    
    const caloriesNum = parseFloat(calories);
    
    if (isNaN(caloriesNum)) {
      setError('Please enter a valid number');
      return;
    }
    
    if (caloriesNum < 0) {
      setError('Calories cannot be negative');
      return;
    }
    
    // Calculate predicted carbs
    const carbs = predictCarbs(caloriesNum);
    const category = getCarbCategory(carbs);
    
    // Always set a new result object to ensure React detects the change
    setResult({ 
      calories: caloriesNum, 
      carbs, 
      category 
    });
    setError('');
  };

  return (
    <div className="w-full max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold text-gray-800">Starbucks Carbohydrate Predictor</h1>
        <p className="text-gray-600 mt-2">Estimate carbohydrate content based on calories</p>
      </div>
      
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="mb-4">
          <label htmlFor="calories" className="block text-gray-700 font-medium mb-2">
            Calories in Starbucks Item
          </label>
          <div className="flex">
            <input
              type="number"
              id="calories"
              className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter calories"
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Predict
            </button>
          </div>
          {error && <p className="mt-2 text-red-600 text-sm">{error}</p>}
        </div>
      </form>
      
      {/* Always show the result section */}
      <div className="bg-gray-100 p-4 rounded-lg mb-4">
        <h2 className="text-lg font-bold text-gray-800 mb-3">Prediction Result</h2>
        
        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-700">Calories:</span>
          <span className="font-medium">{result.calories}</span>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-700">Estimated Carbs:</span>
          <span className="font-medium">{result.carbs} g</span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-700">Category:</span>
          <span className={`${result.category.color} text-white px-3 py-1 rounded-full text-sm font-medium`}>
            {result.category.text}
          </span>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h3 className="text-md font-semibold text-gray-800 mb-2">About this prediction model</h3>
        <p className="text-sm text-gray-600">
          This predictor uses a linear regression model based on observed data from Starbucks menu items. 
          The prediction uses the formula: <span className="font-medium">Carbs (g) = 0.1 × Calories + 10</span>.
        </p>
        <div className="mt-2 flex items-center flex-wrap">
          <div className="flex items-center mr-3 mb-1">
            <div className="w-3 h-3 rounded-full bg-green-500 mr-1"></div>
            <span className="text-xs text-gray-600">Low-Carb: &lt;15g</span>
          </div>
          <div className="flex items-center mr-3 mb-1">
            <div className="w-3 h-3 rounded-full bg-yellow-500 mr-1"></div>
            <span className="text-xs text-gray-600">Moderate-Carb: 15-30g</span>
          </div>
          <div className="flex items-center mb-1">
            <div className="w-3 h-3 rounded-full bg-red-500 mr-1"></div>
            <span className="text-xs text-gray-600">High-Carb: &gt;30g</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarbucksCarbs;