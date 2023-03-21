import SightingCard from "./SightingCard";
const SightingsGrid = ({ sightings, removeSighting, editSighting }) => {
  const sightingsList = sightings.map((sighting) => {
    return (
      <SightingCard
        sighting={sighting}
        key={sighting._id}
        removeSighting={removeSighting}
        editSighting={editSighting}
      />
    );
  });

  return <>{sightingsList}</>;
};

export default SightingsGrid;
