import { Suspense } from "react";
import "./App.css";
import Users from "./users";
import Todos from "./todos";

// import Cart from './cart';
// import Counter from "./counter";
// import Better from "./better";

const userDataPromise = async () =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return data;
}

function App() {
  // const handleClick = () => {
  //   alert("clickme3");
  // };
  // const handleAddToCart = (id:number) => {
  //   alert('buying item '+ id);
  // }

  return (
    <>
    <Todos></Todos>

    <Suspense fallback={<p>Loading...</p>}>
      <Users userDataPromise={userDataPromise()}></Users>
    </Suspense>

      {/* <Counter></Counter> */}
      {/* <Better></Better> */}

      {/* <Cart></Cart> */}
      {/* <button onClick="handleClick()">Click Me</button>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick}>Click me 2</button>
      <button onClick={() => alert("click me")}>Click me 3</button>

      <button onClick={() => handleAddToCart(65)}>Buy this</button> */}
    </>
  );
}

export default App;
