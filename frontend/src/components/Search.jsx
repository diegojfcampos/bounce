"use client";
import { useEffect, useState } from "react";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  const fetchPosts = async () => {
    try {
      console.log("Search Text: " + searchText);
      const response = await fetch(`http://localhost:3001/api/country/get/${searchText}`);
      
      if (!response.ok) {
        throw new Error(`Country not found (${response.status})`);
      }

      const data = await response.json();
      console.log("Data: ", data);
      setSearchedResults(data);
    } catch (error) {
      console.error('Error fetching search results:', error.message);
      setSearchedResults([]);
    }
  };


  const handleSearchChange = (e) => {
    const value = e.target.value;
    console.log("Event Target Value:", value);
    setSearchText(value);

    clearTimeout(handleSearchSubmit);
    setSearchTimeout(
      setTimeout(() => {
        fetchPosts();
      }, 100)
    );
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();    
    fetchPosts();
    setSearchText("");
  };

  return (
    <section className='feed'>
      <form
        className='relative w-full flex-center'
        onSubmit={handleSearchSubmit} 
      >
        <input
          type='text'
          placeholder='Search for a Country'
          value={searchText}
          onChange={handleSearchChange}
          required
          className='search_input peer'
        />
      </form>
    </section>
  );
};

export default Search;
