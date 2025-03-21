import { useLoaderData, Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Box,
  Button,
  List,
  ListItem,
  Skeleton,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

const CountryPage = ({ darkMode }) => {
  const response = useLoaderData();
  const [country] = response;
  const [loading, setLoading] = useState(true);

  const borderCountryArray = [1, 2, 3, 4, 5];

  useEffect(() => {
    if (country) {
      setLoading(false);
    }
  }, []);

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

  if (loading) {
    return (
      <Box
        px={3}
        m={0}
        sx={{
          maxWidth: 1150,
          height: { xs: "100vh", md: "75vh" },
          paddingBottom: { xs: 20, md: 0 },
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
              color: darkMode
                ? "darkmode.primary.white"
                : "lightmode.primary.black",
              backgroundColor: "transparent",
              "&:hover": {
                backgroundColor: darkMode
                  ? "darkmode.primary.hover"
                  : "lightmode.primary.hover",
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
            height: { xs: "100%", md: "60%" },
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Skeleton
            variant="rectangular"
            sx={{
              width: { xs: "100%", md: "48%" },
              height: "80%",
              objectFit: "contain",
              alignSelf: "flex-start",
              borderRadius: "10px",
            }}
          ></Skeleton>
          <Box
            pr={1}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: { xs: "100%", md: "48%" },
              textAlign: "left",
            }}
          >
            <Skeleton variant="text" width={250} height={70}></Skeleton>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: { xs: 1, md: 5 },
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                  <Typography
                    sx={{
                      color: darkMode
                        ? "darkmode.primary.white"
                        : "lightmode.primary.black",
                    }}
                  >
                    <strong>Population:</strong>
                  </Typography>
                  <Skeleton variant="text" width={50} height={20}></Skeleton>
                </Box>
                <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                  <Typography
                    sx={{
                      color: darkMode
                        ? "darkmode.primary.white"
                        : "lightmode.primary.black",
                    }}
                  >
                    <strong>Region:</strong>
                  </Typography>
                  <Skeleton variant="text" width={50} height={20}></Skeleton>
                </Box>
                <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                  <Typography
                    sx={{
                      color: darkMode
                        ? "darkmode.primary.white"
                        : "lightmode.primary.black",
                    }}
                  >
                    <strong>Capital:</strong>
                  </Typography>
                  <Skeleton variant="text" width={50} height={20}></Skeleton>
                </Box>
                <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                  <Typography
                    sx={{
                      color: darkMode
                        ? "darkmode.primary.white"
                        : "lightmode.primary.black",
                    }}
                  >
                    <strong>Native Name:</strong>
                  </Typography>
                  <Skeleton variant="text" width={50} height={20}></Skeleton>
                </Box>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                  <Typography
                    sx={{
                      color: darkMode
                        ? "darkmode.primary.white"
                        : "lightmode.primary.black",
                    }}
                  >
                    <strong>Top Level Domain:</strong>
                  </Typography>
                  <Skeleton variant="text" width={50} height={20}></Skeleton>
                </Box>
                <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                  <Typography
                    sx={{
                      color: darkMode
                        ? "darkmode.primary.white"
                        : "lightmode.primary.black",
                    }}
                  >
                    <strong>Currencies:</strong>
                  </Typography>
                  <Skeleton variant="text" width={50} height={20}></Skeleton>
                </Box>
                <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                  <Typography
                    sx={{
                      color: darkMode
                        ? "darkmode.primary.white"
                        : "lightmode.primary.black",
                    }}
                  >
                    <strong>Language:</strong>
                  </Typography>
                  <Skeleton variant="text" width={50} height={20}></Skeleton>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                maxWidth: "100%",
                display: "flex",
                alignItems: "center",
                gap: 1,
                marginTop: 7,
              }}
            >
              <Typography
                fontWeight="bold"
                sx={{
                  color: darkMode
                    ? "darkmode.primary.white"
                    : "lightmode.primary.black",
                }}
              >
                Border Countries:
              </Typography>
              <List
                sx={{
                  display: "flex",
                  gap: 1,
                  overflowX: "auto",
                  whiteSpace: "nowrap",
                  paddingY: 1,
                }}
              >
                {borderCountryArray.map((borderCountry, i) => (
                  <ListItem
                    key={i}
                    sx={{
                      textDecoration: "none",
                      backgroundColor: darkMode ? "#F2F2F230" : "#00000010",
                      padding: "6px 12px",
                      borderRadius: "25px",
                      color: darkMode
                        ? "darkmode.primary.white"
                        : "lightmode.primary.black",
                      fontSize: "14px",
                      display: "inline-block",
                      transition: "0.3s",
                      "&:hover": {
                        backgroundColor: darkMode ? "#F2F2F245" : "#00000020",
                      },
                    }}
                  >
                    <Skeleton variant="text" width={30} height={20}></Skeleton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }

  return (
    <Box
      px={3}
      m={0}
      sx={{
        maxWidth: 1150,
        height: { xs: "100vh", md: "75vh" },
        paddingBottom: { xs: 20, md: 0 },
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
            color: darkMode
              ? "darkmode.primary.white"
              : "lightmode.primary.black",
            backgroundColor: "transparent",
            "&:hover": {
              backgroundColor: darkMode
                ? "darkmode.primary.hover"
                : "lightmode.primary.hover",
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
          height: { xs: "100%", md: "60%" },
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          component={"img"}
          sx={{
            width: { xs: "100%", md: "48%" },
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
          pr={1}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: { xs: "100%", md: "48%" },
            textAlign: "left",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              whiteSpace: { xs: "normal", md: "nowrap" },
              color: darkMode
                ? "darkmode.primary.white"
                : "lightmode.primary.black",
            }}
          >
            {country?.name?.common || "Not available"}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              gap: { xs: 1, md: 5 },
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography
                sx={{
                  color: darkMode
                    ? "darkmode.primary.white"
                    : "lightmode.primary.black",
                }}
              >
                <strong>Population:</strong> {country.population}
              </Typography>
              <Typography
                sx={{
                  color: darkMode
                    ? "darkmode.primary.white"
                    : "lightmode.primary.black",
                }}
              >
                <strong>Region:</strong> {country?.region || "Not available"}
              </Typography>
              <Typography
                sx={{
                  color: darkMode
                    ? "darkmode.primary.white"
                    : "lightmode.primary.black",
                }}
              >
                <strong>Capital:</strong> {country?.capital || "Not available"}
              </Typography>
              <Typography
                sx={{
                  color: darkMode
                    ? "darkmode.primary.white"
                    : "lightmode.primary.black",
                }}
              >
                <strong>Native Name:</strong> {firstNativeNameCommon}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography
                sx={{
                  color: darkMode
                    ? "darkmode.primary.white"
                    : "lightmode.primary.black",
                }}
              >
                <strong>Top Level Domain:</strong> {country.tld}
              </Typography>
              <Typography
                sx={{
                  color: darkMode
                    ? "darkmode.primary.white"
                    : "lightmode.primary.black",
                }}
              >
                <strong>Currencies:</strong> {firstNativeCurrencyCommon}
              </Typography>
              <Typography
                sx={{
                  color: darkMode
                    ? "darkmode.primary.white"
                    : "lightmode.primary.black",
                }}
              >
                <strong>Language:</strong> {firstNativeLanguage}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              maxWidth: "100%",
              display: "flex",
              alignItems: "center",
              gap: 1,
              marginTop: 6,
            }}
          >
            <Typography
              fontWeight="bold"
              sx={{
                color: darkMode
                  ? "darkmode.primary.white"
                  : "lightmode.primary.black",
              }}
            >
              Border Countries:{" "}
            </Typography>
            <List
              sx={{
                display: "flex",
                gap: 1,
                overflowX: "auto",
                whiteSpace: "nowrap",
                paddingY: 0,
              }}
            >
              {country.borders && country.borders.length > 0 ? (
                country.borders.map((borderCountry, i) => (
                  <Link to={`/country/${borderCountry}`} key={i}>
                    <ListItem
                      key={i}
                      sx={{
                        textDecoration: "none",
                        backgroundColor: darkMode ? "#F2F2F230" : "#00000010",
                        padding: "6px 12px",
                        borderRadius: "25px",
                        color: darkMode
                          ? "darkmode.primary.white"
                          : "lightmode.primary.black",
                        fontSize: "14px",
                        display: "inline-block",
                        transition: "0.3s",
                        "&:hover": {
                          backgroundColor: darkMode ? "#F2F2F245" : "#00000020",
                        },
                      }}
                    >
                      {borderCountry}
                    </ListItem>
                  </Link>
                ))
              ) : (
                <Typography
                  sx={{
                    color: darkMode
                      ? "darkmode.primary.white"
                      : "lightmode.primary.black",
                    whiteSpace: { xs: "normal", md: "nowrap" },
                  }}
                >
                  This Country Has No Border Countries
                </Typography>
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
