import{useState, useEffect} from 'react';


export default function App() {
  const [meals, setMeals] = useState([]);
  const [meal, setMeal] = useState("");

   async function getMeals(){
     try{
       const res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Chicken");
       const data = await res.json();
       setMeals(data.meals);
      
     }catch (error){
      console.error(error);
     }
   }
    
   useEffect(() => {
    getMeals();
   }, [])




  return (
  <div className="py-20 px-2 max-w-4xl mx-auto">
     <h1 className="text-4xl lg:text-5xl text-neutral-800 bg-neutral-200 rounded-lg font-bold text-center">Recipe Finder</h1>
     
     
     <form className="my-16">
      <input type="text" 
      name="search" 
      id="search" 
      placeholder='search for a Food' 
      required className="w-full py-3 px-8 rounded-full bg-neutral-100 
      border-2 border-neutral-200 focus:border-neutral-800 focus:ring-4 focus:ring-neutral-800 outline-none lg:text-xl" 
      />
     </form>


     <div>
      {meals.map((meal) => (
        <article>
      <h2  className=" flex-wrap flex items-center gap-4 text-3xl lg:text-4xl text-neutral-800  font-bold mb-12">
       {meal.strMeal}
        <span className=" bg-neutral-200 font-normal text-sm px-2 rounded-full">
          {meal.strCategory}
          </span>
        
       <span className=" bg-neutral-200 font-normal text-sm px-2 rounded-full">
        {meal.strArea}
        </span></h2> 
      <img 
      src={meal.strMealThumb}
      alt={meal.strMeal}
      />

      <h3  className="text-2xl text-neutral-800  font-bold my-8">Ingredients</h3>

      <ul className="list-decimal pl-4">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
      <h3 className="text-2xl text-neutral-800  font-bold my-8">Instructions</h3>
      <p>
       {meal.strInstructions}



      </p>
        <ul className="flex items-center justifty-start flex-wrap mt-8">
          <li className=" bg-neutral-200 font-normal text-base px-2 rounded-full">
            <a href={meal.strYoutube} target="_blank" rel="noreferrer">Video</a>
            </li>
          <li className=" bg-neutral-200 font-normal text-base px-2 rounded-full">
            <a href={meal.strSource} target="_blank" rel="noreferrer">Source</a>
          </li>
        </ul>
      </article>
      ))}
     </div>
     </div>
  );
}