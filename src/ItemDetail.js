import React, {useState, useEffect} from 'react';
import './App.css';

function ItemDetail({ match }) {

  useEffect(() => {
    fetchItem();
    console.log(match);
  }, []);

  const [item, setItem] = useState({});

  const fetchItem = async () => {
      const fetchItem = await fetch(
          `https://restcountries.eu/rest/v2/alpha/${match.params.id}`
      );
      const item = await fetchItem.json();
      setItem(item);
      console.log(item);
  };

  return (
    <div>
      <h1>{item.name}</h1>
      <img className='flag' src={item.flag} />
      <p><b>Capital:</b> {item.capital}</p>
    </div>
  );
}

export default ItemDetail;