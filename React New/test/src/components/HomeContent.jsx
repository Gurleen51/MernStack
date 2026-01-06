const HomeContent = ({ carsData }) => {
  console.log(carsData);
  return (
    <main className="content">
      <div className="card-container">
        {carsData.map((item) => {
          return (
            <div key={item.id} className="card">
              <div className="img">
                <img src={item.image} alt="images" />
              </div>
              <div className="info">
                <h1>{item.name}</h1>
                <h2>Price: {item.priceRange}</h2>
                <h3>Mileage: {item.mileage}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};
export default HomeContent;