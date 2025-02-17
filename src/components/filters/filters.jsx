import "../filters/filters.scss";
import Data from "../../Data/tags.json";
import React, { useState } from "react";

function Filter({handleFilteredPlace}) {
  const [isMousedOver, setMouseOver] = useState(false);

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <>
      <section className="filter">
        <h3 className="filter__header">Filters</h3>
        <div className="filter__list">
          {Data.map((item, index) => {
            return (
              <p 
              className="filter__item"
              key={index}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              onClick={() => handleFilteredPlace(item)}
              >
                {item}
              </p>
            );
          })}
        </div>
      </section>
    </>
  );
}
export default Filter;
