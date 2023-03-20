import axios from "axios";
import React, { useState } from "react";
import "./style.css";

function CreateNote(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const inputChange = (e) => {
    const { name, value } = e.target;
    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const addEvent = (e) => {
    e.preventDefault();
    console.log(note.content);
    axios
      .post("http://localhost:3001/api/insert", {
        title: note.title,
        content: note.content,
      })
      .then((res) => {
        setNote({
          title: "",
          content: "",
        });
      })
      .catch((err) => console.log(err))
      .catch((err) => {
        console.error(err);
        alert("Error adding note");
      });
    props.setrefresh(props.refresh + 1);
  };

  return (
    <div className="createNotes-container">
      <form onSubmit={addEvent}>
        <input
          type="text"
          name="title"
          value={note.title}
          onChange={inputChange}
          placeholder="Title"
          autoComplete="off"
          className="inputarea"
          style={{ backgroundColor: "#E6DED3", width: "300px", border: "none" }}
        />
        <div>
          <textarea
            rows="5"
            name="content"
            value={note.content}
            onChange={inputChange}
            cols="5"
            placeholder="Take a note..."
            className="textarea"
            style={{
              backgroundColor: "#E6DED3",
              width: "300px",
              height: "100px",
              border: "none",
            }}
          />
          <button
            disabled={!note.title || !note.content}
            type="submit"
            className="button-style"
          >
            +
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateNote;
