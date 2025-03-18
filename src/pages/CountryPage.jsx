import { useLoaderData, Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Button, List, ListItem, Typography } from "@mui/material";

const CountryPage = () => {
  const response = useLoaderData();
  const [country] = response;

  //Unique native name
  const firstNativeNameCommon = country.name.nativeName
    ? country.name.nativeName[Object.keys(country.name.nativeName || {})[0]]
        ?.common
    : "Not available";

  //  Unique currency name
  const firstNativeCurrencyCommon = country.currencies
    ? country.currencies[Object.keys(country.currencies || {})[0]]?.name
    : "Not available";

  // Unique language

  const firstNativeLanguage = country.languages
    ? country.languages[Object.keys(country.languages)[0]]
    : "Not available";

  console.log(country);

  return (
    <Box
      p={0}
      m={0}
      sx={{
        maxWidth: 1150,
        height: "75vh",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 10,
      }}
    >
      <Link style={{ textDecoration: "none" }} to="/">
        <Button
          sx={{
            color: "darkmode.primary.white",
            backgroundColor: "transparent",
            "&:hover": {
              backgroundColor: "#F2F2F220",
            },
          }}
          variant="text"
        >
          {<ArrowBackIcon sx={{ fontSize: "20px", mr: 1 }} />}
          Back
        </Button>
      </Link>
      <Box
        sx={{
          display: "flex",
          gap: 10,
          width: "100%",
          height: 500,
        }}
      >
        <img
          style={{
            width: "48%",
            height: "auto",
            objectFit: "contain",
            alignSelf: "flex-start",
            borderRadius: "10px",
          }}
          className="country-flag"
          src={country.flags.svg}
          alt=""
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "48%",
            textAlign: "left",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              whiteSpace: 'nowrap',
            }}
          >
            {country?.name?.common || "Not available"}
          </Typography>
          <Box sx={{ display: "flex", gap: 15 }}>
            <Box sx={{display: "flex", flexDirection: "column", gap: 1}}>
              <Typography>
                <strong>Population:</strong> {country.population}
              </Typography>
              <Typography>
                <strong>Region:</strong> {country?.region || "Not available"}
              </Typography>
              <Typography>
                <strong>Capital:</strong> {country?.capital || "Not available"}
              </Typography>
              <Typography>
                <strong>Native Name:</strong> {firstNativeNameCommon}
              </Typography>
            </Box>
            <Box sx={{display: "flex", flexDirection: "column", gap: 1}}>
              <Typography>
                <strong>Top Level Domain:</strong> {country.tld}
              </Typography>
              <Typography>
                <strong>Currencies:</strong> {firstNativeCurrencyCommon}
              </Typography>
              <Typography>
                <strong>Language:</strong> {firstNativeLanguage}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              maxWidth: "95%",
              display: "flex",
              alignItems: "center",
              gap: 2,
              marginTop: 7,
            }}
          >
            <Typography fontWeight="bold">Border Countries: </Typography>
            <List
              sx={{
                display: "flex",
                gap: 1, // Mellanrum mellan länkarna
                overflowX: "auto", // Horisontell scroll om det behövs
                whiteSpace: "nowrap", // Förhindrar radbrytning
                paddingY: 1,
              }}
            >
              {country.borders && country.borders.length > 0 ? (
                country.borders.map((borderCountry, i) => (
                  <Link to={`/country/${borderCountry}`} key={i}>
                    <ListItem
                      key={i}
                      sx={{
                        textDecoration: "none",
                        backgroundColor: "primary.main",
                        padding: "6px 12px",
                        borderRadius: "25px",
                        color: "primary.white",
                        fontSize: "14px",
                        display: "inline-block",
                        transition: "0.3s",
                        "&:hover": {
                          backgroundColor: "primary.hover",
                        },
                      }}
                    >
                      {borderCountry}
                    </ListItem>
                  </Link>
                ))
              ) : (
                <Typography>This Country Has No Border Countries</Typography>
              )}
            </List>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export const CountryPageLoader = async ({ params }) => {
  const { CountryCode } = params;
  const res = await fetch(
    `https://restcountries.com/v3.1/alpha/${CountryCode}`
  );
  if (!res.ok) {
    throw Error(`Det gick inte att hämta landet med namn: ${CountryCode}`);
  }
  return res.json();
};

export default CountryPage;
