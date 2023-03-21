import React, { useState, useEffect } from "react";
import { deleteSighting, putSighting } from "./SightingService";

const SightingCard = ({ sighting, removeSighting, editSighting }) => {
  const [edit, setEdit] = useState(false);
  const [updatedSighting, setUpdatedSighting] = useState(sighting);
  console.log(editSighting);
  const handleDelete = () => {
    deleteSighting(sighting._id).then(() => {
      removeSighting(sighting._id);
    });
  };

  const handleUpdate = () => {
    setEdit(!edit);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    const sighting2 = updatedSighting;
    sighting2[e.target.id] = e.target.value;
    setUpdatedSighting(sighting2);
    console.log("change", updatedSighting);
  };

  useEffect(() => {}, [updatedSighting]);

  return (
    <>
      {edit ? (
        <form onSubmit={onSubmit} id="sightings-form">
          <label htmlFor="species">Species:</label>
          <input
            type="text"
            id="species"
            name="species"
            value={updatedSighting.species}
            onChange={onChange}
          />
        </form>
      ) : (
        <h1>{sighting.species}</h1>
      )}
      {edit ? (
        <form onSubmit={onSubmit} id="sightings-form">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            value={updatedSighting.location}
            onChange={onChange}
          />
        </form>
      ) : (
        <p>Location: {updatedSighting.location}</p>
      )}

      {edit ? (
        <form onSubmit={onSubmit} id="sightings-form">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={updatedSighting.date}
            onChange={onChange}
          />
        </form>
      ) : (
        <p>Date: {sighting.date}</p>
      )}

      <button onClick={handleUpdate}> ✏️ </button>
      <button onClick={handleDelete}> 🗑 </button>
      <hr></hr>
    </>
  );
};

export default SightingCard;
