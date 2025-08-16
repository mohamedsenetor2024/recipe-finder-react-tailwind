export default function App() {
  return (
  <div className="py-20 px-2 max-w-4xl mx-auto">
     <h1 className="text-4xl lg:text-5xl text-neutral-800 bg-neutral-200 rounded-lg font-bold text-center">Recipe Finder</h1>
     <form className="my-16">
      <input type="text" 
      name="search" 
      id="search" 
      placeholder='search for a Food' 
      required className="w-full py-3 px-8 rounded-full bg-neutral-100 
      border-2 border-neutral-200 focus:border-neutral-800 focus:ring-4 focus:ring-neutral-800 outline-none lg:text-xl" />
     </form>
     <div>
      <article>
      <h2  className=" flex-wrap flex items-center gap-4 text-3xl lg:text-4xl text-neutral-800  font-bold mb-12">Name of the food 
        <span className=" bg-neutral-200 font-normal text-sm px-2 rounded-full">Category</span>
       <span className=" bg-neutral-200 font-normal text-sm px-2 rounded-full">Region</span></h2> 
      <img src="https://media.istockphoto.com/id/482964545/photo/arrabiata-pasta.jpg?s=2048x2048&w=is&k=20&c=Ctd1wV5sxw-XutMuutwZzP10uHzi0vXwISnYVNQwEUU=" alt="Arrabbiata" />

      <h3  className="text-2xl text-neutral-800  font-bold my-8">Ingredients</h3>

      <ul className="list-decimal pl-4">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
      <h3 className="text-2xl text-neutral-800  font-bold my-8">Instructions</h3>
      <p>Cook the pasta

Bring a large pot of salted water to boil.

Add penne pasta and cook until al dente (about 9–11 minutes).

Drain, but keep a little pasta water aside.

Make the sauce

Heat olive oil in a large pan over medium heat.

Add sliced garlic and chopped chili peppers. Sauté for 1–2 minutes until fragrant (don’t let garlic burn).

Add chopped tomatoes, season with salt, and let it simmer for 10–15 minutes, stirring occasionally.

Combine pasta and sauce

Add the drained pasta to the sauce.

Toss well so the pasta is coated (add a splash of pasta water if sauce is too thick).

Serve

Garnish with fresh parsley.

Add grated Parmesan cheese if desired.

Serve hot and enjoy!</p>
        <ul className="flex items-center justifty-start flex-wrap mt-8">
          <li className=" bg-neutral-200 font-normal text-base px-2 rounded-full">Video</li>
          <li className=" bg-neutral-200 font-normal text-base px-2 rounded-full">Source</li>
        </ul>
      </article>
     </div>
     </div>
  );
}