const GameList = () => {
  return (
    <div className="col-span-3 grid grid-cols-3">
      <div className="card max-h-96 w-64 bg-base-100 shadow-xl">
        <figure className="max-h-64">
          <img
            src="https://media.rawg.io/media/screenshots/bf8/bf87ef7d08a80006f0f65df6d30174e6.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Shoes!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameList;
