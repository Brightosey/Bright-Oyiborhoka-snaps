import "../homePage/homepage.scss";
import Header from "../../components/header/header";
import Filter from "../../components/filters/filters";
import Body from "../../components/body/body";
import Card from "../../components/cards/card";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Import Link for navigation

function HomePage() {
  const [selectedPlace, setSelectedPlace] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [photos, setPhotos] = useState([]); // State to store the fetched photos

  function clickFilter() {
    setShowFilter((prev) => !prev);
  }

  function handleFilteredPlace(item) {
    setSelectedPlace(item);
    if (selectedPlace === item) {
        handleFilteredPlace("");  // Clear selected filter
      } else {
        handleFilteredPlace(item);  // Set the selected filter
      }
  }

  // Fetch data from the API when the component mounts
  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(
          "https://unit-3-project-c5faaab51857.herokuapp.com/photos?api_key=9ac4ae38-daeb-4699-b6f1-20a23867a652"
        );
        setPhotos(response.data); // Store the fetched photos in the state
      } catch (error) {
        alert("Error fetching photos:", error);
      }
    };

    fetchPhotos();
  }, []);

  const filteredCards = selectedPlace
    ? photos.filter((item) => item.tags.includes(selectedPlace))
    : photos;

  return (
    <>
      <div>
        <Header clickFilter={clickFilter} showFilter={showFilter} />
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
            {filteredCards.map((item) => (
              <Link to={`/photos/${item.id}`} key={item.id} className="card__link"> {/* Link each card to PhotosPage */}
                <Card
                  photo={item.photo}
                  photographer={item.photographer}
                  tags={item.tags}
                />
              </Link>
            ))}
          </section>
        </section>
      </section>
    </>
  );
}

export default HomePage;

