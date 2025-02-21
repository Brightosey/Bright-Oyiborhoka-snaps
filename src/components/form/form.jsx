import "../form/form.scss";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Form() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  function handleChangeName(event) {
    setName(event.target.value);
  }

  function handleChangeComment(event) {
    setComment(event.target.value);
  }

  function isCommentValid() {
    if (comment.length > 200) {
      return false;
    } else return true;
  }

  function isFormValid() {
    if (!name || !comment) {
      return false;
    }
    if (!isCommentValid()) {
      return false;
    } else return true;
  }

  function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission
    if (!isFormValid()) {
      alert("Failed to render comment");
    } else {
      alert("Comment rendered successfully");
    }
  }

  const loadComment = async () => {
    const { id } = useParams();
    try {
      const response = await axios.get(
        `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${id}/comments?api_key=9ac4ae38-daeb-4699-b6f1-20a23867a652`
      );
      console.log(response.data); // Display the comments data
    } catch (error) {
      alert("Error loading comments:", error);
    }
  };

  return (
    <>
      <form className="comment-form" onSubmit={handleSubmit}>
        <div className="comment-form__group">
          <label className="comment-form__label">
            Name
            <input
              className="comment-form__input"
              type="text"
              name="name"
              value={name}
              onChange={handleChangeName}
            />
          </label>
        </div>
        <div className="comment-form__group">
          <label className="comment-form__label">
            Comment
            <textarea
              className="comment-form__textarea"
              name="comment"
              value={comment}
              onChange={handleChangeComment}
            ></textarea>
          </label>
        </div>
        <button className="comment-form__button" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default Form;
