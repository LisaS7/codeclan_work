import React, { useState } from "react";
import { deleteSighting, putSighting } from "./SightingService";
import SightingsEditForm from "./SightingsEditForm";

const SightingCard = ({ sighting, removeSighting, editSighting }) => {
  const [edit, setEdit] = useState(false);
  console.log(sighting);
  const handleDelete = () => {
    deleteSighting(sighting._id).then(() => {
      removeSighting(sighting._id);
    });
  };

  const handleUpdate = () => {
    setEdit(!edit);
    putSighting(sighting._id).then(() => {
      editSighting(sighting._id);
    });
  };

  return (
    <>
      <h1>{sighting.species}</h1>
      <p>Location: {sighting.location}</p>
      <p>Date: {sighting.date}</p>
      <button onClick={handleUpdate}> ✏️ </button>
      <button onClick={handleDelete}> 🗑 </button>
      {edit && <SightingsEditForm sighting={sighting} />}
      <hr></hr>
    </>
  );
};

export default SightingCard;
