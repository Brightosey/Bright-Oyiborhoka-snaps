import "../filters/filters.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Filter({ handleFilteredPlace, selectedPlace }) {
  const [tags, setTags] = useState([]); 
  const [isMousedOver, setMouseOver] = useState(false);

  
  const loadTags = async () => {
    try {
      const response = await axios.get(
        "https://unit-3-project-c5faaab51857.herokuapp.com/tags?api_key=9ac4ae38-daeb-4699-b6f1-20a23867a652"
      );
      setTags(response.data); 
    } catch (error) {
      alert("Error fetching tags:", error);
    }
  };

  useEffect(() => {
    loadTags();
  }, []);

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
          {tags.map((item, index) => {
            return (
              <p
                className={`filter__item  ${
                  selectedPlace === item ? "filter__item--active" : ""
                }`}
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
