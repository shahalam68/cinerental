import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./SideBar";
import MovieList from "./cine/MovieList";
import { MovieContext } from "./context/index.js";

export default function App() {
  const [cartData, setCartData] = useState([]);
  return (
    <>
      <MovieContext.Provider value={{ cartData, setCartData }}>
        <Header></Header>
        <main>
          <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            <SideBar></SideBar>
            <MovieList></MovieList>
          </div>
        </main>
        <Footer></Footer>
      </MovieContext.Provider>
    </>
  );
}
