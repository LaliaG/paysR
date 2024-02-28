import { useState, useEffect } from 'react';
import axios from 'axios';
 import {Link} from "react-router-dom"

const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const filteredCountries = countries.filter((country) =>
    country.translations.fra.official.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
   
    <div>
      <h1>Liste des Pays</h1>
      <input
        type="text"
        placeholder="Rechercher un pays..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
      <div className='row ' >
      
            
        {filteredCountries.map((country) => (

              <div className='card card-body col-md-4 mb-4 p-3'  style={{width: "15rem"}}>
            <div className='card-title' key={country.translations.fra.official} >
            <strong>{country.translations.fra.official}</strong> ({country.capital})
            <br />
            <img class="card-img-top" src={country.flags.png} alt={`${country.translations.fra.official} flag`} />
            
           
             <p> Region: {country.region}</p>
             
             <p> Population: {country.population}</p>
             {/* <Link to={`detail/${country.id}`}>Voir les détails</Link> */}
             </div>
            
             </div>
           
            
           
          
        ))}
      </div>
      <Link to={"/search"}>Rechercher un pays</Link>
    </div>
    
   
  );
};

export default CountryList;

