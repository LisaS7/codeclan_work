import React, { useState } from "react";
import { deleteSighting, putSighting } from "./SightingService";

const SightingCard = ({ sighting, removeSighting, editSighting }) => {
  const [edit, setEdit] = useState(false);
  const [species, setSpecies] = useState(sighting.species);
  const [location, setLocation] = useState(sighting.location);
  console.log(sighting);
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
    sighting[e.target.id] = 0;
    console.log("change", e.target.value);
  };

  return (
    <>
      {edit ? (
        <form onSubmit={onSubmit} id="sightings-form">
          <label htmlFor="species">Species:</label>
          <input
            type="text"
            id="species"
            name="species"
            value={sighting.species}
            onChange={onChange}
          />
        </form>
      ) : (
        <h1>{sighting.species}</h1>
      )}
      {edit ? (
        <form onSubmit={onSubmit} id="sightings-form">
          <label htmlFor="location">Location:</label>
          <input type="text" value={sighting.location} onChange={onChange} />
        </form>
      ) : (
        <p>Location: {sighting.location}</p>
      )}

      {edit ? (
        <form onSubmit={onSubmit} id="sightings-form">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={sighting.date}
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
