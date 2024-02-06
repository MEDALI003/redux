import React from 'react';
import Cards from "./Card"; 
import { useSelector } from 'react-redux';

const CardList = () => {
  const movies = useSelector(state => state.movies);
  return (
    <div style={{display:'flex',flexWrap:'wrap',justifyContent:"space-around"}} >
      {movies.map(el =><div style={{margin:"20px"}}> <Cards  el={el}   /></div>)}
    </div>
  );
};

export default CardList;
