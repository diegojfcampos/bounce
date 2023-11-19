
const Card = ({ countryData }) => {
  return (
    <section className="flex flex-col gap-4 ml-3 mr-3">
        
        <div className="gap-3">
            <img        
            src={countryData.flags}
            alt="flag"
            width={350}
            height={350}
            className="rounded-md mt-3 mb-4 mr-4 ml-1 shadow-md"
            />    
        </div>
        <div className="text-lg gap-1 shadow-md bg-gray-200  rounded-md ml-3">        
            <p><strong>Name: </strong>{countryData.name}</p>
            <p><strong>Continent: </strong>{countryData.continents}</p>
            <p><strong>Region Name: </strong>{countryData.region}</p>
            <p><strong>Capital: </strong>{countryData.capital}</p>
            <p><strong>Area: </strong>{countryData.area.toLocaleString()} km2</p>
            <p><strong>Population: </strong>{countryData.population.toLocaleString()} </p>
        </div>
    </section>
  );
};

export default Card;
