# React + Vite

# 🍴 Recipe Finder


The **Recipe Finder** is a ReactJS application styled with Tailwind CSS that allows users 
to search for food recipes and view detailed information including category, region, ingredients, 
instructions, and a demo video.

---

## ✨ Features
- 🔍 Search for a food recipe by name  
- 📋 Display recipe details: **name, category, and region**  
- 🥗 List of **ingredients**  
- 📖 Step-by-step **instructions**  
- 🎥 Embedded **video** tutorial (Not Available at this Time)  
- 🔗 Link to the **source** of the recipe(Not Available at this Time)

---

## 🛠️ Technologies Used
- **ReactJS** ⚛️  
- **Tailwind CSS** 🎨  


---

## 🚀 I will continue on  

 # 🍴 ##Capstone Part 4:

A React-based Recipe Finder application built as part of **Capstone Project - Part 4**.  
This app allows users to search for meals using [TheMealDB API](https://www.themealdb.com/) and view detailed information including name, category, area, instructions, and media links.

## 🚀 Features
- 🔍 **Search Recipes** – Find meals by name using TheMealDB API.  
 🖼 **Meal Details** – View recipe name, category, cuisine, and thumbnail image. 
 - 📋 **Instructions** – Step-by-step cooking instructions. 
- 🎥 **Media Links** – Watch cooking videos on YouTube or check recipe sources.


## 🛠 Tech Stack
- [React](https://react.dev/) – Frontend library  
- [Vite](https://vitejs.dev/) (if you used it for setup)  
- [Tailwind CSS](https://tailwindcss.com/) – Styling  
- [TheMealDB API](https://www.themealdb.com/api.php) – Recipe data  

🎯 Learning Goals (Capstone Part 4)

Practice using React hooks (useState, useEffect).

Implement API data fetching in React.

Improve frontend design skills with Tailwind CSS.

Handle dynamic rendering of content in React.



📌 Future Improvements

✅ Dynamic ingredient list (instead of hardcoded items).

✅ Implement pagination or infinite scroll for more results.

✅ Add search suggestions/autocomplete.

✅ Save favorite recipes with local storage.





## ⚡ Challenges Faced & How I Handled Them
1. **React key warning** – Initially, React showed a warning about missing `key` props when mapping through meals. I fixed this by adding `key={meal.idMeal}` to each rendered recipe article.  
2. **Dynamic ingredient rendering** – The API provides ingredients in separate fields (`strIngredient1`, `strIngredient2`, etc.), which made mapping them tricky. I plan to refactor this into a loop to display them dynamically.  
3. **Styling consistency** – Tailwind CSS classes were overwhelming at first. To handle this, I broke down the UI into smaller sections and applied utility classes step by step.  

---

## 📅 What’s Next? (Upcoming Week Plan)
- ✅ Implement a **dynamic ingredient list** using loops instead of hardcoding.  
- ✅ Add a **search bar functionality** so users can look up meals beyond “Arrabiata.”  
- ✅ Work on **better UI/UX**, such as cards or grid layouts for recipes.  
- ✅ Begin implementing **local storage** to save favorite recipes for persistence.  






## 🚀 I will continue on {Next Week : Finalize $ Submit}