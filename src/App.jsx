import Header from "./components/header/header";
import Filter from "./components/filters/filters";
import Footer from "./components/footer/footer";
import Body from "./components/body/body";
import Card from "./components/cards/card";
import Data from "./Data/photos.json";
import "./App.scss";
import React, { useState } from "react";

/* function createCard(item) {
  return (
    <Card
      photo={item.photo}
      photographer={item.photographer}
      tags={item.tags}
      key={item.id}
    />
  );
} */

function App() {
  const [showFilter, setShowFilter] = useState(false);

  function clickFilter() {
    setShowFilter((prev) => !prev);
  }

  return (
    <>
      <div>
        <Header clickFilter={clickFilter} />
      {showFilter && <Filter />}
      </div>
      <section className="app__main">
        {/* <section className="app__filter">
          <Filter />
        </section> */}
        <section className="app__content">
          <Body />
          <section className="card__container">
            {Data.map((item) => (
              <Card
                photo={item.photo}
                photographer={item.photographer}
                tags={item.tags}
                key={item.id}
              />
          ))}
          </section>
        </section>
      </section>
      <Footer />
    </>
  );
}

export default App;
