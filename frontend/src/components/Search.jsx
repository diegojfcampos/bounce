"use client";
import React, { useState } from "react";
import CountryMap from "@components/Map";
import CountryCard from "@components/Card";
import { useMediaQuery } from "react-responsive";

const Search = () => {

  const [status, setStatus] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [searchedResult, setSearchedResult] = useState(null);
  const [mapData, setMapData] = useState({ latitude: 0, longitude: 0 });
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const fetchCountry = async () => {
    try {
      const trimmedSearchText = searchText.trim();
      const response = await fetch(
        `http://54.246.46.142:3002/api/country/get/${trimmedSearchText}`
      );

      if (!response.ok) {
        throw new Error(`Country not found (${response.status})`);
      }

      const data = await response.json();
      setSearchedResult(data);
      setStatus(true);
      setMapData({ latitude: data.latitude, longitude: data.longitude });
      
    } catch (error) {
      console.error("Error fetching search result:", error.message);
      setSearchedResult(null);
      setStatus(false);
      setMapData({ latitude: 0, longitude: 0 });
    }
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      fetchCountry();
      setSearchText("");
    }
  };

  return (
    <section className="feed">
      <form
        className="relative w-full  shadow-md flex-center"
        onSubmit={(e) => {
          e.preventDefault();
          fetchCountry();
          setSearchText("");
        }}
      >
        <input
          type="text"
          placeholder="Search for a Country"
          value={searchText}
          onChange={handleSearchChange}
          onKeyDown={handleKeyDown}
          required
          className="search_input peer"
          data-test="country-input"
        />
      </form>
      {/*Mobile Navigation*/}
      {isMobile && searchedResult? (
          <div data-test="backend-results" className="flex gap-3 bg-gray-100 rounded-md flex-wrap align-middle justify-center ">
          <div>
            <CountryCard countryData={searchedResult} />
          </div>
          <div className="mt-3 mb-4 mr-4 ">
            <CountryMap
              latitude={mapData.latitude}
              longitude={mapData.longitude}
            />
          </div>
        </div>
        
      ) :(
        // Desktop Navigation
        status === true && searchedResult ? (
          <div className="flex gap-3 bg-gray-100 rounded-md ">
            <div>
              <CountryCard countryData={searchedResult} />
            </div>
            <div className="mt-3 mb-4 mr-4 ">
              <CountryMap
                latitude={mapData.latitude}
                longitude={mapData.longitude}
              />
            </div>
          </div>
        ) : (
         <></>
        )
        )}
    </section>
  );
};

export default Search;
