/* import "../form/form.scss";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Form() {
  const [name, setName] = useState("");
  const [comments, setComments] = useState("");
  const [fetchedComments, setFetchedComments] = useState([]);
  const { id } = useParams();
  const [count, setCount] = useState(3);

  useEffect(() => {
    const loadComment = async () => {
      try {
        const response = await axios.get(
          `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${id}/comments?api_key=9ac4ae38-daeb-4699-b6f1-20a23867a652`
        );
        console.log(response.data); // Display the comments data
        response.data.sort((a, b) => b.timestamp - a.timestamp);
        setFetchedComments(response.data);
      } catch (error) {
        alert("Error loading comments:", error);
      }
    };
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
    if (comments.length > 200) {
      return false;
    } else return true;
  }

  function isFormValid() {
    if (!name || !comments) {
      return false;
    }
    if (!isCommentValid()) {
      return false;
    } else return true;
  }

  useEffect (() => {
    const postComment = async (newCommentContent) => {
        try {
            const response = await axios.post( `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${id}/comments?api_key=9ac4ae38-daeb-4699-b6f1-20a23867a652`);
            loadComment();
        } catch (error) {
            alert("error posting comment", error);
        }
    };
  });

  function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission
    if (!isFormValid()) {
      alert("Failed to render comment");
    } else {
      alert("Comment rendered successfully");
    }

    const newCommentContent = {
        name: event.target.name.value,
        comment: event.target.comment.value,
    };
    postComment(newCommentContent);
    event.target.reset();
  }



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
              value={comments}
              onChange={handleChangeComment}
            ></textarea>
          </label>
        </div>
        <div className="comment-form__button-container" onClick={increase}>
          <button className="comment-form__button" type="submit">
            Submit
          </button>
        </div>
      </form>

      <section className="comments">
        <h3 className="comments__title">{count} Comments</h3>
        {fetchedComments.length > 0 ? (
          <ul className="comments__list">
            {fetchedComments.map((comment) => (
              <li key={comment.id} className="comments__item">
                <div className="comments__meta">
                  <p className="comments__author">{comment.name}</p>
                  <p className="comments__date">
                    {new Date(comment.timestamp).toLocaleDateString()}
                  </p>
                </div>
                <p className="comments__text">{comment.comment}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="comments__empty">
            No comments yet. Be the first to comment!
          </p>
        )}
      </section>
    </>
  );
}

export default Form; */


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
        `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${id}/comments?api_key=9ac4ae38-daeb-4699-b6f1-20a23867a652`
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
        `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${id}/comments?api_key=9ac4ae38-daeb-4699-b6f1-20a23867a652`,
        newCommentContent
      );
      loadComment(); // Reload comments after successful post
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
              value={comments}
              onChange={handleChangeComment}
            ></textarea>
          </label>
        </div>
        <div className="comment-form__button-container" onClick={increase}>
          <button className="comment-form__button" type="submit">
            Submit
          </button>
        </div>
      </form>

      <section className="comments">
        <h3 className="comments__title">{fetchedComments.length} Comments</h3>
        {fetchedComments.length > 0 ? (
          <ul className="comments__list">
            {fetchedComments.map((comment) => (
              <li key={comment.id} className="comments__item">
                <div className="comments__meta">
                  <p className="comments__author">{comment.name}</p>
                  <p className="comments__date">
                    {new Date(comment.timestamp).toLocaleDateString()}
                  </p>
                </div>
                <p className="comments__text">{comment.comment}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="comments__empty">
            No comments yet. Be the first to comment!
          </p>
        )}
      </section>
    </>
  );
}

export default Form;
