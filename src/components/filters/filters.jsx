import "../filters/filters.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Filter({ handleFilteredPlace, selectedPlace }) {
  const [tags, setTags] = useState([]);
  const [isMousedOver, setMouseOver] = useState(false);

  useEffect(() => {
    const loadTags = async () => {
      try {
        const response = await axios.get(
         `${import.meta.env.VITE_BACKEND_URL}/tags`
        );
        setTags(response.data);
      } catch (error) {
        alert("Error fetching tags:", error);
      }
    };
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
        <article className="filter__list">
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
        </article>
      </section>
    </>
  );
}

export default Filter;
