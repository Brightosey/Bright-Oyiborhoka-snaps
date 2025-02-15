import "../filters/filters.scss";
import Data from "../../Data/tags.json";
import react, { useState } from "react";

function Filter() {
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
