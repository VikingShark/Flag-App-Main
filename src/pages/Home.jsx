import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Home.css";
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

import SearchBar from "../components/SearchBar";
import DropDown from "../components/DropDown";
import CountryCard from "../components/CountryCard";

const HomePage = () => {
  const countries = useLoaderData();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (countries.length > 0) {
      setLoading(false);
    }
  }, [countries])

  useEffect(() => {
    navigate("/", { replace: true });
  }, []);

  if(loading) {
    return (
      <div className="home-container">
        <SearchBar /> 
        <DropDown />
        
      {[1, 2, 3, 4, 5].map((e, i) => <CountryCard loading={loading} />)}
      </div>
    );
  }

  return (
    <Box sx={{maxWidth: 1150, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 4}}>
      
        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
          <SearchBar /> 
          <DropDown />
        </Box> 
      
      <Grid container spacing={4}>
            {countries.map((country, i) => (
              <Grid item xs={12} md={4} lg={3} sx={{maxWidth: {xs: 400}}}>
                <CountryCard
                  key={i}
                  countryName={country.name.common}
                  countryLink={`country/${country.cca2}`}  
                  countryFlag={country.flags.png}
                  countryPopulation={country.population}
                  countryRegion={country.region}
                  countryCapital={country.capital}
                  loading={loading}
                />
              </Grid>
              ))}
      </Grid>
    </Box>
  );
};

export const getCountriesByQueryStringLoader = async ({ request }) => {
  const url = new URL(request.url);
  const searchParams = new URLSearchParams(url.search);

  const searchQuery = searchParams.get("search");
  const regionQuery = searchParams.get("region");

  let apiUrl = "https://restcountries.com/v3.1/all";
  if (searchQuery) {
    apiUrl = `https://restcountries.com/v3.1/name/${searchQuery}`;
  } else if (regionQuery) {
    apiUrl = `https://restcountries.com/v3.1/region/${regionQuery}`;
  }

  const res = await fetch(apiUrl);
  if (!res.ok) {
    throw Error("Det gick inte att hämta länderna");
  }
  const data = await res.json();
  
  const sortedData = data.sort((a, b) => {
    if (a.name.common < b.name.common) return -1;
    if (a.name.common > b.name.common) return 1;
    return 0;
  });
  return sortedData;
};

export default HomePage;
