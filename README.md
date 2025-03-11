# Starbucks Carbohydrate Predictor 
https://v0-starbucks-carbs-issue.vercel.app/

![Starbucks Carbohydrate Predictor] ![image](https://github.com/user-attachments/assets/696bb21c-0d04-47a0-a123-62ab01fe2bfe)

![React](https://img.shields.io/badge/React-18.2.0-blue)
![License](https://img.shields.io/badge/License-MIT-green)

A web application that uses linear regression to predict the carbohydrate content of Starbucks menu items based on their calorie counts. Since Starbucks only displays calorie information on their menu boards, this tool helps consumers—especially those monitoring carbohydrate intake—make more informed food choices.
![Screenshot from 2025-03-10 23-46-39](https://github.com/user-attachments/assets/b11849dc-c55d-4024-9013-ebf2c48befc3)



## 📊 About the Project

### The Problem
Starbucks displays calorie information for all menu items, but doesn't show carbohydrate content on menu boards. For people managing conditions like diabetes or following specific dietary plans, knowing carbohydrate content is crucial.

### The Solution
This tool uses statistical analysis of Starbucks nutrition data to establish a relationship between calories and carbohydrates. By applying linear regression, we can predict carbohydrate content with reasonable accuracy when only calorie information is available.

## 🧮 The Model

The prediction is based on a linear regression model derived from analyzing the relationship between calories and carbohydrates in Starbucks menu items. The scatter plot analysis revealed a positive linear relationship that can be expressed as:

```
Carbs (g) = 0.1 × Calories + 10
```

This model allows users to estimate the carbohydrate content of any Starbucks item when they know its calorie count.

### Categorization
Items are categorized as:
- 🟢 **Low-Carb**: Less than 15g of carbohydrates
- 🟡 **Moderate-Carb**: 15-30g of carbohydrates
- 🔴 **High-Carb**: More than 30g of carbohydrates

## 🚀 Features

- **Simple Input**: Enter the calorie count of any Starbucks menu item
- **Instant Prediction**: Get immediate carbohydrate estimates
- **Visual Categorization**: Color-coded results based on carbohydrate levels
- **Responsive Design**: Works on desktop and mobile devices
- **Educational Information**: Learn about the prediction model

## 💻 Technologies Used

- React
- JavaScript
- Tailwind CSS
- Linear Regression

## 🔧 Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/starbucks-carb-predictor.git
   cd starbucks-carb-predictor
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## 🔍 How It Works

1. **Data Analysis**: The model is based on statistical analysis of nutritional data from Starbucks menu items
2. **Linear Regression**: We identified a linear relationship between calories and carbohydrates
3. **Prediction**: When a user enters calorie information, the application applies the formula to predict carbohydrate content
4. **Categorization**: Results are categorized into low, moderate, or high carbohydrate content for quick assessment

## 📚 Educational Value

This project demonstrates:
- Application of linear regression in a real-world scenario
- Data visualization techniques
- Practical use of statistical models
- Building interactive web applications with React

## 🔜 Future Enhancements

- [ ] Add popular Starbucks items as quick-select options
- [ ] Include prediction of other nutritional values (fat, protein, etc.)
- [ ] Implement data visualization for nutrition breakdown
- [ ] Add export functionality for saving results
- [ ] Create a mobile app version

## 📋 Data Source

The model was developed by analyzing the relationship between calories and carbohydrates in Starbucks food menu items. While the source data is not included in this repository, the model parameters have been derived from the statistical analysis of this data.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Related Projects

- https://github.com/olimiemma/Child-Cost-Estimator <pr>
- https://github.com/olimiemma/Disease-Transactional-Model-Design-for-Global-Health-Tracking

## 📞 Contact

If you have any questions or would like to contribute to this project, please open an issue or submit a pull request.

---

Made with ☕ and 💻 by Emmanuel Kasigazi
