import "../form/form.scss";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Form() {
  const [name, setName] = useState("");
  const [comments, setComments] = useState("");
  const [fetchedComments, setFetchedComments] = useState([]);
  const { id } = useParams();
  const [count, setCount] = useState(3);

  // Load comments from API
  const loadComment = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/photos/${id}/comments`
      );
      const sortedComments = response.data.sort((a, b) => b.timestamp - a.timestamp);
      setFetchedComments(sortedComments);
    } catch (error) {
      alert("Error loading comments:", error);
    }
  };

  useEffect(() => {
    loadComment();
  }, [id]);

  function increase() {
    setCount(count + 1);
  }

  function handleChangeName(event) {
    setName(event.target.value);
  }

  function handleChangeComment(event) {
    setComments(event.target.value);
  }

  function isCommentValid() {
    return comments.length <= 200;
  }

  function isFormValid() {
    return name && comments && isCommentValid();
  }

  // Post new comment
  const postComment = async (newCommentContent) => {
    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/photos/${id}/comments`,
        newCommentContent
      );
      loadComment(); 
    } catch (error) {
      alert("Error posting comment:", error);
    }
  };

  function handleSubmit(event) {
    event.preventDefault();

    if (!isFormValid()) {
      alert("Failed to render comment");
      return;
    }

    const newCommentContent = {
      name: name,
      comment: comments,
    };

    postComment(newCommentContent);
    setName("");
    setComments("");
  }

  return (
    <>
      <form className="comment-form" onSubmit={handleSubmit}>
  <article className="comment-form__group">
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
  </article>
  <article className="comment-form__group">
    <label className="comment-form__label">
      Comment
      <textarea
        className="comment-form__textarea"
        name="comment"
        value={comments}
        onChange={handleChangeComment}
      ></textarea>
    </label>
  </article>
  <article className="comment-form__button-container" onClick={increase}>
    <button className="comment-form__button" type="submit">
      Submit
    </button>
  </article>
</form>

<section className="comments">
  <h3 className="comments__title">{fetchedComments.length} Comments</h3>
  {fetchedComments.length > 0 ? (
    <ul className="comments__list">
      {fetchedComments.map((comment) => (
        <li key={comment.id} className="comments__item">
          <article className="comments__meta">
            <p className="comments__author">{comment.name}</p>
            <p className="comments__date">
              {new Date(comment.timestamp).toLocaleDateString()}
            </p>
          </article>
          <p className="comments__text">{comment.comment}</p>
        </li>
      ))}
    </ul>
  ) : (
    <p className="comments__empty">No comments yet. Be the first to comment!</p>
  )}
</section>
    </>
  );
}

export default Form;



