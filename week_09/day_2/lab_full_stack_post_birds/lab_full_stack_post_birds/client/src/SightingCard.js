// lab not great
// server ok but couldn't do client
// made some progress thanks to ross

import React, { useState, useEffect } from "react";
import { deleteSighting, putSighting } from "./SightingService";

const SightingCard = ({ sighting, removeSighting, editSighting }) => {
  const [edit, setEdit] = useState(false);
  const [updatedSighting, setUpdatedSighting] = useState(sighting);
  const [species, setSpecies] = useState(sighting.species);
  const [location, setLocation] = useState(sighting.location);
  const [date, setDate] = useState(sighting.date);

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
    const updatedSighting = {
      species,
      location,
      date,
    };
    editSighting(updatedSighting, sighting._id);
    setEdit(!edit);
  };

  const onChange = (e) => {
    switch (e.target.id) {
      case "species":
        setSpecies(e.target.value);
      case "location":
        setLocation(e.target.value);
      case "date":
        setDate(e.target.value);
    }
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
            value={species}
            onChange={onChange}
          />
          <label htmlFor="location">Location:</label>
          <input type="text" value={location} onChange={onChange} />
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={date}
            onChange={onChange}
          />
          <button>Save</button>
        </form>
      ) : (
        <>
          <h1>{sighting.species}</h1>
          <p>Location: {sighting.location}</p>
          <p>Date: {sighting.date}</p>
        </>
      )}
      <button onClick={handleUpdate}> ✏️ </button>
      <button onClick={handleDelete}> 🗑 </button>
      <hr></hr>
    </>
  );
};

export default SightingCard;
