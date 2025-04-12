import "../homePage/homePage.scss";
import Header from "../../components/header/header";
import Filter from "../../components/filters/filters";
import Body from "../../components/body/body";
import Card from "../../components/cards/card";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import loadingAnimation from "../../assets/Icons/MainScene.json";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

function HomePage() {
  const [selectedPlace, setSelectedPlace] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  function clickFilter() {
    setShowFilter((prev) => !prev);
  }

  function handleFilteredPlace(item) {
    setSelectedPlace(selectedPlace === item ? "" : item);
  }

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(
          `${backendUrl}/photos`
        );
        console.log(response.data);
        setPhotos(response.data);
      } catch (error) {
        alert("Error fetching photos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPhotos();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <Lottie animationData={loadingAnimation} loop={true} style={{ width: 200 }} />
        <p className="mt-4 text-lg font-medium text-gray-600">Fetching your snaps...</p>
      </div>
    );
  }

  const filteredCards = selectedPlace
    ? photos.filter((item) => item.tags.includes(selectedPlace))
    : photos;

  return (
    <>
      <article>
        <Header clickFilter={clickFilter} showFilter={showFilter} />
      </article>
      <section className="app__main">
        {showFilter && (
          <section className="app__filter">
            <Filter
              handleFilteredPlace={handleFilteredPlace}
              selectedPlace={selectedPlace}
            />
          </section>
        )}
        <section className="app__content">
          <Body />
          <section className="card__container">
            {filteredCards?.map((item) => (
              <Link
                to={`/photos/${item.id}`}
                key={item.id}
                className="card__link"
              >
                <Card
                  photo={backendUrl+item.photo}
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
