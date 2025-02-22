import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Form from "../../components/form/form";
import arrowIcon from "../../assets/Icons/Arrow.svg";
import "../photosPage/photosPage.scss";

function PhotosPage() {
  const { id } = useParams(); // Extract ID from URL
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        const response = await axios.get(
          `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${id}?api_key=9ac4ae38-daeb-4699-b6f1-20a23867a652`
        );
        setPhoto(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching photo details:", error);
        setError("Photo not found. Please check the ID.");
        setLoading(false);
      }
    };

    fetchPhoto();
  }, [id]);

  if (loading) return <p>Loading photo...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="photo-page">
      <section className="photo-page__header">
        <h1 className="photo-page__heading">Snaps</h1>
        <Link to="/" className="photo-page__back-link">
          <svg
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.292892 6.7929C-0.0976315 7.18342 -0.0976314 7.81658 0.292893 8.20711L6.65686 14.5711C7.04738 14.9616 7.68054 14.9616 8.07107 14.5711C8.46159 14.1805 8.46159 13.5474 8.07107 13.1569L2.41421 7.5L8.07107 1.84315C8.46159 1.45262 8.46159 0.819458 8.07107 0.428933C7.68054 0.038409 7.04738 0.038409 6.65685 0.428933L0.292892 6.7929ZM21 6.5L1 6.5L1 8.5L21 8.5L21 6.5Z"
              fill="#1E6655"
            />
          </svg>
          Home
        </Link>
      </section>

      <section className="photo-page__content">
        <div className="photo-page__image-container">
          <img src={photo.photo} alt="image" className="photo-page__image" />
        </div>

        <div className="photo-page__tags">
          {photo.tags && photo.tags.length > 0 ? (
            photo.tags.map((tag, index) => (
              <span key={index} className="photo-page__tag">
                {tag}
              </span>
            ))
          ) : (
            <p>No tags available.</p>
          )}
        </div>
        <div className="photo-page__details">
          <p className="photo-page__likes">
            <svg
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.875 0C9.57 0 8.3175 0.617984 7.5 1.59455C6.6825 0.617984 5.43 0 4.125 0C1.815 0 0 1.84632 0 4.19619C0 7.08011 2.55 9.42997 6.4125 13.0005L7.5 14L8.5875 12.9929C12.45 9.42997 15 7.08011 15 4.19619C15 1.84632 13.185 0 10.875 0ZM7.575 11.8638L7.5 11.9401L7.425 11.8638C3.855 8.57548 1.5 6.40109 1.5 4.19619C1.5 2.6703 2.625 1.52589 4.125 1.52589C5.28 1.52589 6.405 2.2812 6.8025 3.32643H8.205C8.595 2.2812 9.72 1.52589 10.875 1.52589C12.375 1.52589 13.5 2.6703 13.5 4.19619C13.5 6.40109 11.145 8.57548 7.575 11.8638Z"
                fill="#0C1E1A"
              />
            </svg>{" "}
            {photo.likes} Likes
          </p>

          <p className="photo-page__title1">
            Photo by {photo.photographer || "Unknown Photographer"}
          </p>

          <p className="photo-page__timestamp">
            {new Date(photo.timestamp).toLocaleDateString()}
          </p>
        </div>

        <p className="photo-page__title2">
          Photo by {photo.photographer || "Unknown Photographer"}
        </p>
      </section>
      <Form />
    </section>
  );
}

export default PhotosPage;
