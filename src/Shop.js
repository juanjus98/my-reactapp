import React, {useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Shop() {

  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      'https://restcountries.eu/rest/v2/all'
    );
    const items = await data.json();
    console.log(items);
    setItems(items);
  };

  return (
    <div>
      <h1>Shop Page</h1>
      {items.map(item =>(
        <Link to={`/shop/${item.alpha2Code}`}>
        <h3 key={item.alpha2Code}>{item.name}</h3>
        </Link>
      ))}
    </div>
  );
}

export default Shop;
