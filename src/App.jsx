import Header from "./components/header/header";
import Filter from "./components/filters/filters";
import Footer from "./components/footer/footer";
import Body from "./components/body/body";
import Card from "./components/cards/card";
import Data from "./Data/photos.json";
import "./App.scss";
import React, { useState } from "react";


function App() {
  const [showFilter, setShowFilter] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState("");

  function clickFilter() {
    setShowFilter((prev) => !prev);
  }

  function handleFilteredPlace(item) {
    setSelectedPlace(item);
  }

  const filteredCards = selectedPlace
    ? Data.filter((item) => item.tags.includes(selectedPlace))
    : Data;

  return (
    <>
      <div>
        <Header clickFilter={clickFilter} />
      </div>
      <section className="app__main">
        {showFilter && (
          <section className="app__filter">
            <Filter handleFilteredPlace={handleFilteredPlace} />
          </section>
        )}
        <section className="app__content">
          <Body />
          <section className="card__container">
            {filteredCards.map((item) => {
              return (
                <Card
                  photo={item.photo}
                  photographer={item.photographer}
                  tags={item.tags}
                  key={item.id}
                />
              );
            })}
          </section>
        </section>
      </section>
      <Footer />
    </>
  );
}

export default App;
