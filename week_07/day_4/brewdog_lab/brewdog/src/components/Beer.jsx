import "./Beer.css";

function Beer({ beer }) {
  return (
    <div className="beer">
      <details>
        <summary>{beer.name}</summary>
        <section className="beer-details">
          <img src={beer.image_url} alt="product" />
          <aside>
            <p>{beer.description}</p>
            <p>{beer.brewers_tips}</p>
          </aside>
        </section>
      </details>
    </div>
  );
}

export default Beer;
